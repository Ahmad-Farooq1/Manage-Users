import React, { useRef, useState } from "react";

const DragNDrop = ({ onFilesAdded, uploadedFiles = [], onFileRemove, type = "document" }) => {
  const fileInputRef = useRef(null);
  const dropzoneRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.remove("bg-gray-200");

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      // Combine with existing files
      const allFiles = [...uploadedFiles, ...files];
      onFilesAdded(allFiles);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.add("bg-gray-200");
  };

  const handleDragLeave = () => {
    dropzoneRef.current.classList.remove("bg-gray-200");
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    // Combine with existing files
    const allFiles = [...uploadedFiles, ...files];
    onFilesAdded(allFiles);
  };

  const handleFileRemove = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    onFileRemove(newFiles, index);
  };

  return (
    <div className="relative">
      {/* Drag and Drop Area */}
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={`dropzone-file-${type}`}
          ref={dropzoneRef}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragOver}
          onDragLeave={handleDragLeave}
          className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition h-[160px]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="w-[44px] h-[44px] bg-upload flex justify-center items-center rounded-3xl mb-3">
              <img src="/upload.svg" alt="upload" className="w-5 h-5" />
            </div>
            <p className="mb-2 text-sm text-gray-500">
              <span className="text-blue-600 font-medium">Click to Upload</span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">(Max. file size: 25 MB)</p>
          </div>
          <input
            ref={fileInputRef}
            id={`dropzone-file-${type}`}
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
        </label>
      </div>

      {/* File Added Section */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <div className="text-[13px] font-normal font-roboto text-gray-700 mb-2">File added</div>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
  <div
    key={index}
    className="flex items-center justify-start  "
  >
    {/* Left: Document icon and filename */}
    <div className="flex items-center gap-2 bg-white  p-1.5 rounded-lg">
      <svg
        className="w-5 h-5 text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-sm text-gray-700">{file.name}</span>
      <span className="text-sm text-gray-400">•</span>
      <span className="text-sm text-gray-600">
        {(file.size / (1024 * 1024)).toFixed(1)}MB
      </span>
    </div>

    {/* Right: Delete button */}
    <button
      onClick={() => handleFileRemove(index)}
      className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
    >
      <img src="/trash.svg" alt="delete" className="w-5 h-5" />
    </button>
  </div>
))}

          </div>
        </div>
      )}
    </div>
  );
};

export default DragNDrop;