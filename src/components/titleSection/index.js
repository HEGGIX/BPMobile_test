import "./styles/style.css"
import "./styles/styleMedia.css"
import portugal from "../../languages/pt.json"
import japan from "../../languages/ja.json"
import germany from "../../languages/de.json"
import spain from "../../languages/es.json"
import france from "../../languages/fr.json"
import england from "../../languages/en.json"

document.addEventListener("DOMContentLoaded",function TitleSection(){
    const app = document.getElementById("app")
    const titleSection = document.createElement("div")
    titleSection.classList.add("titleSection")
    app.append(titleSection)

    const titleSection__wrapper = document.createElement("div")
    titleSection__wrapper.classList.add("titleSection__wrapper")
    titleSection.append(titleSection__wrapper)

    let params = new URLSearchParams(document.location.search);
    let paramsValue = params.get('lang')

    const preferredLanguage = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
    const languageFirstTwo = preferredLanguage.substr(0,2);

    const regExp = /\*|<br>|\$/g;

    const title = document.createElement("h1")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        title.textContent = `${england["Get Unlimited <br>Access"].replace(regExp, '')}`
    }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        title.textContent = `${france["Get Unlimited <br>Access"].replace(regExp, '')}`
    }else if(languageFirstTwo === "de" || paramsValue === "de"){
        title.textContent = `${germany["Get Unlimited <br>Access"].replace(regExp, '')}`
        title.classList.add("title__small-font")
    }else if(languageFirstTwo === "es" || paramsValue === "es"){
        title.textContent = `${spain["Get Unlimited <br>Access"].replace(regExp, '')}`
    }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        title.textContent = `${portugal["Get Unlimited <br>Access"].replace(regExp, '')}`
        title.classList.add("title__small-font")
    }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        title.textContent = `${japan["Get Unlimited <br>Access"].replace(regExp, '')}`
    }else {
        title.textContent = `${england["Get Unlimited <br>Access"].replace(regExp, '')}`
    }
    title.classList.add("title")

    titleSection__wrapper.append(title)
})