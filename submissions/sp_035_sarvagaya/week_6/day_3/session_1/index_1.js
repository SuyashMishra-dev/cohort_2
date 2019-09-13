$("#render").click(function() {

    class Header
    {
        constructor(name, color, font_size)
        {
            this.name=name;
            this.color=color;
            this.font_size=font_size;
        }
        displayDetails()
        {
            console.log(`
            Name: ${this.name}
            color: ${this.color}
            font-size: ${this.font_size}`);

            var div=document.getElementById("div");
            var head=document.createElement('h1');
            head.textContent=first.name,first.color,first.font_size;
            head.style.color="red";
            div.appendChild(head);
        }
    }
    var first = new Header(document.getElementById('name').value, "red", 10);
    first.displayDetails();
    
});
