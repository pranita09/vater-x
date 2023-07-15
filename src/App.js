import "./App.css";
import { ToastWrapper } from "./components";
import { AppRoutes } from "./routes/AppRouts";

import { Loader } from "./components/loader/Loader";
import { useData } from "./contexts/DataContext";

function App() {
  const {state:{isLoading}}=useData();
  return (
    <div className="App">
      {isLoading && <Loader />}
      <AppRoutes />
      <ToastWrapper />
    </div>
  );
}

export default App;
