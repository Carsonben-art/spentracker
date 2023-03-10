import React, {useContext } from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import Form from './Form/Form';

import useStyles from './styles';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
        <CardHeader title="BudgetBuddy" subheader="A Smart App for Tracking Your Finances in real-Time." />
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance Ksh {balance} </Typography>
            <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                <InfoCard />
                
            </Typography>
            <Divider />
            {/* Form goes here... */}
            <Form />
        </CardContent > 
        <CardContent className={classes.CardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
            
        </CardContent>
    </Card>
  )
}

export default Main;
