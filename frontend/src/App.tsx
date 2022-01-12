import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">TodoList</h1>
        <p>
          <label htmlFor="input1" className="Subtitle">
            Enter a new task
          </label>
        </p>
        <input
          id="input1"
          type="text"
          className="Task-input"
          placeholder="Task.."
        />
        <button className="AddButton">+</button>
      </header>
    </div>
  );
}

export default App;
