import "./MessageModal.css";

function MessageModal({ show, message, type = "success", onClose }) {
  if (!show) return null;

  return (
    <div className="msgOverlay" onClick={onClose}>
      <div className={`msgModal ${type}`} onClick={(e) => e.stopPropagation()}>
        <h3 className="msgTitle">{type === "success" ? "Success" : "Error"}</h3>
        <p className="msgText">{message}</p>
        <button className="msgBtn" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default MessageModal;