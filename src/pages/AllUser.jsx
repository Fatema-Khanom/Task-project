import { useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_USERS_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading users...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="text-white p-4">
      <h1 className="text-2xl text-center font-bold mb-6">All User</h1>
      <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
        <thead>
          <tr className="text-left bg-gray-700">
            <th className="py-4 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">City</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-600">
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">{user.address.city}</td>
              <td className="py-3 px-4">
                <Link to={`/user-details/${user.id}`}>
                  <button className="px-4 bg-[#05091D]  text-white rounded-full flex items-center gap-2">
                    See More <MdArrowOutward />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
