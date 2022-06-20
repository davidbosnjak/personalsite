import engine from './assets/enginepicture.png';
import csv from './assets/csvpicture.png';
import thissite from './assets/thiswebsite.png';
import battleship from './assets/battleship.png';
import covid from './assets/covidsite.png';
export const fullPortfolio =
[

    {
        id: 1,
        title: "Ascii motion simulation",
        img: engine,

    },
    {
        id: 2, 
        title: "Comma Seperated values regular expression parsing",
        img: csv,
    },
    {
        id: 3, 
        title: "This website",
        img: thissite,
    },
    {
        id: 4,
        title: "Ascii battleship program",
        img: battleship,
    },
    {
        id: 5,
        title: "Basic Worldwide Covid Tracker",
        img: covid,
    },



]
export const enginePortfolio = [
    {
        id: 1,
        title: "Ascii motion simulation",
        img: engine,
        basicInfo: "A C++ Ascii motion simulator/ engine which includes collisions, friction, gravity, and multiple objects",
        addInfo: "I made this project in Fall of 2021. I had no work left in computer science class so I decided to make a project on my own. I originally wanted to make a full motion simulation with real graphics but realized I didn't have the required libraries to do that at school. I decided to make it in regular console ascii graphics to keep it simple. This project simulates motion of one or multiple objects. My favourite part of this project is the collision detection feature. It can also include gravity, friction, and variable speed and size on the objects.",
        tryOne: "Source code",
        tryTwo: "Try it out!",
        oneLink: "https://github.com/davidbosnjak/AsciiGameEngine",
        twoLink: "https://replit.com/@david_is_epic/AsciiGameEngine#Renderer.cpp",
    },
]
export const csvPortfolio = [
    {
        id: 1, 
        title: "Comma Seperated values regular expression parsing",
        img: csv,
        basicInfo: "A portion of a larger project I helped my University student brother with. Sorting through a csv file and looking for certain information",
        addInfo: "I made this portion of the project in Fall of 2021. My brother was working on a bigger project for a university machine learning project and wanted me to help with a portion of it. I needed to create a program that would look through a very large csv file and download images from them and save them by the name of the image id (also provided in the csv file) and save them in a folder titled by the user id who had sent the image. I used python and regular expressions to parse through the data",
        tryOne: "Source code",
        oneLink: "https://github.com/davidbosnjak/csvparsing",
        
    },
]
export const webPortfolio = [
    {
        id: 1, 
        title: "This website",
        img: thissite,
        basicInfo: "An interactive personal website showcasing my projects, skills, and information made in React",
        addInfo: "I made this website in Spring of 2022 with the intention of turning my resume into a nicely designed website and also gaining more web development experience. I intent to keep this website and build on it in the future keeping it regularly updated with my projects and experience",
        tryOne: "Source code",
        tryTwo: "Try it out!",
        oneLink: "https://github.com/davidbosnjak/PersonalWebsite",
        twoLink: "",

    },
]
export const battlePortfolio = [
    {
        id: 1,
        title: "Ascii battleship program",
        img: battleship,
        basicInfo: "A C++ ascii simple battleship game",
        addInfo: "I made this project in the Fall of 2021 when I was doing C++ in school and it quickly became my favourite language. My teacher gave me the challenge of making this project after I had quickly finished the assigned classwork",
        tryOne: "Source code",
        tryTwo: "Try it out!",
        oneLink: "https://github.com/davidbosnjak/battleship",
        twoLink: "https://replit.com/@david_is_epic/battleshipProject",

    },
]
export const covidPortfolio = [
    {
        id: 1,
        title: "Basic Worldwide Covid Tracker",
        img: covid,
        basicInfo: "A simple Covid-19 worldwide case tracker website",
        addInfo: "I made this project in the Fall of 2020. I wanted to make something that would teach me how to use the React framework for web development and something that would teach me how to use API's to retrieve information. This was my first time making a website which is why it only includes basic Covid-19 numbers.",
        tryOne: "Source code",
        oneLink: "https://github.com/davidbosnjak/covidtracker",

    },
]