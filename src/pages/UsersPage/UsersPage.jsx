import { useEffect,useState } from "react"
import "./UsersPage.css";
export default function UsersPage (){
    


 const[users,setUsers] = useState([])
 async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
 }
 useEffect(()=> {
    fetchUsers()
 },[])

 const[searchQuery,setSearchQuery] = useState("");
 const searchUsers = users.filter((item) => item.name.toLowerCase().includes(searchQuery))
 

    return(
        <div className="users">
        <h1>Пользователи</h1>
        <input type="search" className='btn_search' placeholder='Поиск' onChange={(e) => setSearchQuery(e.target.value)} />
                  <hr />
    {
    searchUsers.length ?
    searchUsers.map((user) => {
        return(
            <div className="user">
            <li>{user.name}</li>
            <hr />
            </div>
            
        )
    }):
    <p>По запросу {searchQuery} ничего не найдено</p>
}
        </div>
    )
}