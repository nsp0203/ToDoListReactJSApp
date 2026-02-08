import { useState, useEffect } from "react";
import "./TaskModal.css";

function TaskModal({ show, mode, task, taskCategory, onClose, onSave }) {
  const isEdit = mode === "edit";

  const [form, setForm] = useState({
    task: "",
    description: "",
    level: 0,
  });

  useEffect(() => {
    if (isEdit && task) {
      const levelMap = {High: 3, Medium: 2, Low: 1};
      setForm({
        task: task.Task || "",
        description: task.TaskDescription || "",
        level: levelMap[task.TaskLevel] ?? 0,
      });
    } else {
      setForm({ task: "", description: "", level: 0});
    }
  }, [task, isEdit, show]);


  if (!show) return null;

  const handleSave = () => {
    const payload = {
      ...task,
      ...(isEdit && { Id: task.Id }),
      Task: form.task,
      TaskDescription: form.description,
      TaskLevel: parseInt(form.level),
      TaskCategory: taskCategory
    };

    onSave(payload);
  };


  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{isEdit ? "Edit Task" : "Add Task"}</h3>

        <input
          placeholder="Task name"
          value={form.task}
          onChange={(e) =>
            setForm({ ...form, task: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />
        <select
          value={form.level}
          onChange={(e) =>
            setForm({ ...form, level: Number(e.target.value) })
          }
        >
          <option value={0} disabled>Select Task Level</option>
          <option value={3}>High</option>
          <option value={2}>Medium</option>
          <option value={1}>Low</option>
        </select>

        <div className="modalBtns">
          <button className="saveBtn" onClick={handleSave}>
            {isEdit ? "Update" : "Add"}
          </button>

          <button className="cancelBtn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
