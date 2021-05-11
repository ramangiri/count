
var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    var img = new Image(); 
var div = document.getElementById('countdown'); 
 
img.onload = function() { 
  div.appendChild(img); 
}; 
 
img.src = 'https://i0.wp.com/www.ultraupdates.com/wp-content/uploads/2017/06/happie-eid.gif?resize=500%2C294&ssl=1'
    
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);