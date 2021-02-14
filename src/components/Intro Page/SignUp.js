import React from "react"
import styled from "styled-components";

function SignUp({newUserName, setNewUserName, handleLoginSubmit, handleCreateAccountSubmit, loginUsername, setLoginUsername}) {

    
   return (
       <Wrapper>
           <div className="sign-in-div">
               <Headers> welcome back! ♻️</Headers>
               <form onSubmit={handleLoginSubmit}>
               <Username>username: </Username>
                    <input
                        type="text"
                        id="name"
                        name="username"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                    />
                    <button type="submit" className="enter-btn">enter</button>
                    </form>
           </div>
            <div className="sign-up">
                <Headers>new user? sign up here! </Headers>
                <form className="new-user-form" onSubmit={handleCreateAccountSubmit}>
                    <Username>username: </Username>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                    />
                    <button type="submit" className="profile-btn">create profile ♻️</button>
                </form>
            </div>
        </Wrapper>
   )
}


export default SignUp;

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const Headers = styled.h1`
    font-family: 'Lemon', serif;
`

const Username = styled.p`
font-family: 'Anonymous Pro', monospace;
`