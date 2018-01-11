/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ugly globals
var game = void 0;
var renderer = void 0;
var LEFT_MOUSE = 1;

// keyboard vals
var KEYS = {
    KEY_LEFT: { code: 37, down: false },
    KEY_UP: { code: 38, down: false },
    KEY_RIGHT: { code: 39, down: false },
    KEY_DOWN: { code: 40, down: false },
    KEY_W: { code: 87, down: false },
    KEY_A: { code: 65, down: false },
    KEY_S: { code: 83, down: false },
    KEY_D: { code: 68, down: false }
};

// store key states we care about
function handleKeyDown(evt) {
    switch (evt.keyCode) {
        case KEYS.KEY_LEFT.code:
            KEYS.KEY_LEFT.down = true;break;
        case KEYS.KEY_RIGHT.code:
            KEYS.KEY_RIGHT.down = true;break;
        case KEYS.KEY_DOWN.code:
            KEYS.KEY_DOWN.down = true;break;
        case KEYS.KEY_UP.code:
            KEYS.KEY_UP.down = true;break;
        case KEYS.KEY_W.code:
            KEYS.KEY_W.down = true;break;
        case KEYS.KEY_A.code:
            KEYS.KEY_A.down = true;break;
        case KEYS.KEY_S.code:
            KEYS.KEY_S.down = true;break;
        case KEYS.KEY_D.code:
            KEYS.KEY_D.down = true;break;
    }
}

// store key states we care about
function handleKeyUp(evt) {
    switch (evt.keyCode) {
        case KEYS.KEY_LEFT.code:
            KEYS.KEY_LEFT.down = false;break;
        case KEYS.KEY_RIGHT.code:
            KEYS.KEY_RIGHT.down = false;break;
        case KEYS.KEY_DOWN.code:
            KEYS.KEY_DOWN.down = false;break;
        case KEYS.KEY_UP.code:
            KEYS.KEY_UP.down = false;break;
        case KEYS.KEY_W.code:
            KEYS.KEY_W.down = false;break;
        case KEYS.KEY_A.code:
            KEYS.KEY_A.down = false;break;
        case KEYS.KEY_S.code:
            KEYS.KEY_S.down = false;break;
        case KEYS.KEY_D.code:
            KEYS.KEY_D.down = false;break;
    }
}

// let the game know when the user clicks
function handleMouseClick(evt) {
    if (game) {
        game.onMouseClick();
    }
}

// handle window resizing!
function onWindowResize() {
    if (game) {
        game.onWindowResize(window.innerWidth/2, window.innerHeight/2);
    }

    if (renderer) {
        renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    }
}

// let the game know when the mouse moves
function onMouseMove(e) {
    if (game) {
        game.onMouseMove(e);
    }
}

// calls game on scroll event, if game has been created
function onScroll(e) {
    if (game) {
        game.onScroll(e.deltaY);
    }
}

(function () {
    // capture width and height
    var width = window.innerWidth / 2;
    var height = window.innerHeight / 2;

    // create renderer, size to window
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.getElementById('myGame').appendChild(renderer.domElement);

    // create and initialize game
    game = new _game2.default('test');
    game.initializeGame(width, height);

    // clock for DT
    var clock = new THREE.Clock();

    // game loop
    function render() {
        game.updateGame(clock.getDelta(), KEYS);
        game.drawGame(renderer);

        requestAnimationFrame(render);
    }

    // run game loop
    render();

    // make sure we're notified when the window size changes, and when the mouse moves
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('click', handleMouseClick, false);
    window.addEventListener('wheel', onScroll, false);

    // do the keypress thing
    document.onmousemove = onMouseMove;
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    // no idea if I'll want this later or not.
    function Game() {
        _classCallCheck(this, Game);

        this.name = 'MyGame';
    }

    // returns a string to set the color from rgb obj


    _createClass(Game, [{
        key: 'colorStr',
        value: function colorStr(color) {
            return 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
        }

        // makes the move text and increments move counter!

    }, {
        key: 'makeMoveText',
        value: function makeMoveText() {
            return this.createLabel('Moves: ' + this.moveCount++, 250, 300, 0, 30, this.colorStr({ r: 128, g: 128, b: 128 }), 256, 128, 'blue');
        }

        // makes the win text

    }, {
        key: 'makeWinText',
        value: function makeWinText() {
            return this.createLabel("You Win!", 250, 300 - 128, 0, 30, this.colorStr({ r: 128, g: 128, b: 128 }), 256, 128, 'green');
        }

        // all the one-time start-up scene set-up

    }, {
        key: 'initializeGame',
        value: function initializeGame(width, height) {
            this.moveCount = 0;
            this.won = false;
            this.width = width;
            this.height = height;

            // create the default scene
            this.scene = new THREE.Scene();
            this.SIDE_CUBES = 6;
            this.NUM_CUBES = Math.floor(this.SIDE_CUBES * this.SIDE_CUBES);

            // create cubes array
            this.cubes = [];

            // init cubes array
            for (var i = 0; i < this.NUM_CUBES; ++i) {
                // create a cube, store it for later
                var cubeGeometry = new THREE.CubeGeometry(1, 1, 1);
                var x = Math.floor(i / this.SIDE_CUBES);
                var z = Math.floor(i % this.SIDE_CUBES);
                var cubeMaterial = new THREE.MeshLambertMaterial({ color: ((x ^ z) & 1) == 1 ? 0xff0000 : 0x00ff00 });
                this.cubes.push({ mesh: new THREE.Mesh(cubeGeometry, cubeMaterial), basePosX: 100 * x, basePosZ: 100 * z, blue: false });
                //this.cubes[i].rotation.y = Math.PI * i / this.NUM_CUBES * 45 / 180;
                this.cubes[i].mesh.position.x = this.cubes[i].basePosX;
                this.cubes[i].mesh.position.z = this.cubes[i].basePosZ;
                this.cubes[i].mesh.scale.set(100, 100, 100);
                this.scene.add(this.cubes[i].mesh);
            }

            // create a camera so we can render stuff
            this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

            // offset it
            this.camPosX = 150;
            this.camPosY = 350;
            this.camPosZ = 500;
            this.camera.position.y = this.camPosY;
            this.camera.position.z = this.camPosZ;

            // make it face the cube
            this.camera.lookAt(new THREE.Vector3());

            // base offset
            this.cameraForward = this.camera.position.clone();
            this.cameraDistance = this.cameraForward.length();
            this.cameraForward.negate();

            // add it to the scene
            this.scene.add(this.camera);

            // make a skybox
            var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
            var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
            this.skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

            // add it to the scene
            this.scene.add(this.skybox);

            // for lighting
            this.pointLight = new THREE.PointLight(0xffffff);
            this.pointLight.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);

            // add the light
            this.scene.add(this.pointLight);

            // raycasting utilities
            this.raycaster = new THREE.Raycaster();
            this.mouseVector = new THREE.Vector2();

            // initialize move text
            this.moveText = this.makeMoveText();
            this.scene.add(this.moveText);
        }
    }, {
        key: 'updateGame',
        value: function updateGame(dt, keys) {
            // handle keyboard input
            if (keys.KEY_A.down) {
                this.camPosX -= 100.0 * dt;
            }
            if (keys.KEY_D.down) {
                this.camPosX += 100.0 * dt;
            }
            if (keys.KEY_W.down) {
                this.camPosZ -= 100.0 * dt;
            }
            if (keys.KEY_S.down) {
                this.camPosZ += 100.0 * dt;
            }
            if (keys.KEY_UP.down) {
                this.camPosY += 100.0 * dt;
            }
            if (keys.KEY_DOWN.down) {
                this.camPosY -= 100.0 * dt;
            }
            this.setCameraPosition();

            // snap light to camera
            this.pointLight.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
        }
    }, {
        key: 'drawGame',
        value: function drawGame(renderer) {
            // draw the current scene simply using our camera
            renderer.render(this.scene, this.camera);
        }

        // handle updating the camera on resize

    }, {
        key: 'onWindowResize',
        value: function onWindowResize(width, height) {
            this.width = width;
            this.height = height;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        }

        // updates the position of the camera

    }, {
        key: 'setCameraPosition',
        value: function setCameraPosition() {
            // get a copy the direction of the forward vector of the camera, negate and normalize to get the 'to camera' vector
            var offset = this.cameraForward.clone();
            offset.negate();
            offset.normalize();

            // scale it to be the length of the camera distance, and set the camera position to its base position plus our new offset
            offset.multiplyScalar(this.cameraDistance);
            this.camera.position.set(this.camPosX + offset.x, this.camPosY + offset.y, this.camPosZ + offset.z);
        }

        // capture and translate mouse movements to normalized values

    }, {
        key: 'onMouseMove',
        value: function onMouseMove(e) {
            this.mouseVector.x = 2 * (e.clientX / this.width) - 1;
            this.mouseVector.y = 1 - 2 * (e.clientY / this.height);
        }

        // checks the win condition

    }, {
        key: 'checkWinCondition',
        value: function checkWinCondition() {
            // go through each object, if any are not colorized then its not won yet
            for (var i = 0; i < this.NUM_CUBES; ++i) {
                if (!this.cubes[i].blue) {
                    this.won = false;
                    return;
                }
            }

            // if all are colorized update the text and set our victory flag
            this.won = true;
            this.winText = this.makeWinText();
            this.scene.add(this.winText);
        }

        // fire a ray, if it hits a cube toggle shapes in a + fashion

    }, {
        key: 'onMouseClick',
        value: function onMouseClick() {
            // cast a ray from the mouse pos
            this.raycaster.setFromCamera(this.mouseVector, this.camera);
            var intersects = this.raycaster.intersectObjects(this.scene.children);

            // if we've not won the game, the ray hit something, and its not the skybox
            if (intersects.length > 0 && intersects[0].object.uuid !== this.moveText.uuid && intersects[0].object.uuid !== this.skybox.uuid) {
                if (!this.winText || intersects[0].object.uuid !== this.winText.uuid) {
                    // do the environment thing!
                    // get the x-z indices for the clicked cube
                    var x = Math.floor(intersects[0].object.position.x / 100);
                    var z = Math.floor(intersects[0].object.position.z / 100);

                    // toggle in a 'plus' shape around and including the clicked one, doing nothing for out-of-bounds situations and not wrapping
                    this.toggleShape(x, z);
                    this.toggleShape(x + 1, z);
                    this.toggleShape(x, z + 1);
                    this.toggleShape(x - 1, z);
                    this.toggleShape(x, z - 1);

                    // remove the current text object, make a new one and add that
                    this.scene.remove(this.moveText);
                    this.moveText = this.makeMoveText();
                    this.scene.add(this.moveText);

                    // see if we won the game
                    this.checkWinCondition();
                } else if (this.won) {
                    this.restartGame();
                }
            }
        }

        // resets values for allowing game to start over

    }, {
        key: 'restartGame',
        value: function restartGame() {
            // remove the win text, update move text and count
            this.scene.remove(this.winText);
            this.scene.remove(this.moveText);
            this.moveCount = 0;
            this.moveText = this.makeMoveText();
            this.scene.add(this.moveText);

            // reset cube states (color and clicked states)
            for (var x = 0; x < this.SIDE_CUBES; ++x) {
                for (var z = 0; z < this.SIDE_CUBES; ++z) {
                    var i = x * this.SIDE_CUBES + z;
                    this.cubes[i].blue = false;
                    var blue = this.cubes[i].blue;
                    var red = ((x ^ z) & 1) == 1;
                    this.cubes[i].mesh.material.color.setRGB(red ? 1.0 : 0.0, red ? 0.0 : 1.0, blue ? 1.0 : 0.0);
                }
            }
        }

        // toggle the shape if it is in bounds

    }, {
        key: 'toggleShape',
        value: function toggleShape(x, z) {
            var i = x * this.SIDE_CUBES + z;
            if (x >= 0 && x < this.SIDE_CUBES && z >= 0 && z < this.SIDE_CUBES) {
                this.cubes[i].blue = !this.cubes[i].blue;
                var blue = this.cubes[i].blue;
                var red = ((x ^ z) & 1) == 1;
                this.cubes[i].mesh.material.color.setRGB(red ? 1.0 : 0.0, red ? 0.0 : 1.0, blue ? 1.0 : 0.0);
            }
        }

        // zoom in/out

    }, {
        key: 'onScroll',
        value: function onScroll(deltaY) {
            this.cameraDistance = THREE.Math.clamp(this.cameraDistance + 0.1 * deltaY, 50, 1000);
            this.setCameraPosition();
        }

        // make a text texture on a plane mesh and return it

    }, {
        key: 'createLabel',
        value: function createLabel(text, x, y, z, size, color, width, height, bgColor) {
            // make a canvas and get its context
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");

            // size it so that it is of the specified width and height
            canvas.width = width;
            canvas.height = height;

            // set text properties, draw the background and text
            ctx.font = size + 'pt Arial';
            ctx.textAlign = "center";
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = color;
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            // make textute from the canvas
            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;

            // put it on a plane
            var material = new THREE.MeshBasicMaterial({ map: texture });
            var mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height, 10, 10), material);

            // position and return it
            mesh.position.x = x;
            mesh.position.y = y;
            return mesh;
        }
    }]);

    return Game;
}();

// give the game to main.js


exports.default = Game;

/***/ })
/******/ ]);