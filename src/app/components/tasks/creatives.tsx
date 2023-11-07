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
  const [fileUrl, setFileUrl] = useState("");
  const [fileUrl2, setFileUrl2] = useState("");
  const [fileSizeExceedsLimit, setFileSizeExceedsLimit] = useState(false);
  const [isLoading, setLoader] = useState(false);

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
          {!fileSizeExceedsLimit && (
            <FileTask
              user={props.user}
              domain={"web"}
              taskName={"website code"}
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

          {!fileSizeExceedsLimit && (
            <FileTask
              user={props.user}
              domain={"creatives"}
              taskName={"creatives"}
              onFileSelected={(selectedFile) => {
                if (selectedFile.size > 5 * 1024 * 1024) {
                  setFileSizeExceedsLimit(true);
                } else {
                  setFile2(selectedFile);
                  setFileSizeExceedsLimit(false);
                }
              }}
            />
          )}
          {fileSizeExceedsLimit && (
            <div className="text-center">
              <p className="text-lg text-red-500">
                The file size exceeds the limit of 5MB. Please upload a google
                drive link.
              </p>
              <LinkEditText
                value={fileUrl2}
                onChange={(value) => {
                  setFileUrl2(value);
                }}
              />
            </div>
          )}
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
            var url = fileUrl;
            var url2 = fileUrl2;
            if (file !== undefined) {
              url = `contents/${props.user}/creatives/${file.name}`;
            }
            if (file2 !== undefined) {
              url2 = `contents/${props.user}/creatives/${file2.name}`;
            }
            if (url2 === "") {
              alert("Provide a valid file/url to the infographic.");
            } else if (url2 === "") {
              alert("Provide a valid file/url to the infographic.");
            } else {
              setLoader(true);
              if (file2 != undefined) {
                const data2 = await getBase64(file2);
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
              }
              if (file !== undefined) {
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
              }
              props.setResponse(
                JSON.stringify({
                  reel: reel,
                  file: url,
                  file2: url2,
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
