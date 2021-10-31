# Hepsiburada Case Work - React Application

[Live Demo](https://distracted-curran-cd9370.netlify.app/)
## Case Details

This case is about basic E-commerce site that contains some filters as brand, colors, price or created date of product.
User can select product brand or color in filter side of application, then selected group of products shown in page.
If user select brand or color, filter side updated with products counts that have these properties.
If user select two filter items as brand and color, the products that contains these properties shown in page.
If user search model of products, related items shown in page.
If user add same item in basket, this item add button shown as disable.


## Installation

First, clone this [repository](https://github.com/patika-hepsiburada-react-bootcamp/hepsiburada-case-mesutkoc.git).

`git clone https://github.com/patika-hepsiburada-react-bootcamp/hepsiburada-case-mesutkoc.git`

Install npm

`npm install`

To run project.

`npm run start`

To run tests.

`npm run test`
# Docker 

Project can build and running in Docker Container.
You can see dockerfile.

Build project with below.

`docker build -t hepsiburada-case-mesutkoc:latest .`

Then, type below code in terminal.

`docker run --name hapsiburadacase -d -p 3000:3000 hepsiburada-case-mesutkoc:latest`