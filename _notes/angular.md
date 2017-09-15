- Upgrade npm 
  npm install -g npm 

- Angular Cli
  https://cli.angular.io/
  ```
  # if you have the wrong cli version only
  npm uninstall -g angular-cli
  npm uninstall -g @angular/cli
  npm cache clean

  # reinstall clean version
  npm install -g @angular/cli@latest

  ng --version
  ng new my-app  
  or ng new appName --directory ./
  cd my-app
  ng serve
  ```