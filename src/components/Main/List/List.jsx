// list.jsx

import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@mui/material';
import { Delete, CurrencyRupee } from '@mui/icons-material';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);
    
  return (
     <MUIList dense={false} className={classes.list} >
        {transactions.map((transaction) => (
            <Slide direction='down' in={true} mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <CurrencyRupee sx={{ color: transaction.type === 'Income' ? 'green' : 'red' }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`Rs.${transaction.amount} - Date:  ${transaction.date}`}/>
                <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='delete' onClick={() => deleteTransaction(transaction.id)}>
                        <Delete/>
                    </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
     </MUIList>
  )
}

export default List