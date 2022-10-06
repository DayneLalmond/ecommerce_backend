## Store Inventory ![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)
    
## Description
The application allows you to view the store's inventory on an organized database.
    
## Table of Contents
[About](##Description)
[Install](##Installation)
[Use](##Usage)
[Contribution](##Contributors)
[Contact](##Questions)

## Installation
Firstly, install node js, and run the command "npm run seed" to seed the database. Then navigate the server.js file and in the integrated terminal, type "node server.js" to double check the application installed correctly. 
    
## Usage
To view the stored data, make sure the server is online. Turn on the server by typing "node server.js" and then navigate to Insomnia. Use the "GET" method and the url of your localhost including the port number.  Changing the values of the additional parameters will allow you to view different tables. For example, if my localhost url contains 'http://localhost:3001/api/categories' and I change '/categories' to '/products', it specifies the "GET" to view by products.

Video [Example](Store%20Inventory.mp4)
    
## Features
I may not have the 'belongsTo' functions correct in the 'models/index.js' file. Currently, the only working methods are the "GET" methods. I am stuck on the "POST" / "PUT" methods.
    
## Contributors
Myles Horton
https://github.com/DomoMyles
    
## Questions
Dayne Lalmond
https://github.com/DayneLalmond

