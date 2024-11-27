import './style.css'

import { ItemModel, CategoryModel, OrderModel, UnitModel, ConfigModel } from 'pos-schemas'

const itemModel = new ItemModel({
  name: 'Item 1',
  unit: 'pcs',
  shopId: 'shop1',
  priceRules: [
    {
      start: new Date(),
      end: new Date(),
      price: 100
    }
  ]
})
const validItemModel = itemModel.json()
console.log("validItemModel", validItemModel)


const categoryModel = new CategoryModel({
  name: 'Category 1',
  shopId: 'shop1',
  type: "ITEM"
})

const validCategoryModel = categoryModel.json()
console.log("validCategoryModel", validCategoryModel)

const orderModel = new OrderModel({
  shopId: 'shop1',
  userId: 'user1',
  date: new Date(),
  orderNo: 1,
  businessUnit: {
    id: 'bu1',
    name: 'Business Unit 1'
  },
  customerId: 'customer1',
  currency: 'EUR',
  payment: {
    paid: false,
    method: 'cash'
  },
  items: [
    {
      id: 'item1',
      priceWithoutTax: 100,
      quantity: 1,
      discount: 0,
      tax: true,
      taxRate: 20,
      taxType: 'PERCENTAGE',
      totalWithTax: 120,
      note: 'Note 1',
      description: 'Description 1',
      taxType: 'TYPE_1',
      specs: [
        {
          name: 'Spec 1',
          type: 'SPEC_A',
          id: 'spec1'
        }
      ]
    }
  ],
  related: {
    summary: ['summary1']
  },
  layout: 'retail'
})
const validOrderModel = orderModel.json()
console.log("validOrderModel", validOrderModel)

const unitModel = new UnitModel({
  shopId: 'shop1',
  code: 'code1'
})

const validUnitModel = unitModel.json()
console.log("validUnitModel", validUnitModel)

const configModel = new ConfigModel({
  businessUnit: 'bu1',
  businessUnitName: 'Business Unit 1',
  customer: 'customer1',
  customerName: 'Customer 1',
  currency: 'EUR',
  layout: 'retail',
  uid: 'uid1',
  shopId: 'shop1',
  alwaysPrint: true,
  payMethod: 'cash',
  language: 'en',
  isSidebarExpanded: true,
  recent: 'recent1',
  filters: 'filters1',
  sound: true,
  upcomingOrderNumber: 1,
  upcomingCashDocNumber: 1,
  filter: 'filter1',
  itemGrid: 'itemGrid1',
  layoutSide: true,
  paymentModal: true,
  exchangeRates: {
    EUR: 1
  },
  emptyStateButtons: {
    cash: ['cash1'],
    customers: ['customer1'],
  }
})

const validConfigModel = configModel.json()
console.log("validConfigModel", validConfigModel)