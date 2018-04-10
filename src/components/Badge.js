import React from 'react'
import { Credentials, SimpleSigner } from 'uport'
import { uport } from '../utilities/uportSetup'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Badge extends React.Component {
  constructor (props) {
    super(props)
    this.attest = this.attest.bind(this)
    this.verify = this.verify.bind(this)
    this.toggle = this.toggle.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = {
      modal: false,
      modalName: '',
      modalInfo: ''
    }
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  getBadge () {
    let badge = this.props.badge
    const js = {
      'Naam': badge.name,
      'Description': badge.description,
      'IPFS hash (Infura)': badge.ipfsHash
    }
    let jsonData = {}
    jsonData[badge.name] = js
    return jsonData
  }

  getCredentials () {
    return new Credentials({
      appName: 'Rabobank',
      address: '2otfT9XykJx5HJEquMhg4WTeLNKkx8ZkjBE',
      network: 'rinkeby',
      signer: SimpleSigner('13b1ed7eb7d0af503dd5f9e292356d58ece0e50221c3ba65ec8ce4c5a3b99c51')
    })
  }

  attest () {
    uport.attestCredentials({
      sub: uport.address,
      claim: this.getBadge(),
      exp: new Date().getTime() + 1 * 24 * 60 * 60 * 1000, // 1 days from now
      uriHandler: (log) => {
        console.log(log)}
    })
  }

  verify () {
    let badge = this.props.badge
    let credentials = this.getCredentials()
    uport.requestCredentials({
    verified: [badge[0]], notifications: true })
      .then((profile) => {
        credentials.lookup(profile.verified[0].iss).then(prof => {
          this.setState({
              modalInfo: prof
          })
          this.toggle()
        })
      })
  }

  render () {
    return (
        <tr>
          <td>
            <img
              width='100px'
              heigth='100px'
              src={'https://ipfs.infura.io/ipfs/' + this.props.badge.ipfsHash}
              alt='ipfs' />
          </td>
          <td>
            {this.props.badge.name}
          </td>
          <td>
            {this.props.badge.description}
          </td>
          <td>
            <Button onClick={this.attest}>
              Get Your Badge
            </Button>
          </td>
          <td>
            <Button onClick={this.verify}>
              Verify Badge
            </Button>
          </td>
        <td>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Verify
          </ModalHeader>
          <ModalBody>
            The Issuer is verified!
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
        </td>
      </tr>
    )
  }
}

export default Badge
