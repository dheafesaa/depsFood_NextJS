import React from 'react';

const Popup = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-bold">Add New Recipe</h3>
                  <button
                    className="p-1 ml-auto border-0 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-full">
                  <div className="flex flex-wrap">
                    <div className="px-2 flex flex-col w-full md:w-1/2">
                      <label className="mb-1">Code Recipe :</label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="px-2 flex flex-col w-full md:w-1/2">
                      <label className="mb-1">Recipe Name :</label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="px-2 flex flex-col w-full md:w-1/2">
                      <label className="mb-1">Date :</label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="px-2 flex flex-col w-full md:w-1/2">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="upload-image"
                        // onChange={handleImageUpload}
                      />
                      <label
                        htmlFor="upload-image"
                        className="block w-full px-3 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-500"
                      >
                        Upload Image
                      </label>

                      {/* <label className="mb-1">Image :</label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                      /> */}
                    </div>
                    <div className="px-2 flex flex-col w-full">
                      <label className="mb-1">Description :</label>
                      <textarea
                        className="w-full h-32 p-2 placeholder-gray-400 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-red-500"
                        placeholder="Enter your text here..."
                      />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Popup;
