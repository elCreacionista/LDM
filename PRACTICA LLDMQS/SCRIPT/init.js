if (localStorage.nocturn_mode == null){
    localStorage.nocturn_mode = true;
}
if (localstorage_boolean_traductor('nocturn_mode')){
    night.innerHTML = '<link rel="stylesheet" href="../CSS/style_nocturn.css">';
}
else{
    night.innerHTML = '<link rel="stylesheet" href="../CSS/style_daily.css">';
}