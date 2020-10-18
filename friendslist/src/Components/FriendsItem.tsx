import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import {Error, Favorite} from '@material-ui/icons'
import './FriendsItem.css'
import rgbToHex from  '../rgbToHex'

export interface FriendsItemProps {
    name: string,
    relation: string,
    time: number,
    picLink: string,
    favorited: boolean
}

function FriendsItem(props: FriendsItemProps) {
  const {name, relation, time, picLink, favorited} = props

  const colorFunc = () : string => {
    let green = 255
    let red = 0

    if(time < 31){
        red += time *8 
    } else {
        red = 255
        green -= (time - 28) * 8
    }
    if(green < 0){
        green = 0
    }
    return rgbToHex(red,green,50)
  }

  const timeFormatString = () => {
      //todo
        if(time < 1) {
            return "today"
        }
       else if(time < 7) {
          return time.toString(10) + (time == 1 ? " day" : " days")
      } else if (time < 29) {
          const weeks = Math.floor(time / 7)
          return weeks.toString(10) + (weeks == 1 ? " week" : " weeks")
      } else {
          const month = Math.floor(time / 31)
          return month.toString(10) + (month == 1 ? " month" : " months")
      }
  }

  return (
    <div className="FriendsItem">
        <Grid container>
            <Grid item xs={2}>
                <img className="ProfilePic"src={picLink}></img>
            </Grid>
            <Grid item xs={10}
                style={{background:colorFunc()}}>
                
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
                    <Grid item xs={2} 
                    >
                        <Error className="Fav"
                style={{background:colorFunc()}}
                                                />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography> Last Contacted: </Typography>
                        <Typography> {timeFormatString()} </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default FriendsItem;