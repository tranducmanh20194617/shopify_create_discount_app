import {useEffect, useState } from "react";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { Provider as AppBridgeReactProvider } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { DiscountProvider } from "~/components/providers/DiscountProvider";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";

import { authenticate } from "~/shopify.server";
import axios from "axios";
import StoreModel from "~/models/store.model";
// @ts-ignore
import {useMutation} from "@apollo/client";
import { CREATE_STORE} from "~/graphql/mutation";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export async function loader({ request }) {
  await authenticate.admin(request);
  const url = new URL(request.url);
  const { session } = await authenticate.admin(request);
  let shop;
  const config = {
    headers: {
      "X-Shopify-Access-Token": session.accessToken,
      "Accept-Encoding": "application/json",
    },
  };
  shop = await axios.get(
    `https://${session.shop}/admin/api/2023-10/shop.json`,
    config
  );
  shop = shop.data.shop;
  const shopData = await StoreModel.findOne(
    {
      id: shop.id
    })

  return json({
    apiKey: process.env.SHOPIFY_API_KEY,
    host: url.searchParams.get("host"),
    shop:shopData,
    session:session,
    shopInfo: shop
  });
}

export default function App() {
  const { apiKey, host ,shop,shopInfo,session} = useLoaderData();

  const [timeZone,setTimeZone] = useState(shopInfo.iana_timezone);
  const [createStore] = useMutation(CREATE_STORE);
  const [storeCreated, setStoreCreated] = useState(false); // State to track if store has been created

  const storeCreate = async () => {
    try {
      const createPromise = await createStore({
        variables: {
          input: {
            id: shopInfo.id.toString(),
            name: shopInfo.name,
            email: shopInfo.email,
            shop: shopInfo.name,
            domain: shopInfo.domain,
            scope: session.scope,
            country: shopInfo.country_name,
            customer_email: shopInfo.customer_email,
            myshopify_domain: shopInfo.myshopify_domain,
            plan_name: shopInfo.plan_name,
            plan_display_name: shopInfo.plan_display_name,
            shop_owner: shopInfo.shop_owner,
            iana_timezone: shopInfo.iana_timezone,
            currency: shopInfo.currency,
            address1: shopInfo.address1 || "NULL",
            address2: shopInfo.address2 || "NULL",
            phone: shopInfo.phone || "NULL",
            created_at: shopInfo.created_at,
            accessToken: session.accessToken,
          }
        }
      })

      const timeoutPromise = new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Update program timed out'));
        }, 10000);
      });

      await Promise.race([createPromise, timeoutPromise]);
      // shopify.toast.show('Updated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    if (shop) {
      setTimeZone(shop.iana_timezone);

    } else {
      setTimeZone(shopInfo.iana_timezone);
      setStoreCreated(true)

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(storeCreated)
    {
      storeCreate().then()
    }
  }, [storeCreated]);


  const [config] = useState({ host, apiKey });
  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <AppBridgeReactProvider config={config}>
        <DiscountProvider timezone={timeZone}>
          <ui-nav-menu>
            <Link to="/app" rel="home">
              Home
            </Link>
            {/*<Link to="/app/additional">Additional page</Link>*/}
            <Link to="/app/discountList">Discounts List</Link>
            <Link to="/app/shopInfo">Shop Infomation</Link>
            <Link to="/app/labelList">Label</Link>
          </ui-nav-menu>
          <Outlet />
        </DiscountProvider>
      </AppBridgeReactProvider>
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (/** @type {import("@remix-run/node").HeadersArgs} */ headersArgs) => {
  return boundary.headers(headersArgs);
};
