import "./App.css";
import TodoList from "pages/TodoList";
import { createStore } from "redux";
import rootReducer from "reducers";
import { Provider } from "react-redux";
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="Title">TodoList</h1>
          <TodoList />
        </header>
      </div>
    </Provider>
  );
};

export default App;
