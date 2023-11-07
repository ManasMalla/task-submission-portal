"use client";
import { DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import CreditCard from "../components/credit-card";

const dmSans = DM_Sans({ subsets: ["latin"] });
export default function Info() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  return (
    <main
      className={`flex lg:overflow-y-clip h-screen flex-col lg:flex-row items-center justify-between ${dmSans.className}`}
    >
      <img
        src={isDarkTheme ? "/dark-left-header.png" : "/left-header.png"}
        className="h-screen w-auto hidden lg:flex"
        alt="DSC GITAM Logo"
      />
      <img
        src={"/banner.png"}
        className="w-auto lg:hidden"
        alt="DSC GITAM Logo"
      />
      <div className={`w-full h-screen p-12 space-y-3 lg:overflow-y-scroll`}>
        <h1 className="text-5xl">Info</h1>
        <p>
          We extend our heartfelt gratitude to the incredible team behind this
          project and the many dedicated contributors who have poured their time
          and expertise into making this platform a reality.
          <br />
          <br />
          We also want to express our special thanks to those who have offered
          their valuable advice and support throughout this journey. Our testing
          and quality assurance teams, content writers, marketing specialists,
          and the entire community of users have played an essential title in
          shaping this project. Your ongoing support, feedback, and dedication
          have been invaluable.
          <br />
          <br />
          This portal wouldn&apos;t have been possible without the exceptional
          contributors who have made this project possible:
          <br />
          <br />
        </p>
        <CreditCard
          name={"Manas Malla"}
          title={"Lead, Google Developer Student Clubs"}
          secondaryRole={"Core Contributor, GDG Vizag"}
          image={"https://github.com/manasmalla.png"}
          role={"Lead Developer"}
        />
        <CreditCard
          name={"Sidharth Philkhana"}
          title={"Applicant, Web Domain"}
          secondaryRole={"Google Developer Student Clubs"}
          image={
            "https://lh3.googleusercontent.com/contacts/ADlvnhJv6cS94HAoukiwyQrFTMVB6CmsywLpmwgzXLIBFacXqDV9sMot=s480-p-k-no"
          }
          role={"Front-End Developer"}
        />
        <CreditCard
          name={"Geethika Chadaram"}
          title={"Applicant, Public Relations Domain"}
          secondaryRole={"Google Developer Student Clubs"}
          image={
            "https://lh3.googleusercontent.com/contacts/ADlvnhJuOITOxFOPrjR0LG-C-o4M1cOv3CSw2jF-5VXnsSJJAVXbwEJH=s544-p-k-no"
          }
          role={"UX Reviewer"}
        />
        <CreditCard
          name={"Satwik Varma"}
          title={"Applicant, Logistics Domain"}
          secondaryRole={"Google Developer Student Clubs"}
          image={
            "https://lh3.googleusercontent.com/contacts/ADlvnhJf25ZmR4RvdvffGYn01KTxcTwIfOgckglAQ3jHE1Q4CP8rwM2D=s480-p-k-no"
          }
          role={"Flight Pilot"}
        />
        <CreditCard
          name={"Sree Teja Dusi"}
          title={"Applicant, Machine Learning Domain"}
          secondaryRole={"Google Developer Student Clubs"}
          image={
            "https://lh3.googleusercontent.com/contacts/ADlvnhLHhlrMVjFS18uPK8VbuS_-DFcfdRcSCu1xeR7HUjKZ7ooR1IMs=s480-p-k-no"
          }
          role={"Code Reviewer"}
        />
        <CreditCard
          name={"Akhila Ravipati"}
          title={"Applicant, Marketing Domain"}
          secondaryRole={"Google Developer Student Clubs"}
          image={
            "https://lh3.googleusercontent.com/contacts/ADlvnhJlTYycDWpQabPb357tn2kfp_QRrx2eRRqaXVXVOOAeF7J1ymmO=s480-p-k-no"
          }
          role={"Test Pilot"}
        />
        <CreditCard
          name={"Lochan Mathukumilli"}
          title={"Student Co-ordinator, E-Club"}
          secondaryRole={"Founder, AutoSmith"}
          image={
            "https://yt3.googleusercontent.com/PsmHJGsHFiZ6xTOJXdd3IooJ5RlVLlYAKKGKWYkMGwv-HBUHXPksCjDtJhmXgG0l_BIpuqq4=s900-c-k-c0x00ffffff-no-rj"
          }
          role={"UX Researcher"}
        />
        <CreditCard
          name={"Ashish Nadh"}
          title={"Applicant, Public Relations"}
          secondaryRole={"Google Developer Student Clubs"}
          image={
            "https://media.licdn.com/dms/image/D5603AQFCTAIB-BBbow/profile-displayphoto-shrink_200_200/0/1695314778175?e=1701907200&v=beta&t=3ph8cHprq-dWSDUqgXZWzgLEutDXojaStWIHAuYTpM4"
          }
          role={"Test Pilot"}
        />
      </div>
    </main>
  );
}
