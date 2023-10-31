import { InputAdornment, TextField } from "@mui/material";
import { Link } from "react-feather";

export default function LinkEditText(props: {
  value: unknown;
  onChange: (arg0: string) => void;
}) {
  return (
    <TextField
      className="my-3 w-full"
      placeholder="Link"
      value={props.value}
      onChange={(event) => {
        props.onChange(event.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Link />
          </InputAdornment>
        ),
      }}
    />
  );
}
