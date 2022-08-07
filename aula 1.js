// https://regexr.com/
// g - global (encontra todas as ocorrências)
// i - insensitive, não verifique por letras maiusculas ou minusculas
// (()) = grupos
// | ou
// (..$1. ($2))(.$3..)(.$4..)

const {
  texto,
  arquivos,
  html,
  alfabeto,
  cpfs,
  lookahead,
  cpfs2,
} = require('./base')

const regExp1 = /(Lorem )(Ipsum)/gi
const found = regExp1.exec(texto)

//console.log(texto.match(regExp1))
//console.log(texto.replace(regExp1, '"$1"</>"$2"'))
//console.log(texto.replace(regExp1, (input) => {
//   return ' ###### ' + input.toUpperCase() + ' #####'
// }))

// if (found) {
// }

/////////////Quantificadores////////////
//OBS:Quantificadores pode se referir a um grupo tambem ()? (){min, max}
//OBS:Posso especificar que um determinado grupo () se repete {quantidade de vezes}
// * (opcionais) 0 ou +
// + (obrigatório) 1 ou +
//\Um ou mais
// ? (opcionais) 0 ou 1
// . (qualquer caracter)
// \ (caracter de escap)
//{min, max}{min,}{,max}{num}
const regExp2 = /(Lo+re+m)/gi

const regExp3 = /\.jpe*g/gi

// for (const arquivo of arquivos) {
//   console.log(arquivo.match(regExp3));
// }

////////////// greddy & non-greedy ////////////
// console.log(html.match(/<.*>.*<\/.*>/g)) //greedy
// console.log(html.match(/<.*?>.*?<\/.*?>/g)) // non-greedy

///////////// Conjuntos & Ranges //////////////
//OBS: com o + ele vai concatenar separando apenas ao espaço
// [] ==> conjunto [^] => negação
// ^ no final ou [^] (qualquer coisa menos oque estiver dentro do regex)
// [-] ==> range, Sempre do menor para o maior

//console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
//console.log(alfabeto.match(/[\U00A0-\U00BA]+/g))//Unicode https://en.wikipedia.org/wiki/List_of_Unicode_characters
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#special-non-white-space
//console.log(alfabeto.match(/[\w]+/g))
//console.log(alfabeto.match(/[\W]+/g)) //Maiusculo = contrario

///////////// Começa com termina com ////////////
// ^ no inicio (começa com)
// $ (termina com)
// m no final do rgenx(multilene faz a verificação resetando por linha)
//termina com numero começa com faz a verificação como um todo
//const cpf = '679.463.410-40'
// console.log(cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/g))
// console.log(cpfs.match(/^\d{3}\.{2}\da{3}\-\d{2}$/gm))

////////////// Retrovisores com Mwatch e Replace //////////
// $1 $2 $3 => retrovisores
// pra usar retrovisor na expressão basta \1 \2 \3 exemplo
// \s seleciona todo espaço \S tudo que não é espaço
// (?:) dentro do grupo (faz o grupo não ser lido com $1 por exemplo)
//
//console.log(html.match(/<(\w+?)[\s\S]*?>([\s\S]*?)<\/\1>/gi))

//console.log(html.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1(HAHA $3 HAHAH)$4'))

//////////// Lookahead & Lookbehind (Lookaround) ///////////
//Lookahead = no final
// (?=) Positive lookahead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim))
// (?!) Negative lookahead (frases que não tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))
//Lookbehind = no inicio
// (?<=) Positive (frases que tem Lookbehind)
//console.log(lookahead.match(/(?<=OFFLINE\s+).*/gim))
// (?<!) Negative (frases que não tem Lookbehind)
//console.log(lookahead.match(/^.+(?<!OFFLINE.+)$/gim))

//OBS: o \1 tambem carrega consigo o elemente podendo fazer assim uma verificação assim de sequencia
console.log(
  cpfs2.match(
    /^(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)(\d{3}\.){2}\d{3}\-\d{2}$/gm
  )
)

// Encontra todas letras normais e com acentos
const palavrasRegEx = /([\wÁ-ú]+)/gi

// Eliminar coisas que não são numeros de texto
const naoLetrasRegex = /\D/
