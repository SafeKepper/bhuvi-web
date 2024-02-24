import React from "react";
import Image from "next/image";
import profilePic from "../../public/image/profile.jpeg";
import Link from "next/link";


export default function MainPage() {
    const mailtoHref = "mailto:bhuvanqueries@gmail.com?subject=Enquire&body=Description";
  return (
    <main>
      <section className="flex items-center justify-left mt-12 text-white">
        <div>
          <h2 className="italic mt-1 mb-6 font-semibold text-black">
            I&apos;m a aspiring <br /> Data Scientist <br />
            and a tech enthusiast.
            <br /> with ever growing zeal <br />
            for Computer Science.
          </h2>

          <h4 className="mt-10 mb-1 text-black italic antialiased">
            Contact me :)
          </h4>

          <div className=" mt-0 ml-0 flex">
            <a href="https://github.com/SafeKepper" className="p-3">
            <Image width={48} height={48} src="https://img.icons8.com/doodle/48/github--v1.png" alt="github--v1"/>
            </a>
            <a href="https://www.linkedin.com/in/bhuvaneshwaranr04/" className="p-4">
            <Image width="40" height="48" src="https://img.icons8.com/doodle/48/linkedin--v2.png" alt="linkedin--v2"/>
            </a>
            <a 
                href={mailtoHref}
                className="text-cyan-400 flex items-center gap-5 text-lg font-bold p-2"
              >
                <Image width="48" height="48" src="https://img.icons8.com/doodle/48/new-post.png" alt="new-post"/>
            </a>
        </div>
        <div>
        </div>
        </div>
        <div className="mt-2 mb-2 mr-6 ml-10 w-[450px] h-[450px]">
          <Image
            className="rounded-md shadow-2xl pointer-events-none"
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
