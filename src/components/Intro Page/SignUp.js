import React from "react"

function SignUp({newUserName, setNewUserName, handleLoginSubmit, handleCreateAccountSubmit, loginUsername, setLoginUsername}) {

    
   return (
       <div className="login-div">
           <div className="sign-in-div">
               <h1> welcome back! ♻️</h1>
               <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="name">username: </label>
                    <input
                        type="text"
                        id="name"
                        name="username"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                    />
                    <button type="submit">enter</button>
                    </form>
           </div>
            <div className="sign-up">
                <h1>new user? sign up here! </h1>
                <form className="new-user-form" onSubmit={handleCreateAccountSubmit}>
                    <label htmlFor="name">username: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                    />
                    <button type="submit">create profile ♻️</button>
                </form>
            </div>
        </div>
   )
}


export default SignUp;