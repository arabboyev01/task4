import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { api } from '@/config';
import DumbTable from '@/components/ManagmentTable/DumbTble'
import { User } from '@/types'
import Buttons from '@/components/Buttons'
import { token } from '@/config'

const UserManagementTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [usersId, setUsersId] = useState<object | any>([])
    const memoizedToken = useMemo(() => token, []);
    console.log(memoizedToken)

    const fetchUsers = useCallback(async () => {
        try {
            const response = await api.GetUsers('users', memoizedToken);
            setUsers(response);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }, [memoizedToken]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
    };

    const toggleSelectUser = (userId: number) => {
        setUsersId([...usersId, userId])
    };

    return (
        <>
            <DumbTable
                selectAll={selectAll}
                toggleSelectAll={toggleSelectAll}
                users={users}
                toggleSelectUser={toggleSelectUser}/>
            <Buttons usersId={usersId}/>
        </>
    )
};

export default UserManagementTable;
