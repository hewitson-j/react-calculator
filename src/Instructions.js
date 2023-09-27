import { Typography } from "@mui/material";

export default function Instructions() {
  return (
    <div div style={{ margin: "auto", maxWidth: "600px" }}>
      <Typography variant="h5">Instructions:</Typography>
      <ol>
        <li>Click any number (or multiple) to create the first operand.</li>
        <li>Click one of the operator buttons.</li>
        <li>Click any number (or multiple) to create the second operand.</li>
        <li>Click evaluate/equal button for answer.</li>
      </ol>

      <p>
        *Note you can use <strong>AC</strong> to delete input in both operands
        and <strong>DEL</strong> to delete the last input character.
      </p>
    </div>
  );
}
