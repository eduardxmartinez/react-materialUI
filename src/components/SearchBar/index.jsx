import React, { useState } from 'react'
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"

const Searcher = (prop) => {
    const {setInputUser} = prop;
    const [valueInput, setValueInput] = useState("");

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setValueInput(inputValue);
    }

    const handleSubmit = () => {
        setInputUser(valueInput);
    }  
    
 return (
    <Stack direction="row" 
    sx={{
        marginTop: "30px",
        width: "80%",
        alignItems: "center"
    }}>
        <TextField
        id='outlined-basic'
        label="GitHub User"
        placeholder='Octocat'
        variant='outlined'
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
            width: "90%",
        }}
        />
        <IconButton
        onClick={()=> handleSubmit()}
         sx={{
            left: "-50px",
            height: "70%"
        }}>
            <SearchIcon/>
        </IconButton>
    </Stack>
  )
}

export default Searcher;