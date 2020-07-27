import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense } from './actions/expenses';
import {setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Rent', amount: 1200}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 100, createdAt: 1000}));
store.dispatch(addExpense({description: 'Water Bill', amount: 100}));

const state = store.getState();
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibileExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))