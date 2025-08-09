import React, { useState, useEffect } from "react";
import DragNDrop from "./DragNDrop"; // Import your existing component

const AddToTable = ({
  onClose,
  onSave,
  editingData = null,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState({
    docType: "",
    documentTitle: "",
    description: "",
    filedDate: "",
    dueDate: "",
    frequency: "",
    reminder: "",
    triggerDate: "",
    repeat: "",
    lastUpdated: "",
  });

  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [uploadedNotes, setUploadedNotes] = useState([]);
  const [errors, setErrors] = useState({});

  // Populate form when editing
  useEffect(() => {
    if (isEditing && editingData) {
      setFormData({
        docType: editingData.docType || "",
        documentTitle: editingData.documentTitle || "",
        description: editingData.description || "",
        filedDate: editingData.filedDate || "",
        dueDate: editingData.dueDate || "",
        frequency: editingData.frequency || "",
        reminder: editingData.reminder || "",
        triggerDate: editingData.triggerDate || "",
        repeat: editingData.repeat || "",
        lastUpdated: editingData.lastUpdated || "",
      });
      setUploadedDocuments(editingData.documents || []);
      setUploadedNotes(editingData.notes || []);
    }
  }, [isEditing, editingData]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleDocumentSelect = (files) => {
    setUploadedDocuments(files);
    if (errors.documents) {
      setErrors((prev) => ({
        ...prev,
        documents: "",
      }));
    }
  };

  const handleNoteSelect = (files) => {
    setUploadedNotes(files);
  };

  const handleDocumentRemove = (files, removedIndex) => {
    setUploadedDocuments(files);
  };

  const handleNoteRemove = (files, removedIndex) => {
    setUploadedNotes(files);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.docType.trim()) {
      newErrors.docType = "Document type is required";
    }
    if (!formData.documentTitle.trim()) {
      newErrors.documentTitle = "Document title is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.filedDate) {
      newErrors.filedDate = "Filed date is required";
    }
    if (!formData.dueDate) {
      newErrors.dueDate = "Due date is required";
    }
    if (!formData.frequency.trim()) {
      newErrors.frequency = "Frequency is required";
    }
    if (!formData.reminder.trim()) {
      newErrors.reminder = "Reminder is required";
    }
    if (uploadedDocuments.length === 0) {
      newErrors.documents = "At least one document is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const documentData = {
      id: isEditing ? editingData.id : Date.now(), // Use existing ID or create new one
      docType: formData.docType,
      documentTitle: formData.documentTitle,
      description: formData.description,
      filedDate: formData.filedDate,
      dueDate: formData.dueDate,
      frequency: formData.frequency,
      reminder: formData.reminder,
      triggerDate: formData.triggerDate,
      repeat: formData.repeat,
      lastUpdated: formData.lastUpdated,
      documents: uploadedDocuments,
      notes: uploadedNotes,
      // For table display - show only first document
      mainDocument: uploadedDocuments[0]?.name || "No document",
    };

    onSave(documentData, isEditing);
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] z-[99999]">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div
        className="absolute right-0 top-0 h-full w-[100%] sm:w-[46.5%] side-barbg shadow-lg transform translate-x-0 transition-transform duration-300 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-4 pt-4 pb-2">
          <div className="font-roboto text-sm font-semibold text-gray-800">
            {isEditing ? "Edit" : "Add"}
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          {/* Doc Type */}
          <div>
            <label className="block mb-1 text-[13px] w-[46%] font-normal font-roboto text-gray-700">
              Doc. Type
            </label>
            <div className="relative w-[46%]">
              <select
                value={formData.docType}
                onChange={(e) => handleInputChange("docType", e.target.value)}
                className={`border ${
                  errors.docType ? "border-red-300" : "border-gray-300"
                } w-full font-sans text-gray-500 text-sm rounded-lg block p-2.5 pr-10`}
                style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              >
                <option value="">Select doc. type</option>
                <option value="Full Accounts">Full Accounts</option>
                <option value="Dormant Company">Dormant Company</option>
                <option value="Annual Return">Annual Return</option>
                <option value="Tax Return">Tax Return</option>
              </select>
              <img
                src="/arrowdown.svg"
                alt="Dropdown arrow"
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 w-3 h-2"
              />
            </div>

            {errors.docType && (
              <p className="text-red-500 text-xs mt-1">{errors.docType}</p>
            )}
          </div>

          {/* Add Document Section */}
          <div>
            <div className="text-sm font-medium font-roboto text-gray-800 mb-3">
              Add Document
            </div>

            {/* Title of Document */}
            <div className="mb-3">
              <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
                Title of Document
              </label>
              <input
                type="text"
                value={formData.documentTitle}
                onChange={(e) =>
                  handleInputChange("documentTitle", e.target.value)
                }
                placeholder="Enter title of document"
                className={`border ${
                  errors.documentTitle ? "border-red-300" : "border-gray-300"
                } font-sans text-gray-500 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.documentTitle && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.documentTitle}
                </p>
              )}
            </div>

            {/* Upload Document */}
            <div className="mb-3">
              <label className="block mb-2 text-[13px] font-normal font-roboto text-gray-700">
                Upload
              </label>
              <DragNDrop
                onFilesAdded={handleDocumentSelect}
                uploadedFiles={uploadedDocuments}
                onFileRemove={handleDocumentRemove}
                type="document"
              />
              {errors.documents && (
                <p className="text-red-500 text-xs mt-1">{errors.documents}</p>
              )}
            </div>
          </div>

          {/* Add Note Section */}
          <div>
            <div className="text-sm font-medium font-roboto text-gray-800 mb-3">
              Add Note
            </div>

            {/* Upload Note */}
            <div className="mb-3">
              <label className="block mb-2 text-[13px] font-normal font-roboto text-gray-700">
                Upload Note
              </label>
              <DragNDrop
                onFilesAdded={handleNoteSelect}
                uploadedFiles={uploadedNotes}
                onFileRemove={handleNoteRemove}
                type="note"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className={`border ${
                errors.description ? "border-red-300" : "border-gray-300"
              } font-sans text-gray-700 text-sm rounded-lg block w-full p-2.5 h-20 resize-none`}
              placeholder="Enter description"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          {/* Date Fields Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Filed Date */}
            <div>
              <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
                Filed Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.filedDate}
                  onChange={(e) =>
                    handleInputChange("filedDate", e.target.value)
                  }
                  className={`border ${
                    errors.filedDate ? "border-red-300" : "border-gray-300"
                  } font-sans text-gray-500 text-sm rounded-lg block w-full p-2.5 pr-10`}
                />
                <svg
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {errors.filedDate && (
                <p className="text-red-500 text-xs mt-1">{errors.filedDate}</p>
              )}
            </div>

            {/* Due Date */}
            <div>
              <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
                Due Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => handleInputChange("dueDate", e.target.value)}
                  className={`border ${
                    errors.dueDate ? "border-red-300" : "border-gray-300"
                  } font-sans text-gray-500 text-sm rounded-lg block w-full p-2.5 pr-10`}
                />
                <svg
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {errors.dueDate && (
                <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
              )}
            </div>
          </div>

          {/* Frequency and Reminder Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Frequency */}
            <div>
              <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
                Frequency
              </label>
              <input
                type="text"
                value={formData.frequency}
                onChange={(e) => handleInputChange("frequency", e.target.value)}
                placeholder="Enter frequency"
                className={`border ${
                  errors.frequency ? "border-red-300" : "border-gray-300"
                } font-sans text-gray-500 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.frequency && (
                <p className="text-red-500 text-xs mt-1">{errors.frequency}</p>
              )}
            </div>

            {/* Reminder */}
            <div>
              <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
                Reminder
              </label>
              <input
                type="text"
                value={formData.reminder}
                onChange={(e) => handleInputChange("reminder", e.target.value)}
                placeholder="Enter reminder"
                className={`border ${
                  errors.reminder ? "border-red-300" : "border-gray-300"
                } font-sans text-gray-500 text-sm rounded-lg block w-full p-2.5`}
              />
              {errors.reminder && (
                <p className="text-red-500 text-xs mt-1">{errors.reminder}</p>
              )}
            </div>
          </div>

          {/* Trigger Date and Repeat Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Trigger Date */}
            <div>
              <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
                Trigger Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.triggerDate}
                  onChange={(e) =>
                    handleInputChange("triggerDate", e.target.value)
                  }
                  className="border border-gray-300 font-sans text-gray-500 text-sm rounded-lg block w-full p-2.5 pr-10"
                />
                <svg
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Repeat */}
            <div>
              <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
                Repeat
              </label>
              <div className="relative">
                <select
                  value={formData.repeat}
                  onChange={(e) => handleInputChange("repeat", e.target.value)}
                  className="border border-gray-300 font-sans text-gray-500 text-sm rounded-lg block w-full p-2.5 pr-10"
                  style={{
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="">Select</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
                <img
                  src="/arrowdown.svg"
                  alt="Dropdown arrow"
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 w-3 h-2"
                />
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div>
            <label className="block mb-1 text-[13px] font-normal font-roboto text-gray-700">
              Last Updated
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.lastUpdated}
                onChange={(e) =>
                  handleInputChange("lastUpdated", e.target.value)
                }
                className="border border-gray-300 font-sans text-gray-500 text-sm rounded-lg block w-full p-2.5 pr-10"
              />
              <svg
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4 mt-6">
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {isEditing ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToTable;
