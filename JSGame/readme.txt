When creating the game of Snake, we had trouble with a few aspects. The first part that proved 
difficult was interacting with the canvas; it took a lot of trial and error to figure out how to
correctly draw the snake and its food as the game progressed. For example, it was tricky to determine
how to randomize where the food was and how to increase the length of the snake's body and continue 
to draw these to the canvas without creating errors or delays. Another aspect that was slightly 
difficult was handling the edge cases. In our game, we made it so that the snake dies when it hits its
own body and when it hits the edge of the screen. Figuring out how to track its movement so we knew 
when it exactly it hit itself or when it hit the edge of the screen was difficult, but we were able to 
solve it through the use of Google and trial and error. The final piece that was hard to code was 
handling key inputs from the user. In order to make sure the snake moved the correct direction based
on whatever key they pressed, we had to make sure it traveled the coordinates it moved were correct.
While this was conceptually a little confusing at first, we were able to find a solution relatively 
quickly.

Because Snake is a relatively simple game, we did not have to download or use any outside, cool 
JavaScript libraries. While it would have been interesting to discover what more JavaScript has to 
offer, it was convenient and practical to use what we already knew to create a smoothly working game.

To make our game more visually appealing and user-friendly, we added a "Score History" section that 
showed the user their previous game scores. To accomplish this, we had to ensure that the html was 
organized with the correct asides to ensure the layout was aesthetically pleasing and easy to follow.
It was a little tricky to get this correct at first, but using help from previous labs, we were able
to finalize a correct layout. Furthermore, it was imperative to have a way to keep track of game scores,
which we figured out through the use of a sscore variable that kept track of the current game's score,
outputted it to the "Score History" section, and then resetted the value after each game. Furthermore, 
as I discussed earlier, we had to create certain edge cases to handle different ways to end the game, 
such as when the snake hit itself and when it hit the edge of the board. This was quite tricky to figure
out at first, but through research and trial and error, we were able to successfully implement both of
these cases.

Overall, we learned a lot of both technical and non-technical skills throughout the process of making 
Snake. On the non-technical side, we learned the importance of organizing time and communicating as well
as the importance of research. Working with a group can always be slightly tricky, especially when we 
are all students with busy schedules, so it was important for all of us to be honest about a realistic
work schedule and division. Based on what we had going on in the week, we were able to determine times
when we all could meet and if no one was available, we were each still able to work on different aspects
of the project. As a result, the group stayed on top of the workload and created a fun, playable game 
in a short amount of time. Furthermore, because Snake is a popular game, there is a lot of useful 
documentation that helped us work around our bugs faster. Without proper research, it would have been
much more of a struggle to complete the game, so although we had already understood the importance of 
Google as a CS student, this project simply reinforced that. On the technical side, we all picked up new
skills in creating a game that incorporates constant movement while drawing to a canvas at the same time.
It was an great experience to create a game that uses both gaming code and html/drawing code; it was 
definitely a learning curve to figure out how to cohesively program the two, but we were able to complete
it successfully. 

In conclusion, our project is worth 100 points due to the overall aesthetic and user-friendly aspects of 
the game. The game of Snake is a fun and simple game and our implemenation of it accomplished all the
classical aspects of it while making it visually appealing and a fun experience for the user. Because we
added the "Score History" section, the users can easily keep track of their play history which is very 
convenient. Also, because the users can see their scores, it influences them to keep playing so they can
continue to improve their scores. Therefore, because our game is aesthetically pleasing, fun and addicting
to play, and user-friendly, it is worth 100 points.
