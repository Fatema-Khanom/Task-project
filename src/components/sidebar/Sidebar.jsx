
import { Link } from 'react-router-dom';
import { FaHome, FaUsers } from "react-icons/fa";
import { AiFillProduct, AiOutlineProduct } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="h-screen border-r border-gray-400 w-[20%]  text-white fixed flex flex-col justify-between">
      <div className='px-4'>
        <h2 className="pl-4 text-2xl font-bold py-4">Admin Dashboard</h2>
        <ul className="mt-10">
          <li className="">
            <Link
              to="/"
              className="gap-1 flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaHome />
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/users"
              className="gap-1 flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaUsers />
              All Users
            </Link>
          </li>
          <li className="">
            <Link
              to="/products"
              className="gap-1 flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <AiFillProduct />
              Products
            </Link>
          </li>
          <li className="">
            <Link
              to="/add-product"
              className="gap-1 flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <MdAddBox />
              Add Product
            </Link>
          </li>
          <li className="">
            <Link
              to="/my-product"
              className="gap-1 flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <AiOutlineProduct />
              My Product
            </Link>
          </li>
        </ul>
      </div>
      <div className="px-4 mb-4">
        <Link
          to="/logout"
          className="gap-1 flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FiLogOut />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;