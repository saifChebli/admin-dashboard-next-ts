

export interface Invoice {
    id : number
    customer : string
    amount : number
    status : "Paid" | "Pending" // union type
}