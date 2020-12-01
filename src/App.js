import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";
import { TodoListProvider } from "./components/TodoListContext";

function App() {
  return (
    <TodoListProvider>
      <div className="App">
        <div className="main-container">
          <Header />
          <div className="main-container-sp">
            <Sidebar />
            <Panel />
          </div>
        </div>
      </div>
    </TodoListProvider>
  );
}

export default App;
