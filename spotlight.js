function createSpotLightItem(array, itemNumber) {
    var lines = array.split('\r\n');
    let profileElement = document.getElementById("profile");
    profileElement.classList.add('mini-posts');
    let divElementId = "divElement" + itemNumber;
    let divElement1 = document.createElement("div");
    let articleElement = document.createElement("article");
    let anchorElement = document.createElement("a");
    anchorElement.classList.add('image');
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", String(lines[0]));
    let divElement2 = document.createElement("div");
    let pAnchorElement = document.createElement("a");
    pAnchorElement.setAttribute("href", String(lines[1]));
    pAnchorElement.innerHTML += lines[2];
    let spanElement = document.createElement("span");
    spanElement.innerHTML += (" " + String(lines[3]));
    let breakElement = document.createElement("br");
    let hrdivElement = document.createElement("div");
    let hrElement = document.createElement("hr");


    

    divElement1.id = divElementId;
    divElement1.classList.add("div-Element-1");
    divElement2.classList.add("div-Element-2");
    imgElement.classList.add("img");
    hrElement.classList.add("hr-Element");
    articleElement.appendChild(anchorElement);
    articleElement.appendChild(spanElement);
    articleElement.appendChild(breakElement);
    anchorElement.appendChild(imgElement);
    divElement2.appendChild(pAnchorElement);
    divElement2.appendChild(spanElement);
    if(itemNumber != 3){
        hrdivElement.appendChild(hrElement);
    }
    divElement1.appendChild(articleElement);
    divElement1.appendChild(divElement2);
    divElement1.appendChild(hrdivElement);
    divElement1.appendChild(breakElement);
    profileElement.appendChild(divElement1);
}





function parseparagraph(blurb){
    var lines = blurb.split('\r\n');
    var spotlight = document.getElementById('all_spotlight');
    var divelement = document.createElement("div");
    divelement.classList.add("d-flex");
    divelement.classList.add("flex-wrap");
    divelement.classList.add("mb-5");
    divelement.classList.add("mx-auto");
    var anchor = document.createElement("a");
    anchor.classList.add('image');
    var image = document.createElement("img");
    image.setAttribute("src",String(lines[0]));
    image.setAttribute("width",'400px');
    anchor.appendChild(image);
    divelement.appendChild(anchor);
    var paraelement = document.createElement("p");
    var anchortwo = document.createElement("a");
    anchortwo.innerHTML += String(lines[2]);
    anchortwo.setAttribute("href", lines[1]);
    paraelement.appendChild(anchortwo);
    paraelement.innerHTML += (" " +  String(lines[3]));
    paraelement.classList.add("text-left");
    paraelement.classList.add("my-auto");
    paraelement.classList.add("mx-3");
    paraelement.setAttribute("style", "width: 50%; min-width: 300px;");
    divelement.appendChild(paraelement);
    spotlight.appendChild(divelement);
    console.log(spotlight);
}


function parsetext(text){
    const arr = text.split('\r\n\r\n');
    arr.reverse();
    let itemNumber = 0;
    for (let item in arr){
    itemNumber += 1;
    if (itemNumber <= 3) {
        createSpotLightItem(arr[item], itemNumber);
        // arr[item] is a string. It has to be split and processed
    }
    }

    // Process array and append to spotlight only if it's corresponding div is present in document. Else do nothing. This measure was
    // taken avoid any future errors if the code is edited.
    var spotlight = document.getElementById('all_spotlight');
    if(spotlight){
        arr.map( item => parseparagraph(item));
    }
    else {
        console.log("Spotlight element not found");
    }

}

fetch('./spotlight.txt').then(res => res.text() ).then(text => parsetext(text));
















// let more = document.createElement('button');
// more.innerHTML = `<h2> <a href="spotlight.html">See More</a></h2>`;
// document.getElementById('profile').appendChild(more);

