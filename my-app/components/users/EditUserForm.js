import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function EditUserForm({ user, onUpdate }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('User object:', user);

    if (user) {
      setEmail(user.email || '');
      setPassword(user.password ||'');
    } else {
      console.error('Invalid user object:', user);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('User object in handleSubmit:', user);

    if (!user || !user._id) {
      console.error('Invalid user object in handleSubmit');
      return;
    }

    try {
      const response = await fetch(`/api/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send plain password
      });

      if (response.ok) {
        console.log('User updated successfully!');
        onUpdate();

        // Redirect to /users after successful update
        router.replace('/users');
      } else {
        console.error('Error updating user:', response.statusText);
        console.log('Full response:', await response.json());
      }
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 p-4 bg-gray-100 rounded">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter new email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        Update User
      </button>
    </form>
  );
}

export default EditUserForm;
