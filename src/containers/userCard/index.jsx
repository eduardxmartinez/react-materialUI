import { CardMedia, Grid, Stack } from '@mui/material';
import React from 'react'
import PrincipalInformation from '../../components/principalInformation';
import Description from '../description';

const UserCard = (props) => {
  const {userState} = props;
  const {avatar_url} = userState;
  return (
    <Grid
    container
    spacing={2}
    sx={{
      marginTop:"15px",
    }}
    >

      <Grid item xs={12} md={3} lg={3}>
        <CardMedia component="img"
        alt='GitHub User'
        image={avatar_url}
        sx={{
          borderRadius:"50%",
          margin:"auto",
          width: {xs:"35%", md: "75%", lg:"100%"},
        }}
         />
      </Grid>

      <Grid item xs={12} md={7} lg={9}>
        <Stack 
        direction="column" 
        spacing={1} 
        sx={{
          margin:"auto",
        }}
        >
          <PrincipalInformation userState={userState}/>
          <Description userState={userState}/>
        </Stack>
      </Grid>

    </Grid>
    
  )
}

export default UserCard