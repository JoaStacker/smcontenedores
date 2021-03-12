
document.addEventListener('click', (e)=>{
    if(e.target.className === 'contratar-btn'){
        window.location.replace('http://127.0.0.1:5500/SMContenedores/producto.html')
        console.log('pagina cargada')
        const $form = document.querySelector('form')
        $form.querySelector('h4').textContent = 'PRODUCTO'
    }
})


document.addEventListener('DOMContentLoaded', ()=>{
    const $productBTNS = document.querySelectorAll('.contratar-btn') 
    
})