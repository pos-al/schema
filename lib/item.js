import { BaseModel } from './_shared/base'
import { ajvInstance } from './_shared/config'

import { TAX_TYPES } from './_shared/enum'

const charges = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      type: {
        enum: ['VAL', 'PER'],
      },
      value: {
        type: 'number',
      },
    },
    required: ['type', 'value'],
  },
}

const defaultSettings = {
  active: true,
  favorite: false,
  stockControl: false,
  weightItem: false,
  tax: {
    active: false,
    rate: 0,
    type: TAX_TYPES.TYPE_1,
  },
}

const sch = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1 },
    unit: { type: 'string', minLength: 1 },
    shopId: { type: 'string' },
    used: { type: 'boolean' },
    code: { type: 'string', default: '' },
    description: { type: 'string', default: '' }, // rich text editor
    barcode: { type: 'array', items: { type: 'string' }, default: [] },
    categories: { type: 'array', items: { type: 'string' }, default: [] },
    labels: { type: 'array', items: { type: 'string' }, default: [] }, // tags defining this kind of item
    images: { type: 'array', items: { type: 'string' }, default: [] },
    settings: {
      type: 'object',
      properties: {
        active: { type: 'boolean' },
        favorite: { type: 'boolean' },
        weightItem: { type: 'boolean' },
        stockControl: { type: 'boolean' },
        specAMandatory: { type: 'boolean' },
        specBMandatory: { type: 'boolean' },
        usesInventory: { type: 'boolean' },
        tax: {
          type: 'object',
          properties: {
            active: { type: 'boolean' },
            rate: { type: 'number', minimum: 0 },
            type: { type: 'string', enum: Object.values(TAX_TYPES) },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
      default: defaultSettings,
    },
    fees: charges,
    discountRules: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          start: { type: 'object' /*format: 'date'*/ },
          end: { type: 'object' /* format: 'date'*/ },
          discount: { type: 'number' },
        },
        required: ['start', 'end', 'discount'],
        additionalProperties: false,
      },
      minItems: 1,
    },
    // discount: charges,
    taxes: charges,
    priceRules: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          start: { type: 'object' /*format: 'date'*/ },
          end: { type: 'object' /* format: 'date'*/ },
          price: { type: 'number' },
        },
        required: ['start', 'end', 'price'],
        additionalProperties: false,
      },
      minItems: 1,
    },
    busUnitIds: {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
    },
  },
  required: ['name', 'unit', 'shopId', 'busUnitIds', 'priceRules'],
  additionalProperties: false,
}

const schema = ajvInstance.compile(sch)

export class ItemModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }

  setUnit(unit) {
    this.data.unit = unit
  }
}

export const itemSchema = sch
