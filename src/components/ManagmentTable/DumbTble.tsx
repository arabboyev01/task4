import React from 'react'
import { TableContainer, TableHeader , TableCell} from '@/components/ManagmentTable/styles.table'
import { tableInterfaces } from '@/types'

const DumbTable: React.FC<tableInterfaces> = ({selectAll, toggleSelectAll, users, toggleSelectUser}) => (
     <TableContainer>
      <TableHeader>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
        />
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Last Login</TableCell>
        <TableCell>Registration Time</TableCell>
        <TableCell>Status</TableCell>
      </TableHeader>
      {users.map((user) => (
        <div key={user.id}>
          <TableCell>
            <input type="checkbox" checked={user.selected} onChange={() => toggleSelectUser(user.id)} />
          </TableCell>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.firstname}</TableCell>
          <TableCell>{user.lastname}</TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.registration_time}</TableCell>
          <TableCell>{user.status}</TableCell>
        </div>
      ))}
    </TableContainer>
)

export default DumbTable