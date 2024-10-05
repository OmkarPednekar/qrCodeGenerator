import { useState } from "react";
import "./App.css";
import { exponentToInteger, integerToExponent } from "./logstables";
function App() {
  const [input, setInput] = useState();
  const [binary, setBinary] = useState();
  const [matrix, setMatrix] = useState([]);
  const [mark, setMark] = useState([]);
  const [messagePloy, setMessagePloy] = useState([]);
  // Initialize a 25x25 matrix (625 cells)
  var qrMatrix = Array.from({ length: 25 }, () => Array(25).fill([0, "||"]));
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
    [17, 8],
    [8, 0],
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 8],
    [4, 8],
    [3, 8],
    [2, 8],
    [0, 8],
    [24, 8],
    [23, 8],
    [22, 8],
    [21, 8],
    [8, 17],
    [8, 20],
    [8, 21],
    [8, 22],
    [8, 24],
  ];
  var whitePos = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [5, 4],
    [5, 3],
    [5, 2],
    [5, 1],
    [4, 1],
    [3, 1],
    [2, 1],
    [7, 0],
    [7, 1],
    [7, 2],
    [7, 3],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
    [6, 7],
    [5, 7],
    [4, 7],
    [3, 7],
    [2, 7],
    [1, 7],
    [0, 7],
    [1, 19],
    [1, 20],
    [1, 21],
    [1, 22],
    [1, 23],
    [2, 23],
    [3, 23],
    [4, 23],
    [5, 23],
    [5, 22],
    [5, 21],
    [5, 20],
    [5, 19],
    [4, 19],
    [3, 19],
    [2, 19],
    [1, 19],
    [0, 17],
    [1, 17],
    [2, 17],
    [3, 17],
    [4, 17],
    [5, 17],
    [6, 17],
    [7, 17],
    [7, 18],
    [7, 19],
    [7, 20],
    [7, 21],
    [7, 22],
    [7, 23],
    [7, 24],
    [17, 17],
    [17, 18],
    [17, 19],
    [18, 19],
    [19, 19],
    [19, 18],
    [19, 17],
    [18, 17],
    [19, 1],
    [19, 2],
    [19, 3],
    [19, 4],
    [19, 5],
    [20, 5],
    [21, 5],
    [22, 5],
    [23, 5],
    [23, 4],
    [23, 3],
    [23, 2],
    [23, 1],
    [22, 1],
    [21, 1],
    [20, 1],
    [17, 0],
    [17, 1],
    [17, 2],
    [17, 3],
    [17, 4],
    [17, 5],
    [17, 6],
    [17, 7],
    [18, 7],
    [19, 7],
    [20, 7],
    [21, 7],
    [22, 7],
    [23, 7],
    [24, 7],
    [9, 6],
    [11, 6],
    [13, 6],
    [15, 6],
    [6, 9],
    [6, 11],
    [6, 13],
    [6, 15],

    [8, 4],
    [8, 5],
    [8, 7],
    [7, 8],
    [5, 8],
    [1, 8],
    [20, 8],
    [19, 8],
    [18, 8],
    [8, 18],
    [8, 19],
    [8, 23],
  ];
  const generateErrorCodes = (input) => {
    let generatorPloyPowers = [0, 251, 67, 46, 61, 118, 70, 64, 94, 32, 45];
    let generatorPloyCoeffPowers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let messageXPowers = [];
    let paddedArray = input;
    if (input.length < 10) {
      let reqlength = input.length + 9;
      for (var p = 0; p <= reqlength; ++p) {
        messageXPowers.push(reqlength - p);
      }
      paddedArray = [...input, ...Array(reqlength - input.length + 1).fill(0)];
      for (var g = 0; g < generatorPloyCoeffPowers.length; g++) {
        generatorPloyCoeffPowers[g] =
          generatorPloyCoeffPowers[g] + (input.length - 1);
      }
    } else {
      for (var g = 0; g < generatorPloyCoeffPowers.length; g++) {
        generatorPloyCoeffPowers[g] =
          generatorPloyCoeffPowers[g] + (input.length - 1 - 10);
      }
    }
    let codeArr = paddedArray;
    let genPolyPow = generatorPloyPowers;
    for (var x = 0; x < input.length; x++) {
      // find coefficient of alpha

      let coefficientToIn = integerToExponent[codeArr[0]];
      let intToCoeffi = [];
      for (var i = 0; i < generatorPloyPowers.length; i++) {
        let val =
          [0, 251, 67, 46, 61, 118, 70, 64, 94, 32, 45][i] + coefficientToIn;

        if (val > 255) {
          val = val % 255;
        }
        genPolyPow[i] = val;

        intToCoeffi.push(exponentToInteger[genPolyPow[i]]);
      }
      let xorVal = [];
      for (var j = 0; j < intToCoeffi.length; j++) {
        xorVal.push(codeArr[j] ^ intToCoeffi[j]);
      }
      codeArr = xorVal.slice(1);

      // console.log(genPolyPow);
      //add that to generatorPloyPowers and %255 if value > 256
      //find intergers of those values
      //do a XOR between those intergers and paddedArray
      //eliminate 0 term and this will be new message ploynomial array
      //repeat
    }
    return codeArr;
  };
  const getBinary = async () => {
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
    setBinary(binaryString);
    for (var x = 0; x < fixedPos.length; x++) {
      qrMatrix[fixedPos[x][0]][fixedPos[x][1]] = [1, "Y"];
    }
    for (var y = 0; y < whitePos.length; y++) {
      qrMatrix[whitePos[y][0]][whitePos[y][1]] = [0, "Y"];
    }
    let errorCodeWords = await generateErrorCodes(messagePloy);
    // let codeWords = [58, 64, 142, 238, 199, 51, 89, 207, 88, 213];
    // let code = [];
    // for (var ii = 0; ii < codeWords.length; ii++) {
    //   let binary = codeWords[ii].toString(2).padStart(8, "0");
    //   code.push(binary);
    // }
    console.log(errorCodeWords);
    setMatrix(qrMatrix);
  };
  const markit = (row, col) => {
    let tmp = mark;
    tmp.push([row, col]);
    setMark(tmp);
    console.log(tmp);
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
        <br />
        MESSAGE : {binary}
        <br />
        LENGTH : {binary != undefined ? binary.length : ""}
        <br />
        MESSAGE PLOYNOMIAL :{" "}
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
            {matrix.map((data, index) => {
              return data.map((val, i) => {
                return (
                  <div
                    className="divitem"
                    key={i}
                    style={{
                      backgroundColor: val[0] == 1 ? "black" : "white",
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
            {matrix.map((data, index) => {
              return data.map((val, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      markit(index, i);
                    }}
                    className="divitem"
                    style={{
                      backgroundColor:
                        val[1] == "Y" ? "lightgray" : "greenyellow",
                      border:
                        val[0] == 1 ? "1px solid black" : "1px solid #dce1e8",
                      color:
                        val[1] == "Y"
                          ? val[0] == 0
                            ? "yellow"
                            : "red"
                          : "blue",
                      textAlign: "center",

                      // transform:
                      //   val[1] == "|" ? `rotate(${(360 % index) + 1}deg)` : "",
                    }}
                  >
                    {val[0]}
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
