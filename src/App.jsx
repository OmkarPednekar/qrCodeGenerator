import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState();
  const [binary, setBinary] = useState();
  // Initialize a 25x25 matrix (625 cells)
  var qrMatrix = Array.from({ length: 25 }, () => Array(25).fill(0));
  var fixedPos = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
    [6, 6],
    [6, 6],
    [5, 6],
    [4, 6],
    [3, 6],
    [2, 6],
    [1, 6],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 2],
    [3, 3],
    [3, 4],
    [4, 2],
    [4, 3],
    [4, 4],
    [24, 0],
    [24, 1],
    [24, 2],
    [24, 3],
    [24, 4],
    [24, 5],
    [24, 6],
    [23, 0],
    [22, 0],
    [21, 0],
    [20, 0],
    [19, 0],
    [18, 0],
    [18, 1],
    [18, 2],
    [18, 3],
    [18, 4],
    [18, 5],
    [18, 6],
    [22, 6],
    [21, 6],
    [20, 6],
    [19, 6],
    [23, 6],
    [22, 2],
    [22, 3],
    [22, 4],
    [21, 2],
    [21, 3],
    [21, 4],
    [20, 2],
    [20, 3],
    [20, 4],
    [0, 24],
    [1, 24],
    [2, 24],
    [3, 24],
    [4, 24],
    [5, 24],
    [6, 24],
    [6, 23],
    [6, 22],
    [6, 21],
    [6, 20],
    [6, 19],
    [6, 18],
    [5, 18],
    [4, 18],
    [3, 18],
    [2, 18],
    [1, 18],
    [0, 18],
    [0, 19],
    [0, 20],
    [0, 21],
    [0, 22],
    [0, 23],
    [2, 20],
    [2, 21],
    [2, 22],
    [3, 20],
    [3, 21],
    [3, 22],
    [4, 20],
    [4, 21],
    [4, 22],
    [20, 20],
    [20, 19],
    [20, 18],
    [20, 17],
    [20, 16],
    [19, 16],
    [18, 16],
    [17, 16],
    [16, 16],
    [16, 17],
    [16, 18],
    [16, 19],
    [16, 20],
    [17, 20],
    [18, 20],
    [19, 20],
    [18, 18],
    [8, 6],
    [10, 6],
    [12, 6],
    [14, 6],
    [16, 6],
    [6, 8],
    [6, 10],
    [6, 12],
    [6, 14],
    [6, 16],
    [24, 23],
    [17, 8],
    // [22, 24],
  ];
  1100101;
  for (var i = 0; i < fixedPos.length; i++) {
    qrMatrix[fixedPos[i][0]][fixedPos[i][1]] = 1;
  }
  const getBinary = () => {
    let ascii = [];
    ascii.push(input.length.toString(2).padStart(8, "0"));
    for (var i = 0; i < input.length; i++) {
      let asciiVal = input.charCodeAt(i);
      let binary = asciiVal.toString(2).padStart(8, "0");
      ascii.push(binary);
    }
    ascii.push("0000");
    let binaryString = ascii.join("");
    setBinary(binaryString);
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button onClick={getBinary}>GENERATE QR</button>
        {binary}
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "500px",
            height: "500px",
            display: "grid",
            gridTemplateColumns: "repeat(25, 1fr)",
            gridTemplateRows: "repeat(25, 1fr)",
            border: "20px solid white",
            boxSizing: "border-box",
          }}
        >
          {qrMatrix.map((data) => {
            return data.map((val, i) => {
              return (
                <div
                  className="divitem"
                  key={i}
                  style={{
                    backgroundColor: val == 1 ? "black" : "white",
                    // border: "1px solid #dce1e8",
                  }}
                ></div>
              );
            });
          })}
        </div>
        <div
          style={{
            width: "700px",
            height: "700px",
            display: "grid",
            gridTemplateColumns: "repeat(25, 1fr)",
            gridTemplateRows: "repeat(25, 1fr)",
            // border: "20px solid white",
            boxSizing: "border-box",
          }}
        >
          {qrMatrix.map((data) => {
            return data.map((val, i) => {
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: "white",
                    border: val == 1 ? "1px solid black" : "1px solid #dce1e8",
                    color: val == 1 ? "red" : "blue",
                    textAlign: "center",
                  }}
                >
                  {val}
                </div>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}

export default App;
