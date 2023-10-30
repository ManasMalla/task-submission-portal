import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function SocialMedia(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Create and execute a social media post promoting the upcoming{" "}
        <a
          href="https://cloudonair.withgoogle.com/cloud-study-jam"
          className="text-amber-300"
        >
          Cloud Study Jams
        </a>
        <br />
        <br />
        Analyze engagement metrics (likes, shares, comments) and tell us what
        are your ideas on reaching out to the audience, and your learnings and
        findings through a blog on Medium/HashNode.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the blog</b>
      </div>
      <TextField
        className="my-3 w-full"
        placeholder="Link"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Link />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
