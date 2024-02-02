const divElem = document.querySelector('body > div')
const boxes = document.querySelectorAll('.box')
const cube = document.querySelector('.cube')

const myObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const infoEl = entry.target.querySelector('.info')
    const width = Math.floor(entry.contentRect.width)
    const height = Math.floor(entry.contentRect.height)
    const radius =
      Math.floor(entry.contentRect.width / entry.contentRect.height) * 5
    const angle = Math.floor((width / 360) * 100)
    const gradient = `linear-gradient(${angle}deg, #8E0E00,#1F1C18)`

    entry.target.style.background = gradient

    infoEl.innerText = `Width ${width} px - Height : ${height} px `
    cube.style.borderRadius = `${radius}%`
    cube.innerText = `Radius: ${radius}`
  }
})

boxes.forEach((box) => {
  myObserver.observe(box)
})
