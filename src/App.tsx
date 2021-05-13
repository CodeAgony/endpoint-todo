import { createGlobalStyle } from "styled-components";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

const AppStyle = createGlobalStyle`
  body {
    font-family: sans-serif, serif;
  }
`;

function App() {
  return (
    <div data-testid="app-root">
      <Header />
      <TodoList />
      <AppStyle />
    </div>
  );
}

export default App;
