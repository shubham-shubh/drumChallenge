var name=document.querySelectorAll("button");
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation(event.key);
});
for(var i=0;i<name.length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
         var alpha=this.innerHTML;
         makeSound(alpha);
         animation(alpha);
    });
}
function makeSound(char)
{
   switch (char) {
     case "q":
       var audio=new Audio("sounds/tom-4.mp3");
       audio.play();
      break;
     case "w":
       var audio=new Audio("sounds/crash.mp3");
       audio.play();
      break;
     case "e":
       var audio=new Audio("sounds/tom-2.mp3");
       audio.play();
      break;
     case "r":
       var audio=new Audio("sounds/kick-bass.mp3");
       audio.play();
      break;
     case "t":
       var audio=new Audio("sounds/tom-3.mp3");
       audio.play();
      break;
     case "y":
       var audio=new Audio("sounds/snare.mp3");
       audio.play();
      break;
     case "s":
       var audio=new Audio("sounds/tom-1.mp3");
       audio.play();
      break;
     default:
       console.log(key);
 }
}
function animation(char)
{
   document.querySelector("."+char).classList.add("pressed");
   setTimeout(function(){
     document.querySelector("."+char).classList.remove("pressed");
   },120);
}
