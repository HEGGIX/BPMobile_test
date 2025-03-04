import "./styles/style.css"
import "./styles/styleMedia.css"
import cross from "../../assets/images/cross.svg"

document.addEventListener("DOMContentLoaded",function LanguageChange() {
    const languageArr = ["EN","DE", "ES", "PR", "FR", "JA"]
   
    const app = document.getElementById("app")
    const languageChange = document.createElement("div")
    languageChange.classList.add("languageChange")
    app.append(languageChange)

    const languageChangeWrapper = document.createElement("div")
    languageChangeWrapper.classList.add("languageChangeWrapper")
    languageChange.append(languageChangeWrapper)

    const closeBtn = document.createElement("a")
    closeBtn.href = "#"
    closeBtn.classList.add("closeBtn")
    const closeBtnImg = document.createElement("img")
    closeBtnImg.src = `${cross}`
    closeBtn.append(closeBtnImg)

    const languageChangeLabel = document.createElement("label")
    languageChangeLabel.classList.add("languageChangeLabel")

    const languageChangeSelect = document.createElement("select")
    languageChangeSelect.classList.add("languageChangeSelect")
    languageChangeSelect.name = "languages"
    languageChangeSelect.id = "languages"

    languageArr.map((option) => {
        const languageChangeOption = document.createElement("option")
        languageChangeOption.classList.add("languageChangeOption")
        languageChangeOption.textContent = option
        languageChangeOption.value = option.toLocaleLowerCase()
        if(languageChangeOption.value === "en" && localStorage.getItem("lang") === null){
            languageChangeOption.selected = true
        }
        languageChangeSelect.append(languageChangeOption)
    })

    languageChangeSelect.addEventListener("change",() => {
        let lang = languageChangeSelect.value
        localStorage.setItem("lang",lang)
        const params = new URLSearchParams(`?lang=${lang}`)
        params.set("lang",lang)
        window.history.pushState(null,null,`?${params.toString()}`)
        window.location.reload(true);
    })

    if(localStorage.getItem("lang") !== null){
        languageChangeSelect.value = localStorage.getItem("lang")
    }

    languageChangeLabel.append(languageChangeSelect)
    languageChangeWrapper.append(closeBtn,languageChangeLabel)
})