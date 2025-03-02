import "./styles/style.css"
import cross from "../../assets/images/cross.svg"

document.addEventListener("DOMContentLoaded",function LanguageChange() {
    const languageArr = ["EN", "DE", "ES", "PR", "FR", "JA"]

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

    const languageChangeForm = document.createElement("div")
    languageChangeForm.classList.add("languageChangeForm")

    const languageChangeLabel = document.createElement("label")
    languageChangeLabel.classList.add("languageChangeLabel")

    const languageChangeSelect = document.createElement("select")
    languageChangeSelect.classList.add("languageChangeSelect")
    languageChangeSelect.name = "languages"
    languageChangeSelect.id = "languages"

    for(let i = 0;i < 1; i++){
        languageArr.map((option) => {
            const languageChangeOption = document.createElement("option")
            languageChangeOption.classList.add("languageChangeOption")
            languageChangeOption.textContent = option
            languageChangeOption.value = option.toLocaleLowerCase()
            languageChangeSelect.append(languageChangeOption)
        })
    }

    languageChangeSelect.addEventListener("change",() => {
        let lang = languageChangeSelect.value
        localStorage.setItem("lang",lang)
        const params = new URLSearchParams()
        params.set("lang",lang)
        window.history.pushState(null,null,`?${params.toString()}`)
        window.location.reload(true);
    })

    languageChangeSelect.value = localStorage.getItem("lang")

    languageChangeForm.append(languageChangeLabel,languageChangeSelect)
    languageChangeWrapper.append(closeBtn,languageChangeForm)
})