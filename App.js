import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "./axios-order";
import IdleDetector from "react-idle-detector";

import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Layout from "./HOC/layout/layout";
import LandingPage from "./HOC/layout/landingCWS";

// Home
import Home from "./Containers/home/home";
import personalProfile from "./Containers/home/PersonalInfo/PersonalInfo";
import UserManagement from "./Containers/home/UserMgmt/UserMgmt";
import PendingRequest from "./Containers/home/PendingRequest/pendingRequest";
import BusinessEntityMgmt from "./Containers/home/BusinessEntityMgmt/BusinessEntityMgmt";
import Faq from "./Containers/home/Faq/Faq";
//Home-> Business entity mgmt ->
import assignUser from "./Containers/home/BusinessEntityMgmt/Assign_user/AssignUser";
import assignNewUser from "./Containers/home/BusinessEntityMgmt/Assign_user/addNewUser";
import AssignServices from "./Containers/home/BusinessEntityMgmt/AssignServices/assignServices";
// Home->Enviroment config
import EnviromentCreditEvalution from "./Containers/home/EnviromentConfig/CreditEvalution/CreditEvalution";
import TDSPayablesSetting from "./Containers/home/EnviromentConfig/TDSPayble/tdspayablePage";

// Credit Evalution
import DashboardCreditEvalution from "./Containers/CreditEvalution_dashboard/CreditEvalution";

// Business Entity details
import BusinessEntityDetails from "./Containers/BusinessEntityDetails/BusinessEntityDetails";

// Invoice Entries
import InvoiceCollectionEntries from "./Containers/Dashboards/agencyReport/CollectionEn/Dashboard";
import InvoiceDiscountingEntries from "./Containers/Dashboards/agencyReport/DiscountingEn/Dashboard";

// IC-Origa
import OrigaBatch from "./Containers/IC/Origa/OrigaBatch/OrigaBatch";
import OrigaBatchList from "./Containers/IC/Origa/OrigaBatchList/OrigaBatchList";
import OrigaFeedback from "./Containers/IC/Origa/OrigaFeedback/OrigaFeedback";
import OrigaInvoiceReceipt from "./Containers/IC/Origa/OrigaInvoiceReceipt/OrigaInvoiceReceipt";

// ID-Billionsloans
import BLOnboarding from "./Containers/ID/BillionLoans/Onboarding/Onboarding";
import InvoiceAuthorization from "./Containers/ID/BillionLoans/InvoiceAuthorization/InvoiceAuthorization";
import InvoiceFinancing from "./Containers/ID/BillionLoans/InvoiceFinancing/InvoiceFinancing";
import BuyerOnboarding from "./Containers/ID/BillionLoans/BuyerOnboarding/BuyerOnboarding";

// IARS
import IarsLogIn from "./Containers/Iars/IarsLogIn";
import Executivesummary from "./Containers/Iars/exectiveSummary/Executivesummary";
import Reasonwise from "./Containers/Iars/resonwisewise/Reasonwise";
import DamageStockSummary from "./Containers/Iars/Damagesummary/DamageStockSummary";

// ZOHO
import Zoho from "./Containers/Zoho/Zoho";

//ARC_Upload
// -->Sales
import ARCCustomer from "./Containers/ARC_Upload/sales/BussinessCustomerMang/BussinessCustomerMang";
import ARCCustomerData from "./Containers/ARC_Upload/sales/BussinessCustomerMang/showDetails";
import ARCCollections from "./Containers/ARC_Upload/sales/Collections/Collections";
import ARCInvoiceManagement from "./Containers/ARC_Upload/sales/InvoiceManagement/InvoiceManagement";
import ARCPaymentAdvice from "./Containers/ARC_Upload/sales/PaymentAdvice/PaymentAdvice";
// -->Purchase
import VenderManagement from "./Containers/ARC_Upload/Purchase/VendorManagement/VenderManagement";
import VendorpaymentAdvice from "./Containers/ARC_Upload/Purchase/VendorPaymentsAdvice/VendorpaymentAdvice";
import PurchaseInvoiceMgmt from "./Containers/ARC_Upload/Purchase/BillManagement/PurchaseMgmt";
import VendorCollections from "./Containers/ARC_Upload/Purchase/Collections/Collections";
// -->Agency Transaction
import ARCCollectionAgency from "./Containers/ARC_Upload/AgencyTransaction/CollectionAgency/CollectionAgency";
import ARCCollectionAgencyTransactions from "./Containers/ARC_Upload/AgencyTransaction/CollectionAgencyTransactions/CollectionAgencyTransactions";
import ARCIDAgency from "./Containers/ARC_Upload/AgencyTransaction/InvoiceDiscountingAgency/InvoiceDiscountingAgency";
import ARCInvoiceDiscounting from "./Containers/ARC_Upload/AgencyTransaction/InvoiceDiscounting/InvoiceDiscounting";

// Dashbaords
// -->Sales
// ageing summary v1-
import AgeingReceivable from "./Containers/Dashboards/sales/ageingSummaryV1/Dashboard";

import InvoiceSummary from "./Containers/Dashboards/sales/invoiceSummary/Dashboard";
import InvoiceDashboardTableDetails from "./Containers/Dashboards/sales/invoiceSummary/ShowDetails";
import UnallocatedPayment from "./Containers/Dashboards/sales/UnallocatedPayments/unallocatedPayments";
import AgeingSummaryDashboardv2 from "./Containers/Dashboards/sales/ageingSummary/dashboard";
import AppBarForCfoDebtorsStatus from "./Containers/Dashboards/sales/DebtorsStatus/AppBarForCfoDebtorsStatus";
import controlReportSale from "./Containers/Dashboards/sales/controlReport/controlReport";
import controlReport2Sale from "./Containers/Dashboards/sales/controlReport/controlReport2";
// -->Purchase
// ageing summary v1-
import vendorAgeingSummaryDashboard from "./Containers/Dashboards/purchase/ageingSummaryV1/Dashboard";

import AgeingPayablesDashboardV2 from "./Containers/Dashboards/purchase/ageingSummary/dashboard";
import VendorInvoiceSummary from "./Containers/Dashboards/purchase/billSummary/dashboard";
import VendorInvoiceDashboardTableDetails from "./Containers/Dashboards/purchase/billSummary/showInvoiceDetails";
import PayCycleSummaryDashboard from "./Containers/Dashboards/purchase/payCycleSummary/Dashboard";
import ControlReport from "./Containers/Dashboards/purchase/controlreport/ControlReport";
import ControlReport2 from "./Containers/Dashboards/purchase/controlreport/ControlReport2";

//ARC_Reconciliation
//Sales
import Gstprevalidation from "./Containers/ARC_Reconciliation/Sales/GstPreValidation/Gstprevalidation";
import GSTRepo from "./Containers/ARC_Reconciliation/Sales/GSTR-1_Repository/GSTRepo";
//GSTR-1_Reconciliation
import GSTReonciliation from "./Containers/ARC_Reconciliation/Sales/GST-1_Reconciliation/GSTReconciliation";
import gstReconUpdatedTabDetails from "./Containers/ARC_Reconciliation/Sales/GST-1_Reconciliation/updatedShow";
import gstReconTableDetails from "./Containers/ARC_Reconciliation/Sales/GST-1_Reconciliation/showDetails";
import Gstr_1_save from "./Containers/ARC_Reconciliation/Sales/GSTR1-Save/gstr1_Save";
//End
import BankReconciliation from "./Containers/ARC_Reconciliation/Sales/RecepitReconciliation/BankReconciliation";
import BankReconDetails from "./Containers/ARC_Reconciliation/Sales/RecepitReconciliation/BankReconDetails";

//Old
// import TDSRcon from "./Containers/TDSReconciliation/TDSReconciliation";
// import TdsReport from "./Containers/TDSReconciliation/ReportPage";
//End

import TDSRconSaleV from "./Containers/ARC_Reconciliation/Sales/TDSReconciliationSale/TDSReconciliation";
import TdsReportSaleV from "./Containers/ARC_Reconciliation/Sales/TDSReconciliationSale/ReportPage";
import Form26as from "./Containers/ARC_Reconciliation/Sales/Form26as/form26asRepo";
import Form26asTableDetails from "./Containers/ARC_Reconciliation/Sales/Form26as/showDetails";

//Purchase
import GSTR2BPrevalidaion from "./Containers/ARC_Reconciliation/Purchase/GSTR2_Prevalidation/GSTR2BPrevalidation";
import Gst2aRepository from "./Containers/ARC_Reconciliation/Purchase/GSTR-2A_Repository/Gst2aRepository";
//GSTR-2A_Reconciliation
import Gst2aReconciliation from "./Containers/ARC_Reconciliation/Purchase/GSTR-2A_Reconciliation/Gst2aReconciliation";
import Trial from "./Containers/ARC_Reconciliation/Purchase/GSTR-2A_Reconciliation/ReportPage/Trial";
import Gst2aReconciliationReport from "./Containers/ARC_Reconciliation/Purchase/GSTR-2A_Reconciliation/ReportPage/Report";
//End
import Gstr2bRepository from "./Containers/ARC_Reconciliation/Purchase/GSTR2B_Repository/Gstr2bRepository";
//GSTR-2B_Reconciliation
import Gstr2bReconciliation from "./Containers/ARC_Reconciliation/Purchase/GSTR2B_reconciliation/Gstr2bReconciliation";
import Gstr2bReconciliationReport from "./Containers/ARC_Reconciliation/Purchase/GSTR2B_reconciliation/ReportPage/Report";
//End
import TdsReconciliationGst2a from "./Containers/ARC_Reconciliation/Purchase/TDS_Payables_Reconciliation/TdsReconciliationGst2a";
import TdsProvision from "./Containers/ARC_Reconciliation/Purchase/provision/provision";
import GSTR_3B_Recon from "./Containers/ARC_Reconciliation/Purchase/GSTR-3B_Reconciliation/GSTR_3B_Recon";
import Report from "./Containers/ARC_Reconciliation/Purchase/GSTR-3B_Reconciliation/ReportPageForGSTR3B/Report";

import Reporting from "./Containers/Reporting/Reporting";

import UploadTallyBackUpFile from "./Containers/UploadTallyFile/UploadTallyBackUpFile";

import MdmPage from "./Containers/MDM/mdm";
import ReportingLogs from "./Containers/ReportingLogs/ReportingLogs";
import MSME from "./Containers/MSME Page/MSME";

const noActivityHandler = () => {
  let token = localStorage.getItem("token");
  if (token) {
    alert("Your session is timed out.Please login again");

    axios
      .get("/logout")
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user_id");
        localStorage.removeItem("business_entity_id");
        localStorage.removeItem("user_name");
        window.location.href = "/login";
      })
      .catch((error) => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user_id");
        localStorage.removeItem("business_entity_id");
        localStorage.removeItem("user_name");
        window.location.href = "/login";
      });
  }
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {window.navigator.onLine ? (
          <IdleDetector
            events={["mousemove"]} // Array of listen events
            onNoActivity={noActivityHandler} // callback on no activity
            idleTime={1200000} // no activity time, ms
          >
            <Switch>
              <Route path="/" exact component={Login} />

              <Route path="/login" exact component={Login} />

              <Route path="/Registration" exact component={Registration} />

              <Route path="/home" exact component={Home} />

              <Route path="/userManagement" component={UserManagement} />

              <Route
                path="/businessEntityMgmt"
                component={BusinessEntityMgmt}
              />

              <Route
                path="/enviromentCreditEvalution"
                component={EnviromentCreditEvalution}
              />

              <Route path="/faq" component={Faq} />

              <Route
                path="/enviromentTdsPayable"
                component={TDSPayablesSetting}
              />

              <Route path="/pendingRequest" component={PendingRequest} />

              <Route
                path="/businessEntityManagement/assignUser"
                component={assignUser}
              />

              <Route path="/personalProfile" component={personalProfile} />

              <Route
                path="/businessEntityManagement/addNewUser"
                component={assignNewUser}
              />

              <Route
                path="/businessEntityManagement/assignServices"
                component={AssignServices}
              />

              <Layout>
                <Route
                  path="/dashboardCreditEvalution"
                  component={DashboardCreditEvalution}
                />
                <Route path="/TDSProvision" component={TdsProvision} />
                <Route
                  path="/GSTR_3B_Reconciliation"
                  component={GSTR_3B_Recon}
                />
                <Route path="/GSTR_3B_ReportingPage" component={Report} />
                <Route
                  path="/AgeingReceivablesSummary"
                  component={AgeingReceivable}
                />
                <Route
                  path="/AgeingReceivablesSummaryDashboardv2"
                  component={AgeingSummaryDashboardv2}
                />
                <Route
                  path="/vendorAgeingSummaryDashboardV2"
                  component={AgeingPayablesDashboardV2}
                />
                <Route path="/InvoiceSummary" component={InvoiceSummary} />
                {/* vendor route */}
                <Route
                  path="/vendorInvoiceSummary"
                  component={VendorInvoiceSummary}
                />
                <Route
                  path="/vendorAgeingSummary"
                  component={vendorAgeingSummaryDashboard}
                />
                <Route
                  path="/vendorInvoiceDashboardTableDetails"
                  component={VendorInvoiceDashboardTableDetails}
                />
                <Route
                  path="/payCycleSummaryDashboard"
                  component={PayCycleSummaryDashboard}
                />
                <Route
                  path="/unallocatedPayments"
                  component={UnallocatedPayment}
                />
                <Route
                  path="/invoiceCollectionEntries"
                  component={InvoiceCollectionEntries}
                />
                <Route
                  path="/BusinessCustomerManagement"
                  component={ARCCustomer}
                />
                <Route path="/ARCCustomerShow" component={ARCCustomerData} />
                <Route
                  path="/BusinessEntityDetails"
                  component={BusinessEntityDetails}
                />
                <Route
                  path="/InvoiceManagement"
                  component={ARCInvoiceManagement}
                />
                <Route
                  path="/PurchaseInvoiceMgmt"
                  component={PurchaseInvoiceMgmt}
                />
                <Route
                  path="/vendorCollections"
                  component={VendorCollections}
                />
                <Route
                  path="/uploadInvoiceDiscountingAgencyData"
                  component={ARCIDAgency}
                />
                <Route
                  path="/uploadCollectionsData"
                  component={ARCCollections}
                />
                <Route
                  path="/uploadPaymentAdviceData"
                  component={ARCPaymentAdvice}
                />
                <Route
                  path="/uploadCollectionAgenciesData"
                  component={ARCCollectionAgency}
                />
                <Route
                  path="/uploadCollectionAgencyTransactionsData"
                  component={ARCCollectionAgencyTransactions}
                />
                <Route
                  path="/uploadInvoiceDiscountingData"
                  component={ARCInvoiceDiscounting}
                />

                <Route
                  path="/ReportingLogs" 
                  component={ReportingLogs} 
                  />

                  <Route 
                   path="/msme-page"
                   component={MSME} 
                   />
                {/* ---------gstr 1 Save (vyna) */}

                <Route path="/Gstr1Save" component={Gstr_1_save} />
                {/*...............App Bar For Cfo Debtors Status..............................*/}
                <Route
                  path="/AppBarForCfo"
                  component={AppBarForCfoDebtorsStatus}
                />
                {/*..............Gst2aRepository....................*/}
                <Route path="/Gst2aRepository" component={Gst2aRepository} />
                {/*.................Gst2aReconciliation.................*/}
                <Route
                  path="/Gst2aReconciliation"
                  component={Gst2aReconciliation}
                />
                <Route
                    path="/Trial"
                    component={Trial}
                  />
                <Route
                  path="/gst2aReconReport"
                  component={Gst2aReconciliationReport}
                />
                <Route
                  path="/gstr2bReconciliationReport"
                  component={Gstr2bReconciliationReport}
                />
                {/*.............Gst 2a Recon and rep Gst-Prevalidation........................*/}
                <Route path="/gstPreValidation" component={Gstprevalidation} />
                {/*.................GST2A TDS REconciliation..................*/}
                <Route
                  path="/Gst2aTdsReconciliation"
                  component={TdsReconciliationGst2a}
                />
                {/*........................Iars LogIn Dashboard......................*/}
                <Route path="/iarsloginDashboard" component={IarsLogIn} />
                {/*........................Iars Executive Sumary.......................*/}
                <Route
                  path="/iarsexecutivesummary"
                  component={Executivesummary}
                />
                {/*..........................Iars ReasonWise Report.......................*/}
                <Route path="/iarsreasonwise" component={Reasonwise} />
                {/*............................Iars Damage Stock Summary...........*/}
                <Route
                  path="/damagestocksummary"
                  component={DamageStockSummary}
                />
                {/*..........................Gstr2bRepository......................*/}
                <Route path="/Gstr2bRepository" component={Gstr2bRepository} />
                {/*.........................Gstr2bReconciliation...................*/}
                <Route
                  path="/Gstr2bReconciliation"
                  component={Gstr2bReconciliation}
                />
                {/*.................Gstr2b Prevalidation................*/}
                <Route
                  path="/Gstr2bPrevalidation"
                  component={GSTR2BPrevalidaion}
                />
                <Route path="/zohoTesting" component={Zoho} />
                <Route
                  path="/invoiceDiscountingEntries"
                  component={InvoiceDiscountingEntries}
                />
                <Route path="/landingcws" component={LandingPage} />
                {/* <Route path="/TDSReconciliation" component={TDSRcon} /> */}
                <Route path="/TDSRepo" component={Form26as} />
                {/* <Route path="/TDSReport" component={TdsReport} /> */}
                {/* .........tds recon sale v 2 .......*/}
                <Route
                  path="/TDSReconciliationSaleV"
                  component={TDSRconSaleV}
                />
                <Route path="/TDSReportSaleV" component={TdsReportSaleV} />
                <Route path="/GSTRepo" component={GSTRepo} />
                <Route path="/Reporting" component={Reporting} />
                <Route
                  path="/BankReconciliation"
                  component={BankReconciliation}
                />
                <Route path="/BankReconDetails" component={BankReconDetails} />
                <Route path="/GSTReconciliation" component={GSTReonciliation} />
                <Route
                  path="/gstReconTableDetails"
                  component={gstReconTableDetails}
                />
                <Route
                  path="/gstReconUpdatedTabDetails"
                  component={gstReconUpdatedTabDetails}
                />
                <Route
                  path="/form26asTableDetails"
                  component={Form26asTableDetails}
                />
                <Route
                  path="/InvoiceDashboardTableDetail"
                  component={InvoiceDashboardTableDetails}
                />
                <Route path="/vendorManagement" component={VenderManagement} />
                <Route
                  path="/VendorpaymentAdvice"
                  component={VendorpaymentAdvice}
                />
                <Route path="/InvalidCrDrNote" component={ControlReport} />
                <Route
                  path="/InputTaxCrToBeReversed"
                  component={ControlReport2}
                />
                <Route path="/BatchManagement" component={OrigaBatch} />
                <Route path="/BatchList" component={OrigaBatchList} />
                <Route path="/viewCollectionStatus" component={OrigaFeedback} />
                <Route path="/receipt" component={OrigaInvoiceReceipt} />
                <Route path="/Borroweronboarding" component={BLOnboarding} />
                <Route path="/Buyeronboarding" component={BuyerOnboarding} />
                <Route
                  path="/InvoiceAuthorization"
                  component={InvoiceAuthorization}
                />
                <Route path="/InvoiceFinancing" component={InvoiceFinancing} />
                {/* ......sales control report ........ */}
                <Route
                  path="/InvalidCrDrNoteSale"
                  component={controlReportSale}
                />
                <Route
                  path="/InputTaxCrToBeReversedSale"
                  component={controlReport2Sale}
                />
                <Route
                  path="/UploadTallyBackUpFile"
                  component={UploadTallyBackUpFile}
                />

                <Route path="/mdm" component={MdmPage} />
              </Layout>
            </Switch>
          </IdleDetector>
        ) : (
          <div>Service Unavailable at the moment</div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
