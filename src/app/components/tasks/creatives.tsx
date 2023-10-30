import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function Creatives(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Complete the following:
        <br />
      </p>
      <ol className="list-decimal my-2 space-y-2">
        <li>
          <b>
            Create an instagram post welcoming everyone for the Google Cloud
            Study Jams
          </b>
          <div className="my-2"></div>
          <FileTask taskName={"post"} />
        </li>
        <li>
          <b>
            Make a short reel about the GDSC Program that we are going to have
            in our college.
          </b>

          <div className="my-2">
            <b>Link to reel</b>
          </div>
          <TextField
            className="my-3 w-full"
            placeholder="Link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Link />
                </InputAdornment>
              ),
            }}
          />
        </li>
        <li>
          <b>Prepare an infographic sharing your findings and learnings.</b>

          <FileTask taskName={"infographic"} />
        </li>
      </ol>
      <p>
        Make sure you use only the Google Colors and Google Fonts. Do Google
        about finding what they are :)
      </p>
    </div>
  );
}
