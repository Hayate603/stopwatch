$(document).ready(function(){
 var hour = 0;
 var min = 0;
 var sec = 0;
 var millisec = 0;
 
 var timer;
 
 // スタート
 $("#start").click(function() {
  
  timer = setInterval(countup, 100);
  
  $(this).prop("disabled", true);
  $("#stop, #reset").prop("disabled", false)
 });
 
 // ストップ
 $("#stop").click(function(){
  clearInterval(timer);
  
  $(this).prop("disabled", true);
  $("#start, #reset").prop("disabled", false)
  
 });
 
 // リセット
 $("#reset").click(function() {
  clearInterval(timer)
  hour = 0;
  min = 0;
  sec = 0;
  millisec = 0;
  
  $("#time").html("0:0:0:0");
  $("#stop, #reset").prop("disabled", true);
  $("#start").prop("disabled", false);
  
 });
 
 // カウントアップ
 function countup() {
  // ミリ秒
  millisec += 1;
  if (millisec > 9) {
   millisec = 0;
   sec += 1;
  }
  
  // 秒
  if (sec > 59) {
   sec = 0;
   min += 1;
  }
  
  // 分
  if (min > 59) {
   min = 0;
   hour += 1;
  }
  
  $("#time").html(hour + ":" + min + ":" + sec + ":" + millisec);
  
 }
 
});
 
 
 