export const TAX_TYPES = Object.freeze({
  TYPE_1: 'TYPE_1',
  TYPE_2: 'TYPE_2',
  TAX_FREE: 'TAX_FREE',
  MARGIN_SCHEME: 'MARGIN_SCHEME',
  EXPORT_OF_GOODS: 'EXPORT_OF_GOODS',
  VALUE0: '0',
  VALUE6: '6',
  VALUE10: '10',
  VALUE20: '20',
})
export const TYPE_OF_ID = Object.freeze({
  ID: 'ID',
  NUIS: 'NUIS',
  VAT: 'VAT',
  PASS: 'PASS',
  EMPTY: '',
})
export const PARTY_TYPES = Object.freeze({
  CUSTOMER: 'CUSTOMER',
  SUPPLIER: 'SUPPLIER',
  TRANSPORTER: 'TRANSPORTER',
})
export const CATEGORY_COLORS = Object.freeze([
  'success',
  'primary',
  'secondary',
  'info',
  'danger',
  'warning',
  'dark',
])
export const CATEGORY_TYPE = Object.freeze(['PARTY', 'ITEM'])
export const DISCOUNT_TYPES = Object.freeze({
  PERCENTAGE: 'PERCENTAGE',
  VALUE: 'VALUE',
})
export const LAYOUTS = Object.freeze({
  RETAIL: 'retail',
  BAR: 'bar',
  BAR_MOBILE: 'barMobile',
  MOBILE: 'mobile',
  MINIMALIST: 'minimalist',
  INVOICE: 'invoice',
})
export const DOC_STATUES = Object.freeze({
  // used for inventory but will be replaced everywhere
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
  ORDER: 'ORDER',
})
export const SPEC_TYPES = Object.freeze({
  SPEC_A: 'SPEC_A',
  SPEC_B: 'SPEC_B',
})
export const PRINT_FORMATS = Object.freeze({
  A4: 'A4',
  A5: 'A5',
  '80mm': '80mm',
  '58mm': '58mm',
})
export const DASHBOARD_GADGETS_IDS = Object.freeze({
  liveFeed: 'live-feed',
  liveView: 'live-view',
  shiftClose: 'shift-close',
  cashView: 'cash-view',
  orderView: 'order-view',
})

export const CURRENCIES = Object.freeze({
  AED: 'AED',
  AFN: 'AFN',
  ALL: 'ALL',
  AMD: 'AMD',
  ANG: 'ANG',
  AOA: 'AOA',
  ARS: 'ARS',
  AUD: 'AUD',
  AWG: 'AWG',
  AZN: 'AZN',
  BAM: 'BAM',
  BBD: 'BBD',
  BDT: 'BDT',
  BGN: 'BGN',
  BHD: 'BHD',
  BIF: 'BIF',
  BMD: 'BMD',
  BND: 'BND',
  BOB: 'BOB',
  BOV: 'BOV',
  BRL: 'BRL',
  BSD: 'BSD',
  BTN: 'BTN',
  BWP: 'BWP',
  BYN: 'BYN',
  BZD: 'BZD',
  CAD: 'CAD',
  CDF: 'CDF',
  CHE: 'CHE',
  CHF: 'CHF',
  CHW: 'CHW',
  CLF: 'CLF',
  CLP: 'CLP',
  CNY: 'CNY',
  COP: 'COP',
  COU: 'COU',
  CRC: 'CRC',
  CUC: 'CUC',
  CUP: 'CUP',
  CVE: 'CVE',
  CZK: 'CZK',
  DJF: 'DJF',
  DKK: 'DKK',
  DOP: 'DOP',
  DZD: 'DZD',
  EGP: 'EGP',
  ERN: 'ERN',
  ETB: 'ETB',
  EUR: 'EUR',
  FJD: 'FJD',
  FKP: 'FKP',
  GBP: 'GBP',
  GEL: 'GEL',
  GHS: 'GHS',
  GIP: 'GIP',
  GMD: 'GMD',
  GNF: 'GNF',
  GTQ: 'GTQ',
  GYD: 'GYD',
  HKD: 'HKD',
  HNL: 'HNL',
  HRK: 'HRK',
  HTG: 'HTG',
  HUF: 'HUF',
  IDR: 'IDR',
  ILS: 'ILS',
  INR: 'INR',
  IQD: 'IQD',
  IRR: 'IRR',
  ISK: 'ISK',
  JMD: 'JMD',
  JOD: 'JOD',
  JPY: 'JPY',
  KES: 'KES',
  KGS: 'KGS',
  KHR: 'KHR',
  KMF: 'KMF',
  KPW: 'KPW',
  KRW: 'KRW',
  KWD: 'KWD',
  KYD: 'KYD',
  KZT: 'KZT',
  LAK: 'LAK',
  LBP: 'LBP',
  LKR: 'LKR',
  LRD: 'LRD',
  LSL: 'LSL',
  LYD: 'LYD',
  MAD: 'MAD',
  MDL: 'MDL',
  MGA: 'MGA',
  MKD: 'MKD',
  MMK: 'MMK',
  MNT: 'MNT',
  MOP: 'MOP',
  MRU: 'MRU',
  MUR: 'MUR',
  MVR: 'MVR',
  MWK: 'MWK',
  MXN: 'MXN',
  MXV: 'MXV',
  MYR: 'MYR',
  MZN: 'MZN',
  NAD: 'NAD',
  NGN: 'NGN',
  NIO: 'NIO',
  NOK: 'NOK',
  NPR: 'NPR',
  NZD: 'NZD',
  OMR: 'OMR',
  PAB: 'PAB',
  PEN: 'PEN',
  PGK: 'PGK',
  PHP: 'PHP',
  PKR: 'PKR',
  PLN: 'PLN',
  PYG: 'PYG',
  QAR: 'QAR',
  RON: 'RON',
  RSD: 'RSD',
  RUB: 'RUB',
  RWF: 'RWF',
  SAR: 'SAR',
  SBD: 'SBD',
  SCR: 'SCR',
  SDG: 'SDG',
  SEK: 'SEK',
  SGD: 'SGD',
  SHP: 'SHP',
  SLL: 'SLL',
  SOS: 'SOS',
  SRD: 'SRD',
  SSP: 'SSP',
  STN: 'STN',
  SVC: 'SVC',
  SYP: 'SYP',
  SZL: 'SZL',
  THB: 'THB',
  TJS: 'TJS',
  TMT: 'TMT',
  TND: 'TND',
  TOP: 'TOP',
  TRY: 'TRY',
  TTD: 'TTD',
  TWD: 'TWD',
  TZS: 'TZS',
  UAH: 'UAH',
  UGX: 'UGX',
  USD: 'USD',
  USN: 'USN',
  UYI: 'UYI',
  UYU: 'UYU',
  UYW: 'UYW',
  UZS: 'UZS',
  VED: 'VED',
  VES: 'VES',
  VND: 'VND',
  VUV: 'VUV',
  WST: 'WST',
  XAF: 'XAF',
  XAG: 'XAG',
  XAU: 'XAU',
  XBA: 'XBA',
  XBB: 'XBB',
  XBC: 'XBC',
  XBD: 'XBD',
  XCD: 'XCD',
  XDR: 'XDR',
  XOF: 'XOF',
  XPD: 'XPD',
  XPF: 'XPF',
  XPT: 'XPT',
  XSU: 'XSU',
  XTS: 'XTS',
  XUA: 'XUA',
  XXX: 'XXX',
  YER: 'YER',
  ZAR: 'ZAR',
  ZMW: 'ZMW',
  ZWL: 'ZWL',
})

export const LIVE_FEED_ACTIONS = Object.freeze({
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
  DELETED: 'DELETED',
  DRAFTED: 'DRAFTED',
  DUPLICATED: 'DUPLICATED',
  REVERSED: 'REVERSED',
  DEBITED: 'DEBITED',
  CREDITED: 'CREDITED',
})

export const LIVE_FEED_CATEGORIES = Object.freeze({
  ITEMS: 'ITEMS',
  CUSTOMERS: 'CUSTOMERS',
  ORDERS: 'ORDERS',
  CASH: 'CASH',
  BANK: 'BANK',
  INVENTORY: 'INVENTORY',
})

export const RELATION_ENUMS = Object.freeze({
  SUMMARIZED: "summarized",
  DEBITED: "debited",
  CREDITED: "credited",
  REVERSED: "reversed",
  DUPLICATED: "duplicated",
})