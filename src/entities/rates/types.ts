export type CurrencyCode = "THB" | "RUB" | "EUR" | "USD"

export type Rate = {
    id: number
    code: CurrencyCode
    value: number
}