import { useState, useRef } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';
import { FaGoogle} from 'react-icons/fa'; // Import the necessary icons

async function createUser(email, password){
 const response = await fetch('/api/auth/signup',{
    method: 'POST',
    body: JSON.stringify({email, password}),

    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.message || 'Somthing went wrong!');
  }
  return data;
}


function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        router.replace('/users');
      }
    } //else {
      //try {
        //const result = await createUser(enteredEmail, enteredPassword);
        //console.log(result);

        // Use the signIn function for Google within the submitHandler
        //await signIn('google', { redirect: false });
      //} catch (error) {
       // console.log(error);
      //}

     
   // }
  }

  return (
<div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              {isLogin ? 'Login' : 'Sign Up'}
            </h1>
            <form onSubmit={submitHandler} className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email" placeholder="Your Email" ref={emailInputRef}
                />
              </div>
              <div className="flex flex-col items-center mt-5">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password" placeholder="Your Password" ref={passwordInputRef}
                />
              </div>
              <div className="flex flex-col items-center mt-5">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-500 text-gray-100 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  {isLogin ? 'Login' : 'Create Account'}
                </button>
                <button
                  type='button'
                  className="mt-5 text-indigo-500"
                  onClick={switchAuthModeHandler}
                >
                  {isLogin ? 'Create new account' : 'Login with an existing account'}
                </button>
              </div>
            
              

</form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;