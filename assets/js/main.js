const footerYear = document.querySelector('.footer__year')

const navbarBurger = document.querySelector('.navbar-burger')
const ham = document.querySelector('.ham')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
	navbarBurger.classList.toggle('showNav')
	ham.classList.toggle('showClose')
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
		$('#thank-you-modal').fadeIn('slow')
	})

	$('#thank-you-modal').click(function () {
		$('#thank-you-modal').fadeOut('slow')
	})
})
