//Inicio da Atividade - Definir o numero de Alunos

let numeroDeAlunos = 10

//Percorrendo os numeros de aluno, do zero até a quantidade de alunos

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    
    // Condição para quando for zero

    if (contador === 0) {
        console.log("O numero atual é zero")

      // Condição para quando for par, o resto da divisão por 2 é igual a zero

    } else if (contador % 2 == 0) {
        console.log("O numero " + contador + " é PAR")
        
        // Condição para quando for impar, o resto da divisão por dois é diferente de zero,
        // ou então é toda situação que não for nem zero e nem par  
        
      } else {
          console.log("O numero " + contador + " é IMPAR")
      }
   
}
        