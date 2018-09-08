const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');

[
    {
        name: "Fox",
        text: "Torya!"
    },
    {
        name: "Ness",
        text: "PK THUNDER!"
    },
    {
        name: "Pokémon Trainer",
        text: "Take this! Tripple Finish!"
    },
    {
        name: "Riddly",
        text: "*unholy screaching*"
    },
    {
        name: "Meta Knight",
        text: "-- We're sorry. The chirp your trying to view belongs to a banned account. --"
    }
]

fs.writeFile(path.join(__dirname, '../chirps.json'), JSON.stringify(chirps), (err) => {
    if (err) console.log(err);
    console.log(`Wrote that file, fam!`)
})

fs.readFile(path.join(__dirname, '../chirps.json'), (err, data) => {
    if (err) console.log(`Could not read file: ${err}`);

    console.log(JSON.parse(data))
})

