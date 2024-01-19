// ModalComponent.js
import React, { useState } from "react";
import Modal from "react-modal";
import NGOList from "./NGOList";

// Modal.setAppElement("#root"); // Set the root element for accessibility

const TableModal = ({ modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="relative mt-32 mx-12 bg-white border border-gray-200 p-4 rounded-lg shadow-2xl overflow-y-scroll h-[80%]"
      >
        <button
          onClick={closeModal}
          className="absolute top-12 left-12 bg-[rgb(30,67,86)] text-white hover:border hover:border-[rgb(30,67,86)] "
        >
          Close Modal
        </button>
        <NGOList />
      </Modal>
    </div>
  );
};

export default TableModal;
