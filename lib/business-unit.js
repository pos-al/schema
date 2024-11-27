import { BaseModel } from './_shared/base'
import { ajvInstance } from './_shared/config'

const sch = {
  type: 'object',
  properties: {
    shopId: { type: 'string', minLength: 1 },
    name: { type: 'string', minLength: 1 },
    businessUnitCode: { type: 'string', minLength: 1 },
    sn: { type: 'string', default: '' },
    address: { type: 'string', default: '' },
    validFrom: { type: 'string' },
  },
  required: ['shopId', 'businessUnitCode', 'name', 'sn'],
  additionalProperties: false,
}

const schema = ajvInstance.compile(sch)

export class BusinessUnitModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}
