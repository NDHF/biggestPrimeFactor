# biggestPrimeFactor
 A function for finding the largest prime factor of an integer

1. Overview

This function will find the largest prime factor of an integer, and display it to the user. 

* The function only works for positive whole integers greater than one. 
* The coreLogic function first uses the modulo operator to find all the factors of the integer. Each factor is pushed to an array.
* If the array contains only two factors, one and itself, the integer is prime, and the function will end.
* If the integer is not prime, the function will begin looping through the factor array, using the modulo operator to determine if each factor is prime or composite.
* If a factor in the array is itself composite, it is spliced out of the array.
* After all composite factors are spliced out, only the prime factors remain. The last factor in the array is therefore the largest prime factor. 

2. Design Philosophies

I tried to uphold three principles in designing this function. First, user input is evil. Second, global variables are evil. Third, make code self-documenting when possible. 

* User Input

The input for this function must be a positive, whole integer greater than one. Validating input as a number can be challenging in JavaScript, so I came up with two solutions. First, I made a very simple input validation function, which will catch quite a few, but not all, harmful inputs. Second, input is done via an HTML number-type input element. This simple element can do the validation work for you. 

* A word on input validation, or, "NaN violence"

It is best to use these two methods together. Using an HTML number input helps restrict user input, but will not solve all problems. The value of the input will be a string, and must be parsed into an integer. An empty input will produce NaN. To address these matters, extra input validation is required. I have added in more validation, just to be safe.

* Global Variables

Input is limited to typing in a number and hitting "enter". This allowed me to put all the code inside a single event listener. No global variables, and no global functions. 


