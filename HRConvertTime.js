'use strict';

const s = '12:05:39AM'

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let timeStr = s;
    
    //If AM, is it midnight? if yes, print 0, if no, print as is
    //If PM, extract first two chars, convert to int, add 12, back to string
    
    if (timeStr.includes('AM') && timeStr.includes('12')) {
        timeStr.replace('12', '0')
        timeStr.replace('AM', '')
        return timeStr
    } else if (timeStr.includes('AM')) {
        return timeStr.replace('AM', '')
    } else {
        let militaryTime = timeStr.slice(0, 2)
        let parsed = parseInt(militaryTime, 10)
        parsed += 12
        return timeStr.replace(militaryTime, parsed.toString()).replace('PM', '')
        // console.log(parsed)
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

main()