function createRandomBall(){
    let rand = Math.random();
    if (rand < .33)
        return "rojo";
    if (rand < .66)
        return "amarillo";
        return "green";
}
console.log([createRandomBall(), createRandomBall(), createRandomBall(), createRandomBall()]);