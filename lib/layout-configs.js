import { BaseModel } from './_shared/base'
import { ajvInstance } from './_shared/config'
import { CURRENCIES } from './_shared/enum'

const barConfig = {
  type: 'object',
  properties: {
    orders: {
      type: 'object',
      patternProperties: {
        '^[0-9]+$': {
          type: 'array',
          items: {
            type: 'string',
            minLength: 1,
          },
        },
      },
      additionalProperties: false,
    },
    tables: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          background: {
            type: 'string',
          },
        },
        required: ['name', 'background'],
      },
    },
  },
  additionalProperties: false,
}

const defaultConfig = {
  type: 'object',
  properties: {
    currency: {
      type: 'string',
      enum: Object.values(CURRENCIES),
    },
    customer: {
      type: 'string',
    },
  },

  required: ['currency', 'customer'],
}

const minimalistConfig = {
  type: 'object',
  properties: {
    nonInventoryItem: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  },
  additionalProperties: false,
}
const sch = {
  type: 'object',

  properties: {
    shopId: {
      type: 'string',
      minLength: 1,
    },

    uid: {
      type: 'string',
      minLength: 1,
    },

    layout: {
      type: 'string',
      enum: ['bar', 'retail', 'mobile', 'minimalist'],
    },

    /* The elements (respective sub-schemas) should have the same index as their dependencies */
    config: {
      type: 'object',
      oneOf: [defaultConfig, barConfig, minimalistConfig],

      dependencies: {
        type: {
          oneOf: [
            {
              properties: {
                type: {
                  enum: ['config'],
                },
              },
            },

            {
              properties: {
                type: {
                  enum: ['default'],
                },
              },
            },
            {
              properties: {
                type: {
                  enum: ['config'],
                },
              },
            },
          ],
        },
      },
    },
    type: {
      type: 'string',
      enum: ['config', 'default'],
    },
  },
  required: ['shopId', 'layout', 'type', 'config'],
}

const schema = ajvInstance.compile(sch)

export class LayoutConfigModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}

export const layoutConfigSchema = sch
