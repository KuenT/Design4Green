function CSVToArray( strData, strDelimiter ){
    strDelimiter = (strDelimiter || ",");
    var objPattern = new RegExp(
        (
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );

    var arrData = [[]];
    var arrMatches = null;

    while (arrMatches = objPattern.exec( strData )){
        var strMatchedDelimiter = arrMatches[ 1 ];
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
            ){
            arrData.push( [] );

        }
        var strMatchedValue;
        if (arrMatches[ 2 ]){
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );
        } else {
            strMatchedValue = arrMatches[ 3 ];
        }
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }
    return( arrData );
}

async function FetchFileAndSave() {
    console.log("Fetched .csv file from the server.");
    let response = await fetch("./Design4Green/INR-GR491.txt");
    let text = await response.text();
    localStorage.setItem("INR-GR491.csv", text);
    return text;
}

function GetCategories(table) {
    let savedData = localStorage.getItem("INR-GR491-categories.json");

    if (savedData === null) {
        console.log("Recalculated categories.");
        let categories = {};

        for (let i = 1; i < table.length; ++i) {
            if (categories[table[i][0]] === undefined)
                categories[table[i][0]] = [];
            categories[table[i][0]].push(i);
        }

        localStorage.setItem("INR-GR491-categories.json", JSON.stringify(categories));
        return categories;
    } else {
        return JSON.parse(savedData);
    }
}

export default async function() {
    let text = localStorage.getItem("INR-GR491.csv");

    if (text === null) {
        localStorage.removeItem("INR-GR491-categories.json");
        text = await FetchFileAndSave();
    }

    const table = CSVToArray(text);

    if (table.length !== 555) {
        text = await FetchFileAndSave();
    }

    return {
        categories: GetCategories(table),
        data: table
    };
}
