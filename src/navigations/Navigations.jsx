import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import routes from "./routes";
import Loader from "../ui/loader/Loader";

import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";

/* start sales */
import OutwardInvoice from "../features/sales/outwardInvoice/pages/OutwardInvoice";
import ImportOutwardInvoices from "../features/sales/importOutwardInvoices/pages/ImportOutwardInvoices";
import ImportCreditNotes from "../features/sales/importCreditNotes/pages/ImportCreditNotes";
import DebitNotes from "../features/sales/debitNotes/pages/DebitNotes";
import CreditNotes from "../features/sales/creditNotes/pages/CreditNotes";
import ManageCustomer from "../features/sales/manageCustomer/pages/ManageCustomer";
/* end sales */

/* start purchases */
import InternalInvoices from "../features/purchases/internalInvoices/pages/InternalInvoices";
import InwardInvoices from "../features/purchases/inwardInvoices/pages/InwardInvoices";
import ManageVendor from "../features/purchases/manageVendor/pages/ManageVendor";
/* end purchases */

/* start payment */
import CollectInvoices from "../features/payment/collectInvoices/pages/CollectInvoices";
/* end payment */

const AppLayout = lazy(() => import("../Layout/AppLayout"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));

export default function Navigations() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path={routes.dashboard} element={<Dashboard />} />

          {/* Start Sales */}
          <Route path={routes.outwardInvoice} element={<OutwardInvoice />} />
          <Route path={routes.manageCustomer} element={<ManageCustomer />} />
          <Route path={routes.creditNotes} element={<CreditNotes />} />
          <Route path={routes.debitNotes} element={<DebitNotes />} />
          <Route
            path={routes.importOutwardInvoices}
            element={<ImportOutwardInvoices />}
          />
          <Route
            path={routes.importCreditNotes}
            element={<ImportCreditNotes />}
          />
          {/* End Sales */}

          {/* Start purchases */}
          <Route
            path={routes.internalInvoices}
            element={<InternalInvoices />}
          />
          <Route path={routes.inwardInvoices} element={<InwardInvoices />} />
          <Route path={routes.manageVendor} element={<ManageVendor />} />
          {/* End purchases */}

          {/* Start payment */}
          <Route path={routes.collectedInvoices} element={<CollectInvoices />} />
          {/* End payment */}
        </Route>
      </Routes>
    </Suspense>
  );
}
