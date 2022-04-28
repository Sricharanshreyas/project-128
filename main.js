sound = "";
sound2 = ""; 
leftWristx = 0;
leftWristy = 0;
RightWristx = 0;
RightWristy = 0;
function preload(){
sound = loadSound("music.mp3");
sound2 = loadSound("music2.mp3");
}
function setup(){
 canvas = createCanvas(450, 400);
 canvas.position(400, 200);
 video = createCapture(VIDEO);
 video.hide(); 
 posenet = ml5.poseNet(video, modelloaded);
 posenet.on("pose", gotposess);
}
function draw(){
 image(video, 0, 0, 450, 400);
 
}
function modelloaded(){
   console.log("Posenet is loaded");
}
function gotposess(results){
  if(results.length > 0){
     console.log(results);
     leftWristx = results[0].pose.leftWrist.x;
     leftWristy = results[0].pose.leftWrist.y;
     RightWristx = results[0].pose.rightWrist.x;
     RightWristy = results[0].pose.rightWrist.y;
     console.log("leftWristx ="+leftWristx+"leftwristy ="+leftWristy);
     console.log("RightWristx ="+RightWristx+"RightWristy ="+RightWristy);
     
  }
}
function play(){
   sound.play();
   sound2.play();
}
