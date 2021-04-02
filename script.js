var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var display2 = document.body.querySelector(".display2");

var pages = [
  {
    title:"Home",
    content:"Home",
  },
  {
    title:"About",
    content:"About",
  },
  {
    title:"Interact",
    content:"Interact",
  }
  
]

var num=0;

function counterAdd (clicked){
  num= num +1;
};

for (i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button")
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function pageTitle(titles){
    display.innerHTML="";
    var headers = document.createElement("h1");
    headers.innerHTML=titles;
    display.appendChild(headers);
}

function countButtons(){
  var buttons = document.createElement("button")
  buttons.innerHTML="Click to add 1";
  var counter = document.createElement("div");
  counter.innerHTML="Current count: 0";
  display.appendChild(counter);
  buttons.addEventListener("click", function(){
      counterAdd(true);
      counter.innerHTML="Counter is at: " + num;
  }) 
  display.appendChild(buttons);
}
 
function writeStuff(stuff, pg){
  if(pg=="About"){
    pageTitle(pages[1].content);
    var name = document.createElement("h3");
    name.innerHTML="Ashley";
    display.appendChild(name);
  }else if(pg!=="Interact"){
    pageTitle(pages[0].content);
  }else{
    pageTitle(pages[2].content);
    countButtons(true);
  }
}

writeStuff(pages[0].content);