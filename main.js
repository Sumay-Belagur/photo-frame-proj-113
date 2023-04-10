function preload() {

}
function draw() {
    image(video, 0, 0, 450, 350);
    fill("lightgrey")
    rect(20, 0, 10, 350);
    rect(100, 0, 10, 350);
    rect(180, 0, 10, 350);
    rect(260, 0, 10, 350);
    rect(340, 0, 10, 350);
    rect(420, 0, 10, 350);
    
    
    
    
    }
    function setup() {
        canvas= createCanvas(450, 350);
        canvas.position(400, 250);
    
        video= createCapture(VIDEO);
        video.hide();
    
        
    }
    
    function snapshot() {
        save("photo.jpg")
    }