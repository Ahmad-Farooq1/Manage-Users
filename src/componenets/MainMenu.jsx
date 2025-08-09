import React, { useState } from "react";
import SideBar from "./SideBar";
import CentralPart from "./CentralPart";
import ToggleIcon from "./ToggleIcon";
import AddToTable from "./AddToTable";

const MainMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [editingDocument, setEditingDocument] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [documents, setDocuments] = useState([
    {
      id: 1,
      docType: "Full Accounts",
      documentTitle: "Annual Financial Report",
      mainDocument: "notes.pdf",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      filedDate: "2025-01-10",
      dueDate: "2025-12-31",
      frequency: "Annual",
      reminder: "15 days before",
      triggerDate: "2025-12-16",
      repeat: "yearly",
      lastUpdated: "2025-01-10",
      documents: [
        { name: "notes.pdf", size: 5972787 },
        { name: "financial_data.xlsx", size: 2097152 },
      ],
      notes: [],
    },
    {
      id: 2,
      docType: "Dormant Company",
      documentTitle: "Dormant Company Filing",
      mainDocument: "dormant_filing.pdf",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      filedDate: "2025-03-01",
      dueDate: "2026-03-01",
      frequency: "Annual",
      reminder: "30 days before",
      triggerDate: "2026-02-01",
      repeat: "yearly",
      lastUpdated: "2025-03-01",
      documents: [{ name: "dormant_filing.pdf", size: 3145728 }],
      notes: [{ name: "company_notes.txt", size: 1024 }],
    },
  ]);

  const handleToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleAddClick = () => {
    setEditingDocument(null);
    setIsEditing(false);
    setShowAddPanel(true);
  };

  const handleEditClick = (document) => {
    setEditingDocument(document);
    setIsEditing(true);
    setShowAddPanel(true);
  };

  const handleCloseAddPanel = () => {
    setShowAddPanel(false);
    setEditingDocument(null);
    setIsEditing(false);
  };

  const handleSaveDocument = (documentData, isEdit) => {
    if (isEdit) {
      // Update existing document
      setDocuments((prev) =>
        prev.map((doc) =>
          doc.id === documentData.id ? { ...documentData } : doc
        )
      );
    } else {
      // Add new document
      setDocuments((prev) => [...prev, documentData]);
    }
    handleCloseAddPanel();
  };

  return (
    <>
      <div className="relative flex flex-row h-full">
        {showAddPanel && (
          <AddToTable
            onClose={handleCloseAddPanel}
            onSave={handleSaveDocument}
            editingData={editingDocument}
            isEditing={isEditing}
          />
        )}
        {/* {isSidebarOpen && <SideBar />} */}
       <CentralPart
  onAddClick={handleAddClick}
  onEditClick={handleEditClick}
  documents={documents}
  setDocuments={setDocuments}
/>
      </div>
    </>
  );
};

export default MainMenu;