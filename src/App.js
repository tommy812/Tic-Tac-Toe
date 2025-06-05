import './App.css';

import Board from './components/board';


// App component to provide the player state to its children
// It initializes the player state to "x" and provides a function to update it
function App() {
  return (
    <>
      <div className="title">
        <h1>Tic Tac Toe</h1>
      </div>

      <Board />
    </>
  );
}

export default App;





