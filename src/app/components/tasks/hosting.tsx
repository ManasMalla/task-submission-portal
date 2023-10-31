import { InputAdornment, Radio, TextField } from '@mui/material';
import { Edit3, Link } from 'react-feather';
import FileTask from '../file-upload';
import { useState } from 'react';

export default function Hosting(props: {
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
          <FileTask user={props.user} domain={'hosting'} taskName={'video'} />
        </li>
      </ol>
    </div>
  );
}
