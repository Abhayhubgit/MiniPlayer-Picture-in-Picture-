const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream , pass to video elemnet , then play
//Screen capture api google
async function selectMediaStream(){
    try {
     const mediaStream = await navigator.mediaDevices.getDisplayMedia();
     videoElement.srcObject = mediaStream ; //video src
    // //true when loadidng is finished
     videoElement.onloadedmetadata = () =>{   
             videoElement.play();
             
     }          
    } catch (error) {
        console.log(error);
    }
}
///trigger picture in picture
button.addEventListener('click', async() => {
    //disable the button
    button.disabled = true;
    //start the picture in pciture
    await videoElement.requestPictureInPicture() ;
    button.disabled = false ;

});

//onload

selectMediaStream() ;