$( document ).ready(function() {
    setupCameraControls();
});

function setupCameraControls(){
    $('#showroom').on('keypress', function(event){
        console.log(event.which);
    });
}