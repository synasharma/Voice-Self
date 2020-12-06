var SpeechRecognition= window.webkitSpeechRecognition;
//variable holding API//
var recognition= new SpeechRecognition();
//variable storing instance of the API//
function startAPI()
{
    document.getElementById("textbox").innerHTML="";//emptying the textarea if anything is written//
    recognition.start();//recognition refers to the API and start() is a function from the API which we are enabling//
}

recognition.onresult=function(event)//onresult a function in the API whoch holds the reults of whatever we speak//
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").value=content;
    console.log(content);
    if(content=="take my selfie")
    {
    speaktext();//given to follow sequence//  
    }
  else
  {
window.alert("Will take selfie only when you say 'Take my Selfie'");
  }
}


function speaktext()
{
    var synth=window.speechSynthesis;
    var speak_data="Taking your selfie in 5 seconds";
    var utter=new SpeechSynthesisUtterance(speak_data);
    utter.pitch=0.8;
    utter.lang='hi-IN';
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
    take_snapshot();
    save();
    },5000);
}

Webcam.set
({
width:360,
height:250,
image_format:'png',
png_quality:100
});

var camera=document.getElementById("camera");

function take_snapshot()
{
Webcam.snap(function(img_url)
{
document.getElementById("result").innerHTML='<img id="selfie_img" src="'+img_url+'">';
});
}

function save()
{
    link_url=document.getElementById("link");//link to image, refers to the anchor tag//
    img=document.getElementById("selfie_img").src;//Filling variable with selfie image//
    link_url.href=img;//adding the image to the html<a> url//
    link_url.click();//image gets auto-downloaded with the name 'selfie.png'//
}