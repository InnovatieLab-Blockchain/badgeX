// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'
import { Navbar, NavbarBrand, Nav, NavItem, Container, Row, Col } from 'reactstrap'
import * as FontAwesome from 'react-icons/lib/fa'

class AppNavbar extends Component {
 render () {
   return (
     <Navbar color='primary' expand>
             <div class="container d-flex justify-content-between">
       <NavbarBrand href="/"><Row><p class="text-white"><strong><FontAwesome.FaRocket size={24}/> BadgeX</strong></p></Row>

     </NavbarBrand>
       <Nav className='ml-auto' navbar>
         <NavItem>
           {this.props.uport !== null &&
            this.props.uport !== undefined &&
            this.props.uport.avatar
              ? (
              <Container>
                <Row><center>
                  <img
                    width='40px'
                    height='40px'
                    src={this.props.uport.avatar.uri}
                    alt='user-img'
                     class='rounded-circle'/>
                     <p class="d-inline text-white px-2">
                     {this.props.uport.name}
                   </p>
                     </center>
              </Row>
               </Container>
              )
              : null}
         </NavItem>
       </Nav>
     </div>
     </Navbar>


   )
 }
}

function mapStateToProps (state, props) {
 return { uport: state.App.uport }
}
function mapDispatchToProps (dispatch) {
 return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar)