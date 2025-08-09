import React from "react";

const TableTwo = ({ onEditClick, documents, setDocuments }) => {
  const handleEditDocument = (document) => {
    onEditClick(document);
  };

  const handleDeleteDocument = (documentId) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      setDocuments((prev) => {
        const updatedDocuments = prev.filter((doc) => doc.id !== documentId);
        return updatedDocuments;
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="w-full mb-5 side-barbg rounded-lg overflow-hidden flex flex-wrap justify-center">
          <div className="overflow-x-auto w-[98.5%] pt-3">
            <table className="w-full text-left text-gray-500 min-w-[600px]">
              <thead className="bg-userTable font-heading font-roboto text-xs text-gray-700">
                <tr>
                  <th className="px-3 py-3 font-normal rounded-l-lg w-[12%] min-w-[80px]">
                    <div className="flex items-center">
                      Doc. Type
                      <div className="flex items-center gap-1 ml-1 flex-shrink-0">
                        <img
                          src="/filter.svg"
                          alt="Filter"
                          className="w-3 h-3 cursor-pointer"
                        />
                        <img
                          src="/dblArrows.svg"
                          alt="Sort"
                          className="w-3 h-3 cursor-pointer"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="px-3 py-3 font-normal min-w-[100px]">
                    <div className="flex items-center">Document</div>
                  </th>
                  <th className="px-3 py-3 w-[36%] font-normal min-w-[200px]">
                    <div className="flex items-center">Description</div>
                  </th>
                  <th className="px-3 py-3 font-normal w-[11%] min-w-[100px]">
                    <div className="flex items-center">
                      Filed Date
                      <div className="flex items-center gap-1 ml-1 flex-shrink-0">
                        <img
                          src="/filter.svg"
                          alt="Filter"
                          className="w-3 h-3 cursor-pointer"
                        />
                        <img
                          src="/dblArrows.svg"
                          alt="Sort"
                          className="w-3 h-3 cursor-pointer"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="px-3 py-3 font-normal w-[11%] min-w-[100px]">
                    <div className="flex items-center">
                      Due Date
                      <div className="flex items-center gap-1 ml-1 flex-shrink-0">
                        <img
                          src="/filter.svg"
                          alt="Filter"
                          className="w-3 h-3 cursor-pointer"
                        />
                        <img
                          src="/dblArrows.svg"
                          alt="Sort"
                          className="w-3 h-3 cursor-pointer"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="px-3 py-3 font-normal w-[11%] min-w-[100px]">
                    <div className="flex items-center">
                      Frequency
                      <div className="flex items-center gap-1 ml-1 flex-shrink-0">
                        <img
                          src="/filter.svg"
                          alt="Filter"
                          className="w-3 h-3 cursor-pointer"
                        />
                        <img
                          src="/dblArrows.svg"
                          alt="Sort"
                          className="w-3 h-3 cursor-pointer"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="px-3 py-3 font-normal w-[11%] min-w-[100px]">
                    <div className="flex items-center">
                      Reminder
                      <div className="flex items-center gap-1 ml-1 flex-shrink-0">
                        <img
                          src="/filter.svg"
                          alt="Filter"
                          className="w-3 h-3 cursor-pointer"
                        />
                        <img
                          src="/dblArrows.svg"
                          alt="Sort"
                          className="w-3 h-3 cursor-pointer"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="px-3 py-3 rounded-tr-lg rounded-br-lg font-normal min-w-[80px]">
                    <div className="flex items-center">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y table-font-color divide-gray-200 side-barbg text-xs">
                {documents.map((doc, index) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-3 py-4">{doc.docType}</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center">
                        <img
                          src="/doc.svg"
                          alt="Document"
                          className="w-4 h-4 mr-2"
                        />
                        <span className="mr-2">{doc.mainDocument}</span>
                        {doc.documents.length > 1 && (
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                            +{doc.documents.length - 1} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div
                        className="max-w-[200px] truncate"
                        title={doc.description}
                      >
                        {doc.description}
                      </div>
                    </td>
                    <td className="px-3 py-4">{doc.filedDate}</td>
                    <td className="px-3 py-4">{doc.dueDate}</td>
                    <td className="px-3 py-4">{doc.frequency}</td>
                    <td className="px-3 py-4">{doc.reminder}</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center space-x-2">
                        <img
                          src="/edit2.svg"
                          alt="Edit"
                          className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity duration-200"
                          onClick={() => handleEditDocument(doc)}
                        />
                        <img
                          src="/delete2.svg"
                          alt="Delete"
                          className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity duration-200"
                          onClick={() => handleDeleteDocument(doc.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;