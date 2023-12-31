import { Button, CircularProgress, InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";
import LinkEditText from "../link-edit-text";
import { useState } from "react";

export default function SocialMedia(props: {
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
      <p>
        Create and execute a social media post promoting the upcoming{" "}
        <a
          href="https://cloudonair.withgoogle.com/cloud-study-jam"
          className="text-amber-300"
        >
          Cloud Study Jams
        </a>
        <br />
        <br />
        Analyze engagement metrics (likes, shares, comments) and tell us what
        are your ideas on reaching out to the audience, and your learnings and
        findings through a blog on Medium/HashNode.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the blog</b>
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
            alert(`Submitted task for social media domain!`);
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
