import DumbButtons from '@/components/Buttons/DumbButtons'
import { api } from '@/config'

const UserManagementTable = ({users}: any) => {
    // ... (Previous code for state and functions)

    // Action handlers
    const handleBlockClick = () => {

        // Implement block logic here, update the status of blockedUsers
    };

    const handleUnblockClick = () => {

        // Implement unblock logic here, update the status of unblockedUsers
    };

    const handleDeleteClick = (username: string) => {
        api.DeleteUser('api/delete-user', username).then((data) => console.log(data))
            .catch(err => console.log(err))
    };

    return <DumbButtons
        handleBlockClick={handleBlockClick}
        handleUnblockClick={handleUnblockClick}
        handleDeleteClick={handleDeleteClick}
    />
};

export default UserManagementTable;
