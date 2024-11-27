import { BaseModel } from './_shared/base';
import { ajvInstance } from './_shared/config';
import { orderSchemaObj } from './order';

const sch = {
  type: "object",
  properties: {
    shopId: { type: "string", minLength: 1 },
    busUnitId: { type: "string", minLength: 1 },
    tableId: { type: "string", minLength: 1 },
    orderId: { type: "string", minLength: 1 },
    printedOnce: { type: "boolean" },
    orderData: orderSchemaObj // refer to order model
  },
  required: ["shopId", "busUnitId", "tableId", "orderId", "orderData"],
  additionalProperties: false
}

const schema = ajvInstance.compile(sch);

export class BarLayoutOrderModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}