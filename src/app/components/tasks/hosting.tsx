import {
  Button,
  CircularProgress,
  InputAdornment,
  Radio,
  TextField,
} from "@mui/material";
import { Edit3, Link } from "react-feather";
import FileTask from "../file-upload";
import { useState } from "react";
import { Octokit } from "octokit";
import { getBase64 } from "../get_base64";
import LinkEditText from "../link-edit-text";

export default function Hosting(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
  user: string;
  email: string;
  octokit: Octokit;
}) {
  const [speech, setSpeech] = useState("");

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
      <ol className="list-decimal">
        <li>
          <p>
            Write a short speech welcoming the guest for the Info Session that
            we are going to have soon in our college, where we are going to
            officially on-board you as the Core Team Members for the GDSC Club.
            <br />
          </p>
          <div className="my-2">
            <b>Short Speech</b>
          </div>
          <TextField
            className="my-3 w-full"
            placeholder="I, <name>, welcome you all to the Info Session of GDSC <college>...."
            value={speech}
            onChange={(event) => {
              setSpeech(event.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Edit3 />
                </InputAdornment>
              ),
            }}
          />
        </li>
        <li>
          <p>
            Record a short video (1-2 minutes) introducing yourself and the
            Google Developer Student Clubs chapter. Showcase your hosting skills
            and charisma.
          </p>
          {!fileSizeExceedsLimit && (
            <FileTask
              user={props.user}
              domain={"hosting"}
              taskName={"hosting"}
              onFileSelected={onFileSelected}
            />
          )}
          {fileSizeExceedsLimit && (
            <div className="text-center">
              <p className="text-lg text-red-500">
                The file size exceeds the limit of 5MB. Please upload a google
                drive link.
              </p>
              <LinkEditText
                value={fileUrl}
                onChange={(value) => {
                  setFileUrl(value);
                }}
              />
            </div>
          )}
        </li>
      </ol>
      <Button
        variant="outlined"
        onClick={async () => {
          if (speech === "") {
            alert("Provide a valid url to the blog.");
          } else {
            if (file !== undefined) {
              const url = `contents/${props.user}/hosting/${file.name}`;
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
                  speech: speech,
                  file: url,
                })
              );
              setLoader(false);
              alert(`Submitted task for Hosting domain!`);
            } else if (fileUrl !== "") {
              setLoader(true);
              props.setResponse(
                JSON.stringify({
                  speech: speech,
                  file: fileUrl,
                })
              );
              setLoader(false);
              alert(`Submitted task for Hosting domain!`);
            } else {
              alert("Please upload a file or provide a valid url.");
            }
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
