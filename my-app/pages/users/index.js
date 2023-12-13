// pages/users/index.js
import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import RemoveUser from '@/components/users/RemoveUser';
import { HiPencilAlt } from 'react-icons/hi';

export default function Home({ session }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // Adjust the page size as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users?search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&pageSize=${pageSize}`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [search, sortBy, sortOrder, page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 border border-gray-300 my-8 rounded-md shadow-md bg-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Users Manager</h1>
      <div className="flex items-center justify-between mb-4">
      <Link href="/users/adduser" className="text-blue-500 hover:underline">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Add User
          </button>
        </Link>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Sort by</option>
            <option value="email">Email</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user?._id} className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-blue-700">{user?.email}</span>
              <div className="flex gap-2">
                <RemoveUser userId={user?._id} setUsers={setUsers} users={users} />
                <Link href={`/users/edituser/${user?._id}`} className="text-blue-500 hover:underline">
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-4">
        <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1} className="p-2 mx-1 bg-gray-200" >
          Previous
        </button>
        <span className="mx-2">Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)} className="p-2 mx-1 bg-gray-200">
          Next
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
