# 4.-Calculator

Here is my completed Calculator!

Click [here](https://brainka.github.io/4.-Calculator/) to try it out

![image](https://user-images.githubusercontent.com/79426056/170849680-4c15789d-5920-4f15-a8cc-560d2fbd61cf.png)

The aim of the project was not to use the eval() function!

The current state of the calculator performs the following basic functions: 
- Adding, Subtracting, Multiplying and Dividing two or more numbers together
- Pressing clear to reset the total back to 0

**Features**

Please note some of the features I have made to the calculator:
- The operator (+, -, x, %) buttons will be be highlighted in green once selected. This makes it easier to know which button was selected last as I am not displaying the operator on the screen.
- Pressing the equals '=' button continuously will calculate the last operator selected along with the last digit. 
For example:
Entering in 8 + 3
Then clicking =
Evaluates to 11
Then clicking on = continuously will increase the displayed total by 3

The same logic applies to -, x and %.

- Clicking continuously on +, -, x or % after an evaluation has been completed, will not alter the total value.
- I have also added a single media query so that the calculator can be used and displayed on an iphone.

**Summary**

This project (while on the surface) seems 'simple-ish', was actually a lot more complicated than initially anticipated. 
My first iteration of the project looks nothing like my final one.
I enjoyed reflecting on all the stages of how this project went for me...and it went something like this...

It began with:
- Trying to capture the input from the screen
- Saving the input 'somewhere'
- Trying to recall the input to add it to an operation
- Ensuring clicking on the operators does not continously evaluate the figure
- Fixing the '=' button so that it correctly performs the last operation as well as the last digit selected
- Commenting out code late at night, only to find in the morning this should not have been done and spend the next 2 hours debugging the issue I was trying to solve the night prior 
- Applying clean coding principles (to the best of my ability to this point) and reducing the lines of code from 484 to 297!!


