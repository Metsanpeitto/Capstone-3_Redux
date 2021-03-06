import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from './redux/configureStore';
import Locations from './pages/Locations';
import Details from './pages/Details';
import NavBar from './components/Navbar';
import { getLocations } from './redux/api/api';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props) {
      const { getLocations } = this.props;
      getLocations();
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Locations} />
          <Route exact path="/Details" component={Details} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { store, getLocations })(App);
App.propTypes = { getLocations: PropTypes.func.isRequired };
