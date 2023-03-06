const searchOpen = document.querySelector('.search-btn')

searchOpen.addEventListener('click', function () {
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})