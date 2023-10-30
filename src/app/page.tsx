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
} from "@mui/material";

import { useState } from "react";
import { amber, purple } from "@mui/material/colors";
import { data } from "./form-responses";
import { Link } from "react-feather";
import FileTask from "./components/file-upload";
import AndroidDevelopment from "./components/tasks/android-development";
import MachineLearningDevelopment from "./components/tasks/machine-learning-development";
import FlutterDevelopment from "./components/tasks/flutter-development";
import CloudDevelopment from "./components/tasks/cloud-development";
import WebDevelopment from "./components/tasks/web-development";
import CompetitiveProgrammingDevelopment from "./components/tasks/cp-development";
import WomanAmbassador from "./components/tasks/woman-ambassador";
import Operations from "./components/tasks/operations";
import Creatives from "./components/tasks/creatives";
import SocialMedia from "./components/tasks/social-media";
import PublicRelations from "./components/tasks/public-relations";
import ContentWriting from "./components/tasks/content";
import Logistics from "./components/tasks/logistics";
import Hosting from "./components/tasks/hosting";
import Photography from "./components/tasks/photography";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  <script src="https://apis.google.com/js/platform.js" async defer></script>;
  return (
    <main
      className={`flex overflow-y-clip h-screen flex-col lg:flex-row lg:items-end justify-end lg:justify-between ${dmSans.className}`}
    >
      <img
        src="gdsc-gitam.jpg"
        className="w-full h-screen object-top object-cover overflow-clip"
      />
      <div className="w-full h-screen bg-black opacity-[55%] absolute z-10" />
      <div className="absolute z-20 text-white">
        <div className="px-6 py-3 lg:p-12">
          {" "}
          <div className="flex">
            <img src="logo-gdg.png" className="h-8 mr-4" />
            <div>
              <h1 className="text-lg lg:text-3xl">
                Google Developer Student Clubs
              </h1>
              <h2 className="text-[0.8rem] lg:text-lg opacity-70">
                Gandhi Institute of Technology and Management
              </h2>
            </div>
          </div>
          <p className="text-sm lg:text-base lg:w-[48ch] ">
            <br />
            Authenticate with the email address that you have filled in the
            Google Forms with. If you aren't sure, just authenticate with your
            GITAM email address.
          </p>
          <div id="gy-signin2"></div>
          <button className="gsi-material-button my-4">
            <div className="gsi-material-button-state"></div>
            <div className="gsi-material-button-content-wrapper">
              <div className="gsi-material-button-icon">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  style={{ display: "block" }}
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className="gsi-material-button-contents px-2">
                Sign in with Google
              </span>
              <span
                className=" px-2"
                style={{
                  display: "none",
                }}
              >
                Sign in with Google
              </span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
