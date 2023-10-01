function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector(".profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    localStorage.setItem("theme", "dark")
  }
}
function profPic() {
  const html = document.documentElement
  const img = document.querySelector(".profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
function toggleMode2() {
  const html = document.documentElement

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
}
