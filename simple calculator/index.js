document.getElementById("screen").readOnly=true;
let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenValue="";
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is ',buttonText)
        if(buttonText == "X"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText == "C"){
            screenValue=" ";
            screen.value=screenValue;
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        var audio=new Audio("sound/clickselect2-92097.mp3");
        audio.play();
    })
}

document.addEventListener("keydown",function(event){
    console.log(event.which);
    if(event.shiftKey == 9){
        event.key=="(";
    }
    else if(event.shiftKey == 0){
        event.key == ")";
    }
    else if(event.shiftKey == 5){
        event.key == "%";

    }
    
    else if(event.shiftKey == 8){
        screenValue+= "*";
        screen.value=screenValue;

    }
    if(
        event.key<=9 ||
        event.key == "+"||
        event.key == "-"||
        event.key == "*"||
        event.key == "."||
        event.key == "/"||
        event.key == "%"||
        event.key == "("||
        event.key == ")"
    ){
        screenValue+=event.key;
        screen.value = screenValue;
    }
    if(
        event.key=="="
    )
    {
        screen.value=eval(screenValue);
    }
    if(event.key=="c"){
        screenValue=" ";
        screen.value=screenValue;
    }
    var audio=new Audio("sound/clickselect2-92097.mp3");
        audio.play();

})