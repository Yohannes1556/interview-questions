import React, { useEffect, useState } from 'react'
import User from './User'
import './styles.css'

const GithubProfileFinder = () => {
    const [username, setUserName] = useState('yohannes1556')
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(null)

    async function fetchGithubUserData(){
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json();

        if(data){
            setUserData(data)
            setLoading(false)
            setUserName('')
        }

        console.log(data)
    }
    function handleSubmit(){
        fetchGithubUserData()
    }


    useEffect(()=>{
        fetchGithubUserData()
    },[])
    if(loading){
        return <h1>loading data! Please wait</h1>
    }
  return (
    <div className='github-profile-container'>
        <div className="input-wrapper">
            <input
            name='search-by-username'
            type='text'
            placeholder='search github username...'
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData}/> : null
        }
        
    </div>
  )
}

export default GithubProfileFinder