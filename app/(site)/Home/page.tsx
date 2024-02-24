import Image from 'next/image'
import Link from 'next/link'
import MainPage from "../../components/mainpage";
import Projects from "../../components/projects";
import SKills from "../../components/skills"
export default async function Home() {
  return ( 
    <div>
      <h1 className="text-4xl font-extrabold text-black">Konichiwa I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Bhuvi!</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600 drop-shadow-xl">I&apos;m proud of ya! you doing great!</p>
      <MainPage />
      <SKills/>
      <Projects />
    </div>
  )

}
