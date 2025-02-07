// filepath: /c:/projects/dashboard-task/src/pages/AllUser.jsx
import React, { useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_USERS_URL);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleShowDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className='text-white'>
      <h1 className="text-2xl text-center font-bold mb-4">All Users</h1>
      <table className="min-w-full bg-gray-800 rounded-lg">
        <thead>
          <tr className='text-left '>  
            <th className="py-5 px-4 border-b border-gray-700">Name</th>
            <th className="py-2 px-4 border-b border-gray-700">Email</th>
            <th className="py-2 px-4 border-b border-gray-700">City</th>
            <th className="py-2 px-4 border-b border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b border-gray-700">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-700">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-700">{user.address.city}</td>
              <td className="py-2 px-4 border-b border-gray-700">
                <Link to={`/user-details/${user.id}`} className="flex items-center gap-1">
                <button
                  onClick={() => handleShowDetails(user)}
                  className="px-4 bg-[#05091D] gap-1  flex items-center  text-white rounded-full "
                >
                  See More <MdArrowOutward />
                </button>

                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-bold mb-2">User Details</h2>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>Website:</strong> {selectedUser.website}</p>
          <p><strong>Company:</strong> {selectedUser.company.name}</p>
          <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</p>
        </div>
      )}
    </div>
  );
}

export default AllUser;