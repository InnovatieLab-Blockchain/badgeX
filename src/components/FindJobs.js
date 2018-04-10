import React from 'react'
import {Table, Badge } from 'reactstrap'
import * as FontAwesome from 'react-icons/lib/fa'

export default class FindJobs extends React.Component {

  render () {
    return (
      <div class='ht-tm-wrapper'>
        <div class='page-header' className='bg-primary text-white rounded'>
          <h1 class='display-1'>BadgeX<FontAwesome.FaRocket size={70}/></h1>
          <h3>Overview badges/machtes</h3>
          <br />
        </div>
        <div class='container ht-tm-container'>
          <div class='row'>
            <div class='col-md-12 py-5'>
              <h2 class='display-4'><center> Badge & match </center></h2>
              <h3>The following matches are made with your badges</h3>
              <Table size='sm-8'>
                <tbody>
                  <tr>
                    <td>
                      <b>Job description</b>
                    </td>
                    <td>
                      <b>Employer</b>
                    </td>
                    <td>
                      <b>Details</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Badge color='success'>
                        New
                      </Badge> Frontend developer
                    </td>
                    <td>
                      BadgeX
                    </td>
                    <td>
                      <button class='btn btn-primary btn-lg btn-shadow'>
                        <FontAwesome.FaInfo/>  Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      JEDI
                    </td>
                    <td>
                      Blockchaingers
                    </td>
                    <td>
                      <button class='btn btn-primary btn-lg btn-shadow'>
                        <FontAwesome.FaInfo/>  Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Barman
                    </td>
                    <td>
                      de Wolkenfabriek
                    </td>
                    <td>
                      <button class='btn btn-primary btn-lg btn-shadow'>
                        <FontAwesome.FaInfo/>  Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h3>Your (verified) badges</h3>
              <Table size='sm-8'>
                <tbody>
                  <tr>
                    <td>
                      <b>Badge</b>
                    </td>
                    <td>
                      <b>Description</b>
                    </td>
                    <td>
                      <b>Badge name</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={"/target-10.png"}
                        height='75'
                        width='75'
                        alt='a badge' />
                    </td>
                    <td>
                      Naam
                    </td>
                    <td>
                      Description
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={"target-10.png"}
                        height='75'
                        width='75'
                        alt='a badge' />
                    </td>
                    <td>
                      Naam
                    </td>
                    <td>
                      Description
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={"target-10.png"}
                        height='75'
                        width='75'
                        alt='a badge' />
                    </td>
                    <td>
                      Naam
                    </td>
                    <td>
                      Description
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
