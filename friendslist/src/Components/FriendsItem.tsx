import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import {Error} from '@material-ui/icons'
interface FriendsItemProps {
    name: string,
    relation: string,
    time: number,
    picLink: string
}

function FriendsItem(props: FriendsItemProps) {
  const {name, relation, time, picLink} = props

  return (
    <div className="FriendsItem">
        <Grid container >
            <Grid item xs={2}>
                <p>pic</p>
            </Grid>
            <Grid className="coloredRect" container>
                <Grid item xs={6}>
                    <Typography> {name} </Typography>
                    <Typography> {relation}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Error />
                </Grid>
                <Grid item xs={4}>
                    <Typography> Last Contacted: </Typography>
                    <Typography> {time} Months </Typography>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default FriendsItem;