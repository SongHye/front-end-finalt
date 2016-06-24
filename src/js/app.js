console.log('my-note app.js');

function FullScreen(document) {
  if(document.requestFullScreen) {
    document.requestFullScreen();
  } else if(document.requestFullScreen){
    document.requestFullScreen();
  } else if(document.webkitRequestFullScreen){
    document.webkitRequestFullScreen();
  } 
}