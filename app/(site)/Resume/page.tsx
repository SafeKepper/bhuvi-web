import React from "react"
import Image from "next/image"
import qklogo from '../../../public/image/qklogo.png'
import pelogo from '../../../public/image/pelogo.png'
import srmlogo from '../../../public/image/srm.png'
import kvlogo from '../../../public/image/kv.png'
import nycilogo from '../../../public/image/NYCI.png'
import Link from "next/link"

export default function Skills() {
    return (
        <main>
            <Link className="text-white font-semibold" href="/Home">Back</Link>
            <div className='flex flex-wrap items-center justify-center mt-12 mb-12'>
                <div className="w-5/6">
                <h1 className="text-white">Work Experience</h1>
                <div className='transition ease-in-out delay-100 hover: translate-y-1 hover:scale-110 focus:h-[10em] flex bg-[#FFFFE3] w-full h-[5rem] rounded-md shadow-md font-montserrat text-lg truncate m-4 justify-between'>
                    <div className='text-gray py-4 px-4'>
                        <h3><a className='text-xs'> Full-Time</a> Clinical Research Intern<br />
                            <a href='https://www.niaid.nih.gov/about/india-icer-program' className='text-base'>International Center for Research Excellence, Funded by NIAID(US), DHR(IN) and ICMR</a>
                        </h3>
                    </div>
                    <div className='animate-pulse w-12 h-16 my-4 mx-10'><a href='https://www.quickiscool.org/'><Image src={qklogo} width={45} height={30} alt="QuickIsCool"/></a></div>
                </div>
                <div className='transition ease-in-out delay-100 hover: translate-y-1 hover:scale-110 focus:h-[10em] flex bg-[#FFFFE3] w-full h-[5rem] rounded-md shadow-md font-montserrat text-lg truncate m-4 justify-between'>
                    <div className='text-gray py-4 px-4'>
                        <h3><a className='text-xs'> Part-Time</a> Research Associate<br />
                            <a className='text-base'>Quick IsCool</a>
                        </h3>
                    </div>
                    <div className='animate-pulse w-12 h-16 my-4 mx-10'><a href='https://www.quickiscool.org/'><Image src={qklogo} width={45} height={30} alt="QuickIsCool"/></a></div>
                </div>
                <div className='transition ease-in-out delay-100 hover: translate-y-1 hover:scale-110 flex bg-[#FFFFE3] w-full  h-[5em] rounded-md shadow-md font-montserrat text-lg truncate m-4 justify-between'>
                    <h3 className='text-gray py-4 px-4'>Trainee<br /> <a className='text-base'>PerkinElmer Health Sciences (P) Ltd.</a></h3>
                    <div className='animate-pulse w-24 h-12 my-5 mx-4'><a href='https://www.perkinelmergenomics.com/india/'><Image src={pelogo} layout='' alt="PerkinELmer" /></a></div>
                </div>
                </div>
                <div className="w-5/6">
                    <h1 className="text-white">Voluntary Experience</h1>
                    <div className='transition ease-in-out delay-100 hover: translate-y-1 hover:scale-110 flex bg-[#FFFFE3] w-full  h-[5em] rounded-md shadow-md font-montserrat text-lg truncate m-4 justify-between'>
                        <h3 className='text-gray py-4 px-4'>Creative Head of Kanchipuram <br /> <a className='text-base'>National Youth Council of India</a></h3>
                        <div className='animate-pulse w-20 h-18 my-4 mx-8'><a href='https://youthcouncilofindia.org/'><Image src={nycilogo} layout='' alt="NYCI" /></a></div>
                    </div>
                </div>
                <div className="w-5/6">
                    <h1 className="text-white">Education</h1>
                    <div className='transition ease-in-out delay-100 hover: translate-y-1 hover:scale-110 flex bg-[#FFFFE3] w-full  h-[5em] rounded-md shadow-md font-montserrat text-lg truncate m-4 justify-between'>
                        <h3 className='text-gray py-6 px-4'>Bachelor of technology in Biotechnology <br /> <a className='text-base'>SRM Institute of Science and Technology</a></h3>
                        <div className='animate-pulse w-20 h-20 my-4 mx-8'><a href='https://www.srmist.edu.in/'><Image src={srmlogo} layout='' alt="SRM" /></a></div>
                    </div>
                    <div className='transition ease-in-out delay-100 hover: translate-y-1 hover:scale-110 flex bg-[#FFFFE3] w-full  h-[5em] rounded-md shadow-md font-montserrat text-lg truncate m-4 justify-between'>
                        <h3 className='text-gray py-4 px-4'>Senior School Certificate Examination <br /> <a className='text-base'>Kendriya Vidyalaya IIT Chennai</a></h3>
                        <div className='animate-pulse w-16 h-20 my-4 mx-10'><a href='https://chennaiiit.kvs.ac.in/'><Image className='rounded-xl' src={kvlogo} layout='' alt="KVIIT CHENNAI" /></a></div>
                    </div>
                </div>

            </div>
        </main>
    )
}