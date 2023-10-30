import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function MachineLearningDevelopment(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
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
      <FileTask taskName={"model"} />
      <div>Brief Report</div>
      <p>
        Provide a brief report on the model's accuracy, performance, application
        and usage through a blog on Medium/HashNode.
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
