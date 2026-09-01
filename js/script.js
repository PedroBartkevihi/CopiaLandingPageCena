/*
	Côte d'Azur ville - interações da landing page
	Feito em vanilla JS, sem dependências externas.
*/

(function(){
	"use strict";

	var header = document.querySelector("header");
	var toggle = document.querySelector(".menu-toggle");
	var menu = document.querySelector(".menu");
	var linksMenu = document.querySelectorAll(".menu a");


	/* Menu mobile: abre e fecha o dropdown */
	function abreMenu(){
		menu.classList.add("aberto");
		toggle.classList.add("ativo");
		toggle.setAttribute("aria-expanded", "true");
		toggle.setAttribute("aria-label", "Fechar menu");
	}

	function fechaMenu(){
		menu.classList.remove("aberto");
		toggle.classList.remove("ativo");
		toggle.setAttribute("aria-expanded", "false");
		toggle.setAttribute("aria-label", "Abrir menu");
	}

	if(toggle && menu){
		toggle.addEventListener("click", function(){
			if(menu.classList.contains("aberto")){
				fechaMenu();
			}else{
				abreMenu();
			}
		});

		/* fecha ao clicar em um link */
		linksMenu.forEach(function(link){
			link.addEventListener("click", fechaMenu);
		});

		/* fecha com Esc */
		document.addEventListener("keydown", function(e){
			if(e.key === "Escape"){
				fechaMenu();
			}
		});

		/* fecha ao clicar fora do menu */
		document.addEventListener("click", function(e){
			if(!menu.contains(e.target) && !toggle.contains(e.target)){
				fechaMenu();
			}
		});

		/* volta ao normal quando a tela cresce */
		window.addEventListener("resize", function(){
			if(window.innerWidth > 880){
				fechaMenu();
			}
		});
	}


	/* Sombra no header ao rolar a página */
	function atualizaHeader(){
		if(window.scrollY > 8){
			header.classList.add("rolagem");
		}else{
			header.classList.remove("rolagem");
		}
	}

	if(header){
		atualizaHeader();
		window.addEventListener("scroll", atualizaHeader, { passive: true });
	}


	/* Revela os elementos [data-revelar] conforme entram na tela */
	var alvos = document.querySelectorAll("[data-revelar]");
	var semAnimacao = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	function revelaTudo(){
		alvos.forEach(function(el){ el.classList.add("visivel"); });
	}

	if(!alvos.length){
		/* nada a fazer */
	}else if(semAnimacao || !("IntersectionObserver" in window)){
		revelaTudo();
	}else{
		try{
			var observador = new IntersectionObserver(function(entradas){
				entradas.forEach(function(entrada){
					if(entrada.isIntersecting){
						entrada.target.classList.add("visivel");
						observador.unobserve(entrada.target);
					}
				});
			}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

			alvos.forEach(function(el){ observador.observe(el); });
		}catch(erro){
			revelaTudo();
		}
	}

})();
