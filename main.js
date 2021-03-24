noseX=0;
noseY=0;

function preload() {
  lipstick = loadImage('https://i.postimg.cc/N0s04zcN/lip.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);//access webcam
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);//poseNet is a predefined function of ml5.js used to initialize the
                                            //poseNet model.
  
  poseNet.on('pose', gotPoses);// in pose variable coordinates of 17 keypoints are saved
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x ="+results[0].pose.nose.x);
    console.log("nose y ="+results[0].pose.nose.y);
    noseX = results[0].pose.nose.x-12;
    noseY = results[0].pose.nose.y+25;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(lipstick, noseX, noseY, 35, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
