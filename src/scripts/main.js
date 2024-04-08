document.addEventListener('DOMContentLoaded',function() {
    document.getElementById("form-id").addEventListener('submit',function(params) {
        let numeroMaximo=document.getElementById('numero-maximo').value
        numeroMaximo=parseInt(numeroMaximo)
        let numeroRandom=numeroMaximo*Math.random()
        
    })
})