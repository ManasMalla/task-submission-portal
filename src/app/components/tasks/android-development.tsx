'use client';
import {
  Button,
  CircularProgress,
  InputAdornment,
  Radio,
  TextField,
} from '@mui/material';
import { Link } from 'react-feather';
import FileTask from '../file-upload';
import { use, useState } from 'react';
import LinkEditText from '../link-edit-text';
import { Octokit } from 'octokit';
import { getBase64 } from '../get_base64';

export default function AndroidDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
  user: string;
  email: string;
  octokit: Octokit;
}) {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState('');
  const [fileSizeExceedsLimit, setFileSizeExceedsLimit] = useState(false);
  const [report, setReport] = useState('');
  const [recording, setRecording] = useState('');
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
        Create either of the following simple Android app:
        <br />
        <span className="ml-4">
          <Radio
            checked={props.radioIndex == 0}
            color="secondary"
            onChange={(index) => {
              props.setRadioIndex(0);
            }}
          />
          <b className="text-amber-600 dark:text-amber-500">
            Flashcard Quiz App
          </b>
          : Create a flashcard app for studying. Users can create decks of
          flashcards with questions and answers. The app should allow users to
          quiz themselves and track their progress.
        </span>
        <br />
        <span className="ml-4">
          <Radio
            checked={props.radioIndex == 1}
            color="secondary"
            onChange={(index) => {
              props.setRadioIndex(1);
            }}
          />
          <b className="text-amber-600 dark:text-amber-500">Recipe Book App</b>:
          Develop a recipe book app where users can add and browse recipes.
          Include features for adding ingredients, steps, and images for each
          recipe.
        </span>
      </p>
      <FileTask
        user={props.user}
        domain={'android'}
        taskName={undefined}
        onFileSelected={onFileSelected}
      />
      {fileSizeExceedsLimit && (
        <div>
          <p className="text-lg text-red-500">
            The file size exceeds the limit of 5MB. Please upload a google drive
            link.
          </p>
          <LinkEditText
            value={report}
            onChange={(value) => {
              setReport(value);
            }}
          />
        </div>
      )}
      <div>Brief Report</div>
      <p>
        Provide a brief report on the app’s working and developer journey
        through a blog on Medium/HashNode.{' '}
      </p>
      <LinkEditText
        value={report}
        onChange={(value) => {
          setReport(value);
        }}
      />
      <div>Screen recording</div>
      <p>
        You can also share a screen recording when you are building the app to
        be featured on the official DSC handle.
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
          if (report === '') {
            alert('Provide a valid url to the blog.');
          } else {
            if (file === undefined || fileUrl === '') {
              alert('Upload a valid task');
            } else {
              const url = `contents/${props.user}/android/${file.name}`;
              setLoader(true);
              await getBase64(file).then(async (data) => {
                await props.octokit.rest.repos.createOrUpdateFileContents({
                  owner: 'dsc-gitam',
                  repo: 'recruitment-tasks-23',
                  path: url,
                  message: 'Commit with REST',
                  content: btoa(atob(data.split(',')[1])),
                  committer: {
                    name: props.user,
                    email: props.email,
                  },
                });
              });
              props.setResponse(
                JSON.stringify({
                  report: report,
                  recording: recording,
                  file: fileUrl === '' ? url : fileUrl,
                })
              );
              setLoader(false);
              alert(`Submitted task for Android domain!`);
            }
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
