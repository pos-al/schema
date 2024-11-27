import Ajv from "ajv";
const ajvInst = new Ajv({ allErrors: true, useDefaults: true });
import customErrors from "ajv-errors"
customErrors(ajvInst)

export const ajvInstance = ajvInst;