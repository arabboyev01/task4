import React from 'react'
import { TableContainer, TableHeader, TableCell, Active } from '@/components/ManagmentTable/styles.table'
import { tableInterfaces } from '@/types'
import { formattedDate } from '@/components/ManagmentTable/TIme'

const DumbTable: React.FC<tableInterfaces> = ({selectAll, toggleSelectAll, users, toggleSelectUser}) => (
    <TableContainer>
        <TableHeader>
            <TableCell>
              <input type="checkbox" checked={selectAll} onChange={toggleSelectAll}/>
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell>Lastname</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Registration Time</TableCell>
            <TableCell>Status</TableCell>
        </TableHeader>
            {users?.map((user) => (
                <TableHeader key={user.id}>
                    <TableCell>
                        <input type="checkbox" checked={user.selected} onChange={() => toggleSelectUser(user.id)}/>
                    </TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.firstname}</TableCell>
                    <TableCell>{user.lastname}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{formattedDate(user.registration_time)}</TableCell>
                    <Active>{user.status}</Active>
                </TableHeader>
            ))}
    </TableContainer>
)

export default DumbTable