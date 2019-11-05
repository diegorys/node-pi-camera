"use strict";

const raspberryPiCamera = require('raspberry-pi-camera-native');

raspberryPiCamera.on('frame', (frameData) => {
    //Frame Data es un buffer NodeJS
    console.log('Imagen captada', frameData);
});

raspberryPiCamera.start({
    width: 1280,
    height: 720,
    fps: 2,
    encoding: 'JPEG',
    quality: 75
});
