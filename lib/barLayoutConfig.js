import { BaseModel } from './_shared/base';
import { ajvInstance } from './_shared/config';

const sch = {
  type: "object",
  properties: {
    shopId: { type: "string", minLength: 1 },
    busUnitId: { type: "string", minLength: 1 },
    shapes: { type: "string", minLength: 1 },
  },
  required: ["shopId","busUnitId", "shapes"],
  additionalProperties: false
}

const schema = ajvInstance.compile(sch);

export class BarLayoutConfigModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}