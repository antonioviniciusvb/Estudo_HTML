//função para carregar uma string q terá algo
function logObject(Xobj){
	var msg = '', k;
	
	//foreach
	for(k in Xobj){
		msg += k+':'+Xobj[k]+'\n';
	}
	
	//printando no navegador a string carregada
	console.log(msg);
}


window.onload = function(){
	
	var banner = document.getElementById('banner');
	var formulario = document.getElementById('formcontato');
	
	if(banner){
	var temp;
	var next = document.querySelector('#banner .next');
	var prev = document.querySelector('#banner .prev');
	
	//------------------------------ Ínicio Função Para o Mover as imagens do Bannner ------------------------
	
	next.onclick = function(){
		nextSlide();
		clearInterval(temp);
		
	}
	
	prev.onclick = function(){
		prevSlide();
		clearInterval(temp);
	}

	function nextSlide(){
		var slide = document.querySelector('#banner .slide.active');
		
		if(slide.nextElementSibling != null){
		
			slide.nextElementSibling.setAttribute('class', 'slide active');
			slide.setAttribute('class','slide');
			
		}else{
			
			slide.setAttribute('class', 'slide');
			
			var slide2 = document.querySelectorAll('#banner .slide');
			slide2[0].setAttribute('class', 'slide active');
		}
		
		logObject(slide);
	}
	
	function prevSlide(){
	
		var slide = document.querySelector('#banner .slide.active');
		var ultimo;
		
		if(slide.previousElementSibling != null){
		
			slide.previousElementSibling.setAttribute('class', 'slide active');
			slide.setAttribute('class','slide');
			
		}else{
			
			slide.setAttribute('class', 'slide');
			
			ultimo = document.querySelectorAll('#banner .slide');
			ultimo = ultimo[(ultimo.length-1)];
			
			ultimo.setAttribute('class', 'slide active');
		}
	}
	}
		// -------------------------- Final Método Banner ---------------------------------
		
	    // ---------------------------- Inicio Formulario ---------------------------------
	if(formulario){
		var num = document.querySelectorAll('input.number');
		
		for(x = 0; x < num.length; x++){
			var item = num[x];
			
			item.onkeypress = item.onkeyup = function(event){
				var v = this.value;
				v = v.replace(/[a-z A-Z]/g,'');
				this.value = v;
			}
		}
		
		var form = document.forms.contato;
		
		form.onsubmit = function(){
			
			if(form.nome.value == ''){
				alert("Campo nome é Obrigatório");
			}
			
			return false;
		}
		
		
	}
	
	//============================== Final Formulario =====================================================================
	
	//============================== Inicio Galeira =====================================================================
	
	//var galeria = document.getElementById('galeria');
		function playGalery(){
		   var galeria = document.querySelector('#galeria');
		   var itens = document.querySelectorAll('#galeria li');

			for(i in itens){
				itens[i].onclick = function(){
						lightbox(this.children[0]);
					
				}
			}
		}
		
		playGalery();
	
		function lightbox(element){
			
			var body = document.querySelector('body');
			
			var prev = '<div style="display:none;" class="prev"></div>';
			var next ='<div style="display:none;" class="next"></div>';
			
			if(element.parentElement.previousElementSibling != null){
			
				prev = '<div class="prev"></div>';
				
			}
			
			if(element.parentElement.nextElementSibling != null){
				
				next = '<div class="next"></div>';
			}
			
			body.innerHTML +=
				'<div class="lightbox"><div style="width:'
				+element.width
				+'px; margin-left:-'
				+(element.width/2)
				+'px; height:'
				+element.height
				+'px;" class="content">'
				+'<div class="close">X</div>'
				+'<div class="centro">'
				+prev
				+element.outerHTML
				+next
				+'</div></div></div>';
			
					
		var close = document.querySelector('.lightbox .close');
		
		close.onclick = function(){
			var lg = document.querySelector('.lightbox');
			lg.remove();
		}
			next = document.querySelector('.lightbox .next');
			if(next){
				next.onclick = function(){
					clickNext();
				}
			}
			
			
			prev = document.querySelector('.lightbox .prev');
			
			if(prev){
			
				prev.onclick = function(){
					clickPrev();
				}	
			}
			
			function clickNext(){
				 
				var fotoAtual = document.querySelector('.lightbox img');
				fotoAtual = fotoAtual.getAttribute('src');
				fotoAtual = document.querySelector('#galeria img[src="'+fotoAtual+'"]');
				
				if(fotoAtual.parentElement.nextElementSibling == null){
					var tnext = document.querySelector('.lightbox .next');
					tnext.style.display = 'none';
					
				}else{
					document.querySelector('.lightbox .prev').style.display = 'block';
				}
				
				var proxima = fotoAtual.parentElement.nextElementSibling.children[0];
				proxima = proxima.getAttribute('src');
				
				fotoAtual = document.querySelector('.lightbox img');
				fotoAtual.setAttribute('src', proxima);
			}
			
			
			
			function clickPrev(){
				var fotoAtual = document.querySelector('.lightbox img');
				fotoAtual = fotoAtual.getAttribute('src');
				fotoAtual = document.querySelector('#galeria img[src="'+fotoAtual+'"]');

				if(fotoAtual.parentElement.previousElementSibling == null){
					var tprev = document.querySelector('.lightbox .prev');
					tprev.style.display = 'none';
					
				}else{
					document.querySelector('.lightbox .next').style.display = 'block';
				}

				var anterior = fotoAtual.parentElement.previousElementSibling.children[0];
				anterior =  anterior.getAttribute('src');

				fotoAtual = document.querySelector('.lightbox img');
				fotoAtual.setAttribute('src',  anterior);
			}
			
			playGalery();
		}
	

	
	function animate(styles, tempo){
		var intervals;


		for(i in styles){
			
			var x = tempo / styles[i];
			intervals[i] = setInterval(function(){
				
				if(this.style.i == styles[i]){
					clearInterval(intervals[i]);
				}else{
					this.style.i = this.style.i + 1;
				}
			},x);
		}
	}







}