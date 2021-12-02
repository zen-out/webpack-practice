# Webpack 

## Purpose

- To ensure that our project only utlizes code that we explicitly declare
- To ensure that we can easily reference our files from elsewhere
- The src file is where you will be writing your code
- The dist file is where your code will be exported to 
- Add "build": "webpack" to scripts, then you can just run npm run build
- You can utilize any other languages, really, as long as they transpile to javascript (that's awesome, this is like a global translator)
- If you want to use another kind of file, make sure you just get the loader, add that into your rules and then type in npm run build
- 