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
import IntegrationFailure from "../features/sales/integrationFailure/pages/IntegrationFailure.jsx";
/* end sales */

/* start purchases */
import InternalInvoices from "../features/purchases/internalInvoices/pages/InternalInvoices";
import InwardInvoices from "../features/purchases/inwardInvoices/pages/InwardInvoices";
import ManageVendor from "../features/purchases/manageVendor/pages/ManageVendor";
/* end purchases */

/* start payment */
import CollectInvoices from "../features/payment/collectInvoices/pages/CollectInvoices";
/* end payment */

/* start reports */
import SalesReports from "../features/reports/salesReports/pages/SalesReports";
/* end reports */

/* start authorization */
import ManageUser from "../features/authorization/manageUser/pages/ManageUser";
import ManageGroups from "../features/authorization/manageGroups/pages/ManageGroups.jsx";
import DesignWorkFlow from "../features/authorization/designWorkFlow/pages/DesignWorkFlow";
import ManageDepartments from "../features/authorization/ManageDepartments/pages/ManageDepartments";
/* end authorization */

/* start settings */
import Products from "../features/settings/products/pages/Products";
import CoraporateProfile from "../features/settings/coraporateProfile/pages/CoraporateProfile";
import CustomFields from "../features/settings/customFields/pages/CustomFields";
import ZatcaConfigrations from "../features/settings/zatcaConfigrations/pages/ZatcaConfigrations";
import SequenceGenerator from "../features/settings/sequenceGenerator/pages/SequenceGenerator";
import Notifications from "../features/settings/notifications/pages/Notifications";
/* end settings */

/* start GenerateReports */
import GenerateReports from "../features/generateReports/GenerateReports.jsx";
/* end GenerateReports */

/* start corporateProfile tabs */
import AddressDetails from "../features/settings/coraporateProfile/tabs/addressDetails/pages/AddressDetails.jsx";
import InvoiceLayout from "../features/settings/coraporateProfile/tabs/invoiceLayout/pages/InvoiceLayout.jsx";
import Configurations from "../features/settings/coraporateProfile/tabs/configurations/pages/Configurations.jsx";
import IdentityDetails from "../features/settings/coraporateProfile/tabs/identityDetails/pages/IdentityDetails.jsx";
/* end corporateProfile tabs */

const AppLayout = lazy(() => import("../Layout/AppLayout"));
const Dashboard = lazy(
  () => import("../features/dashboard/pages/Dashboard.jsx"),
);
const Login = lazy(() => import("../features/authentication/pages/Login.jsx"));

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
          <Route
            path={routes.integrationFaliure}
            element={<IntegrationFailure />}
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
          <Route
            path={routes.collectedInvoices}
            element={<CollectInvoices />}
          />
          {/* End payment */}

          {/* Start Reports */}
          <Route path={routes.salesReports} element={<SalesReports />} />
          {/* end Reports */}

          {/* Start Authorization */}
          <Route path={routes.manageUser} element={<ManageUser />} />
          <Route path={routes.mangeDepartment} element={<ManageGroups />} />
          <Route path={routes.designWorkflow} element={<DesignWorkFlow />} />
          <Route
            path={routes.manageDepartments}
            element={<ManageDepartments />}
          />
          {/* end Authorization */}

          {/* Start Settings */}
          <Route path={routes.products} element={<Products />} />
          {/* Start corporateProfile */}
          <Route path={routes.corporateProfile} element={<CoraporateProfile />}>
            <Route
              index
              element={<Navigate replace to={`/${routes.identityDetails}`} />}
            />

            <Route
              path={`/${routes.identityDetails}`}
              element={<IdentityDetails />}
            />
            <Route
              path={`/${routes.addressDetails}`}
              element={<AddressDetails />}
            />
            <Route
              path={`/${routes.invoiceLayout}`}
              element={<InvoiceLayout />}
            />
            <Route
              path={`/${routes.configurations}`}
              element={<Configurations />}
            />
          </Route>

          {/* end corporateProfile */}
          <Route path={routes.customFields} element={<CustomFields />} />
          <Route
            path={routes.zatcaConfigurations}
            element={<ZatcaConfigrations />}
          />
          <Route
            path={routes.sequenceGenerator}
            element={<SequenceGenerator />}
          />
          <Route path={routes.notifications} element={<Notifications />} />
          {/* end Settings */}

          {/* Start General Reports */}
          <Route path={routes.generateReport} element={<GenerateReports />} />
          {/* end General Reports */}
        </Route>
      </Routes>
    </Suspense>
  );
}
