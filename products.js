
const $form = document.querySelector('form'),
$template = document.querySelector('template'),
$fragment = document.createDocumentFragment(),
$viewsContainer = document.querySelector('.views-container')

// function fetchdata(options){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(
                
//             )
//         }, 5000)
        
//     })
// }


const addData = async (options) => {
    try{
        $form.remove()
        document.body.insertAdjacentHTML('beforeend', '<div class="container"><img src="./loader.svg"></div>')
        
        let response = await fetch('http://localhost:3000/solicitudes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        })
        let json = response.json()
        if(!response.ok){
            throw {status: response.status, statusText: response.statusText}
        }
        document.body.removeChild(document.body.lastChild)
        document.body.insertAdjacentHTML('beforeend', '<div class="container"><i class="success-icon far fa-check-circle"></i><p class="response">SOLICITUD ENVIADA</p></div>')
        location.replace('./index.html')
    }catch(err){
        document.body.removeChild(document.body.lastChild)
        document.body.insertAdjacentHTML('beforeend', `<div class="container"><i class="error-icon fas fa-times"></i><p class="response">Ocurrio un error: ${err.status} Servidor no disponible</p></div>`)
    }
} 

document.addEventListener('submit', (e) => {
    if(e.target === $form){
        e.preventDefault()
        addData({
            nombre: e.target.nombre.value,
            apellido: e.target.apellido.value,
            email: e.target.email.value,
            telefono: e.target.telefono.value,
            direccion: e.target.direccion.value,
            entreCalles: e.target.entreCalles.value,
            plan: e.target.plan.value
        })
        
    }
})
    
