import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Sorry, it's updating now!
      </p>
      <img src={`${process.env.PUBLIC_URL}/sorry.jpg`} alt="sorry" />
    </div>
  );
}

export default App;
