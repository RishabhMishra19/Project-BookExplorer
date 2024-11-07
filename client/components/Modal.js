import React, { useRef } from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        onClick={handleClickOutside}
      >
        <div
          ref={modalRef}
          className="bg-white rounded-lg shadow-lg w-11/12 sm:w-96 p-6 transition-all transform scale-100 opacity-100 duration-300 ease-in-out"
        >
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </>
  );
};
