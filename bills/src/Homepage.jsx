import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [noteState, setNoteState] = useState(Array(8).fill(0));
  let notes = [500, 200, 100, 50, 20, 10, 5, 1];

  function countCurrency(amount) {
    let noteCounter = Array(8).fill(0);
    for (let i = 0; i < 8; i++) {
      if (amount >= notes[i]) {
        noteCounter[i] = Math.floor(amount / notes[i]);
        amount = amount % notes[i];
      }
    }
    console.log(noteCounter);
    return noteCounter;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = countCurrency(count);
    setNoteState(res);
  };

  return (
    <div className="App">
      
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the amount"
              onChange={(e) => {
                setCount(e.target.value);
              }}
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type="button">
                Calculate
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className=" container card py-0">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Denomination</th>
              <th scope="col">Count</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {noteState.map((noteItr, noteInd) => {
              return (
                <tr key={noteInd}>
                  <td>{notes[noteInd]}</td>
                  <td>{noteItr}</td>
                  <td>
                    {parseInt(notes[noteInd]) * parseInt(noteItr)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
