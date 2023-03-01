const inputTag = document.querySelector('#inp')
const filterBtn = document.querySelector('.filter')
const saveBtn = document.querySelector('.save')
const ulTag = document.querySelector('ul')

let arr = JSON.parse(localStorage.getItem('names')) || []
let isSorted = false

const render = () => {
    ulTag.innerHTML = ''
    arr.forEach(el => {
        const liTag = document.createElement('li')
        liTag.innerText = el
        ulTag.appendChild(liTag)
    })
}

render()

saveBtn.addEventListener('click', () => {
    arr = [...arr, inputTag.value]
    localStorage.setItem('names', JSON.stringify(arr))
    render()
})

filterBtn.addEventListener('click', () => {
    if (isSorted) {
        arr = arr.reverse()
        isSorted = false
    } else {
        arr.sort()
        isSorted = true
    }
    render()
})