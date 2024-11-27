import { BaseModel } from './_shared/base';
import { ajvInstance } from './_shared/config';

import { PARTY_TYPES, TYPE_OF_ID } from "./_shared/enum";

const sch = {
  type: "object",
  properties: {
    active: { type: "boolean", default: true },
    code: { type: "string", default: '' },
    name: { type: "string", minLength: 1 },
    shopId: { type: "string" },
    address: { type: "string", default: '' },
    country: { type: "string", default: '' },
    tin: { type: "string", default: '' },
    contact: { type: "string", default: '' },
    town: { type: "string", default: '' },
    categories: { type: "array", items: { type: "string" }, default: [] },
    typeOfId: { type: "string", default: '', enum: Object.values(TYPE_OF_ID) },
    types: {
      type: "array",
      items: {
        type: "string", enum: Object.values(PARTY_TYPES)
      },
      minItems: 1,
    },
  },
  required: ["shopId", "name", "types"],
  additionalProperties: false
}
const schema = ajvInstance.compile(sch);

export class CustomerModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}

export const partySchema = sch