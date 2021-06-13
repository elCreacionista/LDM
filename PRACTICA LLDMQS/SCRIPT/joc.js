//CREO EL OBJETO CANVAS
const canvas = document.querySelector("#main_canvas");
const ctx = canvas.getContext('2d');
//LOS DATOS DEL JUEGO POR SI TENGO QUE GUARDAR LA PUNTUACION LA COMBINACION CORRECTA ETC..
class GameData{
    constructor(r,c){
        this.rows = r;
        this.columns = c;
        this.actual = [];
        this.respuesta = [this.createRandomBall(), this.createRandomBall(), this.createRandomBall(), this.createRandomBall(),]
        console.log(this.respuesta);
        for(let i = 0; i < r; i++){
            this.actual[i] = this.getAllColors(c - 2);
        }
        
        this.sizex = 400 / r
        this.sizey = 800 / c
        this.centerx = (this.sizex/2) + 10;
        this.centery = (this.sizey/2) + 10;
    }
    
    //ESTAS DOS FUNCIONES SIMPLEMENTE CREAN COLORES ALEATORIOS
    createRandomBall(){
        let rand = Math.random();
        if (rand < .33)
            return "red";
        if (rand < .66)
            return "yellow";
        return "green";
    }
    createGreen(){return "green"}
    createRed(){return "red"}
    createYellow(){return "yellow"}
    

    changeColor(y, x){
        let hx = x - 150;
        let ix = hx / this.sizex;
        let hy = y - 10;
        let iy = hy / this.sizey;
        console.log(ix | 0 , iy | 0);
        this.actual[ix | 0][iy | 0] = this.createRandomBall();
        drawAllCircles(this);

    }

    getAllColors(n){
        let arr = [];
        for(let i = 0; i < n; i++){
            arr.push(this.createRandomBall());
        }
        return arr;
    }
}
//LE DOY TAMAÑO AL CANVAS 
canvas.style.height = "500px"
canvas.style.width = "1000px"
canvas.height = 500;
canvas.width = 1000;
//CREO EL OBJETO DATOD DEL JUEGO
const GD = new GameData(5,6);
drawtable(GD);
drawAllCircles(GD);


//AQUI SIMPLEMENTE PINTO LOS CIRCULOS EN LAS COORDENADAS Y COLORES CORRESPONDIENTES
function drawAllCircles(GD){

    for(let i = 0; i < GD.columns - 2; i++){
        for(let j = 0; j < GD.rows; j++){
            circle(GD.centery + (i * GD.sizey), GD.centerx + (j * GD.sizex), GD.actual[j][i]);
        }
    }
}

function printMousePos(event) {
    console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
    if (event.clientX > 600){

        console.log("ola");
        console.log((event.clientY / GD.sizey) | 0);
	solutions((event.clientY / GD.sizey) | 0);
    }else
    GD.changeColor(event.clientX, event.clientY)

  }
  
  document.addEventListener("click", printMousePos);

//circle(90, 50);circle(250, 50)

function circle(x, y, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

//ESTA FUNCION SIMPLEMENTE HACE LA TABLA
function drawtable(GD){
    ctx.fillStyle = "black";
    let sizex = 400 / GD.rows
    let sizey = 800 / GD.columns

    for(let i = 0; i < GD.rows + 1; i++){
        let position = (i * sizex) + 10
        ctx.fillRect(10,position,802,2);
    }

    for(let i = 0; i < GD.columns + 1; i++){
	if (i == GD.columns - 1) continue;
        let position = (i * sizey) + 10
        ctx.fillRect(position,10,2,400);
    }
    
}
function solutions( row){
    let b = 0;
    for(let i= 0; i < GD.columns;i++){
	if (GD.actual[row][i] === GD.respuesta[i])
	b++;
    }
    writeText(row, b);
}

function writeText(row, b){
    ctx.fillStyle = "black";
    ctx.fillText(b, GD.centerx + ((GD.columns - 1) * GD.sizex),GD.centery + (row * GD.sizey))
}

console.log(GD.actual);
