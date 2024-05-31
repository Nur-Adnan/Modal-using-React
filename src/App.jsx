import { useState } from "react";
import { CustomModal } from "./CustomModal";
import { DialogModal } from "./DialogModal";
import "./styles.css"; // Import the styles

export default function App() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isDialogModalOpen, setIsDialogModalOpen] = useState(false);

  return (
    <div className="app">
      <button
        className="modal-button"
        onClick={() => setIsCustomModalOpen(true)}
      >
        Show Custom Modal
      </button>
      <button
        className="modal-button"
        onClick={() => setIsDialogModalOpen(true)}
      >
        Show Dialog Modal
      </button>
      <CustomModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      >
        <p>
          This is a <strong>CUSTOM</strong> modal
        </p>
        <button
          className="close-button"
          onClick={() => setIsCustomModalOpen(false)}
        >
          Close
        </button>
      </CustomModal>

      <DialogModal
        isOpen={isDialogModalOpen}
        onClose={() => setIsDialogModalOpen(false)}
      >
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <button
          className="close-button"
          onClick={() => setIsDialogModalOpen(false)}
        >
          Close
        </button>
      </DialogModal>
    </div>
  );
}
