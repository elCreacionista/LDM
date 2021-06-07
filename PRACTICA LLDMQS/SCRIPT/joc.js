const canvas = document.querySelector("#main_canvas");
const ctx = canvas.getContext('2d');
class GameData{
    constructor(r,c){
        this.rows = r;
        this.columns = c;
        this.actual = [];
        for(let i = 0; i < r; i++){
            this.actual[i] = this.getAllColors(c - 2);
        }
        
        this.sizex = 400 / r
        this.sizey = 800 / c
        this.centerx = (this.sizex/2) + 10;
        this.centery = (this.sizey/2) + 10;
    }
    createRandomBall(){
        let rand = Math.random();
        if (rand < .33)
            return "red";
        if (rand < .66)
            return "yellow";
        return "green";
    }
    
    getAllColors(n){
        let arr = [];
        for(let i = 0; i < n; i++){
            arr.push(this.createRandomBall());
        }
        return arr;
    }
}
canvas.style.height = "500px"
canvas.style.width = "100%"
canvas.height = 500;
canvas.width = 1000;

const GD = new GameData(5,6);
drawtable(GD);
drawAllCircles(GD);
function drawAllCircles(GD){

    for(let i = 0; i < GD.columns - 2; i++){
        for(let j = 0; j < GD.rows; j++){
            circle(GD.centery + (i * GD.sizey), GD.centerx + (j * GD.sizex), GD.actual[j][i]);
        }
        
    }



}

//circle(90, 50);circle(250, 50)

function circle(x, y, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawtable(GD){
    ctx.fillStyle = "black";
    let sizex = 400 / GD.rows
    let sizey = 800 / GD.columns

    for(let i = 0; i < GD.rows + 1; i++){
        let position = (i * sizex) + 10
        ctx.fillRect(10,position,802,2);
    }

    for(let i = 0; i < GD.columns + 1; i++){
        let position = (i * sizey) + 10
        ctx.fillRect(position,10,2,400);
    }
    
}


console.log(GD.actual);
