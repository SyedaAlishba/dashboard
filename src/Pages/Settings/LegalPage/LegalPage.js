import { Box } from "@mui/material";
import React, { useState } from "react";
import "./LegalPageLG.scss";
import "./LegalPageMD.scss";
import "./LegalPageXL.scss";
import "./LegalPage.scss";
import ArrowRight from "../../../Assets/Icons/ArrowRight.png";

const PrivacySetting = () => {
  return (
    <>
      <Box className="forLeftSection">
        <p className="leftAboutUs">Privacy settings</p>
        <Box className="paraMainDiv">
          <p className="forPara">
            Dashboard connects travelers and tourists with authentic artisans and
            craftspersons in a destination. It takes the pain out of finding
            known master craftspersons of the locations you visit, so you can
            bring back lifelong memories from your trips. We help you create a
            permanent connection to the heritage and history of each place you
            visit by getting to know the best artisans there.
          </p>
          <p className="forPara">
            Our careful curation and marketplace review process ensures best
            quality and authenticity. Dashboard helps you buy without worrying about
            exchange rates, foreign languages, and cultural nuances.
          </p>
        </Box>
      </Box>
    </>
  );
};

const TermsAndCondition = () => {
  return (
    <>
      <Box className="forLeftSection">
        <p className="leftAboutUs">Terms & conditions</p>
        <Box className="paraMainDiv">
          <p className="forPara">
            Dashboard connects travelers and tourists with authentic artisans and
            craftspersons in a destination. It takes the pain out of finding
            known master craftspersons of the locations you visit, so you can
            bring back lifelong memories from your trips. We help you create a
            permanent connection to the heritage and history of each place you
            visit by getting to know the best artisans there.
          </p>
          <p className="forPara">
            Our careful curation and marketplace review process ensures best
            quality and authenticity. Dashboard helps you buy without worrying about
            exchange rates, foreign languages, and cultural nuances.
          </p>
        </Box>
      </Box>
    </>
  );
};


const AboutUs = () => {
  return (
    <>
      <Box className="forLeftSection">
        <p className="leftAboutUs">About us</p>
        <Box className="paraMainDiv">
          <p className="forPara">
            Dashboard connects travelers and tourists with authentic artisans and
            craftspersons in a destination. It takes the pain out of finding
            known master craftspersons of the locations you visit, so you can
            bring back lifelong memories from your trips. We help you create a
            permanent connection to the heritage and history of each place you
            visit by getting to know the best artisans there.
          </p>
          <p className="forPara">
            Our careful curation and marketplace review process ensures best
            quality and authenticity. Dashboard helps you buy without worrying about
            exchange rates, foreign languages, and cultural nuances.
          </p>
        </Box>
      </Box>
    </>
  );
};

const LegalPage = () => {
  let renderTab = {
    aboutUsKey : <AboutUs />,
    privacySettingKey : <PrivacySetting />,
    termsAndConditionKey : <TermsAndCondition />,
  }

  const [currentTab, setCurrentTab] = useState("aboutUsKey")
  const [aboutUsFlag, setAboutUs] = useState(true);
  const [privacySettingFlag, setprivacySetting] = useState(false);
  const [termsAndConditionFlag, setTermsAndCondition] = useState(false);
  return (
    <Box className="mainWrapperLegalPage">
      <p className="forTitle">Legal</p>
      <p className="forBlurTxt">View all legal writeups here</p>
      <Box className="mainSectionalArea">
        <Box className="forRightSec">
          <Box className="forArrow">
            { aboutUsFlag === true ? <img  className="arrowRgt" src={ArrowRight} /> : ""}
           
            <p onClick = {(e)=>{
              setCurrentTab("aboutUsKey");
              setAboutUs(true);
              setprivacySetting(false);
              setTermsAndCondition(false);
            }
            } className={aboutUsFlag === true ? "aboutUs" : "aboutUsBlur" }
>About us</p>
          </Box>
          <Box className="privacyStg">
           
           
           
           {privacySettingFlag === true ? <img  className="arrowRgt1" src={ArrowRight} /> : null}

            <p onClick = {(e)=>{
              setCurrentTab("privacySettingKey")
              setAboutUs(false);
              setprivacySetting(true);
              setTermsAndCondition(false);
            }
            } className={privacySettingFlag === true ? "privacySettingBold" : "privacySetting"}
            >Privacy settings</p>
          </Box>
          <Box className="termCon">

            { termsAndConditionFlag === true ? <img className="arrowRgt2" src={ArrowRight} /> : ""} 

            <p onClick = {(e)=>{
              setCurrentTab("termsAndConditionKey")
              setAboutUs(false);
              setprivacySetting(false);
              setTermsAndCondition(true);
            }
            }  className={termsAndConditionFlag === true ? "termsConditionBold" : "termsCondition"}
            >Terms & conditions</p>
          </Box>
        </Box>
      {renderTab[currentTab]}

        
      </Box>
    </Box>
  );
};

export default LegalPage;
