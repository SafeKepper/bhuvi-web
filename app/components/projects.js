import React from "react";
import Image from "next/image";
import profilePic from "../../public/image/profile.jpeg";
import Link from "next/link";
import pIC50 from "../../public/image/graph_pIC50.png"
import report from "../../public/image/report.png"
// import { TECollapse, TERipple } from "tw-elements-react";

export default function Projects() {
    
  return (
    <main>
        <div className="mt-10">
            <h2 className="text-black font-semibold antialiased italic">Projects</h2>
        </div>
      <section className="flex flex-col items-start justify-left mt-12 text-white">
      <div>
            <div className="w-5/6 h-auto bg-white mb-2 p-2">
                <h4 className="text-black font-semibold italic mb-2">
                Analysis of HR Survey Data Employee Turnover Prediction Using Machine Learning (Capstone Project)
                </h4>
                <div className="flex flex-row">
                <Image className="m-3" width="200" height="200" src={pIC50} alt="linkedin--v2"/>
                </div>
                <p className="text-black">
                The goal of this project was to create an ML classification model and conclude on a best performing machine learning model (Decision Tree, Random Forest, Xgboost) to predict employee turnover left or stay.
                The final XGBoost model performed with a 94.5% f1 score, 97.1% precision score, and 92.1% recall score, determining what features were most important in segregating employees who left and stayed in the company based on the model, The main contributing factors were tenure duration, high work hours, satisfaction level, and total project contribution.
                    
                </p>
                <Link className="text-black mt-4 font-mono" target="_blank" href={"https://app.datacamp.com/workspace/w/eafc4a33-5521-4a15-ab9c-57932657922e/edit/EDA%20-%20Drug%20Discovery%20.ipynb"}>
                    Visit the Project..
                </Link>

            </div>
        </div>
        <div>
            <div className="w-5/6 h-auto bg-white mb-2 p-2">
                <h4 className="text-black font-semibold italic mb-2">
                Random Forest Regressor(ensemble) - Machine Learning Model From Scratch
                </h4>
                <div className="flex flex-row">
                <Image className="m-3" width="200" height="200" src={pIC50} alt="linkedin--v2"/>
                </div>
                <p className="text-black">
                    Understanding the vast data of drug interaction is a challenging fleet. It is a daunting but, a rewarding task of identifying potentioal drug candidate for prevalant diseases. 
                    
                </p>
                <Link className="text-black mt-4 font-mono" target="_blank" href={"https://app.datacamp.com/workspace/w/eafc4a33-5521-4a15-ab9c-57932657922e/edit/EDA%20-%20Drug%20Discovery%20.ipynb"}>
                    Visit the Code..
                </Link>

            </div>
        </div>
        <div>
            <div className="w-5/6 h-auto bg-white mb-2 p-2">
                <h4 className="text-black font-semibold italic mb-2">
                    HR Analytics - Report on Employee Attrition
                </h4>
                <div className="flex flex-row">
                <Image className="m-3" width="200" height="200" src={report} alt="linkedin--v2"/>
                </div>
                <p className="text-black">
                •Cleaned 6100+ data points. <br/>
                •Performed data Modeling, constructed snowflake Schema.  <br/>
                •Created 15+ Measures, EDA was carried out.  <br/>
                •Revealed Key insights using data visualization .   <br/>
                •Analysed for Attrition through various channels.   <br/>
                •Built report and deployed on power BI service.  <br/>
                </p>
                <Link className="text-black mt-4 font-mono" target="_blank" href={"https://app.powerbi.com/view?r=eyJrIjoiZWJjNDJjYWYtZjVmZS00Y2IwLWEwNDgtY2Q1NmM2Yjk1ZDM5IiwidCI6ImFkNGRkMzNkLWQyNDctNGQ5My1hOGIyLWE5ZDk0OWEwMThjZSJ9&pageName=ReportSection"}>
                    Visit the report..
                </Link>

            </div>
        </div>
        </section>
    </main>
  );
}
