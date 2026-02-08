import "./ConfirmModal.css";

function ConfirmModal({
  show,
  title = "Confirm Action",
  message,
  confirmText = "Yes",
  type = "primary", 
  onCancel,
  onConfirm,
}) {
  if (!show) return null;

  return (
    <div className="confirmOverlay" onClick={onCancel}>
      <div className="confirmModal" onClick={(e) => e.stopPropagation()}>

        <h3 className="confirmTitle">{title}</h3>

        <p className="confirmText">{message}</p>

        <div className="confirmBtns">
          <button className="cancelBtn" onClick={onCancel}>
            Cancel
          </button>

          <button
            className={`confirmBtn ${type}`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>

      </div>
    </div>
  );
}

export default ConfirmModal;
