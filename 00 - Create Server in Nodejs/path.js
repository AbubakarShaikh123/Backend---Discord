import path from "path"

console.log(path);

/*
     path.join()  -->  create path depending on sys UNIX or Windows
                  --> Main usecase is handling path for diff sys UNIX or Windows

    path.parse("path")   --> breakdown path and give object


    for common js  -->  __dirname
                   -->  __filename

    for ES6   --> import.meta.dirname
              --> import.meta.filename
                  

 
*/
const path1 = path.join('backend','createServer','byNode','index.js')
const path1Obj = path.parse(path1)

// console.log(path1);
// console.log(path1Obj);




// for ES6
const currentDir = import.meta.dirname
console.log(import.meta.dirname);
console.log(import.meta.filename);


/* custom path */

const customPath = path.join(currentDir, 'views', 'index.html')

console.log(customPath);

