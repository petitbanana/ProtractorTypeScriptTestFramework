Learning Typescript and Protractor

Setup Project from scretch:
1. Prerequsite: download and install newest Nodejs from https://nodejs.org/en/download/
                download and install Visiual Studio Code from https://code.visualstudio.com/download
2. Create a project directory (i.e. LearnProtractor) and open CMD window then navigate to the project directory.
3. Run "code ." in the cmd window, VS code window should open and work directory is pointed to project directory.
4. Run "npm init" in the cmd window to start a new project. package.json file should be created.
5. Edit package.json file, add "Dependencies" and DevDependencies" like below:
    "devDependencies": {
        "@types/jasmine": "^3.5.0"              // Typescript enable hint for jasmine
    },
    "dependencies": {
        "@types/node": "^12.12.14",             // Typescript enable hint for node
        "jasmine": "^3.5.0",                    // Jasime test framework default used by Protractor
        "protractor": "^5.4.2",                 // Key lib
        "typescript": "^3.6.4"                  // Key lib
    }
6. run "npm install" in the cmd window, it should start download dependencies to node_modules directory.  
7. run "node_modules/.bin/webdriver-manager update" to update webdriver-manager to the newest version.
8. run "node_modules/typescript/bin/tsc --init" to create tsconfig.json file which used to config Typescript compiler.

