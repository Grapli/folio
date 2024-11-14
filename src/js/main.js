const navMobile = document.querySelector('.nav__mobile__menu')
const navBtn = document.querySelector('.nav__mobile__hamburger')
const navItems = document.querySelectorAll('.nav__mobile__menu__item')
const headerLetters = document.querySelectorAll('.word')
const accordion = document.querySelector('.faq__box')
const accordionBtns = document.querySelectorAll('.faq__card__btn')
const footerYear = document.querySelector('.footer__year')
const msgStatus = document.querySelector('.msg-status')
const scrollToTop = document.querySelector('.scroll-to-top')
let root = document.documentElement

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
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
console.log(document.location.search)

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success')
	msgStatus.textContent = 'Wiadomość wysłana!'

	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error')
	msgStatus.textContent = 'Wystąpił błąd.'

	setTimeout(() => {
		msgStatus.classList.remove('error')
	}, 3000)
}

const showScrollToTop = () => {
	const scroll = window.scrollY
	if (scroll > 500) {
		scrollToTop.classList.add('active')
	} else {
		scrollToTop.classList.remove('active')
	}
}

const toTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	})
}

navBtn.addEventListener('click', handleNav)
delayLetters()
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
handleCurrentYear()
scrollToTop.addEventListener('click', toTop)
// showScrollToTop()
window.addEventListener('scroll',showScrollToTop)
