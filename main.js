noseX = 0;
noseY = 0;
lwristX = 0;
rwristX = 0;
difference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);

}

function draw(){
    background('#B0ACB7');
    fill('#FF2FEF');
    stroke(0);
    square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log("The model  is loaded as usual so dont worry");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        lwristX = results[0].pose.leftWrist.x;
        rwristX = results[0].pose.rightWrist.x;
        difference = floor(lwristX - rwristX);
    }
}