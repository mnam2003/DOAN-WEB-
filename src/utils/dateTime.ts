/* eslint-disable @typescript-eslint/no-explicit-any */
import { add0toNumber } from "./add0toNumber"

export class DateTime {
    static CalendarDate = (val: any) => {
        const date = new Date(val)
        
        return `${date.getFullYear()}-${add0toNumber(date.getMonth() + 1)}-${add0toNumber(date.getDate())}`
    }
}