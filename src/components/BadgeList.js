import React from 'react'
import { Table } from 'reactstrap'
import Badge from './Badge'

const BadgeList = (props) => {
  const badges = props.badges
  const listItems = badges.map((badge) => <Badge badge={badge} />
  )
  return (
    <Table>
      <thead>
        <tr>
          <th>
            Badge
          </th>
          <th>
            Name
          </th>
          <th>
            Description
          </th>
          <th>
          </th>
          <th>
          </th>
        </tr>
      </thead>
      <tbody>
        {listItems}
      </tbody>
    </Table>
  )
}

export default BadgeList
