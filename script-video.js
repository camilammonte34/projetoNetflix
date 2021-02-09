function showVideo(){
  document.querySelector("[class= 'filme-principal']").innerHTML="<video autoplay muted  width='600' height='400' ><source src='videoo/temp1once.mp4' type='video/mp4' ></video>"

}

function showVideo1(){
    document.querySelector("[class= 'filme-principal']").innerHTML="<video autoplay muted width='600' height='400' ><source src='videoo/temp2once.mp4' type='video/mp4' ></video>"
}
function watchNow() {
    document.querySelector("[class='filme-principal']").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/i3DmXlM2h9E?autoplay=1&mute=1&controls=0\"></iframe>"

}




