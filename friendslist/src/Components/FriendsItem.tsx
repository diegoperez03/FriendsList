import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import {Error, Favorite} from '@material-ui/icons'
import './FriendsItem.css'

interface FriendsItemProps {
    name: string,
    relation: string,
    time: number,
    picLink: string,
    favorited: boolean
}

function FriendsItem(props: FriendsItemProps) {
  const {name, relation, time, picLink, favorited} = props
 
  return (
    <div className="FriendsItem">
        <Grid container>
            <Grid item xs={2}>
                <img className="ProfilePic"src={picLink}></img>
            </Grid>
            <Grid className="coloredRect" item xs={10}>
                <Grid container>
                    <Grid item xs={3}>
                        {
                            favorited &&
                            <Favorite className="Fav" />
                        }
                    </Grid>
                    <Grid item xs={3}>
                        <Typography> {name} </Typography>
                        <Typography> {relation}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Error className="Fav" />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography> Last Contacted: </Typography>
                        <Typography> {time} Months </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default FriendsItem;