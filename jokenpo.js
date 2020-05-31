/*function pedra(){
    //Esta função vai sortear numeros entre 1 e 3, conectando cada resultado a uma imagem de pedra papel ou tesoura//
    let pick = Math.floor(Math.random() *(4-1)+(1))
    alert(pick)

}*/
function pedra(){
    let imagem = document.querySelector('#ima')
    imagem.src='images/paper.png'
    compara(1)

 
    
}

function papel(){
    let imagem = document.querySelector('#ima')
    imagem.src='images/scissor.png'
    compara(2)


}
function tesoura(){
    let imagem = document.querySelector('#ima')
    imagem.src='images/rock.png'
    compara(3)
}

function compara(x){
    let res = document.querySelector('#resposta')
    if (x==1){res.innerHTML='PAPEL';}
    else if (x==2){res.innerHTML='TESOURA'}
    else if(x==3){res.innerHTML='PEDRA'}
    placar() 
}
function placar(){
    let plac = document.querySelector('.placar')
    cpu++
    plac.innerHTML = `CPU ${cpu} x 0 Player `
}
var cpu=0;
