# biggestPrimeFactor
 A function for finding the largest prime factor of an integer

1. Overview

This function will find the largest prime factor of a number, and display it for the user. 

2. Design Philosophies

I tried to uphold three principles in designing this function. First, user input is evil. Second, global variables are evil. Third, make code self-documenting when possible. 

* User Input

The input for this function must be a positive, whole integer greater than one. Validating input as a number can be challenging in JavaScript, so I came up with two solutions. First, I made a very simple input validation function, which will catch quite a few, but not all, harmful inputs. Second, input is done via an HTML number-type input element. This simple element can do the validation work for you. 

* Global Variables

Input is limited to typing in a number and hitting "enter". This allowed me to put all the code inside a single event listener. No global variables, and no global functions. 


