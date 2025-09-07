// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rd: 'ruby',
    py: 'python'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


// For array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   console.log(programming[key]);
   
}