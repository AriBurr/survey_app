import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../actions';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
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
  }
}

export default connect(null, actions)(App);
