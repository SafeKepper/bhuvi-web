import React from "react";
import Image from "next/image";
import profilePic from "../../public/image/profile.jpeg";
import Link from "next/link";
import pIC50 from "../../public/image/graph_pIC50.png"
// import { TECollapse, TERipple } from "tw-elements-react";

export default function Projects() {
    
  return (
    <main>
        <div>
            <h2 className="text-black font-semibold antialiased italic">Projects</h2>
        </div>
      <section className="flex flex-col items-start justify-left mt-12 text-white">
        <div>
            <div className="w-5/6 h-auto bg-white mb-2 p-2">
                <h4 className="text-black font-semibold italic mb-2">
                    Exploratory Data analysis and Implenting Regression models on Biological Data
                </h4>
                <div className="flex flex-row">
                <Image className="m-3" width="200" height="200" src={pIC50} alt="linkedin--v2"/>
                </div>
                <p className="text-black">
                    Understanding the vast data of drug interaction is a challenging fleet. It is a daunting but, a rewarding task of identifying potentioal drug candidate for prevalant diseases. 
                    
                </p>
                <Link className="text-black mt-4 font-mono" target="_blank" href={"https://github.com/SafeKepper/Drug-discovery-/blob/main/Data_computational_drug_Bioactivity_data.ipynb"}>
                    Visit the Code..
                </Link>

            </div>
        </div>
        {/* <div>
            <div className="w-96 h-20 bg-black mb-2 p-2">

            </div>
        </div>
        <div>
            <div className="w-96 h-20 bg-black mb-2 p-2">

            </div>
        </div> */}
        </section>
    </main>
  );
}
