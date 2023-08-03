let $select = {
  body: $("body"),
  overlay: $("#blackout"),
  modal: $("#trailerModal"),
  showButton: $("#showTrailer"),
  hideButton: $("#hideTrailer"),
};

let play = {
  obj: null,
  query: {
    autoplay: 1,
    controls: 0,
    iv_load_policy: 3,
  },
};

// $select.showButton.click(function(){
//     showPlayer()
// });
$select.showButton.click(showPlayer);
$select.hideButton.click(hidePlayer);

function setPlayer(id) {
  play.obj = new YT.Player("trailer", {
   
    videoId: id,
    playerVars: play.query,
  });
  resizePlayer();
  
  $(window).on("resize orientationchange", function () {
    resizePlayer();
  });
}
function resizePlayer() {
  let viewport_w = $(window).width(); 
  let viewport_h = $(window).height(); 

  let frame_w = viewport_w; //16
  let frame_h = viewport_w / 1.6; //10

  let modal_t = (viewport_h - frame_h) / 2 + "px";
  let modal_l = 0;

  $select.modal.css({ top: modal_t, left: modal_l });
  play.obj.setSize(frame_w, frame_h);
}

function showPlayer() {
  //console.log($select.showButton.data('youtube'))
  if (!play.obj) {
    setPlayer($select.showButton.data("youtube"));
  }
  $select.overlay.show();
}
function hidePlayer() {
  play.obj.stopVideo();
  $select.overlay.hide();
}
