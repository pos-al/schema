export class BaseModel {
  constructor(attributes = {}, modelValidator) {
    this.data = attributes
    this.modelValidator = modelValidator
  }
  json() {
    if (!this.modelValidator(this.data)) {
      throw { message: "Validation error on " + this.constructor.name, ...this.modelValidator.errors }
    }
    return this.data
  }
}