# Nutritionist App



## how to run the project 
clone this link in your local machine (https://gitlab.com/raghad__ns/nutritionist-app.git)
to install needed libraries use the command (npm i --legacy-peer-deps)
then use the command (npm start to run the application in your local machine) 

## needed data for better experience 
 user info for login : you'll find them in users.js at data folder ( src/data/users.js)
 food : array of food is stored at the local storage with key value ('food') 
    you'll find template food array as json string in the following file (src/data/temp-data/food.json)
programsMap : object that stores the patients for each users (since each users is treated like a nutrition expert or doctor)
    its stored at the local storage with key velue ('programsMap')
    you'll find template data as json string in the following file (src/data/temp-data/programs-map.json)

## conventions 
files : kabab-case 
folders : kabab-case
components name : PascalCase
contexts names : PascalCase
const data names : UPPERCASE
internal variables : camelCase
local storage keys : camelCase

## to read more about project description & analysis 
read proj-analysis.txt file 