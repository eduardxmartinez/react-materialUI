import React, {useState, useEffect} from "react";
import { Container } from "@mui/material";
import Searcher from "./components/SearchBar";
import getUser from "./services/users";
import UserCard from "./containers/userCard";

const App = () => {
 const [inputUser, setInputUser] = useState("octocat");
 const [userState,setUserState] = useState(inputUser);
 const [notFound, setNotFound] = useState(false);

  const gettingUser = async(u) => {
    const userResponse = await getUser(u);

    if(userState === "octocat"){
      localStorage.setItem("octocat",userResponse);
    }
    if(userResponse.message === "Not Found"){
      const {octocat} = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  } 
  
  console.log(userState);

  useEffect(()=> {
    gettingUser(inputUser);
  },[inputUser])

  return(
    <Container sx={{
      background: "whitesmoke",
      width: "90vw",
      minHeight: "500px",
      borderRadius: "16px",
      marginTop: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
      <UserCard userState={userState}/>
    </Container>
  )
};

export default App;