import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Today, AddCircleOutline, Settings , Notifications} from '@material-ui/icons'
import './FriendsItem.css'
import FriendsView from './FriendsView';
import './Home.css'
import AddAFriend from './AddAFriend';
import Calendar from './Calendar';
export interface HomeProps {

}

function Home(props: HomeProps) {
  const {} = props
  const [viewNum, setViewNum] = React.useState<number>(0)

  return (
    <div className="Home">
        <Grid container>
           <Grid item xs={7}>
               <Typography onClick={() => setViewNum(0)}>
                   The FriendList
               </Typography>
           </Grid>
           <Grid item xs={2} />
           <Grid item xs={2}>
               <Button onClick={() => setViewNum(1)}>
                   <AddCircleOutline />
               </Button>
               <Button onClick={() => setViewNum(2)}>
                 <Today />
               </Button>
               <Button onClick={() => setViewNum(3)}>
                   <Notifications />
                </Button>
               <Button onClick={() => setViewNum(4)}>
                   <Settings />
                </Button>
           </Grid>
           <Grid item xs={1} />
           <Grid item xs={2} />
           <Grid item xs={8} >
               {
                   viewNum == 0 &&
                   <FriendsView />
               }
               {
                   viewNum == 1 && 
                   <AddAFriend />
               }
               {
                   viewNum == 2 &&
                   <Calendar />
               }
               {
                   viewNum == 3 && 
                   <Notifications />
               }
               {
                   viewNum == 4 && 
                   <Settings />
               }
           </Grid>
           <Grid item xs={2} />
        </Grid>
    </div>
  );
}

export default Home;