function playerBounds() {
    //This will check the position of the spaceship and if it hits the boundaries of the canvas will not let it go further.

    if (spaceShip.x < 0) {
        spaceShip.x = 0;
    }
    else if (spaceShip.x > canvas.width || spaceShip.x < canvas.width  ) {
        spaceship.x = canvas.wdith - spaceShip.width;
    }

}

console.log(playerBounds());


