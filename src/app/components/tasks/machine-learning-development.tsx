import { InputAdornment, Radio, TextField } from '@mui/material';
import { Link } from 'react-feather';
import FileTask from '../file-upload';
import LinkEditText from '../link-edit-text';
import { useState } from 'react';

export default function MachineLearningDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
  user: string;
}) {
  const [report, setReport] = useState('');
  const [recording, setRecording] = useState('');
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        <span className="ml-4">
          Train a basic machine learning model (e.g., linear regression) using a
          popular library like TensorFlow or scikit-learn.
        </span>
        <br />
      </p>
      <FileTask
        user={props.user}
        domain={'machine-learning'}
        taskName={'model'}
      />
      <div>Brief Report</div>
      <p>
        Provide a brief report on the model&apos;s accuracy, performance, application
        and usage through a blog on Medium/HashNode.
      </p>
      <LinkEditText
        value={recording}
        onChange={(value) => {
          setRecording(value);
        }}
      />
    </div>
  );
}
