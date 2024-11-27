import { z } from "zod";

export const isOdd = (n: number): boolean => !!(n & 1);

const invoiceAISchema = z.object({
  customerName: z.string().nullable(),
  currency: z.enum(["ALL", "EUR", "USD", "CAD"]).nullable(),
  paymentMethod: z.enum(["CASH", "CARD", "BANK", "OTHER"]).nullable(),
  notes: z.string().nullable(),
  vehiclePlates: z.string().nullable(),
  exchangeRate: z.number().nullable(),
  items: z
    .array(
      z.object({
        name: z.string().nullable(),
        quantity: z.number().nullable(),
        priceWT: z.number().nullable(),
      }),
    )
    .nullable(),
  discount: z.number().nullable(),
  discountType: z.enum(["PERCENTAGE", "VALUE"]).nullable(),
  invoiceOption: z
    .enum(["NONE", "SELF-ISSUED", "EXPORT", "ABROAD", "EXCHANGE", "REVERSE"])
    .nullable(),
  selfIssuedType: z
    .enum(["SELF", "DOMESTIC", "AGREEMENT", "ABROAD", "OTHER"])
    .nullable(),
  typeOfExchange: z.enum(["BUYING", "SELLING"]).nullable(),
  einvoiceType: z
    .enum([
      "COMMERCIAL",
      "CORRECTIVE",
      "ADVANCE_PAYMENT",
      "PRE",
      "MEASURED_SERVICES",
      "LEASING",
      "APPROVAL",
      "DEBIT",
      "TAX",
    ])
    .nullable(),
  profileID: z
    .enum([
      "P1",
      "P2",
      "P3",
      "P4",
      "P5",
      "P6",
      "P7",
      "P8",
      "P9",
      "P10",
      "P11",
      "P12",
    ])
    .nullable(),
});

export { invoiceAISchema };
