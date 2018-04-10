// Frameworks
import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'
import { Button, Container, Row, Col } from 'reactstrap'

const mnid = require('mnid')

class ProfilePage extends Component {

  constructor (props) {
    super(props)
    this.createProfile = this.createProfile.bind(this)
  }


  // ##Create profile for job seeker
  // URL: createprofile/
  // TYPE: POST

  // KEYS: 
  // address, (uportid address)
  // name, (uportid name)
  // country, (uportid country)
  // network, (uportid network)
  // phone_number, (uportid phone#)
  // public_key, (uportid pub key, can be " ")
  createProfile () {
    let credentials = this.props.credentials
    let profile = {
      'address': credentials.address,
      'name': credentials.name,
      'country': credentials.country,
      'network': mnid.decode(credentials.address).network,
      'phone_number': credentials.phone,
      'public_key': credentials.publicKey
    }
    console.log(profile)
    fetch('http://188.166.97.167:8000/createprofile/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({profile})
    }).then(response => {
      console.log(response.json)
    })
  }

  getProfile () {
    let credentials = this.props.credentials
    fetch('http://188.166.97.167:8000/getprofile/' + credentials.address, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => {
      console.log(response.json)
    })
  }

  // ##Add badge to job seeker's profile
  // URL: addprofilebadge/
  // TYPE: POST
  
  // KEYS: 
  // address, (uportid address)
  // name, (badge name)
  // description, (badge description)
  // image_url, (badge ipfs image url)

  addBadge () {
    let credentials = this.props.credentials
    let profile = {
      'address': credentials.address,
      'name': credentials.name,
      'country': credentials.country,
      'network': mnid.decode(credentials.address).network,
      'phone_number': credentials.phone,
      'public_key': credentials.publicKey
    }
    console.log(profile)
    fetch('http://51.15.79.108/createprofile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({profile})
    }).then(response => {
      console.log(response.json)
    })
  }

  render (props) {
    return (
      <Container>
        <Row>
          <Col xs='6' sm='4'>
          <Button onClick={this.createProfile}>
            Create Profile
          </Button>
          </Col>
          <Col xs='6' sm='4'> Iets anders
          </Col>
          <Col sm='4'>
          <Button onClick={this.props.actions.createProfileComplete}>
            Next
          </Button>
          </Col>
        </Row>
      </Container>

    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    credentials: state.App.credentials
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
