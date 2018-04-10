import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from './actions/AppActions'

import AppNavbar from './components/AppNavbar'
import Home from './components/Home'

import BadgeForm from './components/BadgeForm'
import ProfilePage from './components/ProfilePage'
import GetBadges from './components/GetBadges'
import FindPeople from './components/FindPeople'
import FindJobs from './components/FindJobs'

class App extends Component {
  render () {
    return (
      <div className='App'>
        {this.props.uport ? <AppNavbar /> : null}
        <div>
          {!this.props.uport
             ? <Home />
             : null}
          {this.props.getBadgesPage === true
             ? <GetBadges />
             : null}
          {this.props.badgeFormPage === true
             ? <BadgeForm />
             : null}
          {this.props.profileFormPage === true
             ? <ProfilePage />
             : null}
          {this.props.findPeoplePage === true
             ? <FindPeople />
             : null}
          {this.props.findJobsPage === true
             ? <FindJobs />
             : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    badgeFormPage: state.App.badgeFormPage,
    profileFormPage: state.App.profileFormPage,
    getBadgesPage: state.App.getBadgesPage,
    findPeoplePage: state.App.findPeoplePage,
    findJobsPage: state.App.findJobsPage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
