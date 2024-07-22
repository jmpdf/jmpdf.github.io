import { Octokit } from "https://esm.sh/octokit";

var octokit = '';

function start(chave){
  octokit = new Octokit({ 
  auth: chave,
});
}

const monthNames = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

var agora  = new Date();

async function upload(){
  /*const filesha = await octokit.rest.repos.getContent({
    owner: 'testebancodedados',
    repo: 'anotacoesEscola',
    path: (agora.getFullYear() + '/' + monthNames[agora.getMonth()] + '/'+agora.getDate()+'.txt')
  })
  console.log(filesha);
  */
  await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: 'testebancodedados',
    repo: 'anotacoesEscola',
    path: (agora.getFullYear() + '/' + monthNames[agora.getMonth()] + '/'+agora.getDate()+'.txt'),
    message: ('Atualização do dia '+agora.getDate() + ' de ' +monthNames[agora.getMonth()] +' de ' + agora.getFullYear()),
    content: btoa(document.getElementById("texto").value)
  })  
}
async function getfile(dataArquivo){
  const file = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'testebancodedados',
    repo: 'anotacoesEscola',
    path: (dataArquivo.getFullYear() + '/' + monthNames[dataArquivo.getMonth()] + '/'+dataArquivo.getDate()+'.txt')
  })
  var str = file.data.content;
  str = str.replace(/\s/g, '');
  return decodeURIComponent(escape(window.atob(str))); //deprecated, change it in the future.
}
document.getElementById("aaa").addEventListener("click",function() {
  console.log(upload());
});
document.getElementById("bbb").addEventListener("click", function() {
  var datalegal = new Date(document.getElementById("data").value+"T00:00");
  //console.log(datalegal);
  //console.log(datalegal.getFullYear() + '/' + monthNames[datalegal.getMonth()] + '/'+datalegal.getDate()+'.txt');
  getfile(datalegal).then(function(resultado){
    document.getElementById("conteudo").innerText = resultado;
  });
});
//console.log(agora.getFullYear() + '/' + monthNames[agora.getMonth()] + '/'+agora.getDate()+'.txt');
//console.log('Atualização do dia '+agora.getDate() + ' de ' +monthNames[agora.getMonth()] +' de ' + agora.getFullYear());
start(prompt("insira a chave"));
