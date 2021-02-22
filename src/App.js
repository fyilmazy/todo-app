import "./App.css";
import Input from "./components/Input";
import TypeSelector from "./components/TypeSelector";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Header />
        <Input />
        <TypeSelector />
        <TodoList />
        <Footer />
      </TodoProvider>
    </div>
  );
}

export default App;
