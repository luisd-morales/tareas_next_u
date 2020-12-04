var Calculadora = {
	display: document.getElementById("display").innerHTML,
	decimal: 0,
	sig: 0,
	estand: 0,
	resulta: 0,
	alto: 0,
	numero: 0,
	numeroauxiliar: 0,
	opcion: 0,
	controlfin: 8,
	inicio: (
		function(){
			this.EventosClick();
		}
	),
	animacionuno: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},
		mas: function(){
		    this.animacionuno("mas");
			this.numero += Number(this.display),
			this.display = "",
			this.opcion = 1,
			this.estand = 0,
			this.sig = 0,
			this.numeroauxiliar = 0,
			this.estand = 0,
			this.decimal = 0,
			this.viewdisplay();
		},
		menos: function(){
		    this.animacionuno("menos");
			this.numero = Number(this.display);
			this.display = "",
			this.opcion = 2,
			this.estand = 0,
			this.sig = 0,
			this.numeroauxiliar = 0,
			this.estand = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
		por: function(){
		    this.animacionuno("por");
			this.numero = Number(this.display),
			this.display = "",
			this.opcion = 3,
			this.estand = 0,
			this.sig = 0,
			this.numeroauxiliar = 0,
			this.estand = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
		dividido: function(){
		    this.animacionuno("dividido");
			this.numero = Number(this.display),
			this.display = "",
			this.opcion = 4,
			this.estand = 0,
			this.sig = 0,
			this.numeroauxiliar = 0,
			this.estand = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
	igual: function(){
		this.animacionuno("igual");
		switch(this.opcion){
			case 1:
					if(this.estand == 0){
						this.numeroauxiliar = Number(this.display),
						this.display = this.numero + Number(this.display),
						this.estand = 1,
						this.numero = 0;
					}else{
						this.display = Number(this.display)+this.numeroauxiliar;
					}
				break;
			case 2:
					if(this.estand == 0){
						this.numeroauxiliar = Number(this.display),
						this.display = this.numero - Number(this.display),
						this.estand = 1,
						this.numero = 0;
					}else{
						this.display = Number(this.display)-this.numeroauxiliar;
					}
				break;
			case 3:
					if(this.estand == 0){
						this.numeroauxiliar = Number(this.display),
						this.display = this.numero * Number(this.display),
						this.estand = 1,
						this.numero = 0;
					}else{
						this.display = Number(this.display)*this.numeroauxiliar;
					}
				break;
			case 4:
					if(this.estand == 0){
						this.numeroauxiliar = Number(this.display),
						this.display = this.numero / Number(this.display),
						this.estand = 1,
						this.numero = 0;
					}else{
						this.display = Number(this.display)/this.numeroauxiliar;
					}
				break;
			default:
				break;
		}
		this.viewdisplay();
	},
	EventosClick: function(){
		document.getElementById("0").addEventListener("click",function(){Calculadora.viewnum("0")});
		document.getElementById("1").addEventListener("click",function(){Calculadora.viewnum("1")});
		document.getElementById("2").addEventListener("click",function(){Calculadora.viewnum("2")});
		document.getElementById("3").addEventListener("click",function(){Calculadora.viewnum("3")});
		document.getElementById("4").addEventListener("click",function(){Calculadora.viewnum("4")});
		document.getElementById("5").addEventListener("click",function(){Calculadora.viewnum("5")});
		document.getElementById("6").addEventListener("click",function(){Calculadora.viewnum("6")});
		document.getElementById("7").addEventListener("click",function(){Calculadora.viewnum("7")});
		document.getElementById("8").addEventListener("click",function(){Calculadora.viewnum("8")});
		document.getElementById("9").addEventListener("click",function(){Calculadora.viewnum("9")});
		document.getElementById("on").addEventListener("click",function(){Calculadora.on("")});
		document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
		document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
		document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
		document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
		document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
		document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
		document.getElementById("por").addEventListener("click",function(){Calculadora.por()});
	},
	/* función vision de calculadora*/
	viewnum: function(valor){
		this.animacionuno(valor);
		if(this.sig == 1 && this.alto == 0){
			this.controlfin += 1,
			this.alto = 1;
		}
		if(this.decimal == 1  && this.alto == 0){
			this.controlfin += 1,
			this.alto = 1;
		}
		if(this.display.length < this.controlfin){
			if(this.display != "0"){
				this.display += valor;
			}else if(valor != 0){
				this.display = "",
				this.display += valor;
			}
			this.viewdisplay();
		}
	},
	on: function(){
		this.animacionuno("on");
		this.display = "0",
		this.decimal = 0,
		this.sig = 0,
		this.alto = 0,
		this.controlfin = 8
		this.numero = 0,
		this.estand = 0,
		this.numeroauxiliar = 0,
		this.opcion = 0,
		this.resulta = 0,
		this.viewdisplay();
	},
	sign: function(){
		this.animacionuno("sign");
		if(this.display != 0){
			if(this.sig == 0){
				this.display = "-" + this.display,
				this.sig = 1;
			}else{
				this.display = this.display.slice(1);
				this.sig = 0;
			}
		}
		this.viewdisplay();
	},
	punto: function(){
		this.animacionuno("punto");
		if(this.decimal == 0){
			this.display += ".";
		}
		this.decimal = 1,
		this.viewdisplay();
	},
	viewdisplay: function(){
		if(this.display.toString().length > this.controlfin){
			this.display = this.display.toString().substring(0,8);
		}
		document.getElementById("display").innerHTML = this.display;
	}
}
Calculadora.inicio();
