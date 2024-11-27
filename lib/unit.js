import { BaseModel } from './_shared/base';
import { ajvInstance } from './_shared/config';

const sch = {
  type: "object",
  properties: {
    shopId: { type: "string", minLength: 1 },
    code: { type: "string", minLength: 1 },
  },
  required: ["shopId", "code"],
  additionalProperties: false
}

const schema = ajvInstance.compile(sch);

export class UnitModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}