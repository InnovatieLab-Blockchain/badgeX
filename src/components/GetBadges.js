// Frameworks
import React, { Component } from 'react'
import { uport } from '../utilities/uportSetup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'
import { Button, Container, Row, Col } from 'reactstrap'
import checkAddressMNID from '../utilities/checkAddressMNID'
import CreatedBadgesContract from '../utilities/CreatedBadgesContract'
import BadgeContract from '../utilities/BadgeContract'
import BadgeList from './BadgeList'

class GetBadges extends Component {

  constructor (props) {
    super(props)
    this.getBadges = this.getBadges.bind(this)
    this.getAllBadges = this.getAllBadges.bind(this)
  }

  getBadgeProperties(adresses) {
    const actions = this.props.actions
    Promise.all(adresses.map(function (addr) {
      return new Promise(function (resolve, reject) {
        BadgeContract(addr).getProperties.call((err, res) => {
          const badge = {
            name: res[0],
            description: res[1],
            ipfsHash: res[2]
          }
          resolve(badge)
        })
      })
    })).then((badges) => {
      actions.updateBadges(badges)
    })
  }

  getBadges () {
    let address = checkAddressMNID(uport.address)
    CreatedBadgesContract.getBadgesForIdentity.call(address, (error, result) => {
      this.getBadgeProperties(result)
    })
  }

  getAllBadges () {
    CreatedBadgesContract.getAllBadges.call((error, result) => {
      this.getBadgeProperties(result)
    })
  }

  renderBadges () {
    return (
      <BadgeList badges={this.props.badges} />
    )
  }

  render (props) {
    return (
      <Container>
        <Row>
          <Col>
          <Button color='primary' onClick={this.getBadges}>
            Get My Badges
          </Button>
          </Col>
          <Col>
          <Button color='primary' onClick={this.getAllBadges}>
            Get All Published Badges
          </Button>
          </Col>
        </Row>
        {this.props.badges ? this.renderBadges() : null}
      </Container>

    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    badges: state.App.badges
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetBadges)
