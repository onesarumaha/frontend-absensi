import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Dashboard />;
  }

  return <Login />;
}

export default App;
