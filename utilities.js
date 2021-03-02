
function animate(){
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    frogger.draw();
    frogger.update();
    requestAnimationFrame(animate);
}


animate();