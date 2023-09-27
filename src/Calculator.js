import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input1, setInput1] = useState("0");
  const [input2, setInput2] = useState("0");
  const [operation, setOperation] = useState(undefined);

  //   Handler Functions
  function handleNumberClick(num) {
    if (input2 === "0") {
      setInput2(num);
    } else {
      setInput2(input2 + num);
    }
  }
  function handleOperationChange(op) {
    if (input2[input2.length - 1] === ".") {
      setInput2(input2.slice(0, -1));
    }

    setOperation(op);

    switch (op) {
      case 0:
        setInput1(input2 + " ÷");
        setInput2("0");
        break;
      case 1:
        setInput1(input2 + " +");
        setInput2("0");
        break;
      case 2:
        setInput1(input2 + " -");
        setInput2("0");
        break;
      case 3:
        setInput1(input2 + " ×");
        setInput2("0");
        break;
      default:
        setInput1(input2);
    }
  }
  function handleCalculate() {
    let inp1 = input1.slice(0, -2);
    let inp2 = input2;

    inp1 = parseFloat(inp1);
    inp2 = parseFloat(inp2);

    let result;

    switch (operation) {
      case 0:
        result = inp1 / inp2;
        break;
      case 1:
        result = inp1 + inp2;
        break;
      case 2:
        result = inp1 - inp2;
        break;
      case 3:
        result = inp1 * inp2;
        break;
      default:
        result = 0;
    }

    setInput1("0");
    setInput2(result.toString());
    setOperation(undefined);
  }

  return (
    <div className="calculator">
      <Grid container spacing={0}>
        {/* Input Header */}
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box className="input-boxes">
                <Typography variant="h4">
                  {input1 !== "0" ? input1 : ""}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="input-boxes">
                <Typography variant="h4">{input2}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Calculator Buttons */}
        <Grid className="row" item xs={6}>
          <Button
            className="operation-buttons"
            variant="contained"
            onClick={() => {
              setInput1("0");
              setInput2("0");
            }}
          >
            AC
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="contained"
            onClick={() => {
              if (input2.length === 1) {
                setInput2("0");
              } else {
                setInput2(input2.slice(0, -1));
              }
            }}
          >
            DEL
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => {
              handleOperationChange(0);
            }}
          >
            ÷
          </Button>
        </Grid>
        <Grid className="row" item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("7")}
          >
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("8")}
          >
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("9")}
          >
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => {
              handleOperationChange(3);
            }}
          >
            ×
          </Button>
        </Grid>
        <Grid className="row" item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("4")}
          >
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("5")}
          >
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("6")}
          >
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => {
              handleOperationChange(1);
            }}
          >
            +
          </Button>
        </Grid>
        <Grid className="row" item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("1")}
          >
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("2")}
          >
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => handleNumberClick("3")}
          >
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => {
              handleOperationChange(2);
            }}
          >
            -
          </Button>
        </Grid>
        <Grid className="row" item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => {
              if (input2 === "0") {
                setInput2(input2);
              } else {
                setInput2(input2 + "0");
              }
            }}
          >
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={() => {
              if (input2.includes(".")) {
                setInput2(input2);
              } else {
                setInput2(input2 + ".");
              }
            }}
          >
            .
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            className="operation-buttons"
            variant="outlined"
            onClick={handleCalculate}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
