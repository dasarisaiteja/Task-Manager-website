import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", task);

      setTask({
        title: "",
        description: ""
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleComplete = async (item) => {
    try {
      await API.put(`/tasks/${item._id}`, {
        completed: !item.completed
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async () => {
    try {
      await API.put(`/tasks/${editingTask._id}`, {
        title: editingTask.title,
        description: editingTask.description
      });

      setEditingTask(null);

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="topbar">
        <h2>Task Manager</h2>

        <button
          className="logout"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <form
        className="taskForm"
        onSubmit={createTask}
      >
        <input
          placeholder="Task Title"
          value={task.title}
          onChange={(e) =>
            setTask({
              ...task,
              title: e.target.value
            })
          }
        />

        <input
          placeholder="Description"
          value={task.description}
          onChange={(e) =>
            setTask({
              ...task,
              description: e.target.value
            })
          }
        />

        <button>Add Task</button>
      </form>

      <div className="taskGrid">
        {tasks.map((item) => (
          <div
            key={item._id}
            className="taskCard"
          >
            {editingTask &&
            editingTask._id === item._id ? (
              <>
                <input
                  value={editingTask.title}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      title: e.target.value
                    })
                  }
                />

                <input
                  value={editingTask.description}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      description:
                        e.target.value
                    })
                  }
                />

                <div className="actions">
                  <button
                    onClick={updateTask}
                  >
                    Save
                  </button>

                  <button
                    onClick={() =>
                      setEditingTask(null)
                    }
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span>
                  Status :
                  {item.completed
                    ? " Completed"
                    : " Pending"}
                </span>

                <div className="actions">
                  <button
                    onClick={() =>
                      setEditingTask(item)
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      toggleComplete(item)
                    }
                  >
                    Toggle
                  </button>

                  <button
                    className="delete"
                    onClick={() =>
                      deleteTask(item._id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;