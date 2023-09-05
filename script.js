let visibleMenu = false;
//Función que oculta o muestra el menu
function showHideMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList ="";
        visibleMenu = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        visibleMenu = true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function skillsEfects(){
    var skill = document.getElementById("skill");
    var skills_distance = window.innerHeight - skill.getBoundingClientRect().top;
    if(skills_distance >= 300){
        let abilities = document.getElementsByClassName("progress");
        abilities[0].classList.add("javascript");
        abilities[1].classList.add("html");
        abilities[2].classList.add("photoshop");
        abilities[3].classList.add("python");
        abilities[4].classList.add("ccna");
        abilities[5].classList.add("informatic-security");
        abilities[6].classList.add("telematics");
        abilities[7].classList.add("signalsandsystems");
        abilities[8].classList.add("antennasandcommunications");
        abilities[9].classList.add("networks");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


// This one to copy text on social-media


const copyButton = document.getElementById('copyEmail');
const copiedEmailMessage = document.getElementById('copiedEmailMessage');
const emailIcon = document.getElementById('emailIcon');

copyButton.addEventListener('click', function () {
    const email = 'david.duque@usantotomas.edu.co'; // Aquí coloca tu dirección de correo electrónico
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = email;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    copiedEmailMessage.style.display = 'block';

    setTimeout(function () {
        copiedEmailMessage.style.display = 'none';
    }, 2000); // Ocultar el mensaje después de 2 segundos
});