console.log(`logged in console.`)

const themeSwitch = document.getElementById("theme")

themeSwitch.title = "theme"

function setTheme(){
    const themedata = localStorage.getItem("theme")
    if(themedata!=null){
        if(themedata==="dark"){
            themeSwitch.textContent = "light"
            document.documentElement.setAttribute("theme","dark")
        }
        else{
            themeSwitch.textContent="dark"
            document.documentElement.removeAttribute("theme")
        }
    }
    else{
        themeSwitch.textContent = "dark"
    }
}

setTheme()

function toggleTheme(){
    const theme = localStorage.getItem("theme")
    if(theme!=null){
        if(theme==="dark"){
            document.documentElement.removeAttribute("theme")
            localStorage.removeItem("theme")
            themeSwitch.textContent = "dark"
        }
        
    }else{
        document.documentElement.setAttribute("theme","dark")
        localStorage.setItem("theme","dark")
        themeSwitch.textContent = "light"
    }
}