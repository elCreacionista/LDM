if (localStorage.nocturn_mode == null){
    localStorage.nocturn_mode = true;
}
if (localstorage_boolean_traductor('nocturn_mode')){
    night.innerHTML = '<link rel="stylesheet" href="../CSS/style_nocturn.css">';
}
else{
    night.innerHTML = '<link rel="stylesheet" href="../CSS/style_daily.css">';
}
clouds.push(CreateTree(document.querySelector("main"), true, 0));
clouds.push(CreateTree(document.querySelector("main"), true, 1));
clouds.push(CreateTree(document.querySelector("main"), true, 2));
clouds.push(CreateTree(document.querySelector("main"), true, 3));
console.log(clouds);
const moveClouds = setInterval(movesky, 16);

const pageW = document.querySelector('#header').offsetWidth;


function movesky(){
    for(let i = 0; i < clouds.length; i++){
        /*if (Math.random() < 0.001){
            clouds.push(CreateTree(document.querySelector("main"), false, i));
            break;
        }*/
        if (clouds[i].p > pageW){
            document.querySelector("main").removeChild(clouds[i].c);
            clouds.splice(i ,1, CreateTree(document.querySelector("main"), false, i));
        }
        clouds[i].c.style.left = clouds[i].p + "px";
        clouds[i].p ++;
    }

}