import React, { useState, useEffect, useCallback } from 'react';
import { api } from '@/config';
import DumbTable from '@/components/ManagmentTable/DumbTble'
import { User } from '@/types'


const UserManagementTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      const token = typeof window !== 'undefined' ? window.localStorage.getItem('AuthToken') : null;
      const response = await api.GetUsers('users', token);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const toggleSelectUser = (userId: number) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, selected: !user.selected };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return <DumbTable selectAll={selectAll} toggleSelectAll={toggleSelectAll} users={users} toggleSelectUser={toggleSelectUser}/>
};

export default UserManagementTable;
