const nome = document.getElementById('name-input');
const email = document.getElementById('email-input');
const button = document.getElementById('form-btn');
const personalBtn = document.getElementById('contact-personal')

function resetInput() {
    button.addEventListener('click', function() {
        alert('Você receberá nossas novidades por E-mail!');
        nome.value = ''; 
        email.value = ''; 
    });
}

resetInput();

personalBtn.addEventListener('click', ()=>{
    const numero = "5581981776795"; 
    const mensagem = "Olá! Gostaria de mais informações.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank");
})