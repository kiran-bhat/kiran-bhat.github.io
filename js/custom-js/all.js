document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        // splash.style.display = 'none';
        console.log('Scene loaded');
        setupCameraControls();
    });

    var payButtons = document.querySelectorAll('.pay-button');
    payButtons.forEach(function(payButton) {
        payButton.addEventListener('click', function(e) {                    
            window.location = 'https://www.amazon.in/';
        })
    });    
});

function setupCameraControls(){
    var fuse = document.querySelector('#fuse-cursor');
    var fuseProgress = document.querySelector('#fuse-progress');
    var camera = document.querySelector('#main-camera-wrapper');
    var checkpoints = document.querySelectorAll('.checkpoint');

    fuse.addEventListener('fusing', function (e) {
        fuseProgress.emit('fusing');
    });
}