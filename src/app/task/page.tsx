"use client";

import Image from "next/image";
import { DM_Sans } from "next/font/google";
import {
  Box,
  Button,
  ButtonGroup,
  Tabs,
  Tab,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  Radio,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { amber, purple } from "@mui/material/colors";
import { data } from "../form-responses";
import { CheckCircle, Link, User } from "react-feather";
import FileTask from "../components/file-upload";
import AndroidDevelopment from "../components/tasks/android-development";
import MachineLearningDevelopment from "../components/tasks/machine-learning-development";
import FlutterDevelopment from "../components/tasks/flutter-development";
import CloudDevelopment from "../components/tasks/cloud-development";
import WebDevelopment from "../components/tasks/web-development";
import CompetitiveProgrammingDevelopment from "../components/tasks/cp-development";

import Operations from "../components/tasks/operations";
import Creatives from "../components/tasks/creatives";
import SocialMedia from "../components/tasks/social-media";
import PublicRelations from "../components/tasks/public-relations";
import ContentWriting from "../components/tasks/content";
import Logistics from "../components/tasks/logistics";
import Hosting from "../components/tasks/hosting";
import Photography from "../components/tasks/photography";
import { Octokit } from "octokit";
import WomanAmbassador from "../components/tasks/woman-ambassador";
import { getEmail } from "./localStorage";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Task() {
  const [state, setState] = useState(0);
  var [email, setEmail] = useState<string | null | undefined>(undefined);

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    setEmail(getEmail());
    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  const [ableToSubmitApplication, checkApplicationStatus] = useState(true);
  const theme = createTheme({
    palette: {
      primary: {
        main: amber[600],
      },
      secondary: {
        main: "#d97706",
      },
    },
  });
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_API_KEY,
  });
  //TODO replace email with google sign in mail
  var userdata = data.filter((user) => user["Email Address"] === email)[0];
  userdata === undefined
    ? (userdata = data.filter((user) => user["Your GITAM Email"] === email)[0])
    : userdata;
  const domain =
    userdata === undefined
      ? undefined
      : userdata["Select the domains you're interested in"].split(", ").sort()[
          state
        ];

  const [responses, setResponse] = useState<string[] | undefined[] | undefined>(
    userdata === undefined
      ? undefined
      : userdata["Select the domains you're interested in"]
          .split(", ")
          .map((_) => undefined)
  );
  const [radioIndex, setRadioIndex] = useState(0);
  return email === null ? (
    <ThemeProvider theme={theme}>
      <main
        className={`flex overflow-y-clip h-screen flex-col lg:flex-row items-center justify-center ${dmSans.className}`}
      >
        <CircularProgress />
      </main>
    </ThemeProvider>
  ) : userdata === undefined ? (
    <ThemeProvider theme={theme}>
      <main
        className={`flex overflow-y-clip h-screen flex-col items-center justify-center ${dmSans.className}`}
      >
        <User className="w-8 h-8 mb-8" />
        <h1 className="text-2xl">User not found</h1>
        <p className="mt-4">
          Please try with the mail you&apos;ve filled in the Google Form.
        </p>
        <p className="mt-2">
          If you have not filled in the Google form,{" "}
          <a href="mailto:dsc.gitam@gmail.com" className="text-amber-500">
            share your interest here
          </a>
        </p>
      </main>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <main
        className={`flex overflow-y-clip h-screen flex-col lg:flex-row items-center justify-between ${dmSans.className}`}
      >
        <img
          src={isDarkTheme ? "/dark-left-header.png" : "/left-header.png"}
          className="h-screen w-auto"
          alt='DSC GITAM Logo'
        />
        <div className={`w-full h-screen p-12 space-y-3 overflow-y-scroll`}>
          <h1 className="text-5xl">Welcome back,</h1>
          <h2 className="text-3xl">{userdata.Name}</h2>
          {/*TODO Change the placeholder text showing we can't wait to check your application*/}
          <p>
            Thank you for applying to be a part of the core team of Google
            Developer Student Clubs, GITAM University. Your dedication and
            passion are truly inspiring.
            <br />
            To move forward, please submit your required tasks below. We&apos;re
            excited to review your work and learn more about you.
          </p>
          <StyledEngineProvider injectFirst>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                textColor="primary"
                value={state}
                onChange={(_, value) => {
                  setState(value);
                  setRadioIndex(0);
                }}
                aria-label="basic tabs example"
                className="flex"
              >
                {userdata["Select the domains you're interested in"]
                  .split(", ")
                  .sort()
                  .map((tab, i) => {
                    console.log("User application: " + tab);
                    return (
                      <Tab
                        key={tab}
                        className={`text-inherit ${dmSans.className} font-normal  normal-case`}
                        label={tab}
                        icon={
                          responses === undefined ||
                          responses[state] === undefined ? undefined : (
                            <CheckCircle className="w-4 h-4" />
                          )
                        }
                        iconPosition="end"
                      />
                    );
                  })}
              </Tabs>
            </Box>
            <div>
              {domain === "Android Development" ? (
                <AndroidDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      console.log(responses);
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                  user={userdata.Name}
                  email={
                    userdata["Email Address"] || userdata["Your GITAM Email"]
                  }
                  octokit={octokit}
                />
              ) : domain === "Machine Learning" ? (
                <MachineLearningDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                  user={userdata.Name}
                  email={
                    userdata["Email Address"] || userdata["Your GITAM Email"]
                  }
                  octokit={octokit}
                />
              ) : domain === "Flutter" ? (
                <FlutterDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                  user={userdata.Name}
                  email={
                    userdata["Email Address"] || userdata["Your GITAM Email"]
                  }
                  octokit={octokit}
                />
              ) : domain === "Cloud" ? (
                <CloudDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                />
              ) : domain === "Web Development" ? (
                <WebDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                  user={userdata.Name}
                  email={
                    userdata["Email Address"] || userdata["Your GITAM Email"]
                  }
                  octokit={octokit}
                />
              ) : domain === "Competitive Programming" ? (
                <CompetitiveProgrammingDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                />
              ) : domain === "Women Ambassador" ? (
                <WomanAmbassador
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                />
              ) : domain === "Operations" ? (
                <Operations
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                />
              ) : domain === "Graphic Designing" ? (
                <Creatives
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                  user={userdata.Name}
                  email={
                    userdata["Email Address"] || userdata["Your GITAM Email"]
                  }
                  octokit={octokit}
                />
              ) : domain === "Social Media and Marketing" ? (
                <SocialMedia
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                />
              ) : domain === "Public Relations" ? (
                <PublicRelations
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                />
              ) : domain === "Content Writing" ? (
                <ContentWriting
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                />
              ) : domain === "Logistics" ? (
                <Logistics
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                  user={userdata.Name}
                  email={
                    userdata["Email Address"] || userdata["Your GITAM Email"]
                  }
                  octokit={octokit}
                />
              ) : domain === "Event Hosting (Anchoring)" ? (
                <Hosting
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                  user={userdata.Name}
                  email={
                    userdata["Email Address"] || userdata["Your GITAM Email"]
                  }
                  octokit={octokit}
                />
              ) : domain === "Photography/ Videography" ? (
                <Photography
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                  response={
                    responses === undefined ? undefined : responses[state]
                  }
                  setResponse={(response: string) => {
                    if (responses === undefined) {
                      alert("Error occured. Please try again.");
                    } else {
                      responses[state] = response;
                      checkApplicationStatus(
                        responses === undefined ||
                          responses.filter((value) => value === undefined)
                            .length >= 1
                      );
                    }
                  }}
                  user={userdata.Name}
                  email={
                    userdata["Email Address"] || userdata["Your GITAM Email"]
                  }
                  octokit={octokit}
                />
              ) : (
                <div></div>
              )}
            </div>
          </StyledEngineProvider>
          <Button
            variant="contained"
            disabled={ableToSubmitApplication}
            onClick={async () => {
              const request = await octokit.request(
                "GET /repos/dsc-gitam/recruitment-tasks-23/contents/applications.json",
                {
                  owner: "dsc-gitam",
                  repo: "recruitment-tasks-23",
                  path: "contents/applications.json",
                  headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                  },
                }
              );
              const sha = request.data["sha"];
              const content = atob(request.data["content"]);
              const data = JSON.parse(content);
              data["applications"].push({
                user: email,
                responses: responses,
              });
              const application = JSON.stringify(data, null, 2);
              await octokit.request(
                "PUT /repos/dsc-gitam/recruitment-tasks-23/contents/applications.json",
                {
                  owner: "dsc-gitam",
                  repo: "recruitment-tasks-23",
                  path: "contents/applications.json",
                  message: `Submit ${userdata.Name}'s application`,
                  committer: {
                    name: userdata.Name,
                    email: email,
                  },
                  content: btoa(application),
                  sha: sha,
                  headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                  },
                }
              );
              checkApplicationStatus(true);
              alert("Submitted Application Successfully");
            }}
          >
            Submit Application
          </Button>
        </div>
      </main>
    </ThemeProvider>
  );
}
