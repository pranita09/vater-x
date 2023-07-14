import "./App.css";
import { ToastWrapper } from "./components";
import { AppRoutes } from "./routes/AppRouts";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastWrapper />
    </div>
  );
}

export default App;
