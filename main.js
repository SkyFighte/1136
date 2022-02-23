noseX=0;
noseY=0;

function preload(){
   clown_nose=loadImage('Untitled.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);

    video.hide();
    tint_color="";
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is intilised');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX=  "+noseX);
    console.log("noseY=  "+noseY);
}
}
function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot(){
    save('MyPicture.jpg');
    
}