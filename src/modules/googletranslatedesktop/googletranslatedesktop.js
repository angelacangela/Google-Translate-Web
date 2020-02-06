import React, { Component } from "react";
import "../../styles/googletranslatedesktop.css";
import LanguageSelector from "../../components/language-selector";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import debounce from "lodash/debounce";
import {ic_mic} from 'react-icons-kit/md/ic_mic';
import {ic_menu} from 'react-icons-kit/md/ic_menu';
import {androidApps} from 'react-icons-kit/ionicons/androidApps';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';
import {ic_compare_arrows} from 'react-icons-kit/md/ic_compare_arrows';
import {ic_g_translate} from 'react-icons-kit/md/ic_g_translate';
import {ic_insert_drive_file} from 'react-icons-kit/md/ic_insert_drive_file';
import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert';
import {volumeUp} from 'react-icons-kit/fa/volumeUp';
import {filesEmpty} from 'react-icons-kit/icomoon/filesEmpty';
import {ic_close} from 'react-icons-kit/md/ic_close';
import {repeat} from 'react-icons-kit/fa/repeat';
import {ic_grade} from 'react-icons-kit/md/ic_grade';
import {users} from 'react-icons-kit/icomoon/users';
import {starEmpty} from 'react-icons-kit/icomoon/starEmpty';
import {
    abbrevToReadableLanguages,
    readableToAbbrevLanguages,
} from "./utils";
const googlelogo11 = require("../../assets/googlelogo.png");

class GoogleTranslate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      currentlyChangingLanguage: "",
      showLanguageSelector: false,
      sourceLang: "auto",
      targetLang: "en"
    }
    this.clearInputQuery = this.clearInputQuery.bind(this);
    this.handleTextInputOnChange = this.handleTextInputOnChange.bind(this);
    this.handleTranslation = debounce(this.handleTranslation, 500);
    this.setLanguage = this.setLanguage.bind(this);
    this.toggleLanguageSelector = this.toggleLanguageSelector.bind(this);
  }

  clearInputQuery() {
    this.setState({ currentInput: "" });
  }

  handleTextInputOnChange(event) {
    event.persist();
    event.preventDefault();
    this.setState({ currentInput: event.target.value });
    this.handleTranslation();
  }

  handleTranslation() {
   const { currentInput, sourceLang, targetLang } = this.state;
   this.props.getTranslation({
     sourceLang,
     targetLang,
     sourceText: currentInput
   });
  }

  setLanguage(language, purpose) {
    this.setState({ [purpose]: language }, () => {
      this.handleTranslation();
    });
  }

  toggleLanguageSelector(currentlyChangingLanguage) {
    this.setState({ currentlyChangingLanguage }, () => {
      this.setState({ showLanguageSelector: !this.state.showLanguageSelector });
    });
  }

  render(){
    console.log(this.props);
    console.log("THE STATE CURRENTLY IS: ", this.state);
    const { translation } = this.props;
    const { currentlyChangingLanguage, currentInput, sourceLang, showLanguageSelector, targetLang } = this.state;
    return(
      <div className="entireTranslate">
        <div className="topWindowMenu">
          <div className="topMenuTranslate">
            <div className="topMenuLeft">
              <Icon className="gridIcon" size={26} icon={ic_menu}/>
              <img
                  className="googlelogo11"
                  src={googlelogo11}
              />
              <div className="translateLogo">Translate</div>
            </div>
            <div className="topMenuRight">
              <div className="androidIcon hideOnMobile">
                <Icon size={26} icon={androidApps}/>
              </div>
              <div className="signInButton11">
              Sign in
              </div>
            </div>
          </div>
          <div className="topMenuTranslate2 hideOnMobile">
            <div className="txtdocument hideOnMobile">
              <div className="textButton hideOnMobile">
                <Icon size={21} icon={ic_g_translate}/>
                <p>Text</p>
              </div>
              <div className="docButton hideOnMobile">
                <Icon className="insertDriveIcon" size={21} icon={ic_insert_drive_file}/>
                <p>Documents</p>
              </div>
            </div>
          </div>
        </div>
        <div className="translateTable">
          <div className="translateBox">
            <div className="squareBox">
              <div className="languageBar">
                <div className="translateFrom">
                  <div className="languagesContainer">
                    {sourceLang !== "auto" && (
                      <div
                        className="detectLanguage languageChoice hideOnMobile"
                        onClick={() => this.setLanguage("auto", "sourceLang")}
                      >
                        DETECT LANGUAGE
                      </div>
                    )}
                    <div
                      className="languageChoice1"
                      onClick={() => this.toggleLanguageSelector("sourceLang")}
                    >
                      {
                        sourceLang === "auto" ?
                        "DETECT LANGUAGE" :
                        abbrevToReadableLanguages[sourceLang].toUpperCase()
                      }
                    </div>
                    {sourceLang !== "en" && (
                      <div
                        className="languageChoice hideOnMobile"
                        onClick={() => this.setLanguage("en", "sourceLang")}
                      >
                        ENGLISH
                      </div>
                    )}
                    {sourceLang !== "es" && (
                      <div
                        className="languageChoice hideOnMobile"
                        onClick={() => this.setLanguage("es", "sourceLang")}
                      >
                        SPANISH
                      </div>
                    )}
                    {sourceLang !== "fr" && (
                      <div
                        className="languageChoice hideOnMobile"
                        onClick={() => this.setLanguage("fr", "sourceLang")}
                      >
                        FRENCH
                      </div>
                    )}
                  </div>
                  <div className="hideOnMobile">
                    <Icon
                      className="arrowDownIcon hideOnMobile"
                      onClick={() => this.toggleLanguageSelector("sourceLang")}
                      size={29}
                      icon={ic_keyboard_arrow_down}
                    />
                  </div>
                </div>
                <div className="arrowBothWay">
                  <Icon size={29} icon={ic_compare_arrows}/>
                </div>
                <div className="translateTo">
                  <div className="languagesContainer">
                    <div
                      className="languageChoice1"
                      onClick={() => this.toggleLanguageSelector("targetLang")}
                    >
                      {
                        targetLang === "en" ?
                        "ENGLISH" :
                        abbrevToReadableLanguages[targetLang].toUpperCase()
                      }
                    </div>
                    {targetLang !== "en" && (
                      <div
                        className="languageChoice hideOnMobile"
                        onClick={() => this.setLanguage("en", "targetLang")}
                      >
                        ENGLISH
                      </div>
                    )}
                    {targetLang !== "es" && (
                      <div
                        className="languageChoice hideOnMobile"
                        onClick={() => this.setLanguage("es", "targetLang")}
                      >
                        SPANISH
                      </div>
                    )}
                    {targetLang !== "ar" && (
                      <div
                        className="languageChoice hideOnMobile"
                        onClick={() => this.setLanguage("ar", "targetLang")}
                      >
                        ARABIC
                      </div>
                    )}
                  </div>
                  <div className="hideOnMobile">
                    <Icon
                      className="arrowDownIcon"
                      icon={ic_keyboard_arrow_down}
                      onClick={() => this.toggleLanguageSelector("targetLang")}
                      size={29}
                    />
                  </div>
                </div>
              </div>
            {showLanguageSelector && (
              <LanguageSelector
                currentlyChangingLanguage={currentlyChangingLanguage}
                setLanguage={this.setLanguage}
                toggleLanguageSelector={this.toggleLanguageSelector}
              />
            )}
            <div className="typeWords">
              <div className="typeInput">
                <div className="typeWordsInside">
                  <textarea
                    className="typeText"
                    onChange={this.handleTextInputOnChange}
                    maxLength="5000"
                    name="text"
                    onInput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                    onSubmit={this.onSubmit}
                    placeholder="Enter text"
                    value={currentInput}
                  />
                  <Icon
                    className="closeButton"
                    icon={ic_close}
                    onClick={this.clearInputQuery}
                    size={23}
                  />
                </div>
                <div className="maxChar">
                  <div className="detailButtons">
                    <Icon className="iconMic" size={23} icon={ic_mic}/>
                    {translation && (
                      <Icon className="iconVol" size={23} icon={volumeUp}/>
                    )}
                  </div>
                  <p className="wordLimit hideOnMobile">{currentInput.length}/5000</p>
                </div>
              </div>
              <div className={`outputContainer ${translation ? "" : "hideOnMobile"}`}>
                <div className="outputBottom">
                  <div className="outputTxtInside">
                    <div className="typeOutput">
                    {translation ? translation : "Translation"}
                    </div>
                    {translation && (
                      <div className="starIcon">
                        <Icon className="iconStar" size={23} icon={starEmpty}/>
                      </div>
                    )}
                  </div>
                  {translation && (
                    <div className="detailButtons2">
                      <Icon className="iconVolume" size={23} icon={volumeUp}/>
                      <div className="iconTranslateTo">
                        <Icon className="iconEmpty" size={23} icon={filesEmpty}/>
                        <Icon className="iconVer" size={23} icon={ic_more_vert}/>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        Send feedback
      </div>
      <div className="bottomMenu">
        <div className="choicesOutside">
          <div className="bottomMenuItemContainer">
            <div className="bottomMenuItem">
              <Icon size={30} icon={repeat}/>
            </div>
            History
          </div>
          <div className="bottomMenuItemContainer">
            <div className="bottomMenuItem">
              <Icon size={30} icon={ic_grade}/>
            </div>
            Saved
          </div>
          <div className="bottomMenuItemContainer">
            <div className="bottomMenuItem">
              <Icon size={30} icon={users}/>
            </div>
            Community
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default GoogleTranslate;
