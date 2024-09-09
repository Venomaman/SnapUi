import Image from "next/image";
import Link from "next/link";
import { FaUikit } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { TbCode } from "react-icons/tb";
import { MdChangeHistory } from "react-icons/md";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <AboutSection />
      <Features />
      <Footer/>
    </div>
  );
}

function Features() {
  const features = [
    {
      id: 1,
      name: "Centralized Component Liabrary",
      icon: <MdStorage />,
      description:
        "Organise all your React components in a centralized library. Easily browse, search, and access your saved components whenever you need them",
    },
    {
      id: 2,
      name: "Reusable Components",
      icon: <TbCode />,
      description:
        "Create and edit your React components directly within our intuative editor, write JSX code with highlight and instant preview",
    },
    {
      id: 3,
      name: "Centralized Component Liabrary",
      icon: <MdChangeHistory />,
      description:
        "Track changes and maintain different versions of your components, Revert to previous version if needed and keep a history of modification.",
    },
  ];

  return (
    <section className="bg-slate-50 mt-12 py-10">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-slate-700">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-white p-7 rounded-xl shadow-sm"
            >
              <div className="p-6 items-center flex justify-center bg-sky-100 rounded-full w-16 h-16 border">
                {feature.icon}
              </div>
              <div className="items-center font-semibold mt-4 text-sky-700 text-[17px]">
                {feature.name}
              </div>
              <div className="text-slate-500 text-center w-[88%] mt-2 text-[13px] font-medium">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-28 max-sm:mt-12 gap-6">
      <h2 className="font-bold text-2xl max-sm:text-xl text-center text-slate-800">
        Manage and Create Your React Components
        <span className="text-sky-500"> Effortlessly!</span>
      </h2>
      <p className="font-medium text-center text-[16px] max-sm:text-[13px] w-[510px] max-sm:w-full text-slate-500">
        Save time by reusing your favourit components. Store them in a
        centralized database and create new components with ease. Enhance your
        development workflow by having quick access to a library of reusable
        components and ensure consistency across your projects.
      </p>

      <button
        className="bg-sky-600 hover:bg-sky-800 rounded-md text-sm font-medium px-9 py-3 text-white shadow-md"
        type="button"
      >{`Let's get started!`}</button>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex m-5 justify-between items-center max-sm:flex-col mx-8 max-sm:mt-9">
      <Logo />
      <Buttons />
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex justify-center items-center gap-2 text-[26px] max-sm:xl">
      <h1 className="font-mono font-medium text-slate-600">SnapUi</h1>
      <FaUikit />
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      <Link href="/sign-up">
        <button className="max-sm:w-full p-2 bg-sky-600 text-white hover:bg-sky-800 border border-sky-500 shadow-md rounded-md px-6 sm:w-full">
          Signup
        </button>
      </Link>

      <Link href="/sign-in">
        <button className="max-sm:w-full p-2 hover:bg-sky-600 hover:text-white border border-sky-600 shadow-md rounded-md px-6 sm:w-full">
          Login
        </button>
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} SnapUi. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/about" className="text-slate-600 hover:text-sky-600">
              About Us
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-sky-600">
              Contact
            </Link>
            <Link href="/privacy" className="text-slate-600 hover:text-sky-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-600 hover:text-sky-600">
              Terms of Service
            </Link>
          </div>

          <div className="flex space-x-6">
            <Link href="https://facebook.com" target="_blank">
              <FaUikit className="text-slate-600 hover:text-sky-600" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaUikit className="text-slate-600 hover:text-sky-600" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaUikit className="text-slate-600 hover:text-sky-600" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}