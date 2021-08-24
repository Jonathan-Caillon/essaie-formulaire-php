const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener("change", function(e) {

    if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    }
});

let currentTheme = localStorage.getItem("theme")

if(currentTheme != null) {
    document.documentElement.setAttribute("data-theme", currentTheme)
    if(currentTheme == "dark") {
        toggleSwitch.checked = "true"
    }
}
