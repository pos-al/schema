import { BaseModel } from './_shared/base'
import { ajvInstance } from './_shared/config'

import {
  DISCOUNT_TYPES,
  LAYOUTS,
  DOC_STATUES,
  SPEC_TYPES,
  TAX_TYPES,
  CURRENCIES,
  RELATION_ENUMS,
} from './_shared/enum'

const itemSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    priceWithoutTax: { type: 'number' },
    quantity: { type: 'number' },
    discount: { type: 'number', minimum: 0 },
    tax: { type: 'boolean' },
    taxRate: { type: 'number', minimum: 0 },
    taxType: { type: 'string', enum: Object.values(TAX_TYPES) },
    totalWithTax: { type: 'number' },
    note: { type: 'string', default: '' },
    description: { type: 'string', default: '' },
    specs: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          type: { type: 'string', enum: Object.values(SPEC_TYPES) },
          id: { type: 'string', minLength: 1 },
        },
        required: ['name', 'type', 'id'],
        additionalProperties: false,
      },
      default: [], // optional, we do not want order to fail if specs are not provided
    },
  },
  additionalProperties: false,
}
itemSchema.required = Object.keys(itemSchema.properties)

const relatedSchema = {
  type: 'object',
  oneOf: [
    {
      type: 'object',
      properties: {
        duplicate: { type: 'string' },
      },
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        reverse: { type: 'string' },
      },
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        credit: { type: 'string' },
      },
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        debit: { type: 'string' },
      },
      additionalProperties: false,
    },
    {
      type: 'object',
      properties: {
        summary: { type: 'array', items: { type: 'string' } },
      },
      additionalProperties: false,
    },
  ],
}

const sch = {
  type: 'object',
  properties: {
    date: { type: 'object' }, // timestamp
    orderNo: {
      anyOf: [{ type: 'number' }, { type: 'string' }], // OrderNo. can be string or number
    },
    businessUnit: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
      },
      required: ['id', 'name'],
    },
    customerId: { type: 'string' },
    currency: { enum: Object.values(CURRENCIES) },
    shopId: { type: 'string', minLength: 1 },
    userId: { type: 'string', minLength: 1 },
    payment: {
      type: 'object',
      properties: {
        paid: { type: 'boolean' },
        method: { type: 'string', minLength: 1 },
      },
      required: ['paid', 'method'],
      additionalProperties: false,
    },
    discount: {
      type: 'object',
      properties: {
        value: { type: 'number' },
        type: { type: 'string', enum: Object.values(DISCOUNT_TYPES) },
      },
      additionalProperties: false,
    },
    charge: {
      type: 'object',
      properties: {
        value: { type: 'number' },
        type: { type: 'string', enum: ['PERCENTAGE', 'VALUE'] },
      },
      additionalProperties: false,
    },
    status: {
      type: 'string',
      enum: Object.keys(DOC_STATUES),
      default: DOC_STATUES.COMPLETED,
    },
    notes: { type: 'string' },
    exchangeRate: { type: 'number' },
    items: {
      type: 'array',
      items: { ...itemSchema },
      minItems: 1,
      maxItems: 1000,
    },
    related: relatedSchema,
    layout: { type: 'string', enum: Object.values(LAYOUTS) },
    tableId: { type: 'string' },
    tableName: { type: 'string' },
    relation: {
      type: 'object',
      properties: {
        [RELATION_ENUMS.SUMMARIZED]: {
          anyOf: [
            { type: "string" },
            { type: "null" }
          ],
          default: null
        },
        [RELATION_ENUMS.REVERSED]: {
          anyOf: [
            { type: "string" },
            { type: "null" }
          ],
          default: null
        },
        [RELATION_ENUMS.CREDITED]: {
          anyOf: [
            { type: "string" },
            { type: "null" }
          ],
          default: null
        },
        [RELATION_ENUMS.DEBITED]: {
          anyOf: [
            { type: "string" },
            { type: "null" }
          ],
          default: null
        },
        [RELATION_ENUMS.DUPLICATED]: {
          anyOf: [
            { type: "string" },
            { type: "null" }
          ],
          default: null
        },
      },
      default: { [RELATION_ENUMS.SUMMARIZED]: null, [RELATION_ENUMS.REVERSED]: null, [RELATION_ENUMS.CREDITED]: null, [RELATION_ENUMS.DEBITED]: null, [RELATION_ENUMS.DUPLICATED]: null },
      additionalProperties: false
    },
  },
  required: [
    'date',
    'customerId',
    'currency',
    'payment',
    'shopId',
    'items',
    'userId',
    'status',
  ],
  additionalProperties: false,
}
const schema = ajvInstance.compile(sch)

export class OrderModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}
export const orderSchemaObj = sch
