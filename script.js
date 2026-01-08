// FILE: script.js
// JS simple: toggle menú, enviar formulario (simulado) y año dinámico
document.addEventListener('DOMContentLoaded',()=>{
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
const year = document.getElementById('year');


year.textContent = new Date().getFullYear();


menuBtn.addEventListener('click', ()=>{
const expanded = nav.style.display === 'flex';
nav.style.display = expanded ? 'none' : 'flex';
nav.style.flexDirection = 'column';
});


form.addEventListener('submit', (e)=>{
e.preventDefault();
const data = new FormData(form);
// Simulación: mostrar mensaje y limpiar
formMsg.textContent = `Gracias, ${data.get('name')}. Hemos recibido tu mensaje.`;
form.reset();
setTimeout(()=> formMsg.textContent = '', 5000);
});
});