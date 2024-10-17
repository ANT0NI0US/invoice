import Table from "@/ui/Table";
import Header from "@/ui/Header";

const columns = [
  "sidebar.settings.products.id",
  "sidebar.settings.products.englishName",
  "sidebar.settings.products.description",
  "sidebar.settings.products.unitPrice",
  "sidebar.settings.products.tax",
  "sidebar.settings.products.default",
];
const data = [];

export default function Products() {
  return (
    <>
      <Header title="sidebar.settings.products.products" />
      <Table
        textColor="text-white"
        backColor="bg-primary"
        columns={columns}
        data={data}
      />
    </>
  );
}
