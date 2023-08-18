import DumbButtons from '@/components/Buttons/DumbButtons'
import { api, token } from '@/config'

const UserManagementTable = ({usersId}: object | any) => {
    const handleBlockClick = () => {
        usersId.map((id: number) => {
            api.ChangeStatus('api/block', id, token).then((data) => {
                console.log(data)
                window.location.reload();
            })
                .catch(err => console.log(err));
        })
    };

    const handleUnblockClick = () => {
        usersId.map((id: number) => {
            api.ChangeStatus('api/unblock', id, token).then((data) => {
                console.log(data)
                window.location.reload();
            })
                .catch((err) => console.log(err));
        })
    };

    const handleDeleteClick = () => {
        usersId.map((id: number) => {
            api.DeleteUser('api/delete-user', id, token).then((data) => {
                console.log(data)
                window.location.reload();
            })
                .catch(err => console.log(err))
        })
    };

    return <DumbButtons
        handleBlockClick={handleBlockClick}
        handleUnblockClick={handleUnblockClick}
        handleDeleteClick={handleDeleteClick}
    />
};

export default UserManagementTable;
