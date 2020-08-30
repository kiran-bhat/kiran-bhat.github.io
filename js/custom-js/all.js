document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        // splash.style.display = 'none';
        // console.log('Scene loaded');
    });
    var roomModel = document.querySelector('#showroom-model');
    roomModel.addEventListener('model-loaded', function (e) {
        splash.style.display = 'none';
        console.log('Model loaded');
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
            // let asinScale = asin.getAttribute('scale');
            // // asin.setAttribute('scale', {x: asinScale.x * 2, y: asinScale.y*2, z: asinScale.z * 2});
            // asin.setAttribute('animation', 'property: scale; to: ' +asinScale.x * 2 + ' ' + asinScale.y*2 + ' ' + asinScale.z * 2);
            window.location = '/details.html'
        })
    });
    // AFRAME.registerComponent('shopping-room', {
    //     schema: {},
    //     init: function () {
            
    //     }
    //   });
}