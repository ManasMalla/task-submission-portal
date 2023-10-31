import { Octokit } from "octokit";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
} from "react";

export default function FileTask(props: {
  taskName: string | undefined | null;
}) {
  const octokit = new Octokit({
    auth: "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",
  });
  return (
    <div
      className="m-4 px-8 py-3 bg-amber-100 text-center rounded-md dark:bg-slate-800 cursor-pointer"
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
              alert(`File selected: ${file.name}`);
              await octokit.rest.repos.createOrUpdateFileContents({
                owner: "dsc-gitam",
                repo: "recruitment-tasks-23",
                path: "contents/$userId/test.txt",
                message: "Commit with REST",
                content: "Hi",
              });
            }
          }
        };

        input.click();
      }}
    >
      Upload the{" "}
      {props.taskName === undefined ? "Application Code" : props.taskName}
    </div>
  );
}
