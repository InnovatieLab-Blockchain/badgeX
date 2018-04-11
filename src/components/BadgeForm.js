// Frameworks
import React, {Component } from 'react'
import {uport} from '../utilities/uportSetup'
import ipfs from '../utilities/ipfs';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'
import {
  Button,
  Label,
  Input,
  Table
} from 'reactstrap';
import checkAddressMNID from '../utilities/checkAddressMNID'
import waitForMined from '../utilities/waitForMined'
import CreatedBadgesContract from '../utilities/CreatedBadgesContract'


class BadgeForm extends Component {

  constructor(props) {
    super(props)
    this.createBadge = this
      .createBadge
      .bind(this)
    this.handleNameChange = this
      .handleNameChange
      .bind(this)
    this.handleDescriptionChange = this
      .handleDescriptionChange
      .bind(this)
    this.captureFile = this
      .captureFile
      .bind(this)
    this.addToIPFS = this
      .addToIPFS
      .bind(this)
  }

  handleNameChange(event) {
    this
      .props
      .actions
      .updateNameInput(event.target.value)
  }

  handleDescriptionChange(event) {
    this
      .props
      .actions
      .updateDescriptionInput(event.target.value)
  }

  captureFile(event) {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    let reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => this.convertToBuffer(reader)
  };

  convertToBuffer = async(reader) => {
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax this.setState({buffer});
    this
      .props
      .actions
      .updateBuffer(buffer)
  };

  addToIPFS() {
    ipfs.add(this.props.buffer, (err, ipfsHash) => {
      console.log(ipfsHash[0].hash)
      this
        .props
        .actions
        .updateIPFS(ipfsHash[0].hash)
    })
  }
  // handleSubmit(event) {   alert('A name was submitted: ' + this.state.value);
  // event.preventDefault(); }

  createBadge() {
    let address = checkAddressMNID(uport.address);
    console.log(address);
    const actions = this.props.actions;
    let name = this.props.nameInput;
    let description = this.props.descriptionInput;
    let ipfsHash = this.props.ipfsHash;
    console.log("Address: ", address);
    console.log("Name: ", this.props.nameInput);
    console.log("Description: ", this.props.descriptionInput);
    console.log("ipfsHash: ", this.props.ipfsHash);
    actions.createBadgeREQUEST();
    CreatedBadgesContract.addBadge(address, name, description, ipfsHash, {
      from: address
    }, (error, txHash) => {
      if (error) {
        actions.createBadgeERROR(error)
      }
      waitForMined(address, txHash, {
        blockNumber: null
      }, actions, () => {
        actions.createBadgePENDING()
      }, () => {
        console.log('waitForMined complete')
        actions.createBadgeSUCCESS(txHash)
      })
    })
  }

  render(props) {

    return (
      <div class='light'>
        <div class='container py-5 my-5'>
          <div class='col-md-8 text-left'>
            <h4>Badge</h4>
            <form>
              <div class='mb-3'>
              <Label for='name'>
                  Name
                </Label>
                <Input
                  type='plaintext'
                  class='form-control'
                  name='badgeName'
                  id='badgeName'
                  placeholder='name badge'
                  value={this.props.name}
                  onChange={this.handleNameChange}/>
              </div>
              <div class='mb-3'>
                <Label for='badgeDescription'>
                  Badge description
                </Label>
                <Input
                  type='textarea'
                  name='badgeDescription'
                  id='badgeDescription'
                  placeholder='A short summary of this achievement'
                  value={this.props.description}
                  onChange={this.handleDescriptionChange}/>
              </div>
            </form>
            <div class='mb-3'>
              <Label for='badgeDescription'>
                Badge afbeelding
              </Label>
              <input type='file' onChange={this.captureFile}/>
              <Button color='primary' onClick={this.addToIPFS}>Add to IPFS</Button>

            </div>
            <div>
              <Table bordered>
              <thead >
                <th bgcolor='#428bca'><b class="text-white">Badge image</b></th>
              </thead>
                <tbody>
                  <tr>
                    <td><img src={"https:ipfs.io/ipfs/" + this.props.ipfsHash } style={{width: 150}} /></td>
                    <td><a href={"https:ipfs.io/ipfs/" + this.props.ipfsHash }>link to ipfs</a></td>
                  </tr>
                  <tr>
                    <td>Hash value</td>
                    <td>{this.props.ipfsHash}</td>
                  </tr>
                </tbody>
                </Table>
              </div>



            <Button color='primary' size='lg' onClick={this.createBadge}>Submit</Button>
          </div>
        </div>
      </div>
    )

  }
}

const mapStateToProps = (state, props) => {
  return {uport: state.App.uport, nameInput: state.App.nameInput, descriptionInput: state.App.descriptionInput, buffer: state.App.buffer, ipfsHash: state.App.ipfsHash}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BadgeForm)
