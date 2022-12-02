// Бургер
let burger = document.querySelector(".burger-btn");
let menu = document.querySelector(".header-nav-menu");
let menuLinks = menu.querySelectorAll(".header-list__item-link");
let burgerInMenu = document.querySelector(".burger-menu");

burger.addEventListener("click", function () {
  menu.classList.toggle("header-nav--visible");

  burger.classList.toggle("is--active");

  burgerInMenu.classList.toggle("is--active");

  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    menu.classList.remove("header-nav--visible");

    burger.classList.remove("is--active");

    burgerInMenu.classList.remove("is--active");

    document.body.classList.remove("stop-scroll");
  });
});

burgerInMenu.addEventListener("click", function () {
  menu.classList.remove("header-nav--visible");

  burger.classList.remove("is--active");

  burgerInMenu.classList.remove("is--active");

  document.body.classList.remove("stop-scroll");
});

// Поиск
let search = document.querySelector(".search");
let form_search = document.querySelector(".search__form");
let search_close = document.querySelector(".search__exit");
const form = document.querySelector(".search");

form.addEventListener('submit', (e) => { e.preventDefault() });

search.addEventListener("click", function (e) {
  form_search.classList.add("search__form--active");
});

search_close.addEventListener("click", function (e) {
  e.stopPropagation();
  form_search.classList.remove("search__form--active");
});

// Выпадающий список хедера
const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

// Слайдер hero
let swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  longSwipesMs: 1000,
  speed: 1000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  a11y: {
    paginationBulletMessage: 'Переход на слайд {{index}}',
  },
  effect: "fade",
});

// Селект galery
(() => {
  const select = document.querySelector('.js-custom-select');
const choices = new Choices(select, {
  searchEnabled: false,
  shouldSort: false,
  // itemSelectText: '',
  position: 'bottom',
  classNames: {
      containerOuter: 'default-select',
      containerInner: 'default-select__inner',
      input: 'default-select__input',
      inputCloned: 'default-select__input--cloned',
      list: 'default-select__list',
      listItems: 'default-select__list--multiple',
      listSingle: 'default-select__list--single',
      listDropdown: 'default-select__list--dropdown',
      item: 'default-select__item',
      itemSelectable: 'default-select__item--selectable',
      itemDisabled: 'default-select__item--disabled',
      itemChoice: 'default-select__item--choice',
      placeholder: 'default-select__placeholder',
      group: 'default-select__group',
      groupHeading: 'default-select__heading',
      button: 'default-select__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-default-select'
    },
});
})();

// Слайдер galery
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    allowTouchMove: false,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".galery .number-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        allowTouchMove: true
      },

      441: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        allowTouchMove: true
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
        allowTouchMove: true
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup: 2,
        allowTouchMove: true
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        allowTouchMove: true
      },

      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        allowTouchMove: false
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});

// ВАЖНО!!! Этот пример аккордеона работает с версией плагина  3.1.1. Вот она: https://unpkg.com/accordion-js@3.1.1/dist/accordion.min.js
(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();

// Табы в аккордеоне
const params_accardion = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(params_accardion) {
  const tabBtns = document.querySelectorAll(`.${params_accardion.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${params_accardion.wrap}`);
    const currentContent = wrap.querySelector(`.${params_accardion.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${params_accardion.content}`);

    contents.forEach((el) => {
      el.classList.remove(params_accardion.active);
    });

    currentContent.classList.add(params_accardion.active);

    tabBtns.forEach((el) => {
      el.classList.remove(params_accardion.active);
    });

    this.classList.add(params_accardion.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(params_accardion);


// Слайдер developments
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".developments__slides-container", {
    slidesPerView: 1,
    allowTouchMove: false,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".developments .developments-number-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".developments__btn-next",
      prevEl: ".developments__btn-prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        allowTouchMove: true
      },

      321: {
        slidesPerView: 2,
        spaceBetween: 5,
        slidesPerGroup: 2,
        allowTouchMove: true
      },

      410: {
        slidesPerView: 2,
        spaceBetween: 33,
        slidesPerGroup: 2,
        allowTouchMove: true
      },

      769: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
        allowTouchMove: true
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        allowTouchMove: true
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 57,
        slidesPerGroup: 3,
        allowTouchMove: true
      },

      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        allowTouchMove: false
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

      // пагинация
    pagination: {
      el: ".developments-swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});


// Инициализация тултипа
(() => {
  tippy('.js-tooltip-btn', {
    theme: 'notification',
    // maxWidth: 165,
    trigger: 'click'
  });
})();


// Слайдер projects
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".projects__slides-container", {
    slidesPerView: 1,
    allowTouchMove: false,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".projects .projects-number-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".projects__btn-next",
      prevEl: ".projects__btn-prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        allowTouchMove: true
      },

      321: {
        slidesPerView: 1,
        spaceBetween: 5,
        slidesPerGroup: 1,
        allowTouchMove: true
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup: 2,
        allowTouchMove: true
      },

      769: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
        allowTouchMove: true
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 2,
        allowTouchMove: true
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        allowTouchMove: true
      },

      1201: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        allowTouchMove: false
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

      // пагинация
    pagination: {
      el: ".projects-swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});

// Маска в поле "телефон"
var phoneElement = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(phoneElement);

// Валидация формы
const validation = new window.JustValidate('.js-custom-form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #D11616',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#D11616',
  },
  focusInvalidField: true,
  lockForm: true,

  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
});

validation
.addField('.input-name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно содержать хотя бы 3 буквы'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя не может содержать более 30 символов'
  },
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?'
  }
])
.addField('.input-tel', [
  {
    validator: () => {
      const phone = phoneElement.inputmask.unmaskedvalue();
      const result = Number(phone) && phone.length === 10;
      return result === 0 ? false : result;
    },
    errorMessage: 'Укажите ваш телефон'
  }
]);

// Карта
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.757369, 37.612991],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.760808, 37.614032],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-icon.png",
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
};

// Плавный Скролл ПК
document.querySelectorAll('.js-scroll-link-pc').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});

// Плавный Скролл только на мобильном
(() => {
	const MOBILE_WIDTH = 1024;

	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}

	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}

	  const href = link.getAttribute('href').substring(1);

	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;

	  window.scrollBy({
	      top: elementPosition,
	      behavior: 'smooth'
	  });
	}

	document.querySelectorAll('.js-scroll-link').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();

	      scrollToContent(this, true);
	  });
	});
})();

// Модальное окно
class Modal {
	constructor(options) {
		let defaultOptions = {
			isOpen: () => {},
			isClose: () => {},
		}
		this.options = Object.assign(defaultOptions, options);
		this.modal = document.querySelector('.modal');
		this.speed = false;
		this.animation = false;
		this.isOpen = false;
		this.modalContainer = false;
		this.previousActiveElement = false;
		this.fixBlocks = document.querySelectorAll('.fix-block');
		this.focusElements = [
			'a[href]',
			'input',
			'button',
			'select',
			'textarea',
			'[tabindex]'
		];
		this.events();
	}

	events() {
		if (this.modal) {
			document.addEventListener('click', function(e){
				const clickedElement = e.target.closest('.galery__swiper .swiper-slide[data-path]');
				if (clickedElement) {
					let target = clickedElement.dataset.path;
					let animation = clickedElement.dataset.animation;
					let speed = clickedElement.dataset.speed;
					this.animation = animation ? animation : 'fade';
					this.speed = speed ? parseInt(speed) : 300;
					this.modalContainer = document.querySelector(`[data-target="${target}"]`);
					this.open();
					return;
				}

				if (e.target.closest('.modal-close')) {
					this.close();
					return;
				}
			}.bind(this));

			window.addEventListener('keydown', function(e) {
				if (e.keyCode == 27) {
					if (this.isOpen) {
						this.close();
					}
				}

				if (e.keyCode == 9 && this.isOpen) {
					this.focusCatch(e);
					return;
				}

			}.bind(this));

			this.modal.addEventListener('click', function(e) {
				if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
					this.close();
				}
			}.bind(this));
		}
	}

	open() {
		this.previousActiveElement = document.activeElement;

		this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
		this.modal.classList.add('is-open');
		this.disableScroll();

		this.modalContainer.classList.add('modal-open');
		this.modalContainer.classList.add(this.animation);

		setTimeout(() => {
			this.options.isOpen(this);
			this.modalContainer.classList.add('animate-open');
			this.isOpen = true;
			this.focusTrap();
		}, this.speed);
	}

	close() {
		if (this.modalContainer) {
			this.modalContainer.classList.remove('animate-open');
			this.modalContainer.classList.remove(this.animation);
			this.modal.classList.remove('is-open');
			this.modalContainer.classList.remove('modal-open');

			this.enableScroll();
			this.options.isClose(this);
			this.isOpen = false;
			this.focusTrap();
		}
	}

	focusCatch(e) {
		const focusable = this.modalContainer.querySelectorAll(this.focusElements);
		const focusArray = Array.prototype.slice.call(focusable);
		const focusedIndex = focusArray.indexOf(document.activeElement);

		if (e.shiftKey && focusedIndex === 0) {
			focusArray[focusArray.length - 1].focus();
			e.preventDefault();
		}

		if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
			focusArray[0].focus();
			e.preventDefault();
		}
	}

	focusTrap() {
		const focusable = this.modalContainer.querySelectorAll(this.focusElements);
		if (this.isOpen) {
			focusable[0].focus();
		} else {
			this.previousActiveElement.focus();
		}
	}

	disableScroll() {
		let pagePosition = window.scrollY;
		this.lockPadding();
		document.body.classList.add('disable-scroll');
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';
	}

	enableScroll() {
		let pagePosition = parseInt(document.body.dataset.position, 10);
		this.unlockPadding();
		document.body.style.top = 'auto';
		document.body.classList.remove('disable-scroll');
		window.scroll({ top: pagePosition, left: 0 });
		document.body.removeAttribute('data-position');
	}

	lockPadding() {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		this.fixBlocks.forEach((el) => {
			el.style.paddingRight = paddingOffset;
		});
		document.body.style.paddingRight = paddingOffset;
	}

	unlockPadding() {
		this.fixBlocks.forEach((el) => {
			el.style.paddingRight = '0px';
		});
		document.body.style.paddingRight = '0px';
	}
}

const modal = new Modal({
	isOpen: (modal) => {
		console.log(modal);
		console.log('opened');
	},
	isClose: () => {
		console.log('closed');
	},
});
