import React from 'react'
 const documents = [
    {
      doctype: "Full Accounts",
      document: "notes.pdf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fileDate: "2025-01-10",
      dueDate: "2025-12-31",
      frequency: "Annual",
      reminder: "15 days before",
      actions: "Edit / Delete",
    },
    {
      doctype: "Dormant Company",
      document: "notes.pdf",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      fileDate: "2025-03-01",
      dueDate: "2026-03-01",
      frequency: "Annual",
      reminder: "30 days before",
      actions: "Edit / Delete",
    },
    {
      doctype: "Full Accounts",
      document: "notes.pdf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fileDate: "2025-01-10",
      dueDate: "2025-12-31",
      frequency: "Annual",
      reminder: "15 days before",
      actions: "Edit / Delete",
    },
    {
      doctype: "Dormant Company",
      document: "notes.pdf",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      fileDate: "2025-03-01",
      dueDate: "2026-03-01",
      frequency: "Annual",
      reminder: "30 days before",
      actions: "Edit / Delete",
    },
    {
      doctype: "Dormant Company",
      document: "notes.pdf",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      fileDate: "2025-03-01",
      dueDate: "2026-03-01",
      frequency: "Annual",
      reminder: "30 days before",
      actions: "Edit / Delete",
    },
   
  ];
const TableFour = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Outer card */}
      <div className="w-full mb-5 side-barbg rounded-lg overflow-hidden flex flex-wrap justify-center">
        <div className="overflow-x-auto w-[98.5%] pt-3">
          <table className="w-full  text-left text-gray-500">
            <thead className="bg-userTable font-heading font-roboto text-xs text-gray-700 ">
              <tr>
                <th className="px-6 py-3 font-normal  rounded-l-lg">Doc. Type</th>
                <th className="px-6 py-3 font-normal ">Document</th>
                <th className="px-6 py-3 w-[36%] font-normal ">Description</th>
                <th className="px-6 py-3 w-[9%] font-normal ">Filed Date</th>
                <th className="px-6 py-3 w-[9%] font-normal ">Due Date</th>
                <th className="px-6 py-3 font-normal ">Frequency</th>
                <th className="px-6 py-3 font-normal ">Reminder</th>
                <th className="px-6 py-3 rounded-tr-lg rounded-br-lg font-normal ">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y table-font-color divide-gray-200 side-barbg text-xs">
              {documents.map((doc, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{doc.doctype}</td>
                  <td className="px-6 py-4">{doc.document}</td>
                  <td className="px-6 py-4">{doc.description}</td>
                  <td className="px-6 py-4">{doc.fileDate}</td>
                  <td className="px-6 py-4">{doc.dueDate}</td>
                  <td className="px-6 py-4">{doc.frequency}</td>
                  <td className="px-6 py-4">{doc.reminder}</td>
                  <td className="px-6 py-4">{doc.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableFour