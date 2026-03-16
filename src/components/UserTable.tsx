import { User } from "@/types/user"
import { TrashIcon , PencilIcon } from '@heroicons/react/24/outline'

interface Props {
  users : User[]
}

const UserTable = ({ users } : Props) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto mt-8">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {
            users.map(user => (
              <tr>
                <td className="px-6 py-4 font-medium text-gray-700">{user.id}</td>
                <td className="px-6 py-4 font-medium text-gray-700">{user.name}</td>
                <td className="px-6 py-4 font-medium text-gray-700">{user.email}</td>
                <td className="px-6 py-4 font-medium text-gray-700">{user.role}</td>
                <td className="px-6 py-4 font-medium text-gray-700">
                  <div className="space-x-4">
                    <button className="bg-gray-50 px-2 py-1 rounded-md hover:bg-gray-100">
                      <PencilIcon className="size-4 text-blue-500" />
                    </button>
                    <button className="bg-gray-50 px-2 py-1 rounded-md hover:bg-gray-100">
                      <TrashIcon className="size-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserTable