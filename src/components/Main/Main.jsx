import React, { useContext } from 'react';
import { List as Card, CardHeader, CardContent, Typography, Grid, Divider} from  '@mui/material';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card style={{ backgroundColor: 'white' }} className={classes.root}>
        <Card className={classes.root}>
            <CardHeader align="center" title="Expense Tracker"/>
            <CardContent>
                <Typography align="center" variant="h5" style={{ marginBottom: '24px' }}>Total Balance Rs. {balance}</Typography>
                <Divider style={{ margin: '24px 0' }}/>
                    <Form/>
            </CardContent>
            
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
            
        </Card>
    </Card>
  )
}

export default Main
