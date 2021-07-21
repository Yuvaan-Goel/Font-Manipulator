noseX = 0;
noseY = 0;
difference = 0;
right = 0;
left = 0;
function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Model is Loaded!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        right = results[0].pose.rightWrist.x;
        left = results[0].pose.leftWrist.x;
        difference = floor(left-right);
    }
}

function draw()
{
    background("blue");
    fill("red");
    stroke("yellow");
    text("Yuvaan", noseX, noseY);
    textSize(difference);
    document.getElementById("font-size").innerHTML = " " + difference + " px";
}