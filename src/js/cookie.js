const cookieBanner = document.querySelector('.cookie-banner')
const cookieYesBtn = document.querySelector('.accept-cookies')
const cookieNoBtn = document.querySelector('.decline-cookies')

const acceptedCookies = () => {
	if (localStorage.getItem('cookiesAccepted') === 'true') {
		cookieBanner.style.display = 'none'
	}
}
const enableCookies = () => {
	var script = document.createElement('script')
	script.async = true
	script.src = 'https://www.googletagmanager.com/gtag/js?id=G-W2M872GM1P'
	document.head.appendChild(script)

	script.onload = function () {
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())
		gtag('config', 'G-W2M872GM1P')
	}
}
const disableCookies = () => {}
acceptedCookies()
cookieYesBtn.addEventListener('click', function () {
	localStorage.setItem('cookiesAccepted', 'true')
	cookieBanner.style.display = 'none'
	enableCookies()
})
cookieNoBtn.addEventListener('click', function () {
	localStorage.setItem('cookiesAccepted', 'false')
	cookieBanner.style.display = 'none'
})
