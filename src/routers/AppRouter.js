import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header'
import AboutPage from '../components/AboutPage';
import AlphabeticalPage from '../components/AlphabeticalPage';
import BooksPage from '../components/BooksPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage}  />
        <Route path="/books" component={BooksPage}  />
        <Route path="/alphabetical" component={AlphabeticalPage}  />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
