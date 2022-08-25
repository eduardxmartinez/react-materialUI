import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import PaperInfo from '../../components/paperInfo';
import LocationInfo from '../../components/LocationInfo';

const Description = (props) => {
    const {userState} = props;
    const {bio} = userState;
  return (
    <Stack sx={{justifyContent: 'center'}}>
            {bio !== null 
            ? <Typography variant='body1'>{bio}</Typography> 
            : <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur maiores pariatur id repellat. Delectus reprehenderit ut necessitatibus dolor omnis. Molestias incidunt quidem dolorum inventore necessitatibus nesciunt eius. Ea, libero.</Typography>}
        <PaperInfo userState={userState}/>
        <LocationInfo userState={userState}/>
    </Stack>
  )
}

export default Description