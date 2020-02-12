# WebScrapingWithPhantomjs
**Introduction**
This JS script allows you to scrap *oudkniss.com* for jobs offer with the filter :

 - wilaya:Oran 
 - Diplome:Diplome 
 - Universitaire 
 - permis de conduire:Peu importe 
   Véhiculé:Peu impore

and logging them to "jobs.txt" text file
To run it :
change current directory to babelscripts
in the terminal type : npm run build
after the end of the execution you should see in the parent folder the "jobs.txt"

**definition**

 1. **What is phantomjs:** Phantomjs is headless browser (without UI) that allows you to scrap dynamically website and interacting with with them using javascript (ES5 precisly). For more Info https://phantomjs.org/
 2. **Babel.js**: In order you ES6 javascript , we need to transpile our ES6 js script to older version (ES5) since Phantomjs only support old version of js and here comes babel.js. Babel.js is node.js module that transpile js to older version 
 3. **npm**: npm is node package manager that gives ability to install libraries and run scripts.
