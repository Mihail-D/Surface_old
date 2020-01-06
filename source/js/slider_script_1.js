/* eslint-disable no-unused-vars */
"use strict";

var athletesButtonOne = document.querySelector(".athletes-slider-button__1");
var athletesButtonTwo = document.querySelector(".athletes-slider-button__2");
var athletesButtonThree = document.querySelector(".athletes-slider-button__3");
var athletesButtons = document.querySelectorAll(".athletes-slider-button");

var athletesSlideOne = document.querySelector(".athletes-slide-1");
var athletesSlideTwo = document.querySelector(".athletes-slide-2");
var athletesSlideThree = document.querySelector(".athletes-slide-3");
var athletesSliders = document.querySelectorAll(".athletes-slide");

athletesButtonOne.addEventListener("change", function(evt) {
	for (var button = 0; button < athletesButtons.length; button++) {
		if (athletesButtons[button] === athletesButtonOne) {
			for (var i of athletesSliders) {
				if (i === athletesSlideOne) {
					i.classList.toggle("visually-hidden");
				} else if (i.classList.contains("visually-hidden") === false) {
					i.classList.toggle("visually-hidden");
				}
			}
		}
	}
});

athletesButtonTwo.addEventListener("change", function(evt) {
	for (var button = 0; button < athletesButtons.length; button++) {
		if (athletesButtons[button] === athletesButtonTwo) {
			for (var i of athletesSliders) {
				if (i === athletesSlideTwo) {
					i.classList.toggle("visually-hidden");
				} else if (i.classList.contains("visually-hidden") === false) {
					i.classList.toggle("visually-hidden");
				}
			}
		}
	}
});

athletesButtonThree.addEventListener("change", function(evt) {
	for (var button = 0; button < athletesButtons.length; button++) {
		if (athletesButtons[button] === athletesButtonThree) {
			for (var i of athletesSliders) {
				if (i === athletesSlideThree) {
					i.classList.toggle("visually-hidden");
				} else if (i.classList.contains("visually-hidden") === false) {
					i.classList.toggle("visually-hidden");
				}
			}
		}
	}
});
