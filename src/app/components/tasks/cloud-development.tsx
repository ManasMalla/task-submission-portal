import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function CloudDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p className="ml-4 mb-4">
        Create a virtual machine, upload a file (or) Create a cloud storage
        bucket and upload a document.
      </p>
      <div>Brief Report</div>
      <p>
        Provide a brief report describing your journey while completing the task
        and some learning and challenges you’ve faced along through a blog on
        Medium/HashNode.
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
        You can also share a screen recording when completing the task to be
        featured on the official DSC handle.
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
