## Steps

**Download or Pull This Repo**
	Top of this page you can see where it says clone or download

 **Install all the node packages** 
In the root of this project run on your terminal 

    yarn add gulp-cli -g
    yarn add gulp 
    yarn add webpack@4.25.1 -g
    yarn add webpack-cli@3.1.2 -g
    yarn


**Make sure your version of gulp is 4.0**

    gulp -v    


**Make sure webpack is installed**

  webpack -v


**Start the dev server**

  yarn run watch


**Start the dev server with proxy**

  yarn run proxy


**Build files for production**

  npm run build


**Optimize Your Images**

  yarn run imgs


**Static Site Generator Development**

  yarn run static:dev


**Static Site Generator Production**
 yarn run static:build

# EACCESS ERROR FIX
```diff
- how to fix the EACCESS ERROR
- lets say for example you trying to install webpack
- sudo npm install webpack@4.25.1 -g
- and get an error
- Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/webpack/node_modules/fsevents/build'
- then try again to install it but with this at the end "--unsafe-perm=true --allow-root"
- for example
- sudo npm install webpack@4.25.1 -g --unsafe-perm=true --allow-root
```
or 

yarn add har-validator@latest --save-dev

