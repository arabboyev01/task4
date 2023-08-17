import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { api } from '@/config';
import DumbTable from '@/components/ManagmentTable/DumbTble'
import { User } from '@/types'
import Buttons from '@/components/Buttons'
import { token } from '@/config'

const UserManagementTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectAll, setSelectAll] = useState(false);
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
        console.log('Effect is running');
        fetchUsers();
    }, [fetchUsers]);

    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
    };

    const toggleSelectUser = (userId: number) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return {...user, selected: !user.selected};
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    return (
        <>
            <DumbTable
                selectAll={selectAll}
                toggleSelectAll={toggleSelectAll}
                users={users}
                toggleSelectUser={toggleSelectUser}/>
            <Buttons users={users}/>
        </>
    )
};

export default UserManagementTable;
