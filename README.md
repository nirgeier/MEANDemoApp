Express Photo Application
=========================

----------------------------------------------------------------------------
##Step 01 - Create application skelton
----------------------------------------------------------------------------

##### Pre requirements
* [NodeJS](https://nodejs.org/)
* [Git](https://git-scm.com/downloads)
* [MongoDB](https://www.mongodb.org/downloads)

###Preparation

##### Install global Node packages

    // install global packages
    npm install -g grunt-cli
    npm install -g express
    npm install -g express-generator
    npm install -g nodemon
    
#####Create the project skeleton
 
    // Add the -e flag to use the EJS template engine
    express -e photos
    cd photos

##### Install local Node packages

	npm install mongoose --save
	npm install mongodb --save
	npm install colors --save
    npm install ejs --save
    npm install

##### Adding git support

 1. Init the local repository `git init`
 2. Create new git repository on github
 2. Follow the instructions and add the git remote to this local repository
 3. Create the .gitignore file to ignore all the ___node_modules___

#####Installing MongoDB
 Download mongoDB and copy the files in the bin folder within
 to wherever you want Mongo to live, and you're done. You've installed Mongo

----------------------------------------------------------------------------

* Test the application

    DEBUG=photos:* npm start

Open Browser in http://127.0.0.1:3000
You should now see the Welcome page
