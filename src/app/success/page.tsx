import { DM_Sans } from 'next/font/google';
import React from 'react';
import { User } from 'react-feather';

const dmSans = DM_Sans({ subsets: ["latin"] });
function success() {
  return (
    <div
      className={`flex overflow-y-clip h-screen flex-col items-center justify-center ${dmSans.className}`}
    >
      <User className="w-8 h-8 mb-8" />
      <h1 className="text-2xl">Application Submitted</h1>
      <p className="mt-4">
        You&apos;ve submitted Successfully. We will get back to you soon.
      </p>
    </div>
  );
}

export default success;
