import Image from "next/image";
import Link from "next/link";
import { FaUikit } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <AboutSection />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-28 max-sm:mt-20 gap-6">
      <h2 className="font-bold text-2xl max-sm:text-xl text-center text-slate-800">
        Manage and Create Your React Components
        <span className="text-sky-500"> Effortlessly!</span>
      </h2>
      <p className="text-center text-[15px] max-sm:text-[14px] w-[510px] max-sm:w-full text-slate-500">
        Save time by reusing your favourit components. Store them 
        in a centralized database and create new components with
        ease. Enhance your development workflow by having quick access
        to a library of reusable components and ensure consistency across
        your projects.
      </p>

      <button className="bg-sky-600 hover:bg-sky-700 rounded-md text-sm font-medium px-9 py-3 text-white shadow-md" type="button">{`Let's get started!`}</button>
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
    <div className="flex justify-center items-center gap-1 text-2xl max-sm:xl">
      <p className="font-mono text-slate-500 font-semibold">SnapUi</p>
      <FaUikit />
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      <Link href="/sign-up">
        <button className="max-sm:w-full p-3 bg-sky-600 hover:text-white shadow-md rounded-xl px-6 sm:w-full">
          Sign-up
        </button>
      </Link>

      <Link href="/sign-in">
        <button className="max-sm:w-full p-3 hover:bg-sky-600 hover:text-white border border-sky-500 shadow-md rounded-xl px-6 sm:w-full">
          Sign-In
        </button>
      </Link>
    </div>
  );
}
