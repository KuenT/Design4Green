
function displayReasonsOfNoFurtherStudies() {

    document.getElementById("no-further-studies-reason-div").hidden = false;
}

function hideReasonsOfNoFurtherStudies() {

    document.getElementById("no-further-studies-reason-div").hidden = true;
}


$('#id-radio-further-studies-no').on('click', displayReasonsOfNoFurtherStudies)
$('#id-radio-further-studies-yes').on('click', hideReasonsOfNoFurtherStudies)

