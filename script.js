

// while (true) {
//   const numero = Number(prompt("Escolha um número inteiro: "));
//   if (numero > 0) {
//     for(let i=1;i<11;i++){
//         console.log(`${numero} x ${i} = ${numero * i}`);
//     }
   
//     break;


// } else {
//     console.log('Número inválido!');
// }

// }


// const palavra = prompt("Digite uma palavra qualquer: ");

// let vogais = "aáàãâeéíioôóúu"
// let contador = 0

// for(caracter of palavra.toLowerCase()){
//     if (vogais.includes(caracter) ) {
//         contador++
//     }
// }

// console.log(`A palavra possui ${contador} vogais` );


// for(let i=1; i<31; i++){
//     if (i%3 === 0 ) {
//         console.log(i);
//     }
// }



while (true) {
    const menu = Number(prompt("Escolha uma opção:\n1-Vamos jogar\n2-Sair"));
    if (menu === 2) {
      break;
    } else if (menu === 1) {
        
      let numero_coringa = Math.floor(Math.random() * 100 ) + 1

      do { 
        let numero = Number(prompt("Adivinhe o número coringa: "));
        if(numero_coringa === numero) {
          console.log("Parabéns!!! Você acertou...")
        } else if (numero_coringa < numero) {
          console.log("O número digitado é maior que o número coringa")
        } else  {
          console.log("O número digitado é menor que o número coringa")
        }
      } while(numero_coringa === numero)

    } else {
      console.log("Opção inválida");
    }
  }