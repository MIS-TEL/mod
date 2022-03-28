$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
			
            $('html, body').animate({ 
                scrollTop: targetOffset - 100
            }, 500);
        });





        window.onload = function(){
            //hide the preloader
            document.querySelector(".preloader").style.display = "none";
        }



const icone = document.getElementById('menu')

function togglemenu() {
    const nav = document.getElementById('items')
    nav.classList.toggle('active')
}

icone.addEventListener('click', togglemenu)






