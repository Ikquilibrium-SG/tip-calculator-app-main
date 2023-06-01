# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person



### Links

- Solution URL: [GitHub](https://your-solution-url.com)
- Live Site URL: [Netlify](https://your-live-site-url.com)



## My process

### Built with

- Semantic HTML5 markup
- CSS properties
- Flexbox
- CSS Grid

### What I learned

I used the grid display property in this project. It was an amazing feeling to learn something and easily apply it even when you feel that you don't yet have a solid understanding about it. Used the grid property for the buttons for both web and mobile display.


```css
For web display
.buttons {
    text-align: center;
    display: grid;
    grid-template: repeat(3, 1fr)/ repeat(3, 1fr);
    gap: 10px;
}
For mobile display
.buttons {
        grid-template: repeat(2, 1fr)/ repeat(2, 1fr);
        margin-bottom: 25px; 
    }
```
```js
btns.forEach(btn => btn.addEventListener('click', function() {
    
    let buttons = btn.innerText
    let btnValue = parseFloat(parseInt(buttons) / 100)

}))
```


### Continued development

Learn more about grid display.
DOM manipulation in JavaScript 


### Useful resources

- [Complete Grid Tutorial with Cheat Sheet By Joy Shaheb](https://www.example.com) - This helped me to use the display grid property. I really loved and fairly understood(I will still go back to it later) but was able to use it very well in this project.
- [How to Center Anything with CSS - Align a Div, Text, and More](https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/amp/)- This amazing article helped me to center the div container using flex display. I learned how to center a div using different approach and it will be my go to article anytime I'm having issue centering a div.




## Author

- Frontend Mentor - [@Ikquilibrium-SG](https://www.frontendmentor.io/profile/Ikquilibrium-SG)


## Acknowledgments

I want to thank Joy Shaheb for his video and article on CSS Grid. You can check for the youtube video link in Useful resources above.

Stackoverflow was also very useful in the completion of this project

I also want to thank my friend Oyinloye Sola for guiding me through the JavaScript. I was stucked on the JavaScript part for a long time but with his guidance I was able to finish the code. I learned how to test the code using console.log(). It was fun and interesting.
