# install global packages
npm install -g grunt-cli
npm install -g express
npm install -g express-generator
npm install -g nodemon

npm install

# Create the photos app
# Add the -e flag to use the EJS template engine
express -e photos

# Install local Node packages
cd photos
npm install mongoose --save
npm install mongodb --save
npm install colors --save
npm install ejs --save
npm install
