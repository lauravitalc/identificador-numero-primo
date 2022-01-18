
let primo = () => {
    const number = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
	for(n = 2; n < number; n++) {
  	if(number % n === 0) {
    resultado.textContent = 'Esse número não é primo.';
    return;
    } }
    resultado.textContent = 'Esse número é primo.';
}



 
calcular.addEventListener('click', primo);