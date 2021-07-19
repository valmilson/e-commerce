const from = document.getElementById('form');

from.addEventListener('submit',(e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dado = {
        nome,
        email,
    }
    let comverdado = JSON.stringify(dado);

    localStorage.setItem('lead', comverdado)
    
    let content = document.getElementById('content')

    let carregando ='<p> carregando ...</p>'

    let pronto = '<p>pronto</p>'

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
        
    }, 1000)
    
    setTimeout(() => {
        window.location.reload()
    }, 2000);
    

 
    

})