import "./DeleteModal.css";

function DeleteModal({ show, taskName, onCancel, onConfirm }) {
  if (!show) return null;

  return (
    <div className="deleteOverlay" onClick={onCancel}>
      <div className="deleteModal" onClick={(e) => e.stopPropagation()}>
        <h3 className="deleteTitle">Delete Task</h3>
        <p className="deleteText">
          Are you sure you want to delete{" "}
          <b>{taskName}</b> ?
        </p>
        <div className="deleteBtns">
          <button className="cancelBtn" onClick={onCancel}>Cancel</button>
          <button className="deleteBtn" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
