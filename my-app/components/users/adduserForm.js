import { useRef, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter

function AddUserForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isInvalid, setIsInvalid] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredPassword ||
      enteredPassword.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: enteredEmail, password: enteredPassword }),
    });

    if (response.ok) {
      console.log("User added successfully!");
      // Redirect to the /users page
      router.push('/users');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 p-4 bg-gray-100 rounded">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          ref={emailInputRef}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          ref={passwordInputRef}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      {isInvalid && <p>Please enter a valid email and password!</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
