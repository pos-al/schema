import { BaseModel } from './_shared/base'
import { ajvInstance } from './_shared/config'
import { TCR_CODE } from './_shared/regex'

const sch = {
  type: 'object',
  properties: {
    shopId: { type: 'string', minLength: 1 },
    uid: { type: 'string', minLength: 10 },
    upcomingNumber: { type: 'number', minimum: 1, multipleOf: 1 },
    tcrCode: { type: 'string', pattern: TCR_CODE },
    operatorCode: { type: 'string', pattern: TCR_CODE },
    email: { type: 'string' },
    retryOffline: { type: 'boolean' },
    businessUnitCode: { type: 'string', pattern: TCR_CODE },
  },
  required: [
    'shopId',
    'uid',
    'upcomingNumber',
    'tcrCode',
    'operatorCode',
    'businessUnitCode',
  ],
  additionalProperties: false,
}

const schema = ajvInstance.compile(sch)

export class TcfConfigModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}
