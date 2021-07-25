
function carregar(){
    var msg=document.getElementById('msg')
    var img=document.getElementById('imagem') 
    var data=new Date() 
    var hora=data.getHours()
    var minutos=data.getMinutes()
    
    if(hora==1){
        if(minutos==1){
            msg.innerHTML= `Agora são ${hora} hora e ${minutos} minuto.`    
        }else{
             msg.innerHTML= `Agora são ${hora} hora e ${minutos} minutos.`
        }
       
    }else{
        if(minutos==1){
            msg.innerHTML= `Agora são ${hora} horas e ${minutos} minuto.`
        }else{
             msg.innerHTML= `Agora são ${hora} horas e ${minutos} minutos.`
        }
        
    }
   

    if(hora<12){
        //bom dia
        img.src='fotomanha.png'
        document.body.style.background='#ffc75d'
    }else if(hora<18){
        //boa tarde
        img.src='fototarde.png'
        document.body.style.background='#cd552f'
    }else{
        //boa noite
        img.src='fotonoite.png'
        document.body.style.background='#111a22'
    }
}
