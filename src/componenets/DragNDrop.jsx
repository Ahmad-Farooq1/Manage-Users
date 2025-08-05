import React, { useRef } from "react";

const DragNDrop = () => {
  const fileInputRef = useRef(null);
  const dropzoneRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.remove("bg-gray-200");

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInputRef.current.files = files;
      console.log("Dropped files:", files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropzoneRef.current.classList.add("bg-gray-200");
  };

  const handleDragLeave = () => {
    dropzoneRef.current.classList.remove("bg-gray-200");
  };

  return (
    <div className="relative flex items-center justify-center pb-5 ">
      <div className="flex items-center justify-center 2xl:w-[96.7%] xl:w-[96.6%] lg:w-[95.5%] md:w-[93.5%] sm:w-[92.5%] w-[92.5%]">
        <label
          htmlFor="dropzone-file"
          ref={dropzoneRef}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragOver}
          onDragLeave={handleDragLeave}
          className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100 transition h-[160px]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="w-[44px] h-[44px] bg-upload flex justify-center rounded-3xl">
              <img src="/upload.svg" alt="" className=" " />
            </div>
            <p className=" font-sans mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="font-sans font-normal font-main">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="font-sans  font-normal text-xs text-gray-500 dark:text-gray-400">
              (MAX. File size: 25 MB)
            </p>
          </div>
          <input
            ref={fileInputRef}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default DragNDrop;
