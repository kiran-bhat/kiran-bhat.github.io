document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        splash.style.display = 'none';
    });
});

$( document ).ready(function() {
    setupClickEvents();
});

function setupClickEvents(){
    AFRAME.registerComponent('details-room', {
        schema: {},
        init: function () {
            var fuse = document.querySelector('#fuse-cursor');
            var fuseProgress = document.querySelector('#fuse-progress');
            var camera = document.querySelector('#main-camera-wrapper');
            fuse.addEventListener('fusing', function (e) {
                fuseProgress.emit('fusing');
            });

            var addToCart = document.querySelectorAll('.add-to-cart')[0];
            addToCart.addEventListener('click', function(e) {   
                addToCart.setAttribute('visible', false);
            });
            var buyNow = document.querySelectorAll('.buy-now')[0];
            buyNow.addEventListener('click', function(e) {                    
                buyNow.setAttribute('visible', false);
            })
        }
      });
}