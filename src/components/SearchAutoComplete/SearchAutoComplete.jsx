import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions'

const SearchAutoComplete = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState([])
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])
    function handleChange(event){
        const query = event.target.value.toLowerCase()
        setSearchParam(query)

        if(query.length > 1){
            const filteredData =
            users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1):[];
            setFilteredUsers(filteredData)
            setShowDropdown(true)
            
        }

    }

    function handleClick(event){
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
        

    }
   
    async function fetchListOfUsers(){
        try {

            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if(data && data.users && data.users.length > 0){
                setUsers(data.users.map((dataItem)=>dataItem.firstName))
                setLoading(false)

            }
            
        } catch (error) {
            setLoading(false)
            setError(error)
            
        }
    }

    useEffect(()=>{

        fetchListOfUsers();

    },[])
    console.log(users, filteredUsers);



  return (
    <div className='search-auto-complete-container'>

        {
            loading ? (<h1>Loading data! Please wait</h1>):
            (<input
        name='search-user'
        placeholder='search users here...'
        onChange={handleChange}
        value={searchParam}
        
        />)
        }

        {showDropdown && <Suggestions data={filteredUsers} handleClick={handleClick}/>}

        
    </div>
  )
}

export default SearchAutoComplete