console.error("SyntaxError: {\n  \"name\": \"gimme-keycodes\",\n  \"private\": true,\n  \"version\": \"0.8.0\",\n  \"description\": \"get javascript keycodes for every key on your keyboard!\",\n  \"main\": \"/assets/index.js\",\n  \"scripts\": {\n    \"test\": \"standard\",\n    \"watch\": \"watchify assets/main.js -o js/bundle.js -v\",\n    \"build\": \"browserify assets/main.js  | uglifyjs -mc warnings=false > js/bundle.js\n  },\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"git+https://github.com/elementh/gimme-keycodes.git\"\n  },\n  \"author\": \"Lucas Maximiliano Marino\",\n  \"license\": \"MIT\",\n  \"bugs\": {\n    \"url\": \"https://github.com/elementh/gimme-keycodes/issues\"\n  },\n  \"homepage\": \"https://github.com/elementh/gimme-keycodes#readme\",\n  \"devDependencies\": {\n    \"browserify\": \"^13.0.1\",\n    \"standard\": \"^8.6.0\",\n    \"uglify-js\": \"^2.7.0\",\n    \"watchify\": \"^3.7.0\"\n  }\n}\n : Unexpected token \n in JSON at position 360");