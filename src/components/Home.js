import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import * as FontAwesome from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'
import { uport } from '../utilities/uportSetup'

import resolve from 'did-resolver'
import registerResolver from 'uport-did-resolver'

registerResolver()

export class Home extends Component {
  constructor (props) {
    super(props)
    this.connectUport = this.connectUport.bind(this)
    this.connectUport2 = this.connectUport2.bind(this)
    this.goFindJobs = this.goFindJobs.bind(this)
    this.goFindPeople = this.goFindPeople.bind(this)
  }

  goFindJobs () {
      this.props.actions.goFindJobs();
  }

  goFindPeople () {
    this.props.actions.goFindPeople();
  }

  connectUport () {
    uport.requestCredentials(
      { requested: ['name', 'phone', 'country', 'avatar'],
      notifications: true }
    ).then((credentials) => {
      resolve('did:uport:' + credentials.address + '/').then(doc => console.log(doc))
      this.props.actions.connectUport(credentials)
    })
  }

  connectUport2 () {
    uport.requestCredentials(
      { requested: ['name', 'phone', 'country', 'avatar'],
      notifications: true }
    ).then((credentials) => {
      this.props.actions.connectUport2(credentials)
    })
  }

  render () {
    return (
      <div class='ht-main'>
        <Jumbotron className='bg-primary text-white mb-0' style={{ backgroundColor: '007bff' }}>
          <div class='container'>
            <div class='ht-tm-header'>
              <div class='row'>
                <div class='col-xl-6'>
                  <img
                    src={"target-10.png"}
                    height='150'
                    width='150'
                    alt='a badge' />
                  <div class='d-inline'>
                    <h1 class='display-1'>BadgeX<FontAwesome.FaRocket size={70}/></h1>
                    <p class='lead text-reduced-opacity'>
                      Share badges. Find matches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div class='ht-tm-wrapper'>
          <div class='container ht-tm-container'>
            <div class='row'>
              <div class='col-md-6 py-5'>
                <h2 class='display-4'>Find Jobs</h2>
                <p class='lead'>
                  Share your achievements. Match your profile.
                </p>
                <button class='btn btn-primary btn-lg btn-shadow' onClick={this.goFindJobs}>
                  <FontAwesome.FaSearch/>  Find job offers
                </button>
              </div>
              <div class='col-md-6 py-5'>
                <h2 class='display-4'>Find People</h2>
                <p class='lead'>
                  Create job offers. Only find 100% matches. Verified.
                </p>
                <button class='btn btn-primary btn-lg btn-shadow' onClick={this.goFindPeople}>
                  <FontAwesome.FaSearch/>  Find verified matches
                </button>
              </div>
              <div class='col-md-6 py-5'>
                <h2 class='display-4'>Create badge</h2>
                <p class='lead'>
                  Create badges
                </p>
                <button class='btn btn-primary btn-lg btn-shadow' onClick={this.connectUport}>
                  <FontAwesome.FaTrophy/>  Create badges
                </button>
              </div>
              <div class='col-md-6 py-5'>
                <h2 class='display-4'>Attest badge</h2>
                <p class='lead'>
                  Attest badges
                </p>
                <button class='btn btn-primary btn-lg btn-shadow' onClick={this.connectUport2}>
                  <FontAwesome.FaShareAlt/>  Attest badges
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
