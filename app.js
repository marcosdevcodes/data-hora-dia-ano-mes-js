function construirArray(qtdElementos){
	this.length = qtdElementos
}

    var	arrayDia = new construirArray(7);
	arrayDia[0] = "Domingo";
	arrayDia[1] = "Segunda-Feira";
	arrayDia[2] = "Terça-Feira";
	arrayDia[3] = "Quarta-Feira";
	arrayDia[4] = "Quinta-Feira";
	arrayDia[5] = "Sexta-Feira";
	arrayDia[6] = "Sabado";

	var arrayMes = new construirArray(12);
	arrayMes[0] = "Janeiro";
	arrayMes[1] = "Fevereiro";
	arrayMes[2] = "Março";		
	arrayMes[3] = "Abril";
	arrayMes[4] = "Maio";
	arrayMes[5] = "Junho";
	arrayMes[6] = "Julho";
	arrayMes[7] = "Agosto";
	arrayMes[8] = "Setembro";
	arrayMes[9] = "Outubro";
	arrayMes[10] = "Novembro";
	arrayMes[11] = "Dezembro";

function mostrarDataHora(hora, diaSemana, dia, mes, ano){
	retorno  = "&nbsp; "+hora+" ";
	retorno += "&nbsp;&nbsp;"+diaSemana+", "+dia+" de "+mes+" de "+ano;

    document.getElementById("datahora").innerHTML = retorno;
}

function getMesExtenso(mes){
	return this.arrayMes[mes];
}


function getDiaExtenso(dia){
	return this.arrayDia[dia];
}

function atualizarDataHora(){ 
    dataAtual = new Date();
	dia = dataAtual.getDate();
	diaSemana = getDiaExtenso(dataAtual.getDay());
	mes = getMesExtenso(dataAtual.getMonth());
	ano = dataAtual.getFullYear();//corrigi o código aqui estava assim => ano = dataAtual.getYear();
    hora = dataAtual.getHours();
    minuto = dataAtual.getMinutes();
    segundo = dataAtual.getSeconds();

    horaImprimivel = hora + ":" + minuto + ":" + segundo;
	mostrarDataHora(horaImprimivel, diaSemana, dia, mes, ano);
	setTimeout("atualizarDataHora()",1000);
}