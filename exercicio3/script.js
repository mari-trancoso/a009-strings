//Crie a const para a frase aqui

//letra a)
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log(frase)

//letra b)
novaFrase = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja")

console.log(novaFrase)

//letra c)
console.log(`A nova frase tem a palavra verde? ${novaFrase.includes("verde")}`)
console.log(`A nova frase tem a palavra laranja? ${novaFrase.includes("laranja")}`)

//EXTRA
console.log(`Deixando em maiúsculo:
${novaFrase.replace("mas não deixe o gato sair", "mas não deixe o gato sair".toUpperCase())}
`)

