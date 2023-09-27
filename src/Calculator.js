import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input1, setInput1] = useState("0");
  const [input2, setInput2] = useState("0");
  const [operation, setOperation] = useState(undefined);

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
        <Grid className="row" item xs={6}>
          <Button className="operation-buttons" variant="contained">
            AC
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="contained">
            DEL
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            ÷
          </Button>
        </Grid>
        <Grid className="row" item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            ×
          </Button>
        </Grid>
        <Grid className="row" item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            +
          </Button>
        </Grid>
        <Grid className="row" item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            -
          </Button>
        </Grid>
        <Grid className="row" item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button className="operation-buttons" variant="outlined">
            .
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button className="operation-buttons" variant="outlined">
            =
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
