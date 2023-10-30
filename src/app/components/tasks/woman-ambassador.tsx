import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function WomanAmbassador(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Complete the following:
        <br />
      </p>
      <ol className="list-decimal my-2 space-y-2">
        <li>
          <b>
            Write a short essay (500 words) on the importance of diversity and
            inclusion in the tech industry.
          </b>{" "}
          Share your ideas for promoting gender diversity in tech through a blog
          on Medium/HashNode.
        </li>
        <li>
          <b>
            Design a poster or infographic that raises awareness of a specific
            women's issue.
          </b>{" "}
          The poster or infographic should be visually appealing and easy to
          understand, and it should communicate the student's message in a clear
          and concise way. Include the poster or infographic in the blog you’ve
          written in step (i).
        </li>
        <li>
          <b>
            Launch a podcast to share stories and insights from women in and
            around you, highlighting their challenges and try coming up with
            solutions or talk through them, making them feel better.
          </b>{" "}
          This could be a great way to inspire other women and raise awareness
          of the challenges and opportunities that women face in the
          organization.
        </li>
      </ol>
      <p>Take the help of AI, if you need, only for the first two tasks</p>
      <div className="my-2">
        <b>Link to Blog (for task 1 and 2)</b>
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
      <div className="my-2">
        <b>Link to Podcast</b>
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
