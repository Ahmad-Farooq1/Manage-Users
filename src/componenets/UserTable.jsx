import React from "react";

const UserTable = () => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Outer card */}
      <div className="w-full max-w-[98.5%] mb-5 bg-white rounded-lg shadow-md overflow-hidden flex flex-wrap justify-center">
        
        <div className="overflow-x-auto  w-[98%] pt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="bg-userTable text-xs text-gray-700 uppercase">
              <tr className="rounded-lg ">
                <th className="px-6 py-3  rounded-l-lg">Name</th>
                <th className="px-6 py-3">Company Name</th>
                <th className="px-6 py-3">Email Address</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3 rounded-tr-lg rounded-br-lg">User Type</th>
              </tr>
            </thead>

            <tbody className="divide-y table-font-color divide-gray-200 bg-white">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
