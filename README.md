# John Conway's Game of Life in React mini-project


## Latest version:

See the latest version [on my GitHub Pages site](https://kwarchalowski.github.io/conways-gol-react/)! :sweat_smile:


## :bulb: Idea and purpose for this project :bulb:

![picture alt](img/220px-React-icon.png "React.js logo")

I wanted to learn a bit of [React](https://en.wikipedia.org/wiki/React_(JavaScript_library)) technology so I started thinking about some kind of mini-project where I'm able to get into basic principles of React.js.

I remember that during my studies I was really into *cellura automata* and I was really impressed with so simple but yet so complex idea of zero-player *game*.

I already knew I wanted to create simple implementation of the basic Conway's Game of Life's rules into working project. I had a little help from React's documentation, youtube tutorials and other projects similar to this one.

In the end I've also used some Sass (SCSS) to beautify entire project. As you can see it covers some of the pure JavaScript aspects as well as React.js library.

*This React project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).* :sweat_smile:

I've also tried to make clean code using JSDoc comments.

## :godmode: John H. Conway - author of the Game of Life's idea :godmode:

![picture alt](img/John_H_Conway_2005.jpg "John H. Conway in 2005")

**[John Horton Conway]((https://en.wikipedia.org/wiki/John_Horton_Conway))** FRS (26 December 1937 – 11 April 2020) was an English mathematician active in the theory of finite groups, knot theory, number theory, combinatorial game theory and coding theory. He also made contributions to many branches of recreational mathematics, most notably the invention of the cellular automaton called the Game of Life. (via [Wikipedia](https://en.wikipedia.org/wiki/John_Horton_Conway))

## :game_die: "The Game of Life" :game_die:

![picture alt](img/Animated_Hwss.gif "Heavy-weight spaceship (HWSS)")
*- Heavy-weight spaceship (HWSS)*

"[The Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), also known simply as *Life*, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine."

### :memo: Rules (basic) of the Game of Life :memo:

1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

## :rocket: Basic concept of my work :rocket:

I wanted to get a little more knowledge of JavaScript itself, React.js library and merge it all into something nice. Not so far ago I've learned to use [Sass](https://sass-lang.com/) (SCSS) preprocessor scripting language to compile *.scss into nice and clean *.css files readable by all browsers.

With all this knowledge I've started my work in Visual Studio Code using some useful extensions to make my code nice and clean. I've used [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) to compile Sass into CSS files on fly. With help of [Create React App](https://github.com/facebook/create-react-app) I was able to run local React environment to see all the changes I made in code. I've also divided my tasks to be able to complete them one by one without any bigger problems and going back. I've been using [Git](https://git-scm.com/) version control system to commit and push changes on my [GitHub](https://github.com/) account. It all led to nice flow and good consistency of work. :thumbsup:

For deploy of my app I used [GitHub Pages](https://pages.github.com/) which is superb tool for such small programmers as me. All I needed to do was make some small changes in the *package.json* config files, make another GitHub branch for the safety etc. and rebuild entire project with some specific parameters in the end. That's all, after few clicks, the page was up and working like a charm. Thanks, GitHub :)

### :anger: Problems and issues :anger:

To be honest there were none big issues or problems during entire process of creating and deploying this app. I've used some help of another GoL's projects and my knowledge from IT studies so it was rather easy task. It all \**clicked*\*, VSCode is really easy to customize and there's no problem with linking it with Git version control systems, deploying apps like *Create React App* etc.

The biggest issue I had was connected with resolution and mouse click events. When the site was one-paged it all worked like a charm but when you've shrinked the browser's window or used another resolution where scrollbar was active - you could see that there's something wrong with calculating mouse on-screen position.

- [ ]  ~~I'm aware about this issue and it's undergoing 'maintenance' right now (as for 12.07.2021)~~ :stuck_out_tongue:

- [x] all issues I was aware of are fixed as for 13.07.2021 ^_^ project is finally 'finished' and I can call it version 1.0 :stuck_out_tongue:


-------------------------------------------------------------------------------------------------