let acertos = 0;

const conferirResposta = (resp, qstAtual, prxQuestao) => {
	if (prxQuestao <= 5) {
		var questaoAtual = document.getElementById(`area-respostas${qstAtual}`).style;
		var proximaQuestao = document.getElementById(`area-respostas${prxQuestao}`).style;
	}
	var tituloNovo = document.getElementById('pergunta');

	if (resp == 'C' && acertos < 5) {
		acertos++;
	}

	switch (prxQuestao){
		case 2:
			tituloNovo.style.fontSize = '20px';
			tituloNovo.innerText = '2. Dentro de qual elemento HTML colocamos o JavaScript?';
			questaoAtual.display = 'none';
			proximaQuestao.display = 'inline';
			break;

		case 3:
			tituloNovo.style.fontSize = '18px';
			tituloNovo.style.top = '7px';
			tituloNovo.innerText = '3. Qual é a sintaxe correta para se referir a um script externo chamado "script.js"?';
			questaoAtual.display = 'none';
			proximaQuestao.display = 'inline';
			break;

		case 4: 
			tituloNovo.style.fontSize = '19px';
			tituloNovo.style.top = '15px';
			tituloNovo.innerText = '4. Como você escreve "Hello World" em uma caixa de alerta?';
			questaoAtual.display = 'none';
			proximaQuestao.display = 'inline';
			break;

		case 5:
			tituloNovo.style.fontSize = '25px';
			tituloNovo.innerText = '5. Como você cria uma função em JavaScript?';
			questaoAtual.display = 'none';
			proximaQuestao.display = 'inline';
			break;

		default:
			tituloNovo.style.fontSize = '25px';
			tituloNovo.style.textAlign = 'center';
			tituloNovo.style.left = '0';
			tituloNovo.innerText = 'Você concluiu o nosso Quiz de Javascript!';
			document.getElementById('area-respostas5').style.display = 'none';
			document.getElementById('resultado').style.display = 'inline';
			imprimirResultado(acertos);


	}
}

const imprimirResultado = (acertos) => {
	let qntdAcertos = document.getElementById('acertos');
	qntdAcertos.innerHTML = acertos;
}

const mostrarResultado = () => {
	let qntdAcertos = document.getElementById('acertos');
	document.getElementById('area-texto').style.display = 'inline-block';
	document.getElementById('resultado').style.display = 'none';
	document.getElementById('start').style.display = 'inline-block';

	if (qntdAcertos.innerText <= 2) {
		texto.innerHTML = '"Não foi um bom resultado, mas você pode tentar novamente quando quiser!"';
	} else if (qntdAcertos.innerText <= 4) {
		texto.innerHTML = '"Bom resultado, parabéns. Você pode fazer novamente quando quiser!"';
	} else {
		texto.innerHTML = '"Parabéns você acertou todas as perguntas, excelente resultado!"';
	}
}