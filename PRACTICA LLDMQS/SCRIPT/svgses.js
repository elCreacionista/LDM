function CreateTree(DOMElement, position, id){
    const W3 = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(W3, 'svg');
    
    let rand = (Math.random()*1000);
    const x = position  ? rand : -150;
    
    svg.classList.add("cloud");
    svg.id = "cloud" + clouds.length;
    svg.style.position = "absolute";
    svg.style.top = (Math.random()*20) + "px";
    svg.style.left = x + "px";
    //svg.style.left =  rand + "px";
  
    
    const item = { c : svg, p : x};




    for (let i = 0; i < 50; i++){
        let leave = new Leave(20, 150, 10, 40, 4, 10);
        svg.appendChild(Circle(leave));
    }

    DOMElement.appendChild(item.c);



    function Leave(startX, sizeX, startY, sizeY, minR, R){
        this.px = startX + Math.random()* sizeX;
        this.py = startY + Math.random()* sizeY;
        this.r = minR + Math.random()*R;
    }

    function Circle(obj){
        let circle = document.createElementNS(W3, 'circle');
        //console.log(circle)
        circle.setAttributeNS(null, "cx", obj.px);
        circle.setAttributeNS(null, "cy", obj.py);
        circle.setAttributeNS(null, "r", obj.r);
        let rand = 230 + Math.random()*25
        circle.setAttributeNS(null, "fill", `rgba(${rand}, ${rand}, ${rand}, ${Math.random() * .5})`);
        return circle;
    }
 return item;
}
