canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car-car-png.png"
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_images="car2.png"
car2_x=10;
car2_y=100;
background_image="backgound.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.scr=background.png;
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.scr=car-car-png.png;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log("up arrow key pressed");
    }
    if(keyPressed=='40'){
        car1_down();
        console.log("down arrow key pressed");
    }
    if(keyPressed=='37'){
        car1_left();
        console.log("left arrow key pressed");
    }
    if(keyPressed=='39'){
        car1_right();
        console.log("right arrow key pressed");
    }
    if(keyPressed=='87'){
        car2_up();
        console.log("key w");
    }
    if(keyPressed=='83'){
        car2_down();
        console.log("key s");
    }
    if(keyPressed=='65'){
        car2_left();
        console.log("key a");
    }
    if(keyPressed=='68'){
        car2_right();
        console.log("key d");
    }
}