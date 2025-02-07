import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaRegEnvelope, FaGlobe } from 'react-icons/fa'; 

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_USERS_URL}/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div className=" text-white text-center py-12">Loading...</div>;
  }

  return (
    <div className="min-h-screen text-white  ">
      <div className=" mx-auto bg-gray-700 rounded-xl p-8 shadow-2xl px-20">
      

        <div className="bg-[#05091D] p-6 flex items-center px-24 gap-4 rounded-lg mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="flex-1 justify-center mb-8">
          <img 
            src={``} 
            alt="User Avatar" 
            className="w-40 h-40 rounded-full shadow-xl border-4 border-white"
          />
        </div>
          
          <div className="space-y-4">
          <h2 className="text-xl font-semibold  mb-4">Personal Information</h2>
            <p className="flex items-center ">
              <strong className="mr-2">Name:</strong> {user.name}
            </p>
            <p className="flex items-center ">
              <FaRegEnvelope className="mr-2 text-blue-500" />
              <strong className="mr-2">Email:</strong> {user.email}
            </p>
            <p className="flex items-center ">
              <FaPhoneAlt className="mr-2 text-green-500" />
              <strong className="mr-2">Phone:</strong> {user.phone}
            </p>
            <p className="flex items-center ">
              <FaGlobe className="mr-2 text-red-500" />
              <strong className="mr-2">Website:</strong> {user.website}
            </p>
          </div>
        </div>

        <div className="flex gap-6 ">
        <div className="flex-1 h-60 bg-[#05091D] p-6 rounded-lg mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
          <h2 className="text-xl font-semibold  mb-4">Company Information</h2>
          <div className="space-y-4">
            <p className="">
              <strong className="mr-2">Company:</strong> {user.company?.name}
            </p>
            <p className="">
              <strong className="mr-2">Catch Phrase:</strong> {user.company?.catchPhrase}
            </p>
            <p className="">
              <strong className="mr-2">BS:</strong> {user.company?.bs}
            </p>
          </div>
        </div>

        <div className=" flex-1 h-60 bg-[#05091D] p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <h2 className="text-xl font-semibold  mb-4">Address</h2>
          <div className="space-y-4">
            <p className="">
              <strong className="mr-2">Street:</strong> {user.address?.street}
            </p>
            <p className="">
              <strong className="mr-2">Suite:</strong> {user.address?.suite}
            </p>
            <p className="">
              <strong className="mr-2">City:</strong> {user.address?.city}
            </p>
            <p className="">
              <strong className="mr-2">Zipcode:</strong> {user.address?.zipcode}
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
