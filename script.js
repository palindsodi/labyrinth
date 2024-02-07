//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton, restartButton, button11, button12, button21, button22, button31, button32, button41, button42, button51, button52, button91, button92, button111, button112, screen, song, easterEgg, music, musicToggle;
screen = 0;
musicToggle = 0;

const allAch = [0,0,0,0,0,0]; 

/* SETUP RUNS ONCE */
function preload() {
  song = loadSound("/assets/enchantress.mp3");
  song.setVolume(0.3);
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  textSize(10);
  music = new Sprite(width / 2, height / 2 + 160, 100, 30);
  music.color = color(255, 255, 255, 100);
  music.collider = 'k';
  music.text = '▷';
  music.textColor = color(255);


  easterEgg = new Sprite(300, 20, 100, 50);
  easterEgg.color = color(255, 255, 255, 0);
  easterEgg.collider = 'k';
  easterEgg.text = 'You have unlocked ' + checkAch(allAch) + ' endings.';
  easterEgg.textColor = color(255,255,255,100);

  // 0
  textSize(10);

  enterButton = new Sprite(width / 2, height / 2, 100, 50);
  enterButton.color = color(255, 40, 40);
  enterButton.collider = 'k';
  enterButton.text = '> begin';
  enterButton.textColor = color(30, 30, 20)

  restartButton = new Sprite(-100, -100, 100, 50);
  restartButton.color = color(255, 40, 40);
  restartButton.collider = 'k';
  restartButton.text = '> restart';
  restartButton.textColor = color(30, 30, 20)

  textSize(10);
  // 1
  button11 = new Sprite(-100, -100, 150, 50);
  button11.color = color(230, 230, 230);
  button11.collider = 'k';
  button11.text = '> left';

  button12 = new Sprite(-100, -100, 150, 50);
  button12.color = color(230, 230, 230);
  button12.collider = 'k';
  button12.text = '> right';
  // 2
  button21 = new Sprite(-100, -100, 150, 50);
  button21.color = color(230, 230, 230);
  button21.collider = 'k';
  button21.text = '> continue';

  button22 = new Sprite(-100, -100, 150, 50);
  button22.color = color(230, 230, 230);
  button22.collider = 'k';
  button22.text = '> return';
  // 3
  button31 = new Sprite(-100, -100, 150, 50);
  button31.color = color(230, 230, 230);
  button31.collider = 'k';
  button31.text = '> continue';

  button32 = new Sprite(-100, -100, 150, 50);
  button32.color = color(230, 230, 230);
  button32.collider = 'k';
  button32.text = '> return';
  // 4
  button41 = new Sprite(-100, -100, 150, 50);
  button41.color = color(230, 230, 230);
  button41.collider = 'k';
  button41.text = '> "uhhh ...\nsomeone important?"';

  button42 = new Sprite(-100, -100, 150, 50);
  button42.color = color(230, 230, 230);
  button42.collider = 'k';
  button42.text = '> "no clue"';
  // 5
  button51 = new Sprite(-100, -100, 150, 50);
  button51.color = color(230, 230, 230);
  button51.collider = 'k';
  button51.text = '> "I\'m inside a game"';

  button52 = new Sprite(-100, -100, 150, 50);
  button52.color = color(230, 230, 230);
  button52.collider = 'k';
  button52.text = '> \"to escape\"';
  //9
  button91 = new Sprite(-100, -100, 150, 50);
  button91.color = color(230, 230, 230);
  button91.collider = 'k';
  button91.text = '> left';

  button92 = new Sprite(-100, -100, 150, 50);
  button92.color = color(230, 230, 230);
  button92.collider = 'k';
  button92.text = '> right';
  //11
  button111 = new Sprite(-100, -100, 150, 50);
  button111.color = color(230, 230, 230);
  button111.collider = 'k';
  button111.text = '> left plate';

  button112 = new Sprite(-100, -100, 150, 50);
  button112.color = color(230, 230, 230);
  button112.collider = 'k';
  button112.text = '> right plate';

  textFont('Courier');
  fill(255);

}

function showScreen0() {
  background(color(20, 30, 30));
  textSize(20);
  fill(255, 20, 20);
  enterButton.pos = { x: width / 2, y: height / 2 };
  text("The doors close behind you.\nWelcome to the labyrinth.", width / 2, height / 2 - 100);
  textSize(7);
  text("Concept, story and code by AW.\n\nMusic credit: Enchantress (TSFH)\nClick the button below to turn the music on or off.", width / 2, height / 2 + 100);
  textSize(10);
  fill(255, 255, 255);
  if (enterButton.mouse.presses()) {
    enterButton.pos = { x: -100, y: -100 };
    screen = 1;
  }
}

function showScreen1() {
  button11.pos = { x: 200, y: 200 };
  button12.pos = { x: 400, y: 200 };
  background(color(100, 40, 40));
  text("To your left lies a hallway. You hear crackling sounds from that direction.\nTo the right lies another hallway. It is darker than the left hallway, and\nsomething green is growing (?) on the walls.\nYou go:", width / 2, height / 2 - 100);
  if (button11.mouse.presses()) {
    button11.pos = { x: -100, y: -100 };
    button12.pos = { x: -100, y: -100 };
    screen = 2;
  }
  if (button12.mouse.presses()) {
    button11.pos = { x: -100, y: -100 };
    button12.pos = { x: -100, y: -100 };
    screen = 3;
  }
}

function showScreen2() {
  button21.pos = { x: 200, y: 200 };
  button22.pos = { x: 400, y: 200 };
  background(color(100, 50, 50));
  text("You begin to smell smoke.", width / 2, height / 2 - 100)
  if (button21.mouse.presses()) {
    button21.pos = { x: -100, y: -100 };
    button22.pos = { x: -100, y: -100 };
    screen = 4;
  }
  if (button22.mouse.presses()) {
    button21.pos = { x: -100, y: -100 };
    button22.pos = { x: -100, y: -100 };
    screen = 1;
  }
}

function showScreen3() {
  button31.pos = { x: 200, y: 200 };
  button32.pos = { x: 400, y: 200 };
  background(color(40, 70, 20));
  text("It is humid here, and hot.\nYou pause to catch your breath. What a suffocating place.\nWater drips from somewhere overhead, but you cannot hear it fall.", width / 2, height / 2 - 100);
  if (button31.mouse.presses()) {
    button31.pos = { x: -100, y: -100 };
    button32.pos = { x: -100, y: -100 };
    screen = 6;
  }
  if (button32.mouse.presses()) {
    button31.pos = { x: -100, y: -100 };
    button32.pos = { x: -100, y: -100 };
    screen = 1;
  }
}

function showScreen4() {
  button41.pos = { x: 200, y: 200 };
  button42.pos = { x: 400, y: 200 };
  background(color(70, 50, 10));
  text("There is a room ahead. You peek inside and see a large, steaming cauldron.\nA stranger sits behind it. He notices you before you can hide. \n'Who are you?' he asks.", width / 2, height / 2 - 100);
  if (button41.mouse.presses()) {
    button41.pos = { x: -100, y: -100 };
    button42.pos = { x: -100, y: -100 };
    screen = 7;
  }
  if (button42.mouse.presses()) {
    button41.pos = { x: -100, y: -100 };
    button42.pos = { x: -100, y: -100 };
    screen = 5;
  }

}
function showScreen5() {
  button51.pos = { x: 200, y: 200 };
  button52.pos = { x: 400, y: 200 };
  background(color(100, 80, 80));
  text("The stranger shrugs. 'That's a new one. Why are you here?'", width / 2, height / 2 - 100);
  if (button51.mouse.presses()) {
    button51.pos = { x: -100, y: -100 };
    button52.pos = { x: -100, y: -100 };
    screen = 8;
  }
  if (button52.mouse.presses()) {
    button51.pos = { x: -100, y: -100 };
    button52.pos = { x: -100, y: -100 };
    screen = 9;
  }

}
function showScreen7() {
  background(color(0, 0, 0));
  text("'I don't know anyone by that name,' says the stranger impatiently. 'Get out.'\nYou teleport back to the beginning.\nACHIEVEMENT UNLOCKED: POOR LIAR", width / 2, height / 2 - 100);
  restartButton.pos = { x: width / 2, y: height / 2 };
  allAch[0] = 1;
}

function showScreen9() {
  button91.pos = { x: 200, y: 200 };
  button92.pos = { x: 400, y: 200 };
  background(color(60, 20, 70));
  text("'Rubbish. No one escapes this place.'\nEverything goes dark, and for a moment you do not know where you are.\nThen you find yourself at the end of a new hallway.\nAt the end of the hallway there are two doors:\nto the left a grand door of cherry wood, and to the right a door carved of marble.\nYou hear wind whispering behind the left door.\nYou go:", width / 2, height / 2 - 140);
  if (button91.mouse.presses()) {
    button91.pos = { x: -100, y: -100 };
    button92.pos = { x: -100, y: -100 };
    screen = 10;
  }
  if (button92.mouse.presses()) {
    button91.pos = { x: -100, y: -100 };
    button92.pos = { x: -100, y: -100 };
    screen = 11;
  }
}

function showScreen10() {
  background(color(0, 0, 0));
  text("\nYou step through the door and the ground disappears under your feet.\nSince when was this accursed place on a cliff?\nYou teleport back to the beginning.\nACHIEVEMENT UNLOCKED: A LONG WAY DOWN", width / 2, height / 2 - 100);
  restartButton.pos = { x: width / 2, y: height / 2 };
  allAch[1] = 1;
}

function showScreen11() {
  button111.pos = { x: 200, y: 200 };
  button112.pos = { x: 400, y: 200 };
  background(color(160, 90, 90));
  text("The right door leads into a marble-plated room.\nIn the middle of the room there is a single tableclothed table,\nand on the table there are two black china plates.\nThere are no chairs.\nYou touch the:", width / 2, height / 2 - 100);
  if (button111.mouse.presses()) {
    button111.pos = { x: -100, y: -100 };
    button112.pos = { x: -100, y: -100 };
    screen = 12;
  }
  if (button112.mouse.presses()) {
    button111.pos = { x: -100, y: -100 };
    button112.pos = { x: -100, y: -100 };
    screen = 13;
  }
}

function showScreen12() {
  background(color(30, 30, 180));
  text("For a moment, nothing happens.\nThen the table begins to ascend on invisible strings.\nOn an impulse you jump on top of it and hold on for dear life.\nA trapdoor opens in the ceiling and you pass through it, ducking your head.\nOnce the table is no longer moving, you raise your head and see the sky.\nACHIEVEMENT UNLOCKED: IS THIS REALITY?", width / 2, height / 2 - 100);
  restartButton.pos = { x: width / 2, y: height / 2 };
  allAch[2] = 1;
}

function showScreen13() {
  background(color(0, 0, 0));
  text("A viscous grey substance begins to leak from the plate.\nYou run backwards, stumbling over your feet, but you are not fast enough.\nInstantly you teleport back to the beginning.\nACHIEVEMENT UNLOCKED: ROLL OF THE DICE", width / 2, height / 2 - 100);
  restartButton.pos = { x: width / 2, y: height / 2 };
  allAch[3] = 1;
}

function showScreen8() {
  background(color(100, 100, 100));
  text("'Should've said so earlier,' says the stranger. 'Exit to the right.'\nYou cross the room and open the indicated door.\nSomething immediately yanks you through the doorway.\nAfter your eyes adjust to the light, you can see that\nyou are in some kind of flying saucer.\nThe labyrinth fades into a speck below you.\nACHIEVEMENT UNLOCKED: FOURTH WALL?", width / 2, height / 2 - 130);
  restartButton.pos = { x: width / 2, y: height / 2 };
  allAch[4] = 1;
}

function showScreen6() {
  background(color(0, 0, 0));
  text("You see a light at the end of the hallway. It grows brighter.\nAre you free?\nSomething hits you in the back of your head, and you teleport back to the beginning.\nYou never heard it coming.\nACHIEVEMENT UNLOCKED: THINGS IN THE AIR", width / 2, height / 2 - 100);
  restartButton.pos = { x: width / 2, y: height / 2 };
  allAch[5] = 1;

}

function checkAch(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    }
  }
  return count;
}


/* DRAW LOOP REPEATS */
function draw() {
  clear();
  if (musicToggle == 1 && !(song.isPlaying())) { song.loop(); }
  if (musicToggle == 0 && song.isPlaying()) { song.stop(); }
  if (music.mouse.presses()) {
    if (musicToggle == 1) {
      musicToggle = 0;
      music.text = '▷';
    }
    else {
      musicToggle = 1;
      music.text = '🁢🁢';
    }
  }
  if (screen == 0) { showScreen0(); }
  if (screen == 1) { showScreen1(); }
  if (screen == 2) { showScreen2(); }
  if (screen == 3) { showScreen3(); }
  if (screen == 4) { showScreen4(); }
  if (screen == 5) { showScreen5(); }
  if (screen == 6) { showScreen6(); }
  if (screen == 7) { showScreen7(); }
  if (screen == 8) { showScreen8(); }
  if (screen == 9) { showScreen9(); }
  if (screen == 10) { showScreen10(); }
  if (screen == 11) { showScreen11(); }
  if (screen == 12) { showScreen12(); }
  if (screen == 13) { showScreen13(); }
  
  if (enterButton.mouse.presses()) {
    screen = 1;
    enterButton.pos = { x: -100, y: -100 };
  }
  if (restartButton.mouse.presses()) {
    restartButton.pos = { x: -100, y: -100 };
    screen = 0;
  }
  
  if (checkAch(allAch) == 6) {
    easterEgg.text = 'Congratulations! You have unlocked all endings.';
  } 
  else if (checkAch(allAch) == 1) {
    easterEgg.text = 'You have unlocked ' + checkAch(allAch) + ' ending.';
  }
  else {
    easterEgg.text = 'You have unlocked ' + checkAch(allAch) + ' endings.';
  }

}

