import "./styles/style.css"
import cross from "../../assets/images/cross.svg"
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

    // const params = new URLSearchParams(window.location.search)
    // params.append("lang","ja")
    // console.log(params.keys())

    // if(params.get("lang") === "pr"){
    //     headerTime.textContent = portugal.Continue
    // }else if(params.get("lang") === "ja"){
    //     headerTime.textContent = japan.Continue
    // }else if(params.get("lang") === "de"){
    //     headerTime.textContent = germany.Continue
    // }

    // let lang = "ru";
    // const params = new URLSearchParams()
    // params.set("lang",lang)
    // window.history.pushState(null,null,`?${params.toString()}`)

    let params = new URLSearchParams(document.location.search);
    let value = params.get('lang')
    console.log(value)

    const closeBtn = document.createElement("a")
    closeBtn.href = "#"
    const closeBtnImg = document.createElement("img")
    closeBtnImg.src = `${cross}`
    closeBtnImg.classList.add("closeBtn")
    closeBtn.append(closeBtnImg)

    const preferredLanguage = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
    const languageFirstTwo = preferredLanguage.substr(0,2);

    const regExp = /\*|<br>|\$/g;

    const title = document.createElement("h1")
    if(languageFirstTwo === "en"){
        title.textContent = `${england["Get Unlimited <br>Access"].replace(regExp, '')}`
    }else if(languageFirstTwo === "fr"){
        title.textContent = `${france["Get Unlimited <br>Access"].replace(regExp, '')}`
    }else if(languageFirstTwo === "de"){
        title.textContent = `${germany["Get Unlimited <br>Access"].replace(regExp, '')}`
        title.classList.add("title__small-font")
    }else if(languageFirstTwo === "es"){
        title.textContent = `${spain["Get Unlimited <br>Access"].replace(regExp, '')}`
    }else if(languageFirstTwo === "pr"){
        title.textContent = `${portugal["Get Unlimited <br>Access"].replace(regExp, '')}`
        title.classList.add("title__small-font")
    }else if(languageFirstTwo === "ja"){
        title.textContent = `${japan["Get Unlimited <br>Access"].replace(regExp, '')}`
    }else {
        title.textContent = `${england["Get Unlimited <br>Access"].replace(regExp, '')}`
    }
    title.classList.add("title")

    titleSection__wrapper.append(closeBtn,title)
})