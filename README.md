# Infant Deaths in Mother and Baby Homes
 
This project is the second Milestone Project for Full-Stack Diploma in Software Development. It is a User Centric Frontend Development Project, using HTML5, CSS3, Bootstrap 4.1.1, D3.js, DC.js, Crossfilter.  I got the data unformatted from media sources (newspaper reports) and converted it in JSON data. 
 
## UX Design

Initial idea sprung from my interest in infant mortality rates in Mother & Baby Homes in Ireland, due to the large amount of media attention and discontent amongst the survivers of the Magdalene Laundries, who operated a number of Maternity Homes (Mother & Baby) between 1935-1971. 
I looked at two sources of death records from 1935 to 1971 across two homes. As the dataset was very large, I specifically selected the data from 1950-1955 for the two homes to do a data comparison student and selection according to Home, Gender, Years.

I tried to visualise and understand the User Experience, (UXE) and what a typical user looking at a data visualisation dashboard would want to find. I used the 5 Planes of UX design to help with analysing this. In addition, I set out to ask the same questions that many 'users' looking at my data visualisation charts would ask, such as:-

(1)How many infants died in Home A and Home B?
(2)Which home had the highest infant mortality rates?
(3)Which gender had the highest mortality?
(4)Did the mortality rate decrease from 1950, or did it rise again?
(4)Number of female infant deaths per home?
(5)Number of male infant deaths per home?

For direction in UX design, I revised the Code Institute tutorials, and also referred to this website about user experience, [Red Rocket Web Specialist](https://www.redrocketmg.com/5-planes-ux-design-great-website/), who consider that the two most important aspects of designing a good website are (1) the Abstract aspect (idea, goal, etc) and (2) the Concrete aspect (how to get a user to click on a link, etc). The transition from Abstract to Concrete should remain linear to ensure a smooth transition, with each phase being fluid and overlapping. 

**Garret's 5 Planes of UX design are as follows:-**

###Strategy (The goal)

The goal of the Dashboard Project is to portray the level of infant mortality in a comparison study across two Mother and Baby Homes between 1950-1955. It is to inform users of the dashboard of the occurrences of deaths using Interactive DC charts, which interact with each other. 

### Scope (What tasks can be done)

The tasks that can be accomplished on the Dashboard involve seeing how the charts interact. For example clicking on the composite or Pie chart in a specific range will result in similar range of data in all the other charts. 

### Structure (Plan or Flow of Interactions)

This is the plan or flow of interactions users will take to navigate and understand a website. A structure typically contains both a site map and a flow chart. To this end I tried to visualise the website, firstly in my mind and then on paper, by doing some mock-up sketches. 

[Initial dashboard layout](https://github.com/Deirdre18/2nd-Milestone-Project---Dashboard-Data-Visualisation/blob/master/images/dashboard.png)

[Sketch for Dashboard](https://github.com/Deirdre18/2nd-Milestone-Project---Dashboard-Data-Visualisation/blob/master/Mock-up%20Sketches/20180914_100039.jpg)


### Skeleton 

In this section, I tried to place the elements in appropriate places, and in a logical order – such as navbar, then heading, then brief explanation of the project using unordered listing.  I used MockFlow tool to detail page by page the type of layout I wanted to have across all pages in the website. 

[Wireframe for Dashboard](https://github.com/Deirdre18/2nd-Milestone-Project---Dashboard-Data-Visualisation/blob/master/Wireframes/Dashboard%20Project.pdf)


### Surface

The surface, or the skin – is the interface for which visitors will engage with the dashboard.
All typography was in English but as Google has a translater, can be easily translated. I particularly choose a congruent colour scheme (purple for navbar and footer and lighter shades for body and drop down menus in the dashboard), which I felt gave an appropriate overall appearance.

## What does it do?
 
The dashboard is a data visualisation project, which allows users to view charts that are interactive (composite, line, pie, row-selector and stack bar chart).

## How does it work
 
The dashboard data visualisation project uses **HTML5**, **CSS3**, **D3.js**, **DC.js**, **Crossfilter**. On viewing the dashboard, it can be seen how the charts interact. DC charting is not responsive on mobile phones, however, I've done a lot of research and looked at various fixes and resizing and came to the conclusion that bootstrap indeed has it's own fix for the charts and re-sizes them appropriately. For this project, it is **not** a requirement to have the charts mobile responsive. However, on testing the responsiveness of the charts, they appear responsive across mobile devices. 

## Features
 
### Existing Features
- Congruent Color Scheme (Purple and compatible shades) with white highlighting drop down menu choices for the various charts.
- Good explanation of the project and what it tried to portray.
- Interactive DC charts (Composite, Line, Pie, Row Selection, Stack Bar Chart).
- Analysis and comparison of infant deaths in each and both homes A & B across dimensions, such as Gender.

### Features Left to Implement
- None

## Tech Used

### Technologies used includes:
- **HTML5**, **CSS3**, **Javascript**, **HTML5**, **D3.js**, **DC.js**, **Crossfilter**

Base languages used to create website.
[HTML5](https://www.html5rocks.com/en/)
 - Used **HTML5** to handle page routing and to build custom directives.
[Bootstrap 4.1.1](http://getbootstrap.com/)
 - Used **Bootstrap** to give our project a simple, responsive layout.
[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
 - Used **CSS3** for styling and enhancing the look of the website.
[Font-Awesome](https://fontawesome.com/v4.7.0/)
 - Used **Font-Awesome** for adding to style to icons.
[JSON](https://www.json.org/)
 - Used **JSON** for converting data from newspapers in JSON data for project.
[Javascript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
 - Used **Javascript** for boostrap.min.js, d3.min.js, dc.min.js, queue.min.js, graph.js).
[D3.js](https://d3js.org/)
 - Used **D3** for manipulating documents based on data and bringing data to life.
[DC.js](https://dc-js.github.io/dc.js/)
 - Used **CSS3** for dimensional charting.
[Crossfilter](http://square.github.io/crossfilter/)
 - Used **Crossfilter** for fast multi-dimensional filtering for co-ordinated views.

## Testing
From a testing view-point, I've tested responsiveness on both mobile and desktop, in a variety of screen sizes. The DC charts are not natively mobile responsive, however they are responsive in mobile views. 
- Google Chrome (version 68)
- Opera (version 55)
- Mozilla Firefox Developer (version 63)
- Internet Explorer (version 11)

**Testing across desktop (using developer tools) and mobile browsers**
I have tested the Dashboard Data Visualisation Project on the above desktop browsers, and it works fine. I also tested on mobile browsers, however on mobile Firefox, although the DC charts rendered as responsive, on mobile Firefox the x-axis appeared distorted, however on mobile Chrome did not appear and the charts rendered perfectly. I used both Firefox and Chrome Developer tools to test the website in responsive mode - Apple iPad Air2, Apple iPad Mini2, Apple iPad iPhone 6s, Google nexus 4,5,6,7, Laptop (1280 x 720 and 1366 x 768), Nokia Lumia 520, Samsung Galaxy Note 3, Samsung Galaxy S5 and S7 and overall the Dashboard renders well in responsive mode. 

**Interactiveness of Charts**
I tested across all browsers (on both mobile and desktop) that the charts interacted, and they do. Crossfiltering also is applied to all charts and renders well across all browsers. I tested on mobile in both portrait and landscape mode.

**Jasmine testing**
[to be done and added to README]

## Version Control (GitHub)

I used version control on an ongoing basis to back-up my code to a remote repository and used version control at regular intervals throughout development of the dashboard data visualisation project.

## Deployment

This project was developed in Cloud9 IDE.
I used Gh-pages to deploy the website - [Link to Data Visualisation Project](https://deirdre18.github.io/2nd-Milestone-Project---Dashboard-Data-Visualisation/)

##Information

I viewed online sources of data (death records) for this project, which were unformatted to do a project such as this, but I used json to format the data. All the data sources for this project can be viewed in "data-sources.md" – [Data Sources](https://github.com/Deirdre18/2nd-Milestone-Project---Dashboard-Data-Visualisation/blob/master/data-sources.md)

## Credits

### Content
The content contained in the project is mainly my own and anywhere I've used any outside references, I've made reference to them (as in this README document).

### Code
- I based the project on code I learned throughout the course from the tutorials of [Code Institute](https://www.codeinstitute.net/) and by referring to the lessons. For the Login and Sign-up Modals and anything else I needed to get guidance on, I used [W3Schools](https://www.w3schools.com/) and also on occasion I referred to [Stack Overflow](https://stackoverflow.com/) 

### Acknowledgements

I received inspiration for this project for personal reasons, as I am very interested in the plight of suffering and infant deaths in the Magdalene Laundries and specifically choose this area to research the data. I enjoyed analysing and doing this project, and being able to 'visualise' graphically the raw data.  I got the data unformatted from media sources (newspaper reports) and converted it in JSON data. 