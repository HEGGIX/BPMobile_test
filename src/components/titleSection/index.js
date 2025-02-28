import "./styles/style.css"
import cross from "../../assets/images/cross.svg"

document.addEventListener("DOMContentLoaded",function TitleSection(){
    const app = document.getElementById("app")
    const titleSection = document.createElement("div")
    titleSection.classList.add("titleSection")
    app.append(titleSection)

    const closeBtn = document.createElement("button")
    const closeBtnImg = document.createElement("img")
    closeBtnImg.src = `${cross}`
    closeBtn.append(closeBtnImg)

    const title = document.createElement("h1")
    title.textContent = "Get Unlimited Access"
    title.classList.add("title")

    titleSection.append(title,closeBtn)
})