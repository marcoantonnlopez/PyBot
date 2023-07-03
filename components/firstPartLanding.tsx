import Link from 'next/link';
import React from 'react';

export default function FirstPartLanding() {
  return (
    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <img
        src="logo.svg"
        alt="Logo"
        className="mb-8 w-65 float-left "
        width={200}
        height={300}
      />

      <p className="leading-normal text-base md:text-4xl text-center md:text-left mb-2 font-bold">
        Unlock the Power of Python with PyBot
      </p>
      <h6 className="text-white opacity-75 leading-tight text-center md:text-left mb-8 ">
        Powered by ChatGPT
      </h6>

      <div className="flex items-center justify-between pt-4">
        {/* <Link href="/chat.tsx" passHref={true}>
          <button className="bg-primary hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-primary text-white font-bold py-2 px-4 rounded-md focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
            Start
          </button>
        </Link> */}

<Link href="#pybot">
<button className="bg-primary hover:bg-gradient-to-r hover:from-primary hover:via-secondary hover:to-primary text-white font-bold py-2 px-4 rounded-md focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
            Start
          </button>
</Link>

      </div>
    </div>
  );
}
