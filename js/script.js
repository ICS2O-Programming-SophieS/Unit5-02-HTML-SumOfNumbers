// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function calculateSum() {
  	// initialize the sum to 0
	let sum = 0
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)	

	// use a for loop to calculate the sum of numbers
	for (let counter = 0; counter <= userNum; counter++) {
		// extra: use an if statement to build a string of numbers added
		if (counter < userNum) {
			// build the string of numbers with a plus between each number
			numbers = numbers + counter + "+"
		}
		else {
			numbers = numbers + counter
		}
		// add the counter each time to the current sum
		sum = sum + counter
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers + " = " + sum
}
