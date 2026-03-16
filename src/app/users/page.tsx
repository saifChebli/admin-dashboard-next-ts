import UserTable from "@/components/UserTable"
import { User } from "@/types/user"


const users : User[] = [
  {
    id : 1,
    name : "Alice",
    email : "alice@gmail.com",
    role : "Admin"
  },
  {
    id : 2,
    name : "John",
    email : "john@gmail.com",
    role : "User"
  }
]

const UsersPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Users Management</h1>
      <UserTable users={users}/>
    </div>
  )
}

export default UsersPage