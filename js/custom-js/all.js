document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        // splash.style.display = 'none';
        console.log('Scene loaded');
        setupCameraControls();
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
    
    checkpoints.forEach(function(checkpoint) {
        // image.setAttribute('look-at', '[camera]');
        checkpoint.addEventListener('click', function(e) {                    
            var position = checkpoint.getAttribute('position')
            camera.setAttribute('position', {x: position.x, y: camera.getAttribute('position').y, z: position.z}    )
            // to: {x: position.x, y: position.y, z: camera.getAttribute('position').z}
            // camera.emit('imageClicked')
        })
    });

    var asins = document.querySelectorAll('.asin');
    
    asins.forEach(function(asin) {
        asin.addEventListener('click', function(e) {                    
            window.location = '/details.html'
        })
    });

    var payButtons = document.querySelectorAll('.pay-button');
    payButtons.forEach(function(payButton) {
        payButton.addEventListener('click', function(e) {                    
            window.location = 'https://www.amazon.in/';
        })
    });
}