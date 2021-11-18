import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Register</h1>
            <form action="/">
                <label htmlFor="">Username</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
            </form>
        </div>
    )
}

export default Home
