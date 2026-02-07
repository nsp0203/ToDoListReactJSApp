import { useLocation } from "react-router-dom";
import "./Tasks.css";
import { APIEndpoints } from "../../API/APIEndpoints";
import { DeleteRequest, GetRequest, PostRequest, PutRequest } from "../../API/ServiceHelper";
import { useEffect, useState, useMemo } from "react";
import { formatDate } from "../../API/Utils";
import editIcon from "../../Images/edit.png";
import deleteIcon from "../../Images/delete.png";
import TaskModal from "./TaskModal/TaskModal";
import MessageModal from "../MessageModal/MessageModal";
import DeleteModal from "./Delete/DeleteModal";

function Tasks() {
    const location = useLocation();
    const { taskCategory, taskCategoryName } = location.state || {};
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState("add");
    const [selectedTask, setSelectedTask] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteTask, setDeleteTask] = useState(null);
    const [messageModal, setMessageModal] = useState({
        show: false,
        text: "",
        type: "success",
    });

    // For Fetching all the Tasks
    const GetTasks = async () => {
        try {
            setLoading(true);
            const result = await GetRequest(APIEndpoints.getAllTasks, {
                inputCategory: taskCategory,
            });

            if (result.isSuccess()) {
                setTasks(result.data);
            } else {
                setMessageModal({
                    show: true,
                    text: result.message,
                    type: "error",
                });
            }
        } catch (error) {
            setMessageModal({
                show: true,
                text: error,
                type: "error",
            });
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (taskCategory !== undefined) {
            GetTasks();
        }
    }, [taskCategory]);

    // For Searching Tasks based on task name
    const filteredTasks = useMemo(() => {
        return tasks.filter((task) =>
            task.Task.toLowerCase().includes(search.toLowerCase())
        );
    }, [tasks, search]);

    const handleAddTask = () => {
        setModalMode("add");
        setSelectedTask(null);
        setShowModal(true);
    };

    const handleEdit = (task) => {
        setModalMode("edit");
        setSelectedTask(task);
        setShowModal(true);
    };

    const handleDelete = (task) => {
        setModalMode("delete");
        setDeleteTask(task);
        setShowDelete(true);
    }

    // Edit Task API Call
    const EditTask = async (data) => {
        try {
            const endpoint = APIEndpoints.editTask;
            const result = await PutRequest(endpoint, data, { id: data.Id });
            if (result.isSuccess()) {
                setShowModal(false);
                setMessageModal({
                    show: true,
                    text: result.message,
                    type: "success",
                });
                GetTasks();
            } else {
                setMessageModal({
                    show: true,
                    text: result.message,
                    type: "error",
                });
            }
        } catch (error) {
            setMessageModal({
                show: true,
                text: error,
                type: "error",
            });
        }
    }

    // Add Task API Call
    const AddTask = async (data) => {
        try {
            const endpoint = APIEndpoints.addTask;
            const result = await PostRequest(endpoint, data);
            if (result.isSuccess()) {
                setShowModal(false);
                setMessageModal({
                    show: true,
                    text: result.message,
                    type: "success",
                });
                GetTasks();
            } else {
                setMessageModal({
                    show: true,
                    text: result.message,
                    type: "error",
                });
            }
        } catch (error) {
            setMessageModal({
                show: true,
                text: error,
                type: "error",
            });
        }
    }

    // Delete Task API Call
    const DeleteTask = async (data) => {
        try {
            const endpoint = APIEndpoints.deleteTask;
            const result = await DeleteRequest(endpoint, { id: data.Id });
            if (result.isSuccess) {
                setShowDelete(false);
                setMessageModal({
                    show: true,
                    text: result.message,
                    type: "success",
                });
                GetTasks();
            } else {
                setMessageModal({
                    show: true,
                    text: result.message,
                    type: "error",
                });
            }
        } catch (error) {
            setMessageModal({
                show: true,
                text: error,
                type: "error",
            });
        }
    }

    const handleSubmit = (taskData) => {
        if (modalMode === "edit") {
            EditTask(taskData);
        } else if (modalMode === "add") {
            console.log(taskData);
            AddTask(taskData);
        } else {
            DeleteTask(deleteTask);
        }
    }

    return (
        <div className="container">
            <div className="card">
                <h2 className="title">{taskCategoryName} Tasks</h2>

                <div className="toolbar">
                    <input
                        type="text"
                        placeholder="Search task..."
                        className="searchInput"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className="addBtn" onClick={handleAddTask}>
                        + Add Task
                    </button>
                </div>

                {loading && <p className="loading">Loading...</p>}

                {!loading && (
                    <table className="taskTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Task Level</th>
                                <th>Added Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredTasks.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="noData">
                                        No tasks found
                                    </td>
                                </tr>
                            ) : (
                                filteredTasks.map((task, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{task.Task}</td>
                                        <td>{task.TaskDescription}</td>
                                        <td>{task.TaskLevel}</td>
                                        <td>{formatDate(task.AddedDate)}</td>
                                        <td className="actions">
                                            <img
                                                src={editIcon}
                                                alt="edit"
                                                className="imgIcon"
                                                onClick={() => handleEdit(task)}
                                            />

                                            <img
                                                src={deleteIcon}
                                                alt="delete"
                                                className="imgIcon"
                                                onClick={() => handleDelete(task)}
                                            />
                                        </td>

                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            <TaskModal
                show={showModal}
                taskCategory={taskCategory}
                mode={modalMode}
                task={selectedTask}
                onClose={() => setShowModal(false)}
                onSave={handleSubmit}
            />

            <DeleteModal
                show={showDelete}
                taskName={deleteTask?.Task}
                onCancel={() => setShowDelete(false)}
                onConfirm={handleSubmit}
            />

            <MessageModal
                show={messageModal.show}
                message={messageModal.text}
                type={messageModal.type}
                onClose={() =>
                    setMessageModal({ show: false, text: "", type: "success" })
                }
            />

        </div>
    );
}

export default Tasks;
