import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Pages = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Todo Card */}
      <div
        onClick={() => setShowModal(true)}
        className="border-2 border-gray-300 rounded-lg p-4 w-[80%] flex justify-between items-center mt-2 bg-gray-100 cursor-pointer"
      >
        <p className="truncate min-w-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, distinctio quia molestias animi nostrum, eos nulla
          blanditiis eveniet doloremque neque, corporis hic aperiam mollitia!
          Blanditiis officiis ipsa repellendus accusantium quos.
          Voluptates aperiam quisquam, asperiores molestias sed ipsum delectus
          a ab suscipit deleniti numquam, minima amet consequuntur, doloremque
          facere harum quidem officia libero laborum repudiandae!
        </p>

        {/* Edit & Delete */}
        <div className="flex gap-3 ml-4 shrink-0">
          <FaEdit
            onClick={(e) => {
              e.stopPropagation();
              console.log("Edit clicked");
            }}
            className="text-2xl text-blue-500 hover:text-blue-700 cursor-pointer"
          />

          <MdDelete
            onClick={(e) => {
              e.stopPropagation();
              console.log("Delete clicked");
            }}
            className="text-2xl text-red-500 hover:text-red-700 cursor-pointer"
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-[90%] max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* X Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-800"
            >
              <IoClose />
            </button>

            {/* Todo Details */}
            <h2 className="text-2xl font-bold mb-4">
              Todo Details
            </h2>

            <h3 className="font-semibold text-lg">
              Title
            </h3>

            <p className="mb-4">
              Complete React Project
            </p>

            <h3 className="font-semibold text-lg">
              Description
            </h3>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, distinctio quia molestias animi nostrum, eos nulla
              blanditiis eveniet doloremque neque, corporis hic aperiam
              mollitia! Blanditiis officiis ipsa repellendus accusantium quos.
              Voluptates aperiam quisquam, asperiores molestias sed ipsum
              delectus a ab suscipit deleniti numquam.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-5 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Pages;