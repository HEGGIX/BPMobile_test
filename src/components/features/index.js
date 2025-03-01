import "./styles/style.css"
import portugal from "../../languages/pt.json"
import japan from "../../languages/ja.json"
import germany from "../../languages/de.json"
import spain from "../../languages/es.json"
import france from "../../languages/fr.json"
import england from "../../languages/en.json"

document.addEventListener("DOMContentLoaded",function Features(){
    const app = document.getElementById("app")

    const featuresContainer = document.createElement("div")
    featuresContainer.classList.add("features")
    app.append(featuresContainer)

    const featuresWrapper = document.createElement("div")
    featuresWrapper.classList.add("featuresWrapper")
    featuresContainer.append(featuresWrapper)

    const featuresItem = document.createElement("div")
    featuresItem.classList.add("featuresItem")
    featuresItem.classList.add("first")
    
    const featuresItem1 = document.createElement("div")
    featuresItem1.classList.add("featuresItem")
    featuresItem1.classList.add("second")

    const featuresItem2 = document.createElement("div")
    featuresItem2.classList.add("featuresItem")
    featuresItem2.classList.add("third")

    featuresWrapper.append(featuresItem,featuresItem1,featuresItem2)

    const preferredLanguage = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
    const languageFirstTwo = preferredLanguage.substr(0,2);

    const regExp = /\*|<br>|&nbsp|;|$/g;

    // let lang = "fr";
    // const params = new URLSearchParams()
    // params.set("lang",lang)
    // window.history.pushState(null,null,`?${params.toString()}`)

    const featuresText = document.createElement("span")
    featuresText.classList.add("featuresText")
    if(languageFirstTwo === "en"){
        featuresText.textContent = `${england["Unlimited Art <br>Creation"].replace(regExp, '')}`
    }else if(languageFirstTwo === "fr"){
        featuresText.textContent = `${france["Unlimited Art <br>Creation"].replace(regExp, '')}`
    }else if(languageFirstTwo === "de"){
        featuresText.textContent = `${germany["Unlimited Art <br>Creation"].replace(regExp, '')}`
    }else if(languageFirstTwo === "es"){
        featuresText.textContent = `${spain["Unlimited Art <br>Creation"].replace(regExp, '')}`
    }else if(languageFirstTwo === "pr"){
        featuresText.textContent = `${portugal["Unlimited Art <br>Creation"].replace(regExp, '')}`
    }else if(languageFirstTwo === "ja"){
        featuresText.textContent = `${japan["Unlimited Art <br>Creation"].replace(regExp, '')}`
    }else {
        featuresText.textContent = `${england["Unlimited Art <br>Creation"].replace(regExp, '')}`
    }

    const featuresText1 = document.createElement("span")
    featuresText1.classList.add("featuresText")
    featuresText1.classList.add("secondText")
    if(languageFirstTwo === "en"){
        featuresText1.textContent = `${england["Exclusive <br>Styles"].replace(regExp, '')}`
    }else if(languageFirstTwo === "fr"){
        featuresText1.textContent = `${france["Exclusive <br>Styles"].replace(regExp, '')}`
    }else if(languageFirstTwo === "de"){
        featuresText1.textContent = `${germany["Exclusive <br>Styles"].replace(regExp, '')}`
    }else if(languageFirstTwo === "es"){
        featuresText1.textContent = `${spain["Exclusive <br>Styles"].replace(regExp, '')}`
    }else if(languageFirstTwo === "pr"){
        featuresText1.textContent = `${portugal["Exclusive <br>Styles"].replace(regExp, '')}`
    }else if(languageFirstTwo === "ja"){
        featuresText1.textContent = `${japan["Exclusive <br>Styles"].replace(regExp, '')}`
    }else {
        featuresText1.textContent = `${england["Exclusive <br>Styles"].replace(regExp, '')}`
    }

    const featuresText2 = document.createElement("span")
    featuresText2.classList.add("featuresText")
    if(languageFirstTwo === "en"){
        featuresText2.textContent = `${england["Magic Avatars <br>With 20% Off"].replace(regExp, '')}`
    }else if(languageFirstTwo === "fr"){
        featuresText2.textContent = `${france["Magic Avatars <br>With 20% Off"].replace(regExp, '')}`
    }else if(languageFirstTwo === "de"){
        featuresText2.textContent = `${germany["Magic Avatars <br>With 20% Off"].replace(regExp, '')}`
    }else if(languageFirstTwo === "es"){
        featuresText2.textContent = `${spain["Magic Avatars <br>With 20% Off"].replace(regExp, '')}`
    }else if(languageFirstTwo === "pr"){
        featuresText2.textContent = `${portugal["Magic Avatars <br>With 20% Off"].replace(regExp, '')}`
    }else if(languageFirstTwo === "ja"){
        featuresText2.textContent = `${japan["Magic Avatars <br>With 20% Off"].replace(regExp, '')}`
    }else {
        featuresText2.textContent = `${england["Magic Avatars <br>With 20% Off"].replace(regExp, '')}`
    }

    featuresItem.append(featuresText), featuresItem1.append(featuresText1),featuresItem2.append(featuresText2)
})