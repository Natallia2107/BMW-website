const footerYear = document.querySelector('.footer__year')

const navbarBurger = document.querySelector('.navbar-burger')
const ham = document.querySelector('.ham')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

// toggles hamburger menu in and out when clicking on the hamburger

function isMobileMenuEnabled() {
	return 	navbarBurger.classList.contains('showNav');
}
function toggleHamburger() {
	navbarBurger.classList.toggle('showNav')
	ham.classList.toggle('showClose')
	$('body').toggleClass("disable-scroll", isMobileMenuEnabled());
}

ham.addEventListener('click', toggleHamburger)

// toggle when clicking on links
const menuLinks = document.querySelectorAll('.menuLink')
menuLinks.forEach(function (menuLink) {
	menuLink.addEventListener('click', toggleHamburger)
})

function checkToggle(e) {
	const itemClicked = e.target
	if (itemClicked.classList.contains('menuLink')) {
		toggleHamburger()
	}
}

navbarBurger.addEventListener('click', checkToggle)

$(document).ready(function () {
	$('#form-btn-send').click(function () {
		$('#thank-you-modal').fadeIn('fast')
		$('body').toggleClass("disable-scroll", true);
	})

	$('#thank-you-modal').click(function () {
		$('#thank-you-modal').fadeOut('fast')
		$('body').toggleClass("disable-scroll", false)
	})

	$('.test-drive-burger-text').click(function () {
		toggleHamburger()
	})

	$('.nav-mobile-off').click(function () {
		toggleHamburger()
	})

})
