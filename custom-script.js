// Hide Header on on scroll down
if ($(".main-header").length) {
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $(".main-header").outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta) return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$(".main-header").removeClass("header-down").addClass("header-up");
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$(".main-header").removeClass("header-up").addClass("header-down");
			}
		}

		lastScrollTop = st;
	}
}

(function ($) {
	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($(".loader-wrap").length) {
			$(".loader-wrap").delay(500).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
		$(".preloader-close").on("click", function () {
			$(".loader-wrap").delay(200).fadeOut(500);
		});
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($(".main-header").length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $(".main-header");
			var scrollLink = $(".scroll-to-top");
			if (windowpos >= 1) {
				siteHeader.addClass("fixed-header");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass("fixed-header");
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//Search Toggle
	if ($(".search-box").length) {
		$(".search-toggle").on("click", function () {
			$("body").toggleClass("visible-search");
		});
		$(".s-close-btn,.search-backdrop").on("click", function () {
			$("body").removeClass("visible-search");
		});
		$(document).keydown(function (e) {
			if (e.keyCode === 27) {
				$("body").removeClass("visible-search");
			}
		});
	}

	//Info Sidebar Toggle
	if ($(".main-header .info-toggler .info-btn").length) {
		//Show Form
		$(".main-header .info-toggler .info-btn").on("click", function (e) {
			e.preventDefault();
			$("body").addClass("side-content-visible");
		});
		//Hide Form
		$(".info-bar .inner-box .cross-icon,.info-back-drop,.close-menu").on(
			"click",
			function (e) {
				e.preventDefault();
				$("body").removeClass("side-content-visible");
			}
		);
		$(document).keydown(function (e) {
			if (e.keyCode === 27) {
				$("body").removeClass("side-content-visible");
			}
		});
	}

	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $(".hidden-bar .side-menu");
		// appending expander button
		menuWrap.find("li.dropdown > a").append(function () {
			return '<button type="button" class="btn-expander"><i class="far fa-angle-right"></i></button>';
		});
		// hidding submenu
		menuWrap.find(".dropdown").children("ul").hide();

		$(".hidden-bar .side-menu ul li.dropdown .btn-expander").on(
			"click",
			function (e) {
				e.preventDefault();
				$(this).parent("a").parent("li").children("ul").slideToggle();
				// toggling arrow of expander
				$(this).find("i").toggleClass("fa-angle-right fa-angle-down");
				return false;
			}
		);
	}

	hiddenBarMenuConfig();

	//Custom Scroll for Hidden Sidebar
	if ($(".hidden-bar").length) {
		$(".hidden-bar-closer,.menu-backdrop").on("click", function () {
			$(".hidden-bar,body").removeClass("visible-sidebar");
			$(".side-menu ul li.dropdown ul").slideUp();
			$(".side-menu ul li.dropdown > a i")
				.removeClass("fa-angle-right")
				.addClass("fa-angle-down");
		});
		$(document).keydown(function (e) {
			if (e.keyCode === 27) {
				$(".hidden-bar,body").removeClass("visible-sidebar");
				$(".side-menu ul li.dropdown ul").slideUp();
				$(".side-menu ul li.dropdown > a i")
					.removeClass("fa-angle-right")
					.addClass("fa-angle-down");
			}
		});
		$(".hidden-bar-opener").on("click", function () {
			$(".hidden-bar,body").addClass("visible-sidebar");
		});
	}

	//Banner Carousel
	if ($(".banner-slider").length) {
		var swiper = new Swiper(".banner-slider", {
			autoplay: true,
			autoplaySpeed: 7000,
			effect: "fade",
			speed: 1000,
			margin: 0,
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				delay: 7000,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

	//Parallax Scene for Icons
	if ($(".parallax-scene-1").length) {
		var scene = $(".parallax-scene-1").get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($(".parallax-scene-2").length) {
		var scene = $(".parallax-scene-2").get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($(".parallax-scene-3").length) {
		var scene = $(".parallax-scene-3").get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($(".parallax-scene-4").length) {
		var scene = $(".parallax-scene-4").get(0);
		var parallaxInstance = new Parallax(scene);
	}

	//Dish Gallery Carousel
	if ($(".dish-gallery-slider").length) {
		$(".dish-gallery-slider").owlCarousel({
			loop: true,
			margin: 45,
			nav: true,
			smartSpeed: 700,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon fa-light fa-angle-left"></span>',
				'<span class="icon fa-light fa-angle-right"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				768: {
					items: 2,
					margin: 30,
				},
				992: {
					items: 3,
					margin: 30,
				},
				1200: {
					items: 3,
				},
			},
		});
	}

	//Testimonials Carousel
	if ($(".testimonial-slider").length) {
		$(".testimonial-slider").owlCarousel({
			loop: true,
			margin: 50,
			nav: true,
			smartSpeed: 700,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon fa-light fa-angle-left"></span>',
				'<span class="icon fa-light fa-angle-right"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				768: {
					items: 2,
					margin: 30,
				},
				992: {
					items: 2,
					margin: 30,
				},
				1200: {
					items: 3,
				},
			},
		});
	}

	//Gallery Carousel
	if ($(".image-gallery-slider").length) {
		$(".image-gallery-slider").owlCarousel({
			loop: true,
			margin: 50,
			nav: true,
			smartSpeed: 700,
			autoplay: true,
			autoplayTimeout: 5000,
			navText: [
				'<span class="icon fa-light fa-angle-left"></span>',
				'<span class="icon fa-light fa-angle-right"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 1,
				},
			},
		});
	}

	// Testimonials Carousel
	if (
		$(".testimonials-section .testi-top").length &&
		$(".testimonials-section .testi-thumbs").length
	) {
		var $sync1 = $(".testimonials-section .testi-top"),
			$sync2 = $(".testimonials-section .testi-thumbs"),
			flag = false,
			duration = 500;

		$sync1
			.owlCarousel({
				loop: true,
				items: 1,
				margin: 30,
				nav: true,
				navText: [
					'<span class="prev-btn far fa-angle-left"></span>',
					'<span class="next-btn far fa-angle-right"></span>',
				],
				dots: false,
				autoplay: true,
				autoplayTimeout: 5000,
			})
			.on("changed.owl.carousel", function (e) {
				if (!flag) {
					flag = false;
					$sync2.trigger("to.owl.carousel", [e.item.index, duration, true]);
					flag = false;
				}
			});

		$sync2
			.owlCarousel({
				loop: true,
				margin: 0,
				items: 1,
				nav: false,
				navText: [
					'<span class="icon far fa-angle-left"></span>',
					'<span class="icon far fa-angle-right"></span>',
				],
				dots: false,
				center: false,
				autoplay: true,
				centered: true,
				autoplayTimeout: 5000,
			})

			.on("click", ".owl-item", function () {
				$sync1.trigger("to.owl.carousel", [$(this).index(), duration, true]);
			})
			.on("changed.owl.carousel", function (e) {
				if (!flag) {
					flag = true;
					$sync1.trigger("to.owl.carousel", [e.item.index, duration, true]);
					flag = false;
				}
			});
	}

	//Date Picker
	if ($(".datepicker").length) {
		$(".datepicker").datepicker();
	}

	//Fact Counter + Text Count
	if ($(".count-box").length) {
		$(".count-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text(),
					}).animate(
						{
							countNum: n,
						},
						{
							duration: r,
							easing: "linear",
							step: function () {
								$t.find(".count-text").text(Math.floor(this.countNum));
							},
							complete: function () {
								$t.find(".count-text").text(this.countNum);
							},
						}
					);
				}
			},
			{ accY: 0 }
		);
	}

	//Accordion Box
	if ($(".accordion-box").length) {
		$(".accordion-box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion-box");
			var target = $(this).parents(".accordion");

			if ($(this).next(".acc-content").is(":visible")) {
				//return false;
				$(this).removeClass("active");
				$(this).next(".acc-content").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc-content").slideUp(300);
				$(this).next(".acc-content").slideDown(300);
				$(this).parent(".accordion").addClass("active-block");
			}
		});
	}

	//Tabs Box
	if ($(".tabs-box").length) {
		$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
			e.preventDefault();
			var target = $($(this).attr("data-tab"));

			if ($(target).is(":visible")) {
				return false;
			} else {
				target
					.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				$(this).addClass("active-btn");
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.fadeOut(0);
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab");
				$(target).fadeIn(300);
				$(target).addClass("active-tab");
			}
		});
	}

	//LightBox / Fancybox
	if ($(".lightbox-image").length) {
		$(".lightbox-image").fancybox({
			thumbs: {
				autoStart: true,
			},
			openEffect: "fade",
			closeEffect: "fade",
			helpers: {
				media: {
					youtube: {
						params: {
							autoplay: 1,
						},
					},
				},
			},
		});
	}

	// Video play button functionality
	if ($("[data-fancybox='video']").length) {
		$("[data-fancybox='video']").on("click", function (e) {
			e.preventDefault();
			var videoSrc = $(this).attr("href");

			$.fancybox.open({
				src:
					'<div style="width:800px;height:600px;background:#000;display:flex;align-items:center;justify-content:center;">' +
					'<video controls autoplay style="width:100%;height:100%;">' +
					'<source src="' +
					videoSrc +
					'" type="video/mp4">' +
					"Your browser does not support the video tag." +
					"</video>" +
					"</div>",
				type: "html",
				width: 800,
				height: 600,
				autoSize: false,
				fitToView: true,
				aspectRatio: true,
			});
		});
	}

	// Scroll to a Specific Div
	if ($(".scroll-to-target").length) {
		$(".scroll-to-target").on("click", function () {
			var target = $(this).attr("data-target");
			// animate
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top,
				},
				1500
			);
		});
	}

	// Elements Animation
	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow", // animated element css class (default is wow)
			animateClass: "animated", // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: false, // trigger animations on mobile devices (default is true)
			live: true, // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}

	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on("scroll", function () {
		headerStyle();
	});

	/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on("load", function () {
		handlePreloader();
		if ($("body.page-loaded").length) {
			$("body").addClass("page-done");
		}
	});

	/* ==========================================================================
   When document is Resized
   ========================================================================== */

	$(window).on("resize", function () {});

	// Form submission handlers
	function showMessage(messageType, formType) {
		if (formType === "newsletter") {
			$("#newsletter-messages").show();
			if (messageType === "success") {
				$("#newsletter-success").show();
				$("#newsletter-error").hide();
			} else {
				$("#newsletter-error").show();
				$("#newsletter-success").hide();
			}
		} else {
			$("#form-messages").show();
			if (messageType === "success") {
				$("#success-message").show();
				$("#error-message").hide();
			} else {
				$("#error-message").show();
				$("#success-message").hide();
			}
		}

		// Hide message after 5 seconds
		setTimeout(function () {
			if (formType === "newsletter") {
				$("#newsletter-messages").fadeOut();
			} else {
				$("#form-messages").fadeOut();
			}
		}, 5000);
	}

	// Contact form submission
	$(document).on("submit", "#contactForm", function (e) {
		e.preventDefault();

		// Get form data
		var formData = {
			name: $('input[name="name"]', this).val(),
			email: $('input[name="email"]', this).val(),
			phone: $('input[name="phone"]', this).val(),
			message: $('textarea[name="message"]', this).val(),
		};

		// Basic validation
		if (!formData.name || !formData.email || !formData.message) {
			showMessage("error", "contact");
			return;
		}

		// Simulate form submission (replace with actual server endpoint)
		setTimeout(function () {
			// For now, always show success. In production, this would be an AJAX call to your server
			showMessage("success", "contact");
			$("#contactForm")[0].reset(); // Clear the form
		}, 1000);
	});

	// Booking form submission
	$(document).on("submit", "#bookingForm", function (e) {
		e.preventDefault();

		// Get form data
		var formData = {
			name: $('input[name="name"]', this).val(),
			phone: $('input[name="phone"]', this).val(),
			persons: $('select[name="persons"]', this).val(),
			date: $('input[name="date"]', this).val(),
			time: $('select[name="time"]', this).val(),
			message: $('textarea[name="message"]', this).val(),
		};

		// Basic validation
		if (
			!formData.name ||
			!formData.phone ||
			!formData.persons ||
			!formData.date ||
			!formData.time
		) {
			showMessage("error", "booking");
			return;
		}

		// Simulate form submission (replace with actual server endpoint)
		setTimeout(function () {
			// For now, always show success. In production, this would be an AJAX call to your server
			showMessage("success", "booking");
			$("#bookingForm")[0].reset(); // Clear the form
		}, 1000);
	});

	// Home booking form submission
	$(document).on("submit", "#homeBookingForm", function (e) {
		e.preventDefault();

		// Get form data
		var formData = {
			name: $('input[name="name"]', this).val(),
			phone: $('input[name="phone"]', this).val(),
			persons: $('select[name="persons"]', this).val(),
			date: $('input[name="date"]', this).val(),
			time: $('select[name="time"]', this).val(),
			message: $('textarea[name="message"]', this).val(),
		};

		// Basic validation
		if (
			!formData.name ||
			!formData.phone ||
			!formData.persons ||
			!formData.date ||
			!formData.time
		) {
			$("#home-form-messages").show();
			$("#home-error-message").show();
			$("#home-success-message").hide();
			setTimeout(function () {
				$("#home-form-messages").fadeOut();
			}, 5000);
			return;
		}

		// Simulate form submission (replace with actual server endpoint)
		setTimeout(function () {
			// For now, always show success. In production, this would be an AJAX call to your server
			$("#home-form-messages").show();
			$("#home-success-message").show();
			$("#home-error-message").hide();
			$("#homeBookingForm")[0].reset(); // Clear the form
			setTimeout(function () {
				$("#home-form-messages").fadeOut();
			}, 5000);
		}, 1000);
	});

	// Newsletter form submission (general)
	$(document).on("submit", "#newsletterForm", function (e) {
		e.preventDefault();

		// Get form data
		var email = $('input[name="email"]', this).val();

		// Basic validation
		if (!email || !email.includes("@")) {
			showMessage("error", "newsletter");
			return;
		}

		// Simulate form submission (replace with actual server endpoint)
		setTimeout(function () {
			// For now, always show success. In production, this would be an AJAX call to your server
			showMessage("success", "newsletter");
			$("#newsletterForm")[0].reset(); // Clear the form
		}, 1000);
	});

	// Home newsletter form submission
	$(document).on("submit", "#homeNewsletterForm", function (e) {
		e.preventDefault();

		// Get form data
		var email = $('input[name="email"]', this).val();

		// Basic validation
		if (!email || !email.includes("@")) {
			$("#home-newsletter-messages").show();
			$("#home-newsletter-error").show();
			$("#home-newsletter-success").hide();
			setTimeout(function () {
				$("#home-newsletter-messages").fadeOut();
			}, 5000);
			return;
		}

		// Simulate form submission (replace with actual server endpoint)
		setTimeout(function () {
			// For now, always show success. In production, this would be an AJAX call to your server
			$("#home-newsletter-messages").show();
			$("#home-newsletter-success").show();
			$("#home-newsletter-error").hide();
			$("#homeNewsletterForm")[0].reset(); // Clear the form
			setTimeout(function () {
				$("#home-newsletter-messages").fadeOut();
			}, 5000);
		}, 1000);
	});

	// Reviews Carousel Functionality
	function initReviewsCarousel() {
		if (!$("#reviewsCarousel").length) return;

		const carousel = document.getElementById("reviewsCarousel");
		const carouselTrack = document.getElementById("carouselTrack");
		const prevBtn = document.getElementById("prevBtn");
		const nextBtn = document.getElementById("nextBtn");
		const reviewCards = Array.from(
			carouselTrack.querySelectorAll(".review-card")
		);

		if (!carouselTrack || !prevBtn || !nextBtn || reviewCards.length === 0)
			return;

		let currentIndex = 0;
		let cardsToShow = getCardsToShow();
		let cardWidth = 350; // Base card width
		let gap = 20; // Gap between cards
		let autoSlideInterval;
		const autoSlideDelay = 4000; // 4 seconds

		// Create infinite loop by managing visible cards array
		let visibleCards = [...reviewCards];

		// Calculate how many cards to show based on screen size
		function getCardsToShow() {
			const width = window.innerWidth;
			if (width >= 1200) return 3;
			if (width >= 768) return 2;
			return 1;
		}

		// Get next set of cards for infinite loop
		function getNextCards(startIndex, count) {
			const result = [];
			for (let i = 0; i < count; i++) {
				const index = (startIndex + i) % reviewCards.length;
				result.push(reviewCards[index]);
			}
			return result;
		}

		// Update visible cards in DOM
		function updateVisibleCards() {
			// Get the cards that should be visible
			const cardsNeeded = cardsToShow + 2; // Show extra cards for smooth transition
			const newVisibleCards = getNextCards(currentIndex, cardsNeeded);

			// Clear current cards
			carouselTrack.innerHTML = "";

			// Add new cards
			newVisibleCards.forEach((card, index) => {
				const cardClone = card.cloneNode(true);
				cardClone.style.minWidth = cardWidth + "px";
				carouselTrack.appendChild(cardClone);
			});

			visibleCards = newVisibleCards;
		}

		// Update carousel dimensions
		function updateCarouselDimensions() {
			cardsToShow = getCardsToShow();
			cardWidth =
				carousel.offsetWidth / cardsToShow -
				(gap * (cardsToShow - 1)) / cardsToShow;

			updateVisibleCards();
			updateCarousel();
		}

		// Update carousel position
		function updateCarousel() {
			const translateX = 0; // Always start from 0 since we're updating the DOM
			carouselTrack.style.transform = `translateX(${translateX}px)`;
			updateNavigationButtons();
		}

		// Update navigation button states (always enabled for infinite scroll)
		function updateNavigationButtons() {
			// Remove disabled state for infinite scroll
			prevBtn.classList.remove("disabled");
			nextBtn.classList.remove("disabled");
		}

		// Move to next slide (infinite)
		function nextSlide() {
			currentIndex = (currentIndex + 1) % reviewCards.length;

			// Smooth transition effect
			carouselTrack.style.transition = "transform 0.5s ease";
			carouselTrack.style.transform = `translateX(-${cardWidth + gap}px)`;

			setTimeout(() => {
				carouselTrack.style.transition = "none";
				updateVisibleCards();
				carouselTrack.style.transform = "translateX(0px)";

				// Re-enable transition for next slide
				setTimeout(() => {
					carouselTrack.style.transition = "transform 0.5s ease";
				}, 50);
			}, 500);
		}

		// Move to previous slide (infinite)
		function prevSlide() {
			currentIndex =
				currentIndex === 0 ? reviewCards.length - 1 : currentIndex - 1;

			// Smooth transition effect
			carouselTrack.style.transition = "transform 0.5s ease";
			carouselTrack.style.transform = `translateX(${cardWidth + gap}px)`;

			setTimeout(() => {
				carouselTrack.style.transition = "none";
				updateVisibleCards();
				carouselTrack.style.transform = "translateX(0px)";

				// Re-enable transition for next slide
				setTimeout(() => {
					carouselTrack.style.transition = "transform 0.5s ease";
				}, 50);
			}, 500);
		}

		// Start auto-slide
		function startAutoSlide() {
			stopAutoSlide(); // Clear any existing interval
			autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
		}

		// Stop auto-slide
		function stopAutoSlide() {
			if (autoSlideInterval) {
				clearInterval(autoSlideInterval);
				autoSlideInterval = null;
			}
		}

		// Event listeners
		nextBtn.addEventListener("click", () => {
			nextSlide();
			stopAutoSlide();
			setTimeout(startAutoSlide, 2000); // Restart auto-slide after 2 seconds
		});

		prevBtn.addEventListener("click", () => {
			prevSlide();
			stopAutoSlide();
			setTimeout(startAutoSlide, 2000); // Restart auto-slide after 2 seconds
		});

		// Pause auto-slide on hover
		carousel.addEventListener("mouseenter", stopAutoSlide);
		carousel.addEventListener("mouseleave", startAutoSlide);

		// Handle window resize
		let resizeTimeout;
		window.addEventListener("resize", () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				updateCarouselDimensions();
			}, 250);
		});

		// Initialize
		updateCarouselDimensions();
		startAutoSlide();

		// Touch/swipe support for mobile
		let startX = 0;
		let isDragging = false;

		carousel.addEventListener("touchstart", (e) => {
			startX = e.touches[0].clientX;
			isDragging = true;
			stopAutoSlide();
		});

		carousel.addEventListener("touchmove", (e) => {
			if (!isDragging) return;
			e.preventDefault();
		});

		carousel.addEventListener("touchend", (e) => {
			if (!isDragging) return;

			const endX = e.changedTouches[0].clientX;
			const diff = startX - endX;
			const threshold = 50;

			if (Math.abs(diff) > threshold) {
				if (diff > 0) {
					nextSlide();
				} else {
					prevSlide();
				}
			}

			isDragging = false;
			setTimeout(startAutoSlide, 2000);
		});
	}

	// Instagram Embeds Loader
	function loadInstagramEmbeds() {
		const container = document.getElementById("instagram-carousel-container");
		const track = document.getElementById("instagramCarouselTrack");
		const loadingEl = document.getElementById("instagram-loading");
		if (!container || !track) return;

		// Small delay to simulate loading (optional)
		setTimeout(() => {
			// Hide loading indicator
			if (loadingEl) {
				loadingEl.style.display = "none";
			}

			// Get embeds from the JavaScript file
			const embeds = getInstagramEmbeds(10); // Get up to 10 embeds

			if (embeds && embeds.length > 0) {
				// Clear existing content
				track.innerHTML = "";

				// Add each embed
				embeds.forEach((embed, index) => {
					const delay = index * 100;
					const embedContainer = document.createElement("div");
					embedContainer.className = "instagram-card";
					embedContainer.innerHTML = `
						<div class="instagram-embed wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="${delay}ms">
							${embed}
						</div>
					`;
					track.appendChild(embedContainer);
				});

				// Show the container
				container.style.display = "flex";

				// Initialize Instagram carousel
				initInstagramCarousel();

				// Load Instagram embed script
				if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
					const script = document.createElement("script");
					script.async = true;
					script.src = "//www.instagram.com/embed.js";
					document.head.appendChild(script);
				} else {
					// Reinitialize existing embeds
					if (window.instgrm) {
						window.instgrm.Embeds.process();
					}
				}

				// Reinitialize WOW animations
				if (typeof WOW !== "undefined") {
					new WOW().init();
				}
			} else {
				console.error("No Instagram embeds found");
				// Hide loading and show container anyway
				container.style.display = "flex";
				track.innerHTML =
					'<p class="text-center">Instagram posts will appear here</p>';
			}
		}, 500); // 500ms delay for loading effect
	}

	// Instagram Carousel functionality (copy of reviews carousel)
	function initInstagramCarousel() {
		const carousel = document.getElementById("instagramCarousel");
		const track = document.getElementById("instagramCarouselTrack");
		const prevBtn = document.getElementById("instagramPrevBtn");
		const nextBtn = document.getElementById("instagramNextBtn");

		if (!carousel || !track || !prevBtn || !nextBtn) return;

		let currentIndex = 0;
		const cards = track.children;
		const totalCards = cards.length;

		if (totalCards === 0) return;

		// Get card width including gap
		const cardWidth = cards[0].offsetWidth + 20; // 20px gap
		const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
		const maxIndex = Math.max(0, totalCards - visibleCards);

		function updateCarousel() {
			const translateX = -currentIndex * cardWidth;
			track.style.transform = `translateX(${translateX}px)`;

			// Update button states
			prevBtn.classList.toggle("disabled", currentIndex === 0);
			nextBtn.classList.toggle("disabled", currentIndex >= maxIndex);
		}

		function goToNext() {
			if (currentIndex < maxIndex) {
				currentIndex++;
				updateCarousel();
			}
		}

		function goToPrev() {
			if (currentIndex > 0) {
				currentIndex--;
				updateCarousel();
			}
		}

		// Event listeners
		nextBtn.addEventListener("click", goToNext);
		prevBtn.addEventListener("click", goToPrev);

		// Initialize
		updateCarousel();

		// Handle window resize
		window.addEventListener("resize", () => {
			const newVisibleCards = Math.floor(carousel.offsetWidth / cardWidth);
			const newMaxIndex = Math.max(0, totalCards - newVisibleCards);
			if (currentIndex > newMaxIndex) {
				currentIndex = newMaxIndex;
			}
			updateCarousel();
		});
	}

	// Initialize reviews carousel and Instagram embeds when document is ready
	$(document).ready(function () {
		initReviewsCarousel();

		// Load Instagram embeds
		if (document.getElementById("instagram-carousel-container")) {
			loadInstagramEmbeds();
		}
	});
})(window.jQuery);
