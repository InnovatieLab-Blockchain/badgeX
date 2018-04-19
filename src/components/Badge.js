import React from 'react'
import { Credentials, SimpleSigner } from 'uport'
import { uport } from '../utilities/uportSetup'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import resolve from 'did-resolver'
import registerResolver from 'uport-did-resolver'

registerResolver()

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
      modalInfo: '',
      modalImg: '',
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
      appName: 'Innovatielab Blockchain',
      address: '2osVEge5GkpT3tJWdzr2TpfwdjsEo27MEoc',
      network: 'rinkeby',
      signer: SimpleSigner('497369198844fe973c9cadc8bdc5b0634fe01cd3ffe69944884cb6506c7f7be4')
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

  verify = async () => {
    let badge = this.props.badge
    let credentials = this.getCredentials()
    const doc = await resolve('did:uport:' + credentials.settings.address + '/')
    console.log(doc)
    
    uport.requestCredentials({
    verified: [badge.name], notifications: true })
      .then((profile) => {
        credentials.lookup(profile.verified[0].iss).then(prof => {
          console.log(prof)
          this.setState({
            modalInfo: prof.name,
            modalImg: prof.image.contentUrl
          })
          this.toggle()
        })
      }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <tr>
        <td>
          <img
            width='150px'
            heigth='150px'
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
              <p>
              The Issuer of this badge: <b>{this.state.modalInfo}</b>, is verified!<br/><br/>
              <img src={'https://ipfs.infura.io' + this.state.modalImg} width='150px'/>
              </p>
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
