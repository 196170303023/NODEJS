const fs = require('fs');

// // create a folder space_project
// //synchronously

try{
    fs.mkdirSync('space_project')
    console.log(`folder is created`)
}catch(err){
    console.log(err)
}

//asynchronously

fs.mkdir('space_project',(err)=>{
    if(err){
        console.log("folder is not created")
    }else{
        console.log("folder is created")
    }
    })

//Inside the folder, create a file log.txt and add the line "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."

try{
    fs.writeFileSync('space_project/log.txt','ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.')
    console.log('test is added')
}catch(err){
    console.log("text not added in file")
}


fs.writeFileSync('space_project/log.txt','ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.')
if(err){
    console.log("text is not added")
}else{
    console.log("text added in file")
}

//Now, replace the line in the log.txt file with "ISRO has started working on Gaganyaan."

try {
    fs.writeFileSync('Space_Project/log.txt', "ISRO has started working on Gaganyaan.");
    console.log("text added in file");
} catch (err) {
    console.log("text not added in file");
}



fs.writeFile('Space_Project/log.txt', "ISRO has started working on Gaganyaan.", (err) => {
    if (err) {
        console.log("text not added in file");
    } else {
        console.log("text added in file");
    }
}); 


//Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."

try {
    fs.appendFileSync('Space_Project/log.txt', "\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.");
    console.log("text appended in file");
} catch (err) {
    console.log("text not added in file");
}


fs.appendFile('Space_Project/log.txt', "\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.", (err) => {
    // Use curly braces to encapsulate the callback function
    if (err) {
        console.log("text not appended in file");
    } else {
        console.log("text appended in file");
    }
});

// Rename the log.txt file to update.txt

try {
    fs.renameSync('Space_Project/log.txt', 'Space_Project/update.txt');
    console.log("file name rename to update.txt");
} catch (err) {
    console.log("file name not renamed to update.txt");
}



fs.rename('Space_Project/log.txt', 'Space_Project/update.txt', (err) => {
    if (err) {
        console.log("file name not renamed to update.txt");
    } else {
        console.log("file name renamed to update.txt");
    }
});

//Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation

try {
    const data = fs.readFileSync('Space_Project/update.txt', 'utf8');
    console.log("Data read from file update.txt synchronously:");
    console.log(data);
    console.log("We are excited");
} catch (error) {
    console.log(error);
}


fs.readFile('Space_Project/update.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data read from file update.txt asynchronously:");
        console.log(data);
        console.log("We are excited");
    }
});

//Delete the file update.txt

try {
    fs.unlinkSync('Space_Project/update.txt');
    console.log("update.txt deleted");
} catch (err) {
    console.log(err);
}

fs.unlink('Space_Project/update.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("update.txt deleted");
    }
});

//Delete the folder space_project

try {
    fs.rmdirSync('Space_Project');
    console.log("Space_Project deleted");
} catch (err) {
    console.log(err);
}

fs.rmdir('Space_Project', (err) => {
    if (err) {
        console.log("Folder not found");
    } else {
        console.log("Space_Project deleted");
    }
});
