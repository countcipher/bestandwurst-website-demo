var feature = document.getElementsByClassName("feature")[0];
var featureH1 = document.getElementsByClassName("featureH1")[0];
var featureP = document.getElementsByClassName("featureP")[0];

var headerGallery = ["url('sausage0.jpg')", "url('sausage1.jpg')", "url('sausage3.jpg')"];

var featureTitle = ["Best of the Wurst!", "The Missing Links...", "Soup's On!"];

var featureText = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure doloremque obcaecati non delectus id est quasi enim eaque, blanditiis! Quod ex repellendus distinctio, quidem eos?","This is some more text about the second slide!  Love those snausages!  Snausages, snausages!  I eat 'em all up, yes I do, yes I do!!!!  Who doesn't love those snausages?  I ask you, who?", "This is text about the sausage soup.  Mmm, mmm!  Campbell's doesn't make anything this good!  Right here on Best of the Wurst we're serving up this award-winning recipe!"];

var i = 0;
//toggle navigation x with hamburger
document.getElementById("hamburgerx").onclick=function(){
    $("#navigationx").toggle("fast", "linear");
    $("#hamburgerx li i").toggleClass("fa-bars fa-close");
};

//change imgs and innerHTML for header
setInterval(function(){
    i++;
    if(i>=headerGallery.length){
        i=0;
    }
    feature.style.backgroundImage = headerGallery[i];
    featureP.innerHTML = featureText[i];
},5000);

//reset navigationx onresize
var body = document.getElementsByTagName("body")[0];
body.onresize = function(){
  if(window.innerWidth <= 920){
      document.getElementById("navigationx").style.display = "none";
  }else{
      document.getElementById("navigationx").style.display = "inline-block";
  }
    $("#hamburgerx li i").removeClass("fa-close");
    $("#hamburgerx li i").addClass("fa-bars");
};