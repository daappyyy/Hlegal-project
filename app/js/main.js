(function() {
	const burgerOpen = document.querySelector('.header__burger')
	const burgerClose = document.querySelector('.header__nav-close')
	const navigation = document.querySelector('.header__nav')

	burgerOpen.addEventListener('click', () => {
		navigation.classList.add('active')
	})

	burgerClose.addEventListener('click', () => {
		navigation.classList.remove('active')
	})
})();

(function() {
	const tabItems = document.querySelectorAll('.tabs__links-item')
	const contentItems = document.querySelectorAll('.tabs__content-item')

	tabItems.forEach((tab, index) => {
		tab.addEventListener('click', () => {

			contentItems.forEach((content) => {
				content.classList.remove('active')
			})
			tabItems.forEach((tab) => {
				tab.classList.remove('active')
			})

			tabItems[index].classList.add('active')
			contentItems[index].classList.add('active')
		})
	})
})();

const swiper = new Swiper('.team__swiper', {
	loop: true,
	  spaceBetween: 30,
	  grabCursor: true,
	  // speed: 100,
	  // autoplay: {
	  // 	delay: 2000,
	  // },
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
		  clickable: true,
	}
  });
  