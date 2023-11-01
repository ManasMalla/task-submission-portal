import {
  Button,
  CircularProgress,
  InputAdornment,
  Radio,
  TextField,
} from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";
import LinkEditText from "../link-edit-text";
import { useState } from "react";

export default function CloudDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
}) {
  const [report, setReport] = useState("");
  const [recording, setRecording] = useState("");
  const [isLoading, setLoader] = useState(false);
  return isLoading ? (
    <div className="flex items-center justify-center">
      <CircularProgress />
    </div>
  ) : (
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
      <LinkEditText
        value={report}
        onChange={(value) => {
          setReport(value);
        }}
      />
      <div>Screen recording</div>
      <p>
        You can also share a screen recording when completing the task to be
        featured on the official DSC handle.
      </p>
      <LinkEditText
        value={recording}
        onChange={(value) => {
          setRecording(value);
        }}
      />
      <Button
        variant="outlined"
        onClick={async () => {
          if (report === "") {
            alert("Provide a valid url to the blog.");
          } else {
            setLoader(true);
            props.setResponse(
              JSON.stringify({
                report: report,
                recording: recording,
              })
            );
            setLoader(false);
            alert(`Submitted task for Cloud domain!`);
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
