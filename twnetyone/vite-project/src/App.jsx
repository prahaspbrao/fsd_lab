import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

/* ---------------- Dashboard Component ---------------- */
const Dashboard = () => {
  // function outside return
  const handleTaskClick = () => {
    alert("Task link clicked!");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Tasks List:</h3>
      <ul>
        <li>
          <Link to="/task/101" onClick={handleTaskClick}>
            Complete React Lab
          </Link>
        </li>
        <li>
          <Link to="/task/102" onClick={handleTaskClick}>
            Submit Assignment
          </Link>
        </li>
        <li>
          <Link to="/task/103" onClick={handleTaskClick}>
            Prepare for Exams
          </Link>
        </li>
      </ul>
    </div>
  );
};

/* ---------------- Task Details Component ---------------- */
const TaskDetails = () => {
  // Hook used outside return
  const { taskId } = useParams();

  return (
    <div>
      <h2>Task Details</h2>
      <p>
        You are viewing details for Task ID: <strong>{taskId}</strong>
      </p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

/* ---------------- Settings Component ---------------- */
const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <p>This is the user preferences page.</p>
    </div>
  );
};

/* ---------------- 404 Component ---------------- */
const NotFound = () => {
  return (
    <div style={{ color: "red" }}>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Return to Dashboard</Link>
    </div>
  );
};

/* ---------------- Main App Component ---------------- */
function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        {/* Navigation Bar */}
        <nav
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <Link to="/" style={{ marginRight: "15px" }}>
            Dashboard
          </Link>
          <Link to="/settings" style={{ marginRight: "15px" }}>
            Settings
          </Link>
          <Link to="/unknown">Test 404</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
