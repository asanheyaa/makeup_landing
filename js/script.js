const burgerIcon = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
burgerIcon.addEventListener('click', (e) => {
	if (e.target.closest('.header__burger')) {
		burgerIcon.classList.toggle('_active')
		document.body.classList.toggle('_lock');
		menu.classList.toggle('_active');
	}
})


const animItems = document.querySelectorAll('._anim-items');

if (animItems) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		animItems.forEach(animItem => {

			const animItemHeigh = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			const scrollDistance = window.pageYOffset;

			let animItemPoint = window.innerHeight - animItemHeigh / animStart;

			if (animItemHeigh > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			
			if ((scrollDistance > animItemOffset - animItemPoint) && scrollDistance < (animItemOffset + animItemHeigh)) {
				animItem.classList.add('_show');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_show');
				}
			}
		});

	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left:rect.left + scrollLeft}
			
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);

}

// cursor

const cursor = document.getElementById('cursor'),
	links = document.querySelectorAll('a');
let mouseX = 0,
	mouseY = 0,
	posX = 0,
	posY = 0

	
document.body.addEventListener('mousemove', mouseCoords);

function mouseCoords(e) {
	mouseX = e.clientX
	mouseY = e.clientY
	cursor.classList.remove('_hide')
}


	gsap.to({}, .01, {

		repeat: -1,

		onRepeat: () => {
			posX += (mouseX - posX) / 5
			posY += (mouseY - posY) / 5

			gsap.set(cursor, {
				css: {
					top: posY,
					left:posX
				}
			})
		}
	})

document.body.addEventListener('mouseout', (e) => {
	cursor.classList.add('_hide')
})

links.forEach(link => {
	link.addEventListener('mouseover', (e) => {
		cursor.classList.add('_link')
	})
	link.addEventListener('mouseout', (e) => {
		cursor.classList.remove('_link')
	})
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
	button.addEventListener('mouseover', (e) => {
		cursor.classList.add('_link')
	})
	button.addEventListener('mouseout', (e) => {
		cursor.classList.remove('_link')
	})
});

const inputs = document.querySelectorAll('input');

if (inputs) {
	inputs.forEach(input => {
		input.addEventListener('mouseover', (e) => {
			cursor.classList.add('_link')
		})
		input.addEventListener('mouseout', (e) => {
			cursor.classList.remove('_link')
		})
	});
}