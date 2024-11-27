import { BaseModel } from './_shared/base'
import { ajvInstance } from './_shared/config'
import { LIVE_FEED_ACTIONS, LIVE_FEED_CATEGORIES } from './_shared/enum'

const sch = {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    action: { type: 'string', enum: Object.values(LIVE_FEED_ACTIONS) },
    actionId: { type: 'string' },
    category: { type: 'string', enum: Object.values(LIVE_FEED_CATEGORIES) },
    extraData: { type: 'object' }, // anything can be here
  },
  required: ['userId', 'action', 'actionId', 'category'],
  additionalProperties: false,
}

const schema = ajvInstance.compile(sch)

export class LiveFeedModel extends BaseModel {
  constructor(data) {
    super(data, schema)
  }
}
