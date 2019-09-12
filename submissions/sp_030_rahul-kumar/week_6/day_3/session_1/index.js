var name=[];
var color=[];
var fontsize=[];
class Header{
    constructor(name,color,fontsize){
        this.name=[name];
        this.color=[color];
        this.fontsize=[fontsize];
    }
    displayDetails(){
   console.log(this.name);
   console.log(this.color);
   console.log(this.fontsize);
    }
    submit(){
        name=document.getElementById('int1').value;
        color=document.getElementById('int2').value;
        fontsize=document.getElementById('int3').value;
        this.name[this.name.length]=name;
        this.color[this.color.length]=color;
        this.fontsize[this.fontsize.length]=fontsize;
    }


    render(){
   return `<h1> $(this.name)</h1>`
    }
}
var header= new Header('name','color','fontsize');
header.displayDetails();