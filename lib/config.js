import { BaseModel } from './_shared/base';
import { ajvInstance } from './_shared/config';
import { DASHBOARD_GADGETS_IDS, PRINT_FORMATS } from './_shared/enum';

const sch = {
  type: "object",
  properties: {
    businessUnit: { type: ["string", 'null'] },
    businessUnitName: { type: ["string", 'null'] },
    customer: { type: ["string", 'null'] },
    customerName: { type: ["string", 'null'] },
    currency: { type: "string" },
    layout: { type: "string" },
    uid: { type: "string" },
    shopId: { type: "string" },
    alwaysPrint: { type: 'boolean' },
    payMethod: { type: 'string' },
    language: { type: 'string' },
    isSidebarExpanded: { type: 'boolean' },
    recent: { type: 'string' },
    filters: { type: 'string' },
    sound: { type: 'boolean' },
    upcomingOrderNumber: { type: 'number' },
    upcomingCashDocNumber: { type: 'number' },
    filter: { type: 'string' },
    itemGrid: { type: 'string' },
    layoutSide: { type: 'boolean' },
    paymentModal: { type: 'boolean' },
    exchangeRates: { type: 'object' },
    emptyStateButtons: {
      type: "object",
      properties: {
        cash: { type: "array", items: { type: 'string' } },
        customers: { type: "array", items: { type: 'string' } },
        dashboard: { type: "array", items: { type: 'string' } },
        items: { type: 'array', items: { type: 'string' } },
        receipts: { type: "array", items: { type: 'string' } },
        extFiscalInvoice: { type: "array", items: { type: 'string' } },
        extFiscalPurchases: { type: "array", items: { type: 'string' } },
        extFiscalSales: { type: "array", items: { type: 'string' } },
        bankAccounts: { type: "array", items: { type: 'string' } },
        cashAccounts: { type: "array", items: { type: 'string' } },
      }
    },
    dashboardGadgets: {
      type: "array",
      // items: {
      //     type: "string",
      //     enum: DASHBOARD_GADGETS.map(gadget => gadget.id)
      // }
      items: {
        type: "object",
        properties: {
          id: { type: "string", enum: Object.values(DASHBOARD_GADGETS_IDS) },
        }
      }
    },
    secondaryCurrency: { type: 'string' },
    printCopy: { type: 'boolean' },
    printDirectly: { type: 'boolean' },
    seperateItems: { type: 'boolean' },
    changeItemPrice: { type: 'boolean' },
    printFormat: { type: 'string', enum: Object.values(PRINT_FORMATS) },
    showOnlySpecsWithStock: { type: 'boolean' },
    useQueryPersister: { type: 'boolean' },
    autoFocusOnBarcode: { type: 'boolean' },
  },
  required: ["uid", "shopId"],
  additionalProperties: false
}

const schema = ajvInstance.compile(sch);

export class ConfigModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}