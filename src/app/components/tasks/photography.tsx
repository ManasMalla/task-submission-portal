import { InputAdornment, Radio, TextField } from '@mui/material';
import { Link } from 'react-feather';
import FileTask from '../file-upload';
import { useState } from 'react';

export default function Photography(props: {
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
        Capture high-quality photos or create a short video montage (1-2
        minutes) highlighting a recent tech event or project. Edit and present
        the visuals effectively.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the task</b>
      </div>
      <FileTask user={props.user} domain={'photography'} taskName={'file'} />
    </div>
  );
}
