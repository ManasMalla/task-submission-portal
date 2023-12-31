import {
  Button,
  CircularProgress,
  InputAdornment,
  Radio,
  TextField,
} from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";
import LinkEditText from "../link-edit-text";
import { useState } from "react";

export default function PublicRelations(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
  response: string | undefined;
  setResponse: (arg0: string) => void;
}) {
  const [blog, setBlog] = useState("");
  const [isLoading, setLoader] = useState(false);
  return isLoading ? (
    <div className="flex items-center justify-center">
      <CircularProgress />
    </div>
  ) : (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Pay close attention to the upcoming GUSAC carnival and the preparations
        surrounding it. <br />
        <br />
        If you are not actively participating in the festival, gather pertinent
        information about the event, including any notable achievements and
        statistics, from fellow attendees.
        <br />
        <br />
        Use this information to craft a press release or news article spanning
        300 to 500 words through a blog on Medium/HashNode.
        <br />
        <br />
        The article should capture the enthusiasm and interest displayed by
        students in participating in the GUSAC carnival, delve into its
        organization, and provide a succinct summary of the event&apos;s
        significance.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the blog</b>
      </div>
      <LinkEditText
        value={blog}
        onChange={(value) => {
          setBlog(value);
        }}
      />
      <Button
        variant="outlined"
        onClick={async () => {
          if (blog === "") {
            alert("Provide a valid url to the blog.");
          } else {
            setLoader(true);
            props.setResponse(
              JSON.stringify({
                blog: blog,
              })
            );
            setLoader(false);
            alert(`Submitted task for public relations domain!`);
          }
        }}
      >
        Submit Task
      </Button>
    </div>
  );
}
