document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        splash.style.display = 'none';
    });
});

$( document ).ready(function() {
    setupCameraControls();
});

function setupCameraControls(){
    AFRAME.registerComponent('shopping-room', {
        schema: {},
        init: function () {
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
            })

            // boxEl.addEventListener('mouseenter', function () {
            //     boxEl.setAttribute('scale', {x: 2, y: 2, z: 2});
            //   });
        }
      });
}