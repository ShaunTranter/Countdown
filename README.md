# Countdown
A countdown made using HTML, CSS, Vanilla JavaScript originally counting down for Christmas. Future years can be selected for other uses 

#Background
The background is created by using multiple spans that are generated by a Javscript Loop.
Colours of these spans can easily be changed by changing the colours in the array and setting the random divide to the length of the array.

Due to there being many spans with changing class tags, The browser may crash depending on your computer specifications. To reduce this problem, 
change the amount of spans that cover the page within the loop, and change their size so the amount you specifcy cover the page.

#Timer
You have the choice to chance the year of the targetted date so you can use this for other countdown targets. To change the day you want to target, there is a varible-
which defined called christmas; just change the string part of the varible in the "FindDate" function and main countdown function to the day and month desired.

#Dates
The date is created based on the current date and the select options are created 10 years ahead of the current year. This should update based on the current year you are in.