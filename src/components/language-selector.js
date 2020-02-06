import React from "react";
import { readableToAbbrevLanguages } from "../modules/googletranslatedesktop/utils";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close';
import {iosSearchStrong} from 'react-icons-kit/ionicons/iosSearchStrong';
import "./styles.css";

const LanguageSelector = ({
  currentlyChangingLanguage="sourceLang",
  setLanguage,
  toggleLanguageSelector
}) => (
  <div className="languageSelectorContainer">
    <div className="allLanguages">Recent Languages</div>
    <div className="allLanguages">All languages</div>
    <div className="translateFrom hideOnMobile">Translate {currentlyChangingLanguage === "sourceLang" ? "from" : "to"}
      <Icon size={29} icon={iosSearchStrong}/>
      <Icon className="iconClose20" size={29} icon={ic_close}/>
    </div>
    <div className="listedLanguage">
      {Object.keys(readableToAbbrevLanguages).slice(1).map(
        (language) => (
          <div
            onClick={() => {
              setLanguage(readableToAbbrevLanguages[language], currentlyChangingLanguage);
              toggleLanguageSelector();
            }}
            className="eachLanguageSlot"
          >
            {language}
          </div>
        )
      )}
    </div>
  </div>
);

export default LanguageSelector;
