$.ajax({
    url: 'http://hp-api.herokuapp.com/api/characters',
})

.done(function (data) {
    console.log(data)
   
    img1SliderParent = document.querySelector('#character');
    for(var i = 0; i< 6; i++) {
        var img1Slider = document.createElement('img');
        img1Slider.setAttribute('src' , data[i].image);
    img1Slider.setAttribute('class' , 'col-2');
    // img1Slider.setAttribute('class' , 'd-block');
    img1Slider.setAttribute('height' , '250px');
    // img1Slider.setAttribute('class' , 'w-10');
    img1SliderParent.appendChild(img1Slider);

    }
    

})

$.ajax({
    url: 'http://hp-api.herokuapp.com/api/characters/students',
})

.done(function (data) {
   
    img1SliderParent = document.querySelector('#students');
    for(var i = 0; i< 6; i++) {
        var img1Slider = document.createElement('img');
        img1Slider.setAttribute('src' , data[i].image);
        img1Slider.setAttribute('class' , 'col-2');
        // img1Slider.setAttribute('class' , 'd-block');
        img1Slider.setAttribute('height' , '250px');
        // img1Slider.setAttribute('class' , 'w-10');
        img1SliderParent.appendChild(img1Slider);

    }
    

})
$.ajax({
    url: 'http://hp-api.herokuapp.com/api/characters/staff',
})

.done(function (data) {
   
    img1SliderParent = document.querySelector('#staffs');
    for(var i = 0; i< 6; i++) {
        var img1Slider = document.createElement('img');
        img1Slider.setAttribute('src' , data[i].image);
        img1Slider.setAttribute('class' , 'col-2');
        // img1Slider.setAttribute('class' , 'd-block');
        img1Slider.setAttribute('height' , '250px');
        // img1Slider.setAttribute('class' , 'w-10');
        img1SliderParent.appendChild(img1Slider);

    }
    

})

// $.ajax({
//     url: 'http://hp-api.herokuapp.com/api/characters/staff',
// })

// .done(function (data) {
   
//     img1SliderParent = document.querySelector('#name');
//     for(var i = 0; i< 15; i++) {
//         var img1Slider = document.createElement('p');
//         img1Slider.setAttribute('src' , data[i].name);
//         img1Slider.innerHTML = data[i].name + " " + " " + " ";
//         // img1Slider.setAttribute('class' , 'd-block');
//         // img1Slider.setAttribute('height' , '250px');
//         // img1Slider.setAttribute('class' , 'w-10');
//         img1SliderParent.appendChild(img1Slider);

//     }
    

// })