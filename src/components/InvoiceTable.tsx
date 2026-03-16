import { Invoice } from "@/types/invoice"

interface Props {
  invoices : Invoice[]
}

const InvoiceTable = ({invoices} : Props) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto mt-8">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs"> 
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Customer</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
            {
              invoices.map(invoice => (
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-700">{invoice.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{invoice.customer}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">${invoice.amount}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {invoice.status}
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default InvoiceTable