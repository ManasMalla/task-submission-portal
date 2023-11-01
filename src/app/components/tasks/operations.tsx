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

export default function Operations(props: {
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
}) {
  const [report, setReport] = useState("");
  const [isLoading, setLoader] = useState(false);
  return isLoading ? (
    <div className="flex items-center justify-center">
      <CircularProgress />
    </div>
  ) : (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Please share your thoughts on how effectively you would like to plan the
        event for the upcoming Info Session that we are going to have, where we
        will officially on-board you as the Core Team Member of the College.
        <br />
        We will have to welcome and introduce everyone for the Google Developer
        Student Club to our College.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the Document</b>
      </div>
      <LinkEditText
        value={report}
        onChange={(value) => {
          setReport(value);
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
              })
            );
            setLoader(false);
            alert(`Submitted task for operations domain!`);
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
