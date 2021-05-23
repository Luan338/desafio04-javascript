//1 - crie uma função que exiba uma mensagem no console
function message(mensagem){
    console.log(`${mensagem}`)
}
message("Olá, mundo!")

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function name(nome){
    console.log(`Me chamo ${nome}`)
}
name("Luan")

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
function funcoes(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e meu estilo musical preferido é ${estiloMusical}`)
}
funcoes("Luan", 21, "RAP")

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function favorito(filme, musica){
    console.log(`Meu filme favorito é ${filme}, e minha música preferida é ${musica}`)
}
favorito("Os mercenários", "Xapralá - Djonga")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function number(numero){
    console.log(numero*3)
}
number(10)