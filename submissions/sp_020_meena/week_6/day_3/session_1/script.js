class Header{
    constructor(name,color,fontSize){
        this.name = name;
        this.color = color;
        this.fontSize = fontSize;
        //console.log("name is" +this.name, "color is:"+ this.color, "font is:" +this.fontSize);
    }

    displayDetails(){
        console.log("name is:" +this.name, "color is:"+ this.color, "font is:" +this.fontSize);
    }
    render(){
        //getDetails();
        console.log("rendering");
        createH1();
    }
}

    function  getDetails(){
        var name = document.getElementById("name").value;
        var color = document.getElementById("color").value;
        var fontSize = document.getElementById("fontSize").value;
        var r1 = new Header(name,color,fontSize);
        r1.displayDetails();
    }
    function createH1(){
        var bodyElm = documnent.queryselector(div);
        var head1 = document.createElement(h1);
        head1 = setAttributes.color(color);

    }
    

