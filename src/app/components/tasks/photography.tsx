import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function Photography(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Capture high-quality photos or create a short video montage (1-2
        minutes) highlighting a recent tech event or project. Edit and present
        the visuals effectively.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the task</b>
      </div>
      <FileTask taskName={"file"} />
    </div>
  );
}
