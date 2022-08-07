const texto = `
Where does it come from?
Contrary to popular belief, lorem Ipsum is not s
imply random text. It has roots in a piece of classi
cal Latin literature from 45 BC, making it over 2000
years old. Richard McClintock, a Latin professor at
Hampden-Sydney College in Virginia, looked up one
of the more obscure Latin words, consectetur, from
a Lorem Ipsum passage, and going through the cites
of the word in classical literature, discovered 
the undoubtable source. lorem Ipsum comes from
sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
et Malorum" (The Extremes of Good and Evil)
by Cicero, written in 45 BC. This book is a tr
eatise on the theory of ethics, very popular during the
Renaissance. The first line of Lorem Ipsum, "Lorem ips
um dolor sit amet..", Looooooreeeem loooooorem comes from a line in section 1.10.32.
`;
const arquivos = [
  "Atenção.jpg",
  "FOTO.jpg",
  "Meu gatinho.jpg",
  "Meu gatinho.Jpg",
  "Meu gatinho.JPEG",
  "Meu gatinho.JPEeeeeeeEG",
  "Marido.png",
  "lista de compras.txt",
];
//          <.*>  .*   <\/.*>
const html = `<p 
class="teste teste"
data-teste='teste teste'>
Olá mundo
</p>
<p>Olá de novo</p>
<p>Oi eu de novo</p>`;

const cpfs = `
679.463.410-40 713.697.870-06 958.695.290-85 088.266.100-02 266.942.050-82 993.127.110-83
`;
const cpfs2 = `
679.463.410-40
713.697.870-06
958.695.290-85
088.266.100-02
266.942.050-82
993.127.110-83
111.111.111-11
`;
const lookahead = `
OFFLINE 192.158.0.1 ABCDEF inactive
ONLINE 192.158.0.4 ABCDEF active
ONLINE 192.158.0.3 ABCDEF active
ONLINE 192.158.0.5 ABCDEF active
OFFLINE 192.158.0.2 ABCDEF active
OFFLINE 192.158.0.6 ABCDEF inactive
`;

const alfabeto =
  "ABCDEFGHIKLMNOPQRSTVXYZ pousabaaachabcgohebbbaaaspoabchssighsghsp;eogh @#*(*#%^%) 01234 56789 i";

module.exports = {
  texto,
  arquivos,
  html,
  alfabeto,
  cpfs,
  lookahead,
  cpfs2,
};
