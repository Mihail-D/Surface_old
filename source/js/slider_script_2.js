/* eslint-disable no-unused-vars */
"use strict";

var playersButtonOne = document.querySelector(".players-slider-button__1");
var playersButtonTwo = document.querySelector(".players-slider-button__2");
var playersButtonThree = document.querySelector(".players-slider-button__3");
var playersButtons = document.querySelectorAll(".players-slider-button");

var playersSlideOne = document.querySelector(".players-slide-1");
var playersSlideTwo = document.querySelector(".players-slide-2");
var playersSlideThree = document.querySelector(".players-slide-3");
var playersSliders = document.querySelectorAll(".players-slide");

playersButtonOne.addEventListener("change", function(evt) {
	for (var button = 0; button < playersButtons.length; button++) {
		if (playersButtons[button] === playersButtonOne) {
			for (let i of playersSliders) {
				if (i === playersSlideOne) {
					i.classList.toggle("visually-hidden");
				} else if (i.classList.contains("visually-hidden") === false) {
					i.classList.toggle("visually-hidden");
				}
			}
		}
	}
});

playersButtonTwo.addEventListener("change", function(evt) {
	for (var button = 0; button < playersButtons.length; button++) {
		if (playersButtons[button] === playersButtonTwo) {
			for (var i of playersSliders) {
				if (i === playersSlideTwo) {
					i.classList.toggle("visually-hidden");
				} else if (i.classList.contains("visually-hidden") === false) {
					i.classList.toggle("visually-hidden");
				}
			}
		}
	}
});

playersButtonThree.addEventListener("change", function(evt) {
	for (var button = 0; button < playersButtons.length; button++) {
		if (playersButtons[button] === playersButtonThree) {
			for (var i of playersSliders) {
				if (i === playersSlideThree) {
					i.classList.toggle("visually-hidden");
				} else if (i.classList.contains("visually-hidden") === false) {
					i.classList.toggle("visually-hidden");
				}
			}
		}
	}
});
