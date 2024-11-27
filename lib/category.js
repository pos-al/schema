import { BaseModel } from './_shared/base';
import { ajvInstance } from './_shared/config';

import { CATEGORY_COLORS, CATEGORY_TYPE, } from "./_shared/enum";

const sch = {
  type: "object",
  properties: {
    shopId: { type: "string", minLength: 1 },
    name: { type: "string", minLength: 1 },
    type: { enum: CATEGORY_TYPE },
    color: { enum: CATEGORY_COLORS, default: 'primary' },
  },
  required: ["shopId", "name", "type", "color"],
  additionalProperties: false
}
const schema = ajvInstance.compile(sch);

export class CategoryModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}