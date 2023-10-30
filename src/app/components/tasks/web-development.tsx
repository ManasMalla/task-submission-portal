import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function WebDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Create a personal portfolio website using the web tech-stack of your
        choice. Include at least two sections - an "About Me" section and a
        "Projects" section.
        <br />
      </p>
      <FileTask taskName={"website code"} />
      <div>Brief Report</div>
      <p>
        Provide a brief report describing your journey while building the
        website and some learning and challenges you’ve faced along through a
        blog on Medium/HashNode.
      </p>
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
      <div>Screen recording</div>
      <p>
        You can also share a screen recording when you are building the website
        to be featured on the official DSC handle.
      </p>
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
    </div>
  );
}
