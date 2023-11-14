// function selectMode(mode) {

// 	let color = "ghostWhite";
// 	let image = "img/spotlight.png";
// 	let label = "Light Mode";

// 	if (mode === "dark") {
// 		color = "darkSlateBlue";
// 		image = "img/bat.png";
// 		label = "Dark Mode";
// 	} else if (mode === "light") {
// 		color = "ghostWhite";
// 		image = "img/spotlight.png";
// 		label = "Light Mode";
// 	} else {
// 		color = "dimGray";
// 		image = "img/ninja.png";
// 		label = "Ninja Mode";
// 	}
// 	console.log(label);

// 	document.getElementById('icon').src = image;

// 	document.getElementById('theme').style.backgroundColor = color;

// 	document.getElementById('label').innerHTML = label;
// }


// // Найти элемент, который отвечает за переключение
// const checkbox = document.querySelector('#checkbox');
// // Найти боди для того, чтобы установить класс и переключить цвет
// const body = document.querySelector('body');

// // Навесить обработчик для переключения цвета
// checkbox.addEventListener('change', () => {
//     body.classList.toggle("light-mode");
// })

// // Второй вариант
// // checkbox.onchange = () =>  body.classList.toggle("dark-mode");

// let nav = document.getElementById('nav-prueba');
 // ESTE FUNCIONA:
let nav = document.querySelector('header');

window.addEventListener('scroll', function() {
	// let nav = document.querySelector('header');
	nav.classList.toggle('sticky', window.scrollY > 0)
})




// $(window).('scroll', function() {
// 	if ($(window).scrollTop()) {
// 		$('.nav-prueba').addClass('.black');
// 	} else {
// 		$('.nav-prueba').removeClass('.black');
// 	}
// });

// ---- START BUTTOM MENU -------
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const openMenu = document.querySelector('.open_menu');

toggleBtn.onclick = function () {
	openMenu.classList.toggle('abrir')
	const isOpen = openMenu.classList.contains('abrir')

	toggleBtnIcon.classList = isOpen 
	? 'fa-solid fa-xmark'
	: 'fa-solid fa-bars'

}

// ---- END BUTTOM MENU -------


// ------START BACK MENU -------
let container = document.querySelectorAll('.container');
// let navLinks = document.querySelectorAll('.header .nav-collapse .nav-link-test');
let navLinks = document.querySelectorAll('.nav-collapse .nav-link-test');
// let navLinks = document.querySelector('.nav-collapse').querySelectorAll('a');

window.onscroll = () => {
	container.forEach(element => {
		let topNav = window.scrollY;
		let offsetNav = element.offsetTop - 150;
		let heightNav = element.offsetHeight;
		let id = element.getAttribute('id');
		console.log(topNav);

		if(topNav >= offsetNav && topNav < offsetNav + heightNav) {
			navLinks.forEach(links => {
				links.classList.remove('active-link');
				document.querySelector(`.nav-collapse .nav-link-test[href*=' + id + ']`).classList.add('active-link');
			});
			// document.querySelector(`.nav-link-test[href='#${id}']`).classList.add('active-link');
			// document.querySelector('.header .nav-collapse .nav-link-test [href*=' + id + ']').classList.add('active-link');
		};

		// if(topNav >= offsetNav && topNav < offsetNav + heightNav) {
		// 	navLinks.forEach(links => {
		// 		links.addEventListener('click', function() {
		// 			navLinks.forEach(nav=>nav.classList.remove('active-link'))

		// 			this.classList.add('active-link');
		// 		})
		// 	})
		// }
	});
};

// ------END BACK MENU -------


// -------START PRUEBA EFECTO TEXTOS ORIGINAL-----

// let sections = document.querySelectorAll('.section-prueba');

// window.onscroll = () => {
// 	sections.forEach(sec => {
// 		let top = window.scrollY;
// 		let offset = sec.offsetTop -400;
// 		let height = sec.offsetHeight +225;

// 		if (top >= offset && top < offset + height) {
// 			sec.classList.add('show-animate');
// 		} else{
// 			sec.classList.remove('show-animate');	
// 		}
// 	})
// }

// -------END PRUEBA EFECTO TEXTOS ORIGINAL-----

// START EFECTO TEXTOS Y EFECTO SCROLL JUNTOS

// START COMENTO PARA HACER OTRA COSA, PERO USAR ESTO!!!!

// let reveals = document.querySelectorAll(".reveal");
// let sections = document.querySelectorAll('.section-prueba');

// window.onscroll = () => {

// 	sections.forEach(sec => {
// 		let top = window.scrollY;
// 		let offset = sec.offsetTop -400;
// 		let height = sec.offsetHeight +225;

// 		if (top >= offset && top < offset + height) {
// 			sec.classList.add('show-animate');
// 		} else{
// 			sec.classList.remove('show-animate');	
// 		}
// 	})

// 	for (let i = 0; i < reveals.length; i++) {
// 		let windowHeight = window.innerHeight;
// 		let elementTop = reveals[i].getBoundingClientRect().top;
// 		let elementVisible = 150;

// 		if (elementTop < windowHeight - elementVisible) {
// 		      reveals[i].classList.add("active");
// 		    } else {
// 		      reveals[i].classList.remove("active");
// 		    }
// 	}
// }

// END COMENTO PARA HACER OTRA COSA, PERO USAR ESTO!!!!


let reveals = document.querySelectorAll(".reveal");
let sections = document.querySelectorAll('.section-prueba');

window.onscroll = () => {

	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop -400;
		let height = sec.offsetHeight +225;

		if (top >= offset && top < offset + height) {
			sec.classList.add('show-animate');
		} else{
			sec.classList.remove('show-animate');	
		}
	})

	for (let i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
		      reveals[i].classList.add("active");
		    } else {
		      reveals[i].classList.remove("active");
		    }
	}

	// let container = document.querySelectorAll('.container');
	// let navLinks = document.querySelectorAll('.nav-collapse .nav-link-test');

	container.forEach(element => {

		let container = document.querySelectorAll('container-js');
		let navLinks = document.querySelectorAll('.nav-collapse .nav-link-test');

		let topNav = window.scrollY;
		let offsetNav = element.offsetTop - 200;
		let heightNav = element.offsetHeight;
		let id = element.getAttribute('id');

		if(topNav >= offsetNav && topNav < offsetNav + heightNav) {
			navLinks.forEach(links => {
				links.classList.remove('active-link');
				document.querySelector('.nav-collapse .nav-link-test[href*=' + id + ']').classList.add('active-link');
			});	
		};
	});
}




// window.onscroll = () => {
// 	container.forEach(element => {
// 		let topNav = window.scrollY;
// 		let offsetNav = element.offsetTop - 150;
// 		let heightNav = element.offsetHeight;
// 		let id = element.getAttribute('id');
// 		console.log(topNav);

// 		if(topNav >= offsetNav && topNav < offsetNav + heightNav) {
// 			navLinks.forEach(links => {
// 				links.classList.remove('active-link');
// 				document.querySelector(`.nav-collapse .nav-link-test[href*=' + id + ']`).classList.add('active-link');
// 			});	
// 		};
// 	});
// };

// END EFECTO TEXTOS Y EFECTO SCROLL JUNTOS

// ------------- START EFECTO DE SCROLL EL ORIGINAL

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// ------------- END EFECTO DE SCROLL EL ORIGINAL


// ---- EFECTO SCROLL SERVICES

// const boxes = document.querySelectorAll('.box');

// window.addEventListener('scroll', checkBoxes);

// checkBoxes()

// function checkBoxes() {
// 	// console.log(window.innerHeight)

// 	const triggerBottom = window.innerHeight / 5 * 4;

// 	boxes.forEach(box => {
// 		const boxTop = box.getBoundingClientRect().top;

// 		if(boxTop < triggerBottom) {
// 			box.classList.add('show');
// 		} else {
// 			box.classList.remove('show');
// 		}
// 	});
// }


/*-----START PRGRESS BAR 2*/

// let number = document.getElementById('number');
// let counter = 0;

// setInterval(() => {
// 	if (counter === 90) {
// 		clearInterval;
// 	} else {
// 		counter += 1;
// 	number.innerHTML = `${counter}%`;
// 	}
// }, 15);

/*-----END PRGRESS BAR 2*/



// START NEW 3 PRGRESS BAR РАБОТАЕТ

	// const progressCircular = document.querySelector('.progres-circular');
	// const value = document.querySelector('.value');

	// let initValue = 0;
	// let finalValue = 90;

	// const updateValue = function() {
	// 	if(initValue !== finalValue) {
	// 		initValue++;
	// 		value.textContent = `${initValue}%`;
	// 		// progressCircular.style.backgroundImage = `conic-gradient(#880bea, #ededed ${3.6 * initValue}deg, #880bea 0)`;
	// 		progressCircular.style.background = `conic-gradient(#880bea ${3.6 * initValue}deg, #ededed 0)`;
	// 	}
	// }

	// setInterval(updateValue, 20);

// END NEW 3 PRGRESS BAR

// START PROGRESS BAR MIO SI FUNCIONA Y CON SCROLL

const graphics = document.querySelector('.graphics');
const progresGroup = document.querySelectorAll('.progres-group');
const circular = document.querySelectorAll('.progres-circular');
const value = document.querySelectorAll('.value');

let bol = false;

window.addEventListener('scroll', function () {
  if (pageYOffset > graphics.offsetTop - 350 && bol === false) {
     progresGroup.forEach((progres, index) => {
  let initValue = 0;
  let endValue = value[index].dataset.count;

  let progressTimer = setInterval(() => {
    initValue++;
    if(initValue == endValue) {
      clearInterval(progressTimer);
    }
    
    circular[index].style.background = `conic-gradient(#DA22FF ${3.6 * initValue}deg, #ededed 0)`;

    value[index].innerHTML = initValue + ' %';
  }, 50)
  // bol = true;
});
     bol = true;
  }
})


// END PROGRESS BAR MIO SI FUNCIONA Y CON SCROLL

