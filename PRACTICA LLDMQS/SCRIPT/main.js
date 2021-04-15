const configuracio = document.querySelector('#configuracio');
const nightmode = document.querySelector('#night');
configuracio.innerHTML = ' <link rel="stylesheet" href="../CSS/styleheader.css">'

if (localStorage.nocturn_mode == null){
    localStorage.nocturn_mode = true;
}



//Header();
//change_to_nocturn_mode();

function Header(){
    let string = `
    <div id='title'>
        <h1>PRÀCTICA LLDMQ</h1>
        <div id='nocturn_mode'>
            <div id='nocturn_slider'></div>
            <button id='nocturn_button' onclick="change_to_nocturn_mode()"></button>
        </div>
</div>
<nav id='menu'>
        <a id='menu1' class='menu_unselected' href="index.html">Inici</a>
        <a id='menu2' class='menu_unselected' href="jocs.html">Jocs</a>
        <a id='menu3' class='menu_unselected' href="ajuda.html">Ajuda</a>
        <a id='menu4' class='menu_unselected' href="mapa.html">Mapa</a>
        <a id='menu5' class='menu_unselected' href="config.html">Configuració</a>
        <a id='menu6' class='menu_unselected' href="contact.html">Contacte</a>
</nav>`;
    document.querySelector('#header').innerHTML = string;

}



function change_to_nocturn_mode(){
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