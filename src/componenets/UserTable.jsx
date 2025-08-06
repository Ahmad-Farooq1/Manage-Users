import React from "react";

const UserTable = () => {
  const users = [
    {
      name: "Silver",
      company: "Laptop",
      email: "Laptop",
      title: "Laptop",
      role: "Laptop",
      userType: "$2999",
    },
    {
      name: "White",
      company: "Laptop PC",
      email: "Laptop PC",
      title: "Laptop PC",
      role: "Laptop PC",
      userType: "$1999",
    },
    {
      name: "White",
      company: "Laptop PC",
      email: "Laptop PC",
      title: "Laptop PC",
      role: "Laptop PC",
      userType: "$1999",
    },
    {
      name: "White",
      company: "Laptop PC",
      email: "Laptop PC",
      title: "Laptop PC",
      role: "Laptop PC",
      userType: "$1999",
    },
    {
      name: "White",
      company: "Laptop PC",
      email: "Laptop PC",
      title: "Laptop PC",
      role: "Laptop PC",
      userType: "$1999",
    },
    {
      name: "White",
      company: "Laptop PC",
      email: "Laptop PC",
      title: "Laptop PC",
      role: "Laptop PC",
      userType: "$1999",
    },
  ];

  return (
    <div className="flex items-center justify-center ">
      {/* Outer card */}
      <div className="w-full mb-5 side-barbg rounded-lg  overflow-hidden flex flex-wrap justify-center">
        <div className="overflow-x-auto w-[98.5%] pt-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="bg-userTable text-xs text-gray-700 uppercase">
              <tr className="rounded-lg ">
                <th className="px-6 py-3 rounded-l-lg">Name</th>
                <th className="px-6 py-3">Company Name</th>
                <th className="px-6 py-3">Email Address</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3 rounded-tr-lg rounded-br-lg">User Type</th>
              </tr>
            </thead>

            <tbody className="divide-y table-font-color divide-gray-200 side-barbg">
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.company}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.title}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">{user.userType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
