import { Button, Fab, Grid } from '@material-ui/core';
import React from 'react';
import FriendsItem from './FriendsItem';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

function FriendsView() {
    const friends = ["Diego", "Gus", "Pedro", "Steven","RJ","A","b","c"]
    const [topScroll, setTopScroll] = React.useState<boolean>(false)
    const [bottomScroll, setBottomScroll] = React.useState<boolean>(false)
    const FriendsViewEl = document.getElementsByClassName("FriendsView")
    const NofFriend = friends.length
    

    React.useEffect(() => {
        let element = (FriendsViewEl[0] as Element)

        if(NofFriend > 5 ) {
            setBottomScroll(true)
        }
        setInterval(() => {
            if(element.scrollTop > 0){
                setTopScroll(true)
            } else {setTopScroll(false)}

            if(element.scrollHeight - element.scrollTop - element.clientHeight < 5){
                setBottomScroll(false)
            } else { setBottomScroll(true)}

        },10)
    },[])

    const scrollBottom = () => {
        let element = (FriendsViewEl[0] as Element)
        element.scrollTop = element.clientHeight
    }

    const scrollTop = () => {
        let element = (FriendsViewEl[0] as Element)
        element.scrollTop = 0
    }
  return (
    <div>
        <Grid container>
            <Grid item xs={5} />
                <Grid item xs={2} >
                    {topScroll && 
                        <Button onClick={() => scrollTop()}>
                            <Fab color="primary" >
                                <ArrowUpward />
                            </Fab>
                        </Button>
                    }
                </Grid>
            <Grid item xs={5}/>
        </Grid>
        <Grid container  className="FriendsView">
            {
                friends.map((friend:string) => {
                    return (
                    <Grid item xs={12}>
                        <Button>
                        <FriendsItem 
                            name={friend}
                            relation="whatever"
                            time={0}
                            picLink="https://ichef.bbci.co.uk/news/800/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"
                            favorited={true}
                        />
                        </Button>
                        
                    </Grid>
                    )
                })
            }
        </Grid>
        <Grid container>
        <Grid item xs={5} />
            <Grid item xs={2} >
                {bottomScroll &&
                    <Fab color="primary" onClick={() => scrollBottom()} >
                    <ArrowDownward />
                </Fab>
                }
            </Grid>
            <Grid item xs={5}/>
        </Grid>
    </div>
  );
}

export default FriendsView;