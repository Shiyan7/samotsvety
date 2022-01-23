class GraphAccordion {
	constructor(selector, options) {
		let defaultOptions = {
			isOpen: () => {},
			isClose: () => {},
		};

		this.options = Object.assign(defaultOptions, options);
		this.accordion = selector;
		this.control = this.accordion.querySelector('.g-accordion__control');
		this.content = this.accordion.querySelector('.g-accordion__content');
		this.event();
	}

	event() {
		if (this.control) {
			this.control.addEventListener('click', (e) => {
				this.accordion.classList.toggle('isOpen');
			});
		}
	}

	open() {
		this.accordion.classList.add('isOpen');
		this.control.setAttribute('aria-expanded', true);
		this.content.setAttribute('aria-hidden', false);
		this.options.isOpen(this);
	}

	close() {
		this.accordion.classList.remove('isOpen');
		this.control.setAttribute('aria-expanded', false);
		this.content.setAttribute('aria-hidden', true);
		this.options.isClose(this);
	}
}