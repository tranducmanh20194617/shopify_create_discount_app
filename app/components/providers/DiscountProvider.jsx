import { AppProvider } from "@shopify/discount-app-components";
import "@shopify/discount-app-components/build/esm/styles.css";


export function DiscountProvider({ children, timezone }) {
  return (
    <AppProvider locale="en-US" ianaTimezone={timezone}>
      {children}
    </AppProvider>
  );
}
