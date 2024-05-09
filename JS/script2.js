$(function(){
	$(".before-article").hover(function(e){
		e.preventDefault();
		$(".expand-img").toggleClass("open");
	});
});


$(function(){
	$(".before-article-1").hover(function(e){
		e.preventDefault();
		$(".expand-img-1").toggleClass("open");
	});
});


$(function(){
	$(".before-article-2").hover(function(e){
		e.preventDefault();
		$(".expand-img-2").toggleClass("open");
	});
});

$(function(){
	$(".before-article-3").hover(function(e){
		e.preventDefault();
		$(".expand-img-3").toggleClass("open");
	});
});


$(function(){
	$(".before-article-4").hover(function(e){
		e.preventDefault();
		$(".expand-img-4").toggleClass("open");
	});
});

$(function(){
	$(".before-article-5").hover(function(e){
		e.preventDefault();
		$(".expand-img-5").toggleClass("open");
	});
});

function mostrarResultado() {
	var textoInput = document.getElementById("texto").value;
	var contenedorResultados = document.getElementById("contenedor-resultados");
	var nuevoDiv = document.createElement("div");
	nuevoDiv.innerText = textoInput;
	contenedorResultados.appendChild(nuevoDiv);
}


function mostrarHora() {
  const divHora = document.getElementById('hora');
  const fechaActual = new Date();
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  divHora.textContent = `${hora}:${minutos}`;
}
setInterval(mostrarHora, 1000);

$(function(){
	$(".before-article").click(function(e){
		e.preventDefault();
		$(".chat").toggleClass("open");
	});
});

