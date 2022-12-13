window.onload = () => {



    pegandoBotao = document.getElementById('botao');
    playerGui = document.getElementById('guilherme');
    playerLari = document.getElementById('larissa');
    
    
    playerGui.style.marginLeft = 0;
    playerLari.style.marginLeft = 0;
    
    pegandoBotao.addEventListener('click', () => {
        playerGui.style.marginLeft = parseInt(playerGui.style.marginLeft) + Math.random() * 300 + 'px';
        playerLari.style.marginLeft = parseInt(playerLari.style.marginLeft) + Math.random() * 300 + 'px';
    
        const guiVenceu = parseInt(playerGui.style.marginLeft);
        const lariVenceu = parseInt(playerLari.style.marginLeft);
    
    
        if (guiVenceu > window.innerWidth && lariVenceu > window.innerWidth){
            alert('EMPATE!')
            return reset();
        }     
    
    
        if (guiVenceu > window.innerWidth){
            alert('Guilherme VENCEU!');
            reset();
            }
           
            
        if (lariVenceu > window.innerWidth){
            alert('Lari VENCEU!');
            reset();
            } 
    
    
    })
    
    console.log(parseInt(playerLari.style.marginLeft) + Math.random() * 300 + 'px');
    
    const reset = () => {
        playerGui.style.marginLeft = 0;
        playerLari.style.marginLeft = 0;
    }
    
    }