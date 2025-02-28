import "./styles/style.css"
import signal from "../../assets/images/headersImg/MobileSignal.svg"
import wifi from "../../assets/images/headersImg/Wifi.svg"
import bluetooth from "../../assets/images/headersImg/Bluetooth.svg"
import battery from "../../assets/images/headersImg/Battery.svg"

document.addEventListener("DOMContentLoaded",function Header(){
    const params = new URLSearchParams({ lang: `${en}` })
    
    const app = document.getElementById("app")
    const header = document.createElement("header")
    header.classList.add("header")
    app.append(header)

    const headerWrapper = document.createElement("div")
    headerWrapper.classList.add("headerWrapper")
    header.append(headerWrapper)
   
    let headerConnection__container = document.createElement("div")
    headerConnection__container.classList.add("headerConnection__container")
    headerWrapper.append(headerConnection__container)

    let headerConnection__img = document.createElement("img")
    headerConnection__img.src = `${signal}`

    let headerConnection__text = document.createElement("span")
    headerConnection__text.classList.add("header__text")
    headerConnection__text.textContent = "Sketch"

    let headerWifi__img = document.createElement("img")
    headerWifi__img.src = `${wifi}`

    headerConnection__container.append(headerConnection__img,headerConnection__text,headerWifi__img)

    let language = navigator
    console.log(language)

    let headerTime = document.createElement("span")
    headerTime.textContent = "9:41 AM"
    headerTime.classList.add("headerTime")
    headerWrapper.append(headerTime)

    let headerBattery__container = document.createElement("div")
    headerBattery__container.classList.add("headerBattery__container")
    headerWrapper.append(headerBattery__container)

    let headerBluetooth__img = document.createElement("img")
    headerBluetooth__img.src = `${bluetooth}`

    let headerBattery__text = document.createElement("span")
    headerBattery__text.classList.add("header__text")
    headerBattery__text.textContent = "100%"

    let headerBattery__img = document.createElement("img")
    headerBattery__img.src = `${battery}`

    headerBattery__container.append(headerBluetooth__img,headerBattery__text,headerBattery__img)
})
// document.querySelector('#app').innerHTML =`<h2 class ="title">что</h2>`
