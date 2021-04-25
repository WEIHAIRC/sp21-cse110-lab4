CSE110 Lab 4 part 1 answers

Note: the line numbers in each answer refers to the line stated in question. The line number of my code might not be 100% same as shown in each question.

Part1a

Q1. "values added:  20"

Q2. "final result:  20"


Q3 "values added:  20"

Q4 There's an error :"ReferenceError: result is not defined".
    'let' keyword makes result only accessible inside for block.
    Then, line 13, outside for block, tries to access result and leads to an error.


Q5 There's a TypeError. The output is shown below Q6.
   'const' keyword declares result an constant variable, and we already initializes it as 0.
   Then, when "result = num1 + num2" reassigns value to result, there will be TypeError. 

Q6 There's a TypeError. The output is below. As explained before, there is TypeError happened in line 9. 
"
        result = num1 + num2;
               ^

TypeError: Assignment to constant variable.
    at sumValues (E:\UCSD_G3_FILES\UCSD_G3_SP21\CSE110\CSE110LAB4\sp21-cse110-lab4\part1\part1a-question1.js:7:16)
    at Object.<anonymous> (E:\UCSD_G3_FILES\UCSD_G3_SP21\CSE110\CSE110LAB4\sp21-cse110-lab4\part1\part1a-question1.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:988:32)
    at Function.Module._load (node:internal/modules/cjs/loader:828:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47 "
"



Part 1b

Q1. "3" will be printed on console. "console.log(i)" will print i's value to console.
    "var i = 0" inside the for loop header sets i as 0 and makes its scope global. It will finally increment to 3, which is prices.length. Then line 12 will print "3".

Q2. "150" will be printed on console. discount is 0.5, so every price will be halved. In the last iteration of for loop, "var discountedPrice" sets discountedd to 150 (half of 300) and makes it accessible globally. As a result, line 13 will print that value. Moreover, redeclaration of var is tolerable, so there will not be any error even if discountedPrice is redeclared.

Q3. "150" will be printed on console. finalPrice is delcared as var, so it is accessible globally. In each for loop iteration, finalPrice will be assigned with a new value. After the for loop, it will record the assgined value in last for loop iteration, which is 150. As a result, line 14 will print that value.


Q4. This function returns a length-3 array of discounted price: [50, 100, 150]. Each discounted price is half of corresponding price in array prices. I find out that answer by changing line 19 "discountPrices([100, 200, 300], 0.5);" into the code snippet below. Then, running the js file gives output "3, 50, 100, 150"(each value in a new line). 

// Question 4
var returned = discountPrices([100, 200, 300], 0.5);
console.log(returned.length);
console.log(returned[0]);
console.log(returned[1]);
console.log(returned[2])


Q5. There's a ReferenceError: "ReferenceError: i is not defined".
"let i" makes i only accessible inside for's block. Line 12, outside for's block, tries to access i and results an error.

Q6. There's a ReferenceError: "ReferenceError: discountedPrice is not defined".
"let discountedPrice" makes discountedPrice only accessible inside for's block. Line 13, outside for's block, tries to access discountedPrice and results an error.

Q7. "150" is printed on console. The declaration "let finalPrice" is inside function's block. Then, Line 13 can access finalPrice and print out its value, 150 (half of 300). Its value is 150 since every for loop iteration can access finalPrice and change its value, but the last iteration's value is kept.


Q8. This function returns a length-3 array of discounted price : [50, 100, 150]. Each discounted price is half of corresponding price in array prices. I find out that answer by changing line 19 "discountPrices([100, 200, 300], 0.5);" into the code snippet below. Then, running the js file gives output "3, 50, 100, 150"(each value in a new line).

// Question 8
var returned = discountPrices([100, 200, 300], 0.5);
console.log(returned.length);
console.log(returned[0]);
console.log(returned[1]);
console.log(returned[2])


Q9. There's a ReferenceError: "ReferenceError: i is not defined".
"let i" makes i only accessible inside for's block. Line 11, outside for's block, tries to access i and results an error.

Q10. "3" is printed on console. The declaration "const length" is inside function's block. Then, Line 12 can access length and print out its value. Its value is 3 since length is initialized as the length of array prices, which is 3.


Q11. This function returns a length-3 array of discounted price: [50, 100, 150]. Each discounted price is half of corresponding price in array prices. I find out that answer by changing line 19 "discountPrices([100, 200, 300], 0.5);" into the code snippet below. Then, running the js file gives output "3, 50, 100, 150"(each value in a new line).

// Question 11
var returned = discountPrices([100, 200, 300], 0.5);
console.log(returned.length);
console.log(returned[0]);
console.log(returned[1]);
console.log(returned[2]);


Q12. A. student.name
     B. student['Grad Year']
     C. student.greeting()
     D. student['Favorite Teacher'].name
     E. student.courseload[0]

Q13. A. '32'    = '3' + '2'  (integer 2 maps to string '2' and concatenate) 
     
     B. 1       = 3 - 2  (string '3' maps to integer 3)
     
     C. 3       = 3 + 0  (null maps to 0)
     
     D. '3null' = '3' + 'null'  (null maps to string 'null' and concatenate)
     
     E. 4       = 1 + 3  (true maps to 1 and addition)
     
     F. 0       = 0 + 0  (Both false and null maps to 0 and addition)
     
     G. '3undefined'    = '3' + 'undefined'  (undefined maps to 'undefined' and concatenate)
     
     H. NaN     = 3 - NaN  ('3' maps to 3, undefined maps to NaN; the addition results in NaN since every arithmetic operation with NaN is NaN)

Q14. A. true     
     
     B. false   Compare 2 strings letter by letter in the "dictionary" order. '2' > '1' of '12', so actually '2' > '12'
     
     C. true    2 and '2' have different types, so they are converted to numbers. '2' is converted to 1, so the comparison returns true

     D. false   2 and '2' have different types, so they are not strictly equal
     
     E. false   true and 2 have different types, so they are converted to numbers. true is converted to 1, so the comparison returns false
     
     F. true   Boolean(2) is true, following Boolean Conversion rules. Then true is strictly equal to Boolean(2)





