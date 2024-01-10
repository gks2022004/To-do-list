import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";

function App() {
  return (
    <div className="app-contents">
      <Router>
        <Routes>
          <Route path="/" element={<ShowTodoList />} />
          <Route path="/create-todo" element={<CreateTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
