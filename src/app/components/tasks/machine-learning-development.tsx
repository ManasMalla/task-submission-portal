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

export default function MachineLearningDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
  user: string;
  email: string;
  octokit: Octokit;
}) {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [report, setReport] = useState("");
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
        <span className="ml-4">
          Train a basic machine learning model (e.g., linear regression) using a
          popular library like TensorFlow or scikit-learn.
        </span>
        <br />
      </p>
      {!fileSizeExceedsLimit && (
        <FileTask
          user={props.user}
          domain={"machine-learning"}
          taskName={"model"}
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
      <div>Brief Report</div>
      <p>
        Provide a brief report on the model&apos;s accuracy, performance,
        application and usage through a blog on Medium/HashNode.
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
            if (file !== undefined) {
              const url = `contents/${props.user}/machine-learning/${file.name}`;
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
                  report: report,
                  file: url,
                })
              );
              setLoader(false);
              alert(`Submitted task for Machine Learning domain!`);
            } else if (fileUrl !== "") {
              setLoader(true);
              props.setResponse(
                JSON.stringify({
                  report: report,
                  file: fileUrl,
                })
              );
              setLoader(false);
              alert(`Submitted task for Machine Learning domain!`);
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
