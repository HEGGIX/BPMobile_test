import "./styles/style.css"
import portugal from "../../languages/pt.json"
import japan from "../../languages/ja.json"
import germany from "../../languages/de.json"
import spain from "../../languages/es.json"
import france from "../../languages/fr.json"
import england from "../../languages/en.json"

document.addEventListener("DOMContentLoaded",function Access(){
    const app = document.getElementById("app")
    const access = document.createElement("div")
    access.classList.add("access")
    app.append(access)

    const accessWrapper = document.createElement("div")
    accessWrapper.classList.add("accessWrapper")
    access.append(accessWrapper)

    const accessYearItem = document.createElement("div")
    accessYearItem.classList.add("accessItem")
    accessYearItem.classList.add("year")
    const accessWeeklyItem = document.createElement("div")
    accessWeeklyItem.classList.add("accessItem")

    const accessYearItemTitleWrapp = document.createElement("div")
    accessYearItemTitleWrapp.classList.add("accessItemTitleWrapp")
    const accessWeeklyItemTitleWrapp = document.createElement("div")
    accessWeeklyItemTitleWrapp.classList.add("accessItemTitleWrapp")

    let params = new URLSearchParams(document.location.search);
    let paramsValue = params.get('lang')

    const preferredLanguage = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
    const languageFirstTwo = preferredLanguage.substr(0,2);

    const regExp = /\*|<br>|{{price}}|\$/g;

    const accessYearItemTitle = document.createElement("h2")
    accessYearItemTitle.classList.add("accessItemTitle")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        accessYearItemTitle.textContent = england["YEARLY ACCESS"]
    }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        accessYearItemTitle.textContent = france["YEARLY ACCESS"]
        accessYearItemTitle.classList.add("smallTitleText")
    }else if(languageFirstTwo === "de" || paramsValue === "de"){
        accessYearItemTitle.textContent = germany["YEARLY ACCESS"]
    }else if(languageFirstTwo === "es" || paramsValue === "es"){
        accessYearItemTitle.textContent = spain["YEARLY ACCESS"]
    }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        accessYearItemTitle.textContent = portugal["YEARLY ACCESS"]
    }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        accessYearItemTitle.textContent = japan["YEARLY ACCESS"]
    }else {
        accessYearItemTitle.textContent = england["YEARLY ACCESS"]
    }

    const accessYearItemSubTitle = document.createElement("p")
    accessYearItemSubTitle.classList.add("accessItemSubTitle")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        accessYearItemSubTitle.textContent = `${england["Just {{price}} per year"].replace(regExp, '')}`
    }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        accessYearItemSubTitle.textContent = `${france["Just {{price}} per year"].replace(regExp, '')}`
    }else if(languageFirstTwo === "de" || paramsValue === "de"){
        accessYearItemSubTitle.textContent = `${germany["Just {{price}} per year"].replace(regExp, '')}`
    }else if(languageFirstTwo === "es" || paramsValue === "es"){
        accessYearItemSubTitle.textContent = `${spain["Just {{price}} per year"].replace(regExp, '')}`
    }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        accessYearItemSubTitle.textContent = `${portugal["Just {{price}} per year"].replace(regExp, '')}`
    }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        accessYearItemSubTitle.textContent = `${japan["Just {{price}} per year"].replace(regExp, '')}`
    }else {
        accessYearItemSubTitle.textContent = `${england["Just {{price}} per year"].replace(regExp, '')}`
    }
    
    const accessWeeklyItemTitle = document.createElement("h2")
    accessWeeklyItemTitle.classList.add("accessItemTitle")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        accessWeeklyItemTitle.textContent = england["WEEKLY ACCESS"]
    }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        accessWeeklyItemTitle.textContent = france["WEEKLY ACCESS"]
        accessWeeklyItemTitle.classList.add("smallTitleText")
    }else if(languageFirstTwo === "de" || paramsValue === "de"){
        accessWeeklyItemTitle.textContent = germany["WEEKLY ACCESS"]
    }else if(languageFirstTwo === "es" || paramsValue === "es"){
        accessWeeklyItemTitle.textContent = spain["WEEKLY ACCESS"]
    }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        accessWeeklyItemTitle.textContent = portugal["WEEKLY ACCESS"]
    }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        accessWeeklyItemTitle.textContent = japan["WEEKLY ACCESS"]
    }else {
        accessWeeklyItemTitle.textContent = england["WEEKLY ACCESS"]
    }

    const accessYearItemPrice = document.createElement("p")
    accessYearItemPrice.classList.add("accessItemPrice")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        accessYearItemPrice.textContent = `${england[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        accessYearItemPrice.textContent = `${france[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "de" || paramsValue === "de"){
        accessYearItemPrice.textContent = `${germany[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "es" || paramsValue === "es"){
        accessYearItemPrice.textContent = `${spain[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        accessYearItemPrice.textContent = `${portugal[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        accessYearItemPrice.textContent = `${japan[`{{price}} <br>per week`].replace(regExp, '')}`
    }else {
        accessYearItemPrice.textContent = england["{{price}} <br>per week"]
    }

    const accessWeeklyItemPrice = document.createElement("p")
    accessWeeklyItemPrice.classList.add("accessItemPrice")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        accessWeeklyItemPrice.textContent = `${england[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        accessWeeklyItemPrice.textContent = `${france[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "de" || paramsValue === "de"){
        accessWeeklyItemPrice.textContent = `${germany[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "es" || paramsValue === "es"){
        accessWeeklyItemPrice.textContent = `${spain[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        accessWeeklyItemPrice.textContent = `${portugal[`{{price}} <br>per week`].replace(regExp, '')}`
    }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        accessWeeklyItemPrice.textContent = `${japan[`{{price}} <br>per week`].replace(regExp, '')}`
    }else {
        accessWeeklyItemPrice.textContent = england["{{price}} <br>per week"]
    }

    const continueButton = document.createElement("button")
    continueButton.classList.add("accessButton")
    if(languageFirstTwo === "en" || paramsValue === "en"){
        continueButton.textContent = england.Continue
    }else if(languageFirstTwo === "fr" || paramsValue === "fr"){
        continueButton.textContent = france.Continue
    }else if(languageFirstTwo === "de" || paramsValue === "de"){
        continueButton.textContent = germany.Continue
    }else if(languageFirstTwo === "es" || paramsValue === "es"){
        continueButton.textContent = spain.Continue
    }else if(languageFirstTwo === "pr" || paramsValue === "pr"){
        continueButton.textContent = portugal.Continue
    }else if(languageFirstTwo === "ja" || paramsValue === "ja"){
        continueButton.textContent = japan.Continue
    }else {
        continueButton.textContent = england.Continue
    }

    accessWrapper.append(accessYearItem,accessWeeklyItem,continueButton)
    accessYearItem.append(accessYearItemTitleWrapp,accessYearItemPrice),accessWeeklyItem.append(accessWeeklyItemTitleWrapp,accessWeeklyItemPrice)
    accessYearItemTitleWrapp.append(accessYearItemTitle,accessYearItemSubTitle),accessWeeklyItemTitleWrapp.append(accessWeeklyItemTitle)
})