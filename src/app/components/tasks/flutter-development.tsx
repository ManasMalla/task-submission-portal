import {
  Button,
  CircularProgress,
  InputAdornment,
  Radio,
  TextField,
} from '@mui/material';
import { Link } from 'react-feather';
import FileTask from '../file-upload';
import LinkEditText from '../link-edit-text';
import { useState } from 'react';
import { Octokit } from 'octokit';
import { getBase64 } from '../get_base64';

export default function FlutterDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
  user: string;
  email: string;
  octokit: Octokit;
}) {
  const [report, setReport] = useState('');
  const [recording, setRecording] = useState('');
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState('');
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
        Build a basic Flutter app that (any one):
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
            Flutter News Reader App
          </b>
          : Create a news reader app that fetches and displays
          news/blogs/articles from various sources about the Flutter Platform.
          Allow users to filter news by category and save articles for offline
          reading.
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
          <b className="text-amber-600 dark:text-amber-500">
            Movie Recommendation App
          </b>
          : Create an app that recommends movies to users based on their
          preferences and ratings. Integrate with a movie API to fetch movie
          details and posters.
        </span>
        <br />
        <span className="ml-4">
          <Radio
            checked={props.radioIndex == 2}
            color="secondary"
            onChange={(index) => {
              props.setRadioIndex(2);
            }}
          />
          <b className="text-amber-600 dark:text-amber-500">
            Expense Sharing App
          </b>
          : Develop an app that helps groups of people split expenses easily,
          ideal for roommates or friends traveling together. Allow users to add
          expenses, specify payers, and settle debts.
        </span>
      </p>
      {!fileSizeExceedsLimit && (
        <FileTask
          user={props.user}
          domain={'flutter'}
          taskName={'flutter code'}
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
        Provide a brief report on the app’s performance and developer journey
        through a blog on Medium/HashNode.
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
              const url = `contents/${props.user}/flutter/${file.name}`;
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
              alert(`Submitted task for Flutter domain!`);
            }
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
