import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import classes from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status } = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <div className="border-b border-gray-200 py-6 px-8">
      <div className="flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Link href="/">
            <div className={classes.logo}>
              <Image src="/img/logo.png" width={200} height={450} alt="Logo" />
            </div>
          </Link>
        </div>

        <nav>
          <ul className="flex items-center space-x-8">
            <div className="flex-1  md:w-[70%] relative">
              <input
                className="border-gray-200 border p-2 px-6 rounded-lg "
                type="text"
                placeholder="Rechercher..."
              />

              <BsSearch
                className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer"
                size={20}
              />
            </div>

            {!session && status === 'unauthenticated' && (
              <li >
                <Link href="/auth">Login</Link>
              </li>
            )}

            {session && (
              <>
                <li>
                  <Link href="/users">Users</Link>
                </li>
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MainNavigation;
