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
import { Octokit } from "octokit";
import { getBase64 } from "../get_base64";

export default function Photography(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
  user: string;
  email: string;
  octokit: Octokit;
}) {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isLoading, setLoader] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [fileSizeExceedsLimit, setFileSizeExceedsLimit] = useState(false);

  const onFileSelected = (selectedFile: File) => {
    if (selectedFile.size > 5 * 1024 * 1024) {
      setFileSizeExceedsLimit(true);
    } else {
      setFile(selectedFile);
      setFileSizeExceedsLimit(false);
    }
  };

  return isLoading ? (
    <div className="flex items-center justify-center">
      <CircularProgress />
    </div>
  ) : (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Capture high-quality photos or create a short video montage (1-2
        minutes) highlighting a recent tech event or project. Edit and present
        the visuals effectively.
        <br />
      </p>
      <div className="my-2">
        <b>Upload the task</b>
      </div>
      {!fileSizeExceedsLimit && (
        <FileTask
          user={props.user}
          domain={"photography"}
          taskName={"file"}
          onFileSelected={onFileSelected}
        />
      )}
      {fileSizeExceedsLimit && (
        <div className="text-center">
          <p className="text-lg text-red-500">
            The file size exceeds the limit of 5MB. Please upload a google drive
            link.
          </p>
          <LinkEditText
            value={fileUrl}
            onChange={(value) => {
              setFileUrl(value);
            }}
          />
        </div>
      )}
      <Button
        variant="outlined"
        onClick={async () => {
          if (file !== undefined) {
            const url = `contents/${props.user}/photography/${file.name}`;
            setLoader(true);
            await getBase64(file).then(async (data) => {
              await props.octokit.rest.repos.createOrUpdateFileContents({
                owner: "dsc-gitam",
                repo: "recruitment-tasks-23",
                path: url,
                message: "Commit with REST",
                content: btoa(atob(data.split(",")[1])),
                committer: {
                  name: props.user,
                  email: props.email,
                },
              });
            });
            props.setResponse(
              JSON.stringify({
                file: url,
              })
            );
            setLoader(false);
            alert(`Submitted task for Photography domain!`);
          } else if (fileUrl !== "") {
            setLoader(true);
            props.setResponse(
              JSON.stringify({
                file: fileUrl,
              })
            );
            setLoader(false);
            alert(`Submitted task for Photography domain!`);
          } else {
            alert("Please upload a file or provide a valid url.");
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
