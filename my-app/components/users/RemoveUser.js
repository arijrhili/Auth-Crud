import { HiOutlineTrash } from 'react-icons/hi';

function RemoveUser({ userId, setUsers, users }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/users?userId=${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Update the state to reflect the new list of users after deletion
        setUsers(users.filter(user => user._id !== userId));
      } else {
        // Handle error, log or display a message
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <button className="text-red-400" onClick={handleDelete}>
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveUser;
