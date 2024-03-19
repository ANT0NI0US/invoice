import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.settings.products.id",
  "sidebar.settings.products.englishName",
  "sidebar.settings.products.description",
  "sidebar.settings.products.unitPrice",
  "sidebar.settings.products.tax",
  "sidebar.settings.products.default",
];
const data = [];

const Products = () => {
  return (
    <Fragment>
      <Header title="sidebar.settings.products.products" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default Products;
