function copiarTexto() {
    var copyText = "\\TELFSBAR01\Planejamento$\2022\20 - Sky Cobrança\02 - RELATÓRIOS\21 - RESUMO\03 - MARÇO";
    navigator.clipboard.writeText(copyText.value);
}


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
        };











