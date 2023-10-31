import { Button, InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";
import { useState } from "react";
import LinkEditText from "../link-edit-text";

export default function AndroidDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
}) {
  const [file, setFile] = useState(undefined);
  const [report, setReport] = useState("");
  const [recording, setRecording] = useState("");
  return (
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
      <FileTask taskName={undefined} />
      <div>Brief Report</div>
      <p>
        Provide a brief report on the app’s working and developer journey
        through a blog on Medium/HashNode.{" "}
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
      <Button variant="outlined" onClick={() => {}}>
        Submit Task
      </Button>
    </div>
  );
}
