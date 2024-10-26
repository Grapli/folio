const navMobile = document.querySelector('.nav__mobile__menu')
const navBtn = document.querySelector('.nav__mobile__hamburger')
const navItems = document.querySelectorAll('.nav__mobile__menu__item')
const headerLetters = document.querySelectorAll('.word')

const handleNav = () => {
	navMobile.classList.toggle('nav__mobile__menu--active')

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile__menu--active')
		})
	})
}
const delayLetters = () => {
    headerLetters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('visible');
        }, index * 100);
    })
}

navBtn.addEventListener('click', handleNav)
delayLetters()