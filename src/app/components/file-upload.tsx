import { Octokit } from "octokit";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
  useState,
} from "react";

export default function FileTask(props: {
  taskName: string | undefined | null;
  user: string | undefined | null;
  domain: string | undefined | null;
  onFileSelected: (arg0: File) => void;
}) {
  const [file, setFile] = useState<File | undefined>(undefined);
  return (
    <div className="flex">
      {file === undefined ? (
        <div />
      ) : (
        <div className="m-4 px-8 py-3 bg-amber-400 text-center rounded-md dark:bg-slate-800">
          Selected: {file.name}
        </div>
      )}
      {file === undefined ? (
        <div />
      ) : (
        <div
          className="m-4 px-8 py-3 bg-red-700 text-center text-white rounded-md dark:bg-slate-800 cursor-pointer"
          onClick={() => {
            setFile(undefined);
          }}
        >
          Remove File
        </div>
      )}
      <div
        className="grow m-4 px-8 py-3 bg-amber-100 text-center rounded-md dark:bg-slate-800 cursor-pointer"
        onClick={() => {
          var input = document.createElement("input");
          input.type = "file";

          input.onchange = async (e) => {
            // getting a hold of the file reference
            if (e.target === null) {
              alert(
                "Oops. Couln't initialize the file selector. Please try again after a refresh after having a copy of your work."
              );
            } else {
              var files = (e.target as HTMLInputElement).files;
              if (files === null) {
                alert(
                  "Please upload a valid file to be considered as your task."
                );
              } else {
                var file = files[0];
                setFile(file);
                props.onFileSelected(file);
              }
            }
          };

          input.click();
        }}
      >
        {file === undefined ? "Upload" : "Re-upload"} the{" "}
        {props.taskName === undefined ? "Application Code" : props.taskName}
      </div>
    </div>
  );
}
