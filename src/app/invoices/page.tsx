import InvoiceTable from "@/components/InvoiceTable"
import { Invoice } from "@/types/invoice"


const invoices : Invoice[] = [
    {
        id : 1,
        amount : 1000,
        customer : "Alice",
        status : "Pending"
    }
]

const InvoicesPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Invoices management</h1>

            <InvoiceTable invoices={invoices} />
        </div>
    )
}



export default InvoicesPage