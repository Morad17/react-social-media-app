import React from 'react'

const Home = () => {
    return (
        <div className="home-container">
            <div className="register-form-container">
                <h1 className="">Register</h1>
                <form action="/" className="">
                    <div className="form-input">
                        <label htmlFor="">Username</label>
                        <input placeholder=""type="text" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Password</label>
                        <input placeholder=""type="text" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Email</label>
                        <input placeholder=""type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
