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

export default function CompetitiveProgrammingDevelopment(props: {
  radioIndex: number;
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
      <p className="ml-4 mb-4">
        Solve a beginner-level coding problem from platforms like LeetCode,
        HackerRank, or Codeforces.
      </p>
      <div>Brief Report</div>
      <p>
        Provide the code and an explanation of your approach through a blog on
        Medium/HashNode.
      </p>
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
            alert(`Submitted task for Competitive Programming domain!`);
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
