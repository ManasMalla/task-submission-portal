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

export default function Creatives(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
  user: string;
  email: string;
  octokit: Octokit;
}) {
  const [reel, setReelUrl] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

  const [file2, setFile2] = useState<File | undefined>(undefined);
  const [isLoading, setLoader] = useState(false);
  return isLoading ? (
    <div className="flex items-center justify-center">
      <CircularProgress />
    </div>
  ) : (
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
          <FileTask
            user={props.user}
            domain={"creatives"}
            taskName={"post"}
            onFileSelected={(file) => {
              setFile(file);
            }}
          />
        </li>
        <li>
          <b>
            Make a short reel about the GDSC Program that we are going to have
            in our college.
          </b>

          <div className="my-2">
            <b>Link to reel</b>
          </div>
          <LinkEditText
            value={reel}
            onChange={(value) => {
              setReelUrl(value);
            }}
          />
        </li>
        <li>
          <b>Prepare an infographic sharing your findings and learnings.</b>

          <FileTask
            user={props.user}
            domain={"creatives2"}
            taskName={"infographic"}
            onFileSelected={(file) => {
              setFile2(file);
            }}
          />
        </li>
      </ol>
      <p>
        Make sure you use only the Google Colors and Google Fonts. Do Google
        about finding what they are :)
      </p>
      <Button
        variant="outlined"
        onClick={async () => {
          if (reel === "") {
            alert("Provide a valid url to the reel.");
          } else {
            if (file2 === undefined || file === undefined) {
              alert("Upload a valid task");
            } else {
              const url = `contents/${props.user}/creatives/${file.name}`;
              const url2 = `contents/${props.user}/creatives/${file2.name}`;
              setLoader(true);
              const data2 = await getBase64(file2);
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
                await props.octokit.rest.repos.createOrUpdateFileContents({
                  owner: "dsc-gitam",
                  repo: "recruitment-tasks-23",
                  path: url2,
                  message: "Commit with REST",
                  content: btoa(atob(data2.split(",")[1])),
                  committer: {
                    name: props.user,
                    email: props.email,
                  },
                });
              });
              props.setResponse(
                JSON.stringify({
                  reel: reel,
                  file2: file2,
                  file: url,
                })
              );
              setLoader(false);
              alert(`Submitted task for creatives domain!`);
            }
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
