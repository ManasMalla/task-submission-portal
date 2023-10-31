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

import { useState, useEffect } from "react";
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

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import GoogleSSO from "./components/google-sso";
import { useRouter } from "next/navigation";

const dmSans = DM_Sans({ subsets: ["latin"] });
export type dataCredential = {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
};

export default function Home() {
  const router = useRouter();
  // window.handleGoogleSignIn = (gs: any) => {
  //   console.log(gs);
  //   router.push("/task");
  // };
  return (
    <main
      className={`flex overflow-y-clip h-screen flex-col lg:flex-row lg:items-end justify-end lg:justify-between ${dmSans.className}`}
    >
      <script src="https://accounts.google.com/gsi/client" async></script>

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
          {/* <div
            id="g_id_onload"
            data-client_id="1010379975924-uu04sdp61suebvkkvshj7vgbcu4aami2.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-callback="handleGoogleSignIn"
            data-auto_select="true"
            data-itp_support="true"
          ></div> */}
          {/* <div
            className="g_id_signin"
            data-type="standard"
            data-shape="pill"
            data-theme="outline"
            data-text="continue_with"
            data-size="large"
            data-logo_alignment="left"
          ></div> */}
          <GoogleSSO
            onSuccess={(res) => {
              window.localStorage.setItem(
                "email",
                (jwtDecode(res.credential) as dataCredential).email
              );
              router.push("/task");
            }}
          />
        </div>
      </div>
    </main>
  );
}
