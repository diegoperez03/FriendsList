import { Button, Grid } from '@material-ui/core';
import React from 'react';
import FriendsItem from './FriendsItem';

function FriendsView() {
    const friends = ["Diego", "Gus", "Pedro", "Steven","RJ"]
  return (
    <div className="FriendsView">
        <Grid container>
            {
                friends.map((friend:string) => {
                    return (
                    <Grid item xs={12}>
                        <FriendsItem 
                            name={friend}
                            relation="whatever"
                            time={4}
                            picLink="1.jpg"
                        />
                    </Grid>
                    )
                })
            }
            <Grid item xs={5} />
            <Grid item xs={2} >
                <Button variant="contained"/>
            </Grid>
            <Grid item xs={5}/>
        </Grid>
    </div>
  );
}

export default FriendsView;