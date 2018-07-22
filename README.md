## Second Milestone Project (still currently under Development)


**BRIEF OUTLINE OF THE PROJECT**

This is my second Milestone Project for Full-Stack Diploma in Software Development. The project is a data dashboard, which visualizes (of my choice).  The dataset is stored locally, as opposed to being stored in an API. The data is visualised using D3.js and dc.js. For this project, I decided to use real data from the death records of two Mother & Baby Homes in Ireland to give a data visualisation of IMR (Infant Mortality Rates) for the period 1950-55. 

Data sources I used for this project are detailed in document 'data-sources.md' (to be uploaded).

**WIREFRAMES/MOCK-UP**

Initial idea sprung from my interest in infant mortality rates in Mother & Baby Homes in Ireland, and I looked at two sources of death records from 1935 to 1971 across two homes. As the dataset was very large, I specifically selected the data from 1950-1955 for the two homes. 

I set out to ask the same questions that many 'users' looking at my data visualisation charts would ask, such as:-

(1)How many infants died in Home A and Home B?
(2)Which home had the highest infant mortality rates?
(3)Which gender had the highest mortality?
(4)Did the mortality rate decrease from 1950, or did it rise again?
(4)Number of female infant deaths per home?
(5)Number of male infant deaths per home?

I viewed online sources of data (death records) for this project, which were unformatted to do a project such as this, but I used json to format the data. All the data sources for this project can be viewed in "data-sources.md".

DESIGN:

I used bootstrap colum and row grids to create grids for the graphs and explanation of data results. 
The following is the basic layout/design I used to create the graphs:-




The following screenshot is full page and shows the column grid layout:-




UXE DESIGN:



- WHAT IS D3.JS? 

(below is extract from Code Institute lesson on using D3.js, SVG).
D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS.  SVG is Scalable Vector Graphics and is a standardised graphics rendering format based on XML. Creation of 2D graphics called Vector Graphics. Vector Graphics can be increased or decreased in size without loss of clarity. Use D3 to create anything from an HTML table to a Pie chart, from graphs and bar charts to geospatial maps.

D3 is a set of objects functions that comes in the form of a third-party JavaScript file written by Mike Bostock which you can use ( <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>), which is just like any external javascript file in the script tag and we've included here. D3 creates SVG's similar to what we created in earlier, plus a lot more but it does it programmatically rather than markup one of the things d3 relies on is attaching itself to some HTML element such as a div for example.
