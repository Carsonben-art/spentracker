import React from "react";
import { Grid } from "@material-ui/core";

import Details from "./Components/Details/Details";
import Main from "./Components/Main/Main";


import { PushToTalkButton,PushToTalkButtonContainer } from "@speechly/react-ui";
// import {SpeechState, useSpeechContext} from "@speechly/react-client";


import useStyles from './styles';

// import { useRef } from "react";

const App = () =>{

    // const main = useRef(null);
    const classes = useStyles();
    // const {speechState} = useSpeechContext();
    // const executeScroll = () => main.current.scrollIntoView();

    // useEffect(() =>{
    //     if(speechState === SpeechState.Recording){
    //         executeScroll();
    //     }
    // },[speechState]);
    return(
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{height: '100vh'}}>
                    {/* xs == extra small devices $$ sm == small devices */}
                <Grid item x5={12} sm={4} className={classes.mobile}>
                    <Details title="Income"/>
                </Grid>
                <Grid  item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item x5={12} sm={4} className={classes.desktop}>
                    <Details title="Income"/>
                </Grid>
                <Grid item x5={12} sm={4} className={classes.last}>
                    <Details title="Expense"/>
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                {/* <ErrorPanel /> */}
            </PushToTalkButtonContainer>
        </div>
    )
}
export default App;