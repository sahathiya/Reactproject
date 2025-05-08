import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/api";

function UsersList() {
  const [userlist, setUserList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userdata = async () => {
      const res = await api.get("/admin/all");
      console.log("userdata", res.data);
      setUserList(res.data.users);
    };
    userdata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Users List
        </h1>

        {/* Table Wrapper */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="px-4 py-2 text-sm font-medium">Id</th>
                <th className="px-4 py-2 text-sm font-medium">Username</th>
                <th className="px-4 py-2 text-sm font-medium">Email</th>
                <th className="px-4 py-2 text-sm font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {userlist &&
                userlist.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {user._id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {user.username}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        onClick={() => navigate(`/usersdetailes/${user._id}`)}
                        className="bg-blue-950 text-white px-4 py-2 rounded-md focus:outline-none"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
