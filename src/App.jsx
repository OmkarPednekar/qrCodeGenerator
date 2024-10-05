import { useState } from "react";
import "./App.css";
import { exponentToInteger, integerToExponent } from "./logstables";
import { fixedPos, whitePos } from "./positions";
function App() {
  const [input, setInput] = useState();
  const [binary, setBinary] = useState();
  const [matrix, setMatrix] = useState([]);
  const [messagePloy, setMessagePloy] = useState([]);
  var qrMatrix = Array.from({ length: 25 }, () => Array(25).fill([0, "X"]));
  const generateErrorCodes = (input) => {
    const generatorPolyPowers = [0, 251, 67, 46, 61, 118, 70, 64, 94, 32, 45];
    const paddedArray = [...input]; // Clone input array

    let codeArr = new Array(input.length + 10).fill(0);
    for (let i = 0; i < input.length; i++) {
      codeArr[i] = input[i];
    }
    for (let x = 0; x < input.length; x++) {
      let coefficientToIn = integerToExponent[codeArr[x]];
      const currentGenPolyPowers = generatorPolyPowers.map(
        (power) => power + coefficientToIn
      );

      const intToCoeffi = currentGenPolyPowers.map((val) => {
        const normalized = val % 255;
        return exponentToInteger[normalized];
      });
      for (let j = 0; j < intToCoeffi.length; j++) {
        if (j + x < codeArr.length) {
          codeArr[j + x] ^= intToCoeffi[j];
        }
      }
    }
    const errorCodes = codeArr.slice(input.length);
    return errorCodes;
  };

  const markBits = (data) => {
    var col = 24; // Start at the rightmost column
    var row = 24; // Start at the bottom row
    let pointer = 0; // Points to the current bit in the data array
    let direction = 0; // -1 for moving up, 1 for moving down
    // Matrix to fill with data bits
    for (var x = 0; x < fixedPos.length; x++) {
      qrMatrix[fixedPos[x][0]][fixedPos[x][1]] = [1, "Y"];
    }
    for (var y = 0; y < whitePos.length; y++) {
      qrMatrix[whitePos[y][0]][whitePos[y][1]] = [0, "Y"];
    }
    let pos = [];
    while (pointer < data.length) {
      // Place bit only if this spot is marked as 'X' (editable)
      if (qrMatrix[row][col][1] == "X") {
        // console.log(row, col, parseInt(data[pointer]));
        pos.push([row, col]);
        pointer++;
      }

      if (direction == 0) {
        if (col % 2 == 0) {
          col -= 1; // Move left when column is even
        } else {
          if (row != 0) {
            col += 1;
          }
          // Move right
          row -= 1; // Move up
        }
      } else {
        if (col % 2 == 0) {
          col -= 1; // Move left when column is even
        } else {
          if (row != 24) {
            col += 1;
          }

          row += 1; // Move down
        }
      }

      // Handle boundary conditions
      if (row < 0 || row > 24) {
        if (row < 0) {
          row = 0; // Reset to top row if it goes out of bounds
          direction = 1; // Switch direction to move downwards
        }
        if (row > 24) {
          row = 24; // Reset to bottom row if it goes out of bounds
          direction = 0; // Switch direction to move upwards
        } // Correct column when moving left after hitting a boundary

        col -= 1;
        // This should now properly decrement and print
      }
    }

    for (var i = 0; i < data.length; i++) {
      let r = pos[i][0];
      let c = pos[i][1];

      qrMatrix[r][c] = data[i];
    }

    const numRows = qrMatrix.length; // Assuming qrMatrix is square
    const numCols = qrMatrix[0].length; // Get the number of columns
    const maskPattern = 3; // Mask every third column (you can adjust this)

    for (let column = 0; column < numCols; column++) {
      if (column % maskPattern === 0) {
        // Apply mask condition
        for (let row = 0; row < numRows; row++) {
          if (qrMatrix[row][column] == 0 || qrMatrix[row][column] == 1) {
            let curr = qrMatrix[row][column];
            qrMatrix[row][column] = curr == 0 ? 1 : 0;
          }
          if (qrMatrix[row][column][1] === "X") {
            qrMatrix[row][column] = qrMatrix[row][column][0] === 0 ? 1 : 0;
          }
        }
      }
    }
    setMatrix(qrMatrix); // Update matrix with the filled data
  };

  const getBinary = () => {
    let ascii = [];
    ascii.push("0100");
    ascii.push(input.length.toString(2).padStart(8, "0"));
    for (var i = 0; i < input.length; i++) {
      let asciiVal = input.charCodeAt(i);
      let binary = asciiVal.toString(2).padStart(8, "0");
      ascii.push(binary);
    }
    ascii.push("0000");
    let binaryString = ascii.join("");
    let messagePolyarr = [];

    for (var a = 0; a < binaryString.length; a += 8) {
      messagePolyarr.push(parseInt(binaryString.slice(a, a + 8), 2));
    }
    setMessagePloy(messagePolyarr);

    let errorCodeWords = generateErrorCodes(messagePolyarr);
    let errCodeArr = [];
    for (var i = 0; i < errorCodeWords.length; i++) {
      let binary = errorCodeWords[i].toString(2).padStart(8, "0");
      errCodeArr.push(binary);
    }
    let finalCode = ascii.join("") + errCodeArr.join("");
    setBinary(finalCode);
    markBits(finalCode);
  };

  return (
    <>
      <div className="divtext">
        <input
          className="input"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button className="button" onClick={getBinary}>
          GENERATE QR
        </button>
        <br />
        <br />
        QR Version : 2 (21X21)
        <br />
        Error Correction Level : L (upto 7%)
        <br />
        MESSAGE : {binary}
        <br />
        LENGTH : {binary != undefined ? binary.length : ""}
        <br />
        MESSAGE POLYNOMIAL :{" "}
        <div style={{ display: "flex" }}>
          {messagePloy.length > 0 ? (
            messagePloy.map((data, index) => {
              return (
                <div key={index} style={{ margin: "0px 2px", display: "flex" }}>
                  {data}x<sup>{messagePloy.length - 1 - index}</sup>{" "}
                  {index != messagePloy.length - 1 ? <div>+</div> : ""}
                </div>
              );
            })
          ) : (
            <p></p>
          )}
        </div>
        <p>
          {" "}
          Generator polynomial for 10 error correction code words:
          <br />ɑ<sup>0</sup>x<sup>10</sup> + ɑ<sup>251</sup>x<sup>9</sup> + ɑ
          <sup>67</sup>x<sup>8</sup> + ɑ<sup>46</sup>x<sup>7</sup> + ɑ
          <sup>61</sup>x<sup>6</sup> + ɑ<sup>118</sup>x<sup>5</sup> + ɑ
          <sup>70</sup>x<sup>4</sup> + ɑ<sup>64</sup>x<sup>3</sup> + ɑ
          <sup>94</sup>x<sup>2</sup> + ɑ<sup>32</sup>x + ɑ<sup>45</sup>
        </p>
        <br />
      </div>
      {matrix.length < 1 ? (
        <p></p>
      ) : (
        <div style={{ display: "flex", width: "100%" }}>
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
            {matrix.map((data, index) => {
              return data.map((val, i) => {
                return (
                  <div
                    className="divitem"
                    key={i}
                    style={{
                      backgroundColor:
                        val[0] == 1 ? "black" : val == 1 ? "black" : "white",
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
              border: "20px solid white",
              boxSizing: "border-box",
            }}
          >
            {matrix.map((data, index) => {
              return data.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="divitem"
                    style={{
                      backgroundColor:
                        val[0] == 0 ? "white" : val == 0 ? "white" : "black",
                      border: "1px solid black",
                      //   val[0] == 1
                      //     ? "1px solid black"
                      //     : val == 1
                      //     ? "1px solid black"
                      //     : "1px solid #dce1e8",
                      color:
                        val[0] == 0 ? "black" : val == 0 ? "black" : "white",
                      textAlign: "center",

                      // transform:
                      //   val[1] == "|" ? `rotate(${(360 % index) + 1}deg)` : "",
                    }}
                  >
                    <strong>{val[1] === undefined ? val : val[0]}</strong>
                  </div>
                );
              });
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
