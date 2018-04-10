import React from 'react'
import { Table, Badge } from 'reactstrap'
import * as FontAwesome from 'react-icons/lib/fa'

export default class FindPeople extends React.Component {

  render () {
    return (

      <div class='col-md-12 py-5'>
        <button class='btn btn-success btn-lg btn-shadow'>
          <FontAwesome.FaPlus/>  Job offer
        </button>
        <Table size='sm-8'>
          <tbody>
            <tr>
              <td>
                <h3>Office manager</h3>
                <Badge color='success'>
                  3 matches
                </Badge>
              </td>
              <td>
                <button class='btn btn-primary btn-lg btn-shadow'>
                  <FontAwesome.FaInfoCircle/>  Details
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Frontend developer</h3>
                <Badge color='success'>
                  2 matches
                </Badge>
              </td>
              <td>
                <button class='btn btn-primary btn-lg btn-shadow'>
                  <FontAwesome.FaInfoCircle/>  Details
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Barman</h3>
                <Badge color='danger'>
                  no matches yet
                </Badge>
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>

    )
  }
}
