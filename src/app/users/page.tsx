import UserTable from "@/components/UserTable"
// import { User } from "@/types/user"


// const users : User[] = [
//   {
//     id : 1,
//     name : "Alice",
//     email : "alice@gmail.com",
//     role : "Admin"
//   },
//   {
//     id : 2,
//     name : "John",
//     email : "john@gmail.com",
//     role : "User"
//   }
// ]

async function getUsers(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users")

  return response.json()
}

const UsersPage = async () => {

  const users = await getUsers()

  return (
    <div>
      <h1 className="text-2xl font-bold">Users Management</h1>
      <UserTable initialUsers={users}/>
    </div>
  )
}

export default UsersPage