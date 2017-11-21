const args = ["run build"];
const opts = { stdio: "inherit", cwd: "client", shell: true };
require("child_process").spawn("npm", args, opts);

// Put these in package.json
 // "scripts": {
 //    "server": "node server.js",
 //    "client": "node scripts/start-client.js",
 //    "start": "concurrently \"nodemon server.js\" \"npm run client\"",
 //    "deploy": "npm run build && git add . && git commit -m \"Building for production\" && git push heroku master",
 //    "build": "node scripts/build.js",
 //    "test": "echo \"Error: no test specified\" && exit 1"
 //  },