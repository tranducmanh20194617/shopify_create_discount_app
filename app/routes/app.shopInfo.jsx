// @ts-nocheck
import { json } from "@remix-run/node";
import {
  useLoaderData,
} from "@remix-run/react";

import { authenticate } from "~/shopify.server";
import StoreModel from "~/models/store.model";
import axios from "axios";
import {BlockStack, Box, Card,  TextField} from "@shopify/polaris";

export const loader = async ({ request }) => {

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
    }
  );

  return json({ shop: shopData });
};

export default function Index() {
  const {shop}= useLoaderData()
  console.log(shop)
  return (
    <div>
      <Box paddingBlockEnd="300">
        <Card>
          <BlockStack>
            <TextField
              label="Name"
              autoComplete="on"
              value={shop.name}
            />
            <TextField
              label="Email"
              autoComplete="on"
              value={shop.email}
            />
            <TextField
              label="Access Token"
              autoComplete="on"
              value={shop.accessToken}
            />
            <TextField
              label="Shop"
              autoComplete="on"
              value={shop.shop}
            />
            <TextField
              label="Domain"
              autoComplete="on"
              value={shop.domain}
            />
            <TextField
              label="Scope"
              autoComplete="on"
              value={shop.scope}
            />
            <TextField
              label="My shop domain"
              autoComplete="on"
              value={shop.myshopify_domain}
            />
            <TextField
              label="Country"
              autoComplete="on"
              value={shop.country_name}
            />
            <TextField
              label="Phone"
              autoComplete="on"
              value={shop.phone}
            />
          </BlockStack>
        </Card>
      </Box>
    </div>
  );
}
