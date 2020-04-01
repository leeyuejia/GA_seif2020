[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Grids and Pyramids

#### Learning Objectives

- Generating HTML elements with jQuery
- JavaScript control flor

#### Prerequisites

- JavaScript
- jQuery

---

## Getting Started

1. In today's `student_labs`, create a directory called `grids` and another directory called `pyramids` and create the following files in both directories: 

	- `index.html`
	- `app.js`
	- `style.css`
	
1. Complete the following problems using jQuery
	
	- Do the grids problem in your `grids` directory 
	- Do the pyramids problem in your `pyramids` directory 
	
---

## Grids

1. Create and run a function that generates 64 squares that alternate colors like so: 

![](https://i.imgur.com/y2p7C6N.png)

1. Hint: Try performing these steps in order...

- Generate 64 divs
- Give each div a class that will provide size and color
- Give each alternating div a different class somehow
- Constrain the number of squares on each row by putting them all in a container of fixed width.

1. Challenge: Make your grid a perfect checkerboard, like so:

![](https://i.imgur.com/7UfIlHR.png)

- The checkerboard alternates colors on each row and each column.
- Remove the whitespace between rows (if it exists).

## Pyramids 

1. Create and run a function that makes a six-tiered pyramid made out of triangles like so:

![](https://i.imgur.com/S0zDk0h.png)

1. After you have made the pyramid, make it so you can run a function and input the number of 'tiers' or 'rows' of the pyramid to be displayed.
1. Row one will have one triangle, row two will have two triangles ... row twenty will have twenty pyramids, etc.
1. For example, you should be able to run `generatePyramid(16)` and have the result be: 

![](https://i.imgur.com/O2IeAu6.png)

### Triangle CSS

1. Here's the code to create CSS triangles so you don't have to figure that out, just use the `.triangle` class!

```css
.triangle {
	display: inline-block;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid red;
}
```

1. You can use `text-align: center` on each row to center the triangles, for example:

```css
.row {
  text-align: center;
}
```

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
