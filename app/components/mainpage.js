import React from "react";
import Image from "next/image";
import profilePic from "../../public/image/profile.jpeg";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function MainPage() {
  return (
    <main>
      <section className="flex items-center justify-left mt-12 text-white">
        <div>
          <h2 className="italic mt-1 mb-6 font-semibold text-black">
            I&apos;m a aspiring Data Scientist <br />
            and a tech enthusiast.
            <br /> with ever growing zeal <br />
            for computer Science.
          </h2>

          <h4 className="mt-10 mb-1 text-black italic antialiased">
            Contact me :)
          </h4>

          <div className=" mt-0 ml-0 flex">
            <a href="https://www.instagram.com/nesherwyn/" className="p-3">
            <img width="49" height="48" src="https://img.icons8.com/doodle/48/github--v1.png" alt="github--v1"/>
            </a>
            <a href="https://www.linkedin.com/in/bhuvaneshwaranr04/" className="p-4">
            <img width="40" height="48" src="https://img.icons8.com/doodle/48/linkedin--v2.png" alt="linkedin--v2"/>
            </a>
            <a 
                href={"./form"}
                className="text-cyan-400 flex items-center gap-5 text-lg font-bold p-2"
              >
                <img width="48" height="48" src="https://img.icons8.com/doodle/48/new-post.png" alt="new-post"/>
                {/* <ContactForm /> */}
            </a>
            <Link href={ContactForm} className="text-cyan-400 flex items-center gap-5 text-lg font-bold">
            RESUME
          </Link>
        </div>
          <div className="mt-10"></div>
          <div>
            <h3>Projects</h3>
          </div>
        </div>
        <div className="mt-2 mb-2 mr-6 ml-10 w-[450px] h-[450px]">
          <Image
            className="rounded-md shadow-2xl"
            src={profilePic}
            alt="O genki desu ka?"
            width={520}
            height={300}
          />
        </div>
      </section>
    </main>
  );
}
