import { EmptyState } from "@shopify/polaris";
import React from "react";
import { useNavigate } from "@remix-run/react";

const EmptyDiscountState = ({ onAction }) => (
  <EmptyState
    heading="Create your first label"
    action={{
      content: "Create label",
      onAction,
    }}
    secondaryAction={{
      content: 'Learn more',
      url: 'https://help.shopify.com',
    }}
    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
  >
    <p>Create labels by adding text or images to your product images to highlight key features</p>
  </EmptyState>
);

const LabelList = () => {
  const ListLabel = [123, 23];
  const navigate = useNavigate();

  return (
    <>
      {
      ListLabel.length === 2 ? (
        <EmptyDiscountState onAction={() => navigate(`../../app/label/create`)} />
      ) : (
        <div>
          123
        </div>
      )
      }
    </>
  );
};
export  default LabelList
