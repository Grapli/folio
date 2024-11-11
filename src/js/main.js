const navMobile = document.querySelector('.nav__mobile__menu')
const navBtn = document.querySelector('.nav__mobile__hamburger')
const navItems = document.querySelectorAll('.nav__mobile__menu__item')
const headerLetters = document.querySelectorAll('.word')

const accordion = document.querySelector('.faq__box')
const accordionBtns = document.querySelectorAll('.faq__card__btn')

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
			letter.classList.add('visible')
		}, index * 100)
	})
}

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active')
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle('active')
	}
}
const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.faq__card__info')
	allActiveItems.forEach(item => item.classList.remove('active'))
}

navBtn.addEventListener('click', handleNav)
delayLetters()
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))

