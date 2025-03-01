import './style.css'

document.addEventListener("DOMContentLoaded",function Features(){
    let lang = "fr";
    const params = new URLSearchParams()
    params.set("lang",lang)
    window.history.pushState(null,null,`?${params.toString()}`)
})
