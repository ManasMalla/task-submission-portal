import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function FlutterDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
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
      <FileTask taskName={undefined} />
      <div>Brief Report</div>
      <p>
        Provide a brief report on the app’s performance and developer journey
        through a blog on Medium/HashNode.
      </p>
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
      <div>Screen recording</div>
      <p>
        You can also share a screen recording when you are building the app to
        be featured on the official DSC handle.
      </p>
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
