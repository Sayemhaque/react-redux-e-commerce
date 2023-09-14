/* eslint-disable react/prop-types */
function Modal({ isOpen, onClose, content }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay fixed w-full h-full bg-gray-900 opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <button
                className="modal-close p-2 -mt-2 -mr-2"
                onClick={onClose}
              >
              de
              </button>
              {/* content */}
              <img src={content.image} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
