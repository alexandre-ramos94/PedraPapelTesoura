/*function pedra(){
    //Esta função vai sortear numeros entre 1 e 3, conectando cada resultado a uma imagem de pedra papel ou tesoura//
    let pick = Math.floor(Math.random() *(4-1)+(1))
    alert(pick)

}*/
function pedra(nivel){
    if (nivel==1){
    let imagem = document.querySelector('#ima')
    imagem.src='images/paper.png'
    compara(1)}
    else{
        let pick = Math.floor(Math.random() * (4-1) + 1)
        let imagem = document.querySelector('#ima');
        let txtpick = document.querySelector('#resposta')
        let plac = document.querySelector('.placar')
        if(pick==1){
            imagem.src='images/rock.png';txtpick.innerHTML='PEDRA'
            alert('Empate, tambem escolhi pedra')
        }
        else if(pick==2){
            imagem.src='images/paper.png';txtpick.innerHTML='PAPEL'
            alert('Escolhi papel GANHEI!')
            cpu++
            plac.innerHTML=`CPU ${cpu} x ${ply} Player`
        }
        else if(pick==3){
            imagem.src='images/scissor.png';txtpick.innerHTML='TESOURA'
            alert('Escolhi tesoura PERDI!')
            ply++
            plac.innerHTML=`CPU ${cpu} x ${ply} Player`

        }
    }

 
    
}

function papel(){
    if (nivel==1){
    let imagem = document.querySelector('#ima')
    imagem.src='images/scissor.png'
    compara(2)}
    else{
        let pick = Math.floor(Math.random() * (4-1) + 1)
        let imagem = document.querySelector('#ima');
        let txtpick = document.querySelector('#resposta')
        let plac = document.querySelector('.placar')
        if(pick==1){
            imagem.src='images/rock.png';txtpick.innerHTML='PEDRA'
            alert('Droga escolhi pedra, PERDI!')
            ply++
            plac.innerHTML=`CPU ${cpu} x ${ply} Player`
        }
        else if(pick==2){
            imagem.src='images/paper.png';txtpick.innerHTML='PAPEL'
            alert('Eu tambem escolhi papel, EMPATE')
            
        }
        else if(pick==3){
            imagem.src='images/scissor.png';txtpick.innerHTML='TESOURA'
            alert('Escolhi Tesoura GANHEI!')
            cpu++
            plac.innerHTML=`CPU ${cpu} x ${ply} Player`

           

        }

    }

}
function tesoura(){
    if (nivel==1){
        let imagem = document.querySelector('#ima')
        imagem.src='images/rock.png'
        compara(3)}
    else{
        let pick = Math.floor(Math.random() * (4-1) + 1)
        let imagem = document.querySelector('#ima');
        let txtpick = document.querySelector('#resposta')
        let plac = document.querySelector('.placar')
        if(pick==1){
            imagem.src='images/rock.png';txtpick.innerHTML='PEDRA'
            alert('escolhi pedra, VENCI haha!')
            cpu++
            plac.innerHTML=`CPU ${cpu} x ${ply} Player`
        }
        else if(pick==2){
            imagem.src='images/paper.png';txtpick.innerHTML='PAPEL'
            alert('Escolhi Papel PERDI!')
            ply++
            plac.innerHTML=`CPU ${cpu} x ${ply} Player`
            
        }
        else if(pick==3){
            imagem.src='images/scissor.png';txtpick.innerHTML='TESOURA'
            alert('Eu tabem escolhi tesoura, EMPATE')
            }
    
        }



    
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


function pedranormal(){
    alert('here')
}