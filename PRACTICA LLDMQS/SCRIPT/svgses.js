function CreateTree(DOMElement){
    const W3 = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(W3, 'svg');
    for (let i = 0; i < 20; i++){
        let leave = new Leave(20, 60, 20, 20, 10, 10);
        svg.appendChild(Circle(leave));
    }

    DOMElement.appendChild(svg);



    function Leave(startX, sizeX, startY, sizeY, minR, R){
        this.px = startX + Math.random()* sizeX;
        this.py = startY + Math.random()* sizeY;
        this.r = minR + Math.random()*R;
    }

    function Circle(obj){
        let circle = document.createElementNS(W3, 'circle');
        console.log(circle)
        circle.setAttributeNS(null, "cx", obj.px);
        circle.setAttributeNS(null, "cy", obj.py);
        circle.setAttributeNS(null, "r", obj.r);
        circle.setAttributeNS(null, "fill", "rgb(50," +(200 + Math.random()*50) + ", 50)");
        return circle;
    }

}

