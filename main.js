canvas = new fabric.Canvas("myCanvas");

block_w = 30;
block_h = 30;
player_x = 10;
player_y = 10;

var player_object = "";

function player_update(){
fabric.Image.fromURL("player.png",function(img){
player_object=img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}


block_object = "";

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
    block_object=img;
    
    block_object.scaleToWidth(block_w);
    block_object.scaleToHeight(block_h);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

   function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress == "80"){
    console.log("p & shift pressed together");
    block_w = block_w + 10;
    block_h = block_h + 10 ; 
    document.getElementById("show_w").innerHTML = block_w;
    document.getElementById("show_h").innerHTML = block_h;
    }
    if(e.shiftKey && keypress == '77'){
        console.log("m & shift pressed together");
        block_w = block_w - 10;
        block_h = block_h - 10 ; 
        document.getElementById("show_w").innerHTML = block_w;
        document.getElementById("show_h").innerHTML = block_h;
    }

    if(keypress == '38'){
    up();
    console.log("up");
    }

    if(keypress == '40'){
        down();
        console.log("down");
        }

        if(keypress == '37'){
            left();
            console.log("left");
            }

            if(keypress == '39'){
                right();
                console.log("right");
                }

                if(keypress == '87'){
                    new_image('wall.jpg');
                    console.log("w");
                    }

                    if(keypress == '71'){
                        new_image('ground.png');
                        console.log("g");
                        }

                        if(keypress == '76'){
                            new_image('light_green.png');
                            console.log("l");
                            }

                            if(keypress == '84'){
                                new_image('trunk.jpg');
                                console.log("t");
                                }

                                if(keypress == '82'){
                                    new_image('roof.jpg');
                                    console.log("r");
                                    }

                                    if(keypress == '89'){
                                        new_image('yellow_wall.png');
                                        console.log("y");
                                        }

                                        if(keypress == '68'){
                                            new_image('dark_green.png');
                                            console.log("d");
                                            }

                                            if(keypress == '85'){
                                                new_image('unique.png');
                                                console.log("u");
                                                }
                                                
                                                if(keypress == '67'){
                                                    new_image('cloud.jpg');
                                                    console.log("c");
                                                    }
   }

   function up(){
   if(player_y >=0){
    player_y = player_y - block_h ;
    console.log("block img heigth = " + block_h);
        console.log("when up arrow is pressed x = " + player_x + "and y is = " + player_y);
        canvas.remove(player_object);
        player_update();
 }

   }

   function down(){
    if(player_y <=500){
     player_y = player_y + block_h ;
     console.log("block img heigth = " + block_h);
         console.log("when down arrow is pressed x = " + player_x + "and y is = " + player_y);
         canvas.remove(player_object);
         player_update();
  }
 
    }

    function left(){
        if(player_x >0){
         player_x = player_x - block_w ;
         console.log("block img width = " + block_w);
             console.log("when left arrow is pressed x = " + player_x + "and y is = " + player_y);
             canvas.remove(player_object);
             player_update();
      }
     
        }

        function right(){
            if(player_x <=850){
             player_x = player_x + block_w ;
             console.log("block img width = " + block_w);
                 console.log("when right arrow is pressed x = " + player_x + "and y is = " + player_y);
                 canvas.remove(player_object);
                 player_update();
          }
         
            }

