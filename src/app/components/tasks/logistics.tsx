import { InputAdornment, Radio, TextField } from '@mui/material';
import { Link } from 'react-feather';
import FileTask from '../file-upload';
import { useState } from 'react';

export default function Logistics(props: {
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
        Plan a hypothetical tech event, including venue selection, budget
        estimation, vendor selection for food and banners, their address, and a
        rough schedule. Create a comprehensive event proposal.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the event proposal</b>
      </div>
      <FileTask
        user={props.user}
        domain={'logistics'}
        taskName={'event proposal'}
      />
    </div>
  );
}
