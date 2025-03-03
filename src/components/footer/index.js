import "./styles/style.css"
import portugal from "../../languages/pt.json"
import japan from "../../languages/ja.json"
import germany from "../../languages/de.json"
import spain from "../../languages/es.json"
import france from "../../languages/fr.json"
import england from "../../languages/en.json"

document.addEventListener("DOMContentLoaded",function Footer(){
    const app = document.getElementById("app")
    const footer = document.createElement("footer")
    footer.classList.add("footer")
    app.append(footer)

    let params = new URLSearchParams(document.location.search);
    let paramsValue = params.get('lang')

    const preferredLanguage = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
    const languageFirstTwo = preferredLanguage.substr(0,2);

    const footerWrapper = document.createElement("div")
    footerWrapper.classList.add("footerWrapper")
    footer.append(footerWrapper)

    const footerTerms = document.createElement("a")
    footerTerms.href = "#"
    footerTerms.classList.add("footerItem")
    if(languageFirstTwo === "en" || paramsValue === "en"){
       footerTerms.textContent = england["Terms of Use"]
    }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        footerTerms.textContent = france["Terms of Use"]
    }else if(languageFirstTwo === "de" || paramsValue === "de"){
        footerTerms.textContent = germany["Terms of Use"]
    }else if(languageFirstTwo === "es" || paramsValue === "es"){
        footerTerms.textContent = spain["Terms of Use"]
    }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        footerTerms.textContent = portugal["Terms of Use"]
    }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        footerTerms.textContent = japan["Terms of Use"]
    }else {
        footerTerms.textContent = england["Terms of Use"]
    }

    const footerPrivacy = document.createElement("a")
    footerPrivacy.href = "#"
    footerPrivacy.classList.add("footerItem")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        footerPrivacy.textContent = england["Privacy Policy"]
     }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        footerPrivacy.textContent = france["Privacy Policy"]
     }else if(languageFirstTwo === "de" || paramsValue === "de"){
        footerPrivacy.textContent = germany["Privacy Policy"]
     }else if(languageFirstTwo === "es" || paramsValue === "es"){
        footerPrivacy.textContent = spain["Privacy Policy"]
     }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        footerPrivacy.textContent = portugal["Privacy Policy"]
     }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        footerPrivacy.textContent = japan["Privacy Policy"]
     }else {
        footerPrivacy.textContent = england["Privacy Policy"]
     }

    const footerRestore = document.createElement("a")
    footerRestore.href = "#"
    footerRestore.classList.add("footerItem")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        footerRestore.textContent = england.Restore
     }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        footerRestore.textContent = france.Restore
     }else if(languageFirstTwo === "de" || paramsValue === "de"){
        footerRestore.textContent = germany.Restore
     }else if(languageFirstTwo === "es" || paramsValue === "es"){
        footerRestore.textContent = spain.Restore
     }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        footerRestore.textContent = portugal.Restore
     }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        footerRestore.textContent = japan.Restore
     }else {
        footerRestore.textContent = england.Restore
     }   

    footerWrapper.append(footerTerms,footerPrivacy,footerRestore)
})