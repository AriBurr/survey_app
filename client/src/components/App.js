import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route exact path="/surveys/new" component={SurveyNew} />
      </Switch>
    </div>
  );
};

export default App;
