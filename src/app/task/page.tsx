'use client';

import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
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
} from '@mui/material';

import { useState } from 'react';
import { amber, purple } from '@mui/material/colors';
import { data } from '../form-responses';
import { Link } from 'react-feather';
import FileTask from '../components/file-upload';
import AndroidDevelopment from '../components/tasks/android-development';
import MachineLearningDevelopment from '../components/tasks/machine-learning-development';
import FlutterDevelopment from '../components/tasks/flutter-development';
import CloudDevelopment from '../components/tasks/cloud-development';
import WebDevelopment from '../components/tasks/web-development';
import CompetitiveProgrammingDevelopment from '../components/tasks/cp-development';
import WomanAmbassador from '../components/tasks/woman-ambassador';
import Operations from '../components/tasks/operations';
import Creatives from '../components/tasks/creatives';
import SocialMedia from '../components/tasks/social-media';
import PublicRelations from '../components/tasks/public-relations';
import ContentWriting from '../components/tasks/content';
import Logistics from '../components/tasks/logistics';
import Hosting from '../components/tasks/hosting';
import Photography from '../components/tasks/photography';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Task() {
  const [state, setState] = useState(0);
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const theme = createTheme({
    palette: {
      primary: {
        main: amber[600],
      },
      secondary: {
        main: '#d97706',
      },
    },
  });

  //TODO replace email with google sign in mail
  const userdata = data.filter(
    (user) => user['Email Address'] === 'sphilkha@gitam.in'
  )[0];
  const domain = userdata["Select the domains you're interested in"]
    .split(', ')
    .sort()[state];
  const [radioIndex, setRadioIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <main
        className={`flex overflow-y-clip h-screen flex-col lg:flex-row items-center justify-between ${dmSans.className}`}
      >
        <img
          src={isDarkTheme ? '/dark-left-header.png' : '/left-header.png'}
          className="h-screen w-auto"
        />
        <div className={`w-full h-screen p-12 space-y-3 overflow-y-scroll`}>
          <h1 className="text-5xl">Welcome back,</h1>
          <h2 className="text-3xl">{userdata.Name}</h2>
          {/*TODO Change the placeholder text showing we can't wait to check your application*/}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            est lacus. Donec pellentesque diam in ligula mattis pharetra. Morbi
            vulputate justo ac dui sagittis varius. Pellentesque vitae posuere
            eros, at aliquet orci. Curabitur mattis varius augue porttitor
            eleifend. Nulla sodales felis nisi, ac cursus felis porta ac.
          </p>
          <StyledEngineProvider injectFirst>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                textColor="primary"
                value={state}
                onChange={(_, value) => {
                  setState(value);
                  setRadioIndex(0);
                }}
                aria-label="basic tabs example"
              >
                {userdata["Select the domains you're interested in"]
                  .split(', ')
                  .sort()
                  .map((tab, i) => {
                    console.log('User application: ' + tab);
                    return (
                      <Tab
                        className={`text-inherit ${dmSans.className} font-normal  normal-case`}
                        label={tab}
                      />
                    );
                  })}
              </Tabs>
            </Box>
            <div>
              {domain === 'Android Development' ? (
                <AndroidDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={(index: number) => {
                    setRadioIndex(index);
                  }}
                />
              ) : domain === 'Machine Learning' ? (
                <MachineLearningDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Flutter' ? (
                <FlutterDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Cloud' ? (
                <CloudDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Web Development' ? (
                <WebDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Competitive Programming' ? (
                <CompetitiveProgrammingDevelopment
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Women Ambassador' ? (
                <WomanAmbassador
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Operations' ? (
                <Operations
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Graphic Designing' ? (
                <Creatives
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Social Media and Marketing' ? (
                <SocialMedia
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Public Relations' ? (
                <PublicRelations
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Content Writing' ? (
                <ContentWriting
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Logistics' ? (
                <Logistics
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Event Hosting (Anchoring)' ? (
                <Hosting
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : domain === 'Photography/ Videography' ? (
                <Photography
                  radioIndex={radioIndex}
                  setRadioIndex={setRadioIndex}
                />
              ) : (
                <div></div>
              )}
            </div>
          </StyledEngineProvider>
          <Button variant="contained">Submit Application</Button>
        </div>
      </main>
    </ThemeProvider>
  );
}
