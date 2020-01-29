/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var rocky = __webpack_require__(2);

	var minutesFills = 
	    [ [72, 0, 9, 20]        // 1 
	    , [81, 0, 9, 20]        // 2
	    , [90, 0, 9, 20]        // 3
	    , [99, 0, 9, 20]        // 4
	    , [108, 0, 9, 20]       // 5
	    , [117, 0, 9, 20]       // 6
	    , [126, 0, 9, 20]       // 7
	    , [135, 0, 9, 20]       // 8

	    , [124, 20, 20, 9]      // 9
	    , [124, 29, 20, 9]      // 10
	    , [124, 38, 20, 9]      // 11 
	    , [124, 47, 20, 9]      // 12
	    , [124, 56, 20, 9]      // 13
	    , [124, 65, 20, 9]      // 14
	    , [124, 74, 20, 10]     // 15
	    , [124, 84, 20, 10]     // 16
	    , [124, 94, 20, 9]      // 17
	    , [124, 103, 20, 9]     // 18
	    , [124, 112, 20, 9]     // 19 
	    , [124, 121, 20, 9]     // 20 
	    , [124, 130, 20, 9]     // 21
	    , [124, 139, 20, 9]     // 22
	    , [124, 148, 20, 10]    // 23
	    , [124, 158, 20, 10]    // 24

	    , [124, 148, -9, 20]    // 25
	    , [115, 148, -9, 20]    // 26
	    , [106, 148, -9, 20]    // 27
	    , [97, 148, -9, 20]    // 28
	    , [88, 148, -9, 20]    // 29
	    , [79, 148, -9, 20]    // 30 
	    , [70, 148, -9, 20]    // 31
	    , [61, 148, -9, 20]    // 32 
	    , [52, 148, -9, 20]    // 33 
	    , [43, 148, -9, 20]    // 34 
	    , [34, 148, -9, 20]    // 35 
	    , [25, 148, -9, 20]    // 36 
	    , [16, 148, -8, 20]    // 37 
	    , [8, 148, -8, 20]     // 38

	    , [0, 148, 20, -9]     // 39
	    , [0, 139, 20, -9]     // 40 
	    , [0, 130, 20, -9]     // 41 
	    , [0, 121, 20, -9]     // 42 
	    , [0, 112, 20, -9]     // 43 
	    , [0, 103, 20, -9]     // 44 
	    , [0, 94, 20, -10]     // 45 
	    , [0, 84, 20, -10]     // 46 
	    , [0, 74, 20, -9]      // 47 
	    , [0, 65, 20, -9]      // 48 
	    , [0, 56, 20, -9]      // 49 
	    , [0, 47, 20, -9]      // 50
	    , [0, 38, 20, -9]      // 51 
	    , [0, 29, 20, -9]      // 52 
	    , [0, 20, 20, -10]     // 53 
	    , [0, 10, 20, -10]     // 54 

	    , [20, 0, 9, 20]        // 55 
	    , [29, 0, 9, 20]        // 56 
	    , [38, 0, 9, 20]        // 57 
	    , [47, 0, 9, 20]        // 58 
	    , [56, 0, 9, 20]        // 59
	    , [63, 0, 9, 20]        // 60
	    ]
	var hoursFills = 
	    [ [72, 20, -11, 20] // 00:20
	    , [61, 20, -11, 20] // 00:40
	    , [50, 20, -10, 20] // 01:00
	    , [40, 20, -10, 20] // 01:20
	    , [30, 20, -10, 20] // 01:40

	    , [20, 40, 20, 11]  // 02:00
	    , [20, 51, 20, 11]  // 02:20
	    , [20, 62, 20, 11]  // 02:40
	    , [20, 73, 20, 11]  // 03:00

	    , [20, 84, 20, 11]  // 03:20
	    , [20, 95, 20, 11]  // 03:40
	    , [20, 106, 20, 11]  // 04:00
	    , [20, 117, 20, 11]  // 04:20

	    , [20, 128, 20, 10]  // 04:40
	    , [20, 138, 20, 10]  // 05:00

	    , [40, 128, 10, 20]  // 05:20
	    , [50, 128, 11, 20]  // 05:40
	    , [61, 128, 11, 20]  // 06:00

	    , [72, 128, 11, 20]  // 06:20
	    , [83, 128, 11, 20]  // 06:40
	    , [94, 128, 10, 20]  // 07:00
	    , [104, 128, 10, 20] // 07:20
	    , [114, 128, 10, 20] // 07:40

	    , [104, 128, 20, -11] // 08:00
	    , [104, 117, 20, -11] // 08:20
	    , [104, 106, 20, -11] // 08:40
	    , [104, 95, 20, -11]  // 09:00

	    , [104, 84, 20, -11]  // 09:20
	    , [104, 73, 20, -11]  // 09:40
	    , [104, 62, 20, -11]  // 10:00
	    , [104, 51, 20, -11]  // 10:20

	    , [104, 40, 20, -10]  // 10:40
	    , [104, 30, 20, -10]  // 11:00

	    
	    , [104, 20, -10, 20]  // 11:20
	    , [94, 20, -11, 20]   // 11:40
	    , [83, 20, -11, 20]   // 12:00

	    ]

	var nums = 
	    [ function(xStart, yStart, context, color) {
	        // 0 
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart+10, yStart+10, 10, 22);
	        }
	    , function(xStart, yStart, context, color) {
	        // 1
	        context.fillStyle = color;
	        context.fillRect(xStart+20, yStart, 10, 42);
	        }
	    , function(xStart, yStart, context, color) {
	        // 2
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart, yStart+10, 20, 6);
	        context.fillRect(xStart+10, yStart+26, 20, 6);
	        }
	    , function(xStart, yStart, context, color) {
	        // 3
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart, yStart+10, 20, 6);
	        context.fillRect(xStart, yStart+26, 20, 6);
	        }
	    , function(xStart, yStart, context, color) {
	        // 4
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart+10, yStart, 10, 16);
	        context.fillRect(xStart, yStart+26, 20, 16);
	        }
	    , function(xStart, yStart, context, color) {
	        // 5
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart+10, yStart+10, 20, 6);
	        context.fillRect(xStart, yStart+26, 20, 6);
	        }
	    , function(xStart, yStart, context, color) {
	        // 6
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart+10, yStart+10, 20, 6);
	        context.fillRect(xStart+10, yStart+26, 10, 6);
	        }
	    , function(xStart, yStart, context, color) {
	        // 7
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart, yStart+10, 20, 32);
	        }
	    , function(xStart, yStart, context, color) {
	        // 8
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart+10, yStart+10, 10, 6);
	        context.fillRect(xStart+10, yStart+26, 10, 6);
	        }
	    , function(xStart, yStart, context, color) {
	        // 9
	        context.fillStyle = color;
	        context.fillRect(xStart, yStart, 30, 42)
	        context.fillStyle = "white";
	        context.fillRect(xStart+10, yStart+10, 10, 6);
	        context.fillRect(xStart, yStart+26, 20, 6);
	        }
	    ]

	function printMinutes(m, color, context){
	    if(m === 0){
	        return ;
	    } 
	    else {
	        context.fillStyle = color;
	        for(var i = 0; i < m; i++) {
	            context.fillRect.apply(this, minutesFills[i]);
	        }
	    }
	}
	function printHours(h, m, color, context){
	    if(h === 0){
	        return ;
	    } 
	    else {
	        var twelveH = 0
	        if (h >= 12) {
	            twelveH = h - 12
	        }
	        else {
	            twelveH = h 
	        }
	        var index = twelveH*3 + Math.floor(m / 20)
	        context.fillStyle = color;
	        for(var i = 0; i < index; i++) {
	            context.fillRect.apply(this, hoursFills[i]);
	        }
	    }
	}
	rocky.on('draw', function(event) {
	  // Get the CanvasRenderingContext2D object
	  var ctx = event.context;

	  // Clear the screen
	  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

	  // Determine the width and height of the display
	  var w = ctx.canvas.unobstructedWidth;
	  var h = ctx.canvas.unobstructedHeight;

	  // Current date/time
	  var d = new Date();

	  // Set the text color
	  ctx.fillStyle = 'white';

	  // Center align the text
	  ctx.textAlign = 'center';

	  ctx.fillStyle = 'white';
	  ctx.fillRect(0,0,w,h);
	  
	  printMinutes(d.getMinutes(), "blue", ctx);

	  printHours(d.getHours(), d.getMinutes(), "red", ctx);

	  hoursDivTen = Math.floor(d.getHours() / 10);
	  hoursModTen = d.getHours() % 10;
	  minutesDivTen = Math.floor(d.getMinutes() / 10);
	  minutesModTen = d.getMinutes() % 10;

	  nums[hoursDivTen](41, 41, ctx, "black");
	  nums[hoursModTen](73, 41, ctx, "black");
	  nums[minutesDivTen](41, 85, ctx, "black");
	  nums[minutesModTen](73, 85, ctx, "black");

	});

	rocky.on('minutechange', function(event) {
	  // Display a message in the system logs
	  console.log("Another minute with your Pebble!");

	  // Request the screen to be redrawn on next pass
	  rocky.requestDraw();
	});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = _rocky;


/***/ })
/******/ ]);