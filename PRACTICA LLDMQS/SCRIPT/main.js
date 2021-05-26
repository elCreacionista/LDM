const configuracio = document.querySelector('#configuracio');
const night = document.querySelector('#night');
const config = [];
console.log(localStorage);
const clouds = [];

document.querySelector("head").innerHTML += '<script src="../SCRIPT/svgeses.js"></script>';
document.querySelector("head").innerHTML += '<script src="../SCRIPT/init.js"></script>';


Header();
Configurar();

function Configurar(){
    let str = ""
    for(let i = 0; i < config.length; i++){
        str += config[i];
    }
    configuracio.innerHTML = str;
}








function Header(){
    let string = `
    <div id='title'>
        <h1>PRÀCTICA <strong id='title_1'>L</strong><strong id='title_2'>L</strong><strong id='title_3'>D</strong><strong id='title_4'>M</strong><strong id='title_5'>Q</strong><h1>
        <div id='nocturn_mode'>
            <div id='nocturn_slider'></div>
            <button id='nocturn_button' onclick="change_nocturn_mode()"></button>
        </div>
    </div>
    <nav id='menu'>
        <a id='a_index' class='menu_unselected' href="index.html">Inici</a>
        <a id='a_jocs' class='menu_unselected' href="jocs.html">Jocs</a>
        <a id='a_ajuda' class='menu_unselected' href="ajuda.html">Ajuda</a>
        <a id='a_mapa' class='menu_unselected' href="mapa.html">Mapa</a>
        <a id='a_config' class='menu_unselected' href="config.html">Configuració</a>
        <a id='a_contact' class='menu_unselected' href="contact.html">Contacte</a>
    </nav>`;
    document.querySelector('#header').innerHTML = string;
    put_actual('index');
    put_actual('jocs');
    put_actual('ajuda');
    put_actual('mapa');
    put_actual('config');
    put_actual('contact');
}


function put_actual(actual){
    if (document.URL.includes(actual)){
        document.querySelector('#a_' + actual).classList.replace('menu_unselected', 'menu_selected')
    }
}

function change_nocturn_mode(){
    if(localstorage_boolean_traductor('nocturn_mode')){
        night.innerHTML = '<link rel="stylesheet" href="../CSS/style_daily.css">';
    }
    else{
        night.innerHTML = '<link rel="stylesheet" href="../CSS/style_nocturn.css">';
    }
    localStorage.nocturn_mode = !localstorage_boolean_traductor('nocturn_mode');
}
function localstorage_boolean_traductor(item){
    return localStorage.getItem(item) === 'true';
}