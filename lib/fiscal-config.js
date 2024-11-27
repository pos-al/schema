import { BaseModel } from './_shared/base'
import { ajvInstance } from './_shared/config'
import { COUNTRY, NUIS } from './_shared/regex'

const sch = {
  type: 'object',
  properties: {
    shopId: { type: 'string', minLength: 1 },
    company: { type: 'string', minLength: 1 },
    address: { type: 'string', minLength: 1 },
    country: { type: 'string', pattern: COUNTRY },
    town: { type: 'string', minLength: 1 },
    tin: { type: 'string', pattern: NUIS.toString() },
    isVat: { type: 'boolean' },
    notify: { type: 'boolean' },
    certId: { type: 'string', minLength: 10 },
    expire: { type: 'string', minLength: 1 },
    title: { enum: ['Test', 'Production'] },
  },
  required: [
    'shopId',
    'company',
    'address',
    'town',
    'tin',
    'isVat',
    'notify',
    'certId',
    'expire',
    'title',
  ],
  additionalProperties: false,
}

const schema = ajvInstance.compile(sch)

export class FiscalConfigModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}
