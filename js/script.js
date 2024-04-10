document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const targetId = this.getAttribute('href')
		const targetElement = document.querySelector(targetId)
		const headerHeight = 82 // Высота фиксированной шапки
		const targetPosition = targetElement.offsetTop - headerHeight

		// Плавный скролл
		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth',
		})
	})
})

window.addEventListener('scroll', function () {
	let image = document.querySelector('.hero-scroll-down')
	let scrollValue = window.scrollY
	let opacity = 1

	if (scrollValue > 10 && scrollValue <= 200) {
		opacity = 1 - (scrollValue - 10) / 190
	}

	if (scrollValue > 200) {
		opacity = 0
	}

	image.style.opacity = opacity.toString()
})

function toggleMenu() {
	let x = document.querySelector('.header-menu')
	if (x.style.display === 'block') {
		x.style.display = 'none'
	} else {
		x.style.display = 'block'
	}
}
