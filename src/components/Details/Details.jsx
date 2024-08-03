import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import useStyles from './styles';

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">Rs.{total}</Typography>
                <div className={classes.chartContainer}>
                    <Doughnut 
                        data={chartData} 
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                        }} 
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default Details;
