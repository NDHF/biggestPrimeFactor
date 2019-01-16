document.addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    if (key === 13) {

        let inputValue = parseInt(document.getElementById("integerInput").value);
        document.getElementById("answerGoesHere").innerHTML = "";

        function biggestPrimeFactor(integer) {
            function integerValidator(integer) {
                let arrayOfImproperValues = [{
                        condition: (typeof integer !== "number"),
                        message: integer + " is not a number."
                    },
                    {
                        condition: ((integer === Infinity) || ((integer === NaN))),
                        message: "Infinity and NaN are not permitted"
                    },
                    {
                        condition: (integer === 1),
                        message: "The number " + 1 + " is neither composite nor prime."
                    },
                    {
                        condition: (integer === 0),
                        message: "Do not use zero with this function."
                    },
                    {
                        condition: (integer < 0),
                        message: "The integer must be positive"
                    },
                    {
                        condition: (integer % 1 !== 0),
                        message: "Floating point numbers ( e.g. 1.2, 3.14159) are not permitted."
                    }
                ];
                for (let i = 0; i < arrayOfImproperValues.length; i++) {
                    if (arrayOfImproperValues[i].condition === true) {
                        console.error(arrayOfImproperValues[i].message);
                        return;
                    }
                }
                coreLogic(integer);
            };
            integerValidator(integer);
            function coreLogic(integer) {
                let factorArray = [];
                for (let i = 1; i <= integer; i++) {
                    if (integer % i === 0) {
                        factorArray.push(i);
                    }
                }
                if (factorArray.length === 2) {
                    let primeNumberMessage = (integer + " is a prime integer. Its only factors are 1 and itself");
                    document.getElementById("answerGoesHere").innerHTML = primeNumberMessage;
                    // console.log(primeNumberMessage);
                    return;
                } else if (factorArray.length > 2) {
                    factorArray.pop();
                    factorArray.shift();
                    for (let i = 0; i < factorArray.length; i++) {
                        for (let j = 2; j < factorArray[i]; j++) {
                            if (factorArray[i] % j === 0) {
                                factorArray.splice(i, 1);
                                j = 2;
                            }
                        }
                    }
                    let largestPrimeFactor = factorArray[factorArray.length - 1];
                    let answer = "The largest prime factor of " + integer + " is " + largestPrimeFactor + "."
                    document.getElementById("answerGoesHere").innerHTML = answer;
                    // console.log(answer);
                    return;
                }
            }
        }
        biggestPrimeFactor(inputValue);
        document.getElementById("integerInput").value = "";
    }
});