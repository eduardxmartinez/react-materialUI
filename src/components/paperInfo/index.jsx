import { Paper, Stack, Typography } from '@mui/material';
import React from 'react'

const PaperInfo = (props) => {
    const {userState} = props;
    const {
        public_repos,
        followers,
        following
    } = userState;

    const StackPaperDirection = {
        xs:"column", sm:"row"
    }


  return (
    <Paper sx={{marginTop:"15px"}} elevation={3}>
        <Stack
        spacing={3}
        direction={StackPaperDirection}
        sx={{justifyContent:"space-evenly", margin:"20px"}}
        >
            <Stack>
                <Typography variant='h5'>Repos</Typography>
                <Typography variant="h6">{public_repos}</Typography>
            </Stack>
            <Stack>
                <Typography variant="h5">Followers</Typography>
                <Typography variant="h6">{followers}</Typography>
            </Stack>
            <Stack>
                <Typography variant="h5">Following</Typography>
                <Typography variant="h6">{following}</Typography>
            </Stack>
        </Stack>
    </Paper>
  )
}

export default PaperInfo