
function createSpotLightItem(array, itemNumber) {


    let profileElement = document.getElementById("profile");
    profileElement.classList.add('mini-posts');
    let divElementId = "divElement" + itemNumber;
    //console.log(divElementId);
    let divElement1 = document.createElement("div");
    let articleElement = document.createElement("article");
    let anchorElement = document.createElement("a");
    anchorElement.classList.add('image');
    let imgElement = document.createElement("img");
    let divElement2 = document.createElement("div");
    let pAnchorElement = document.createElement("a");
    let spanElement = document.createElement("span");
    let breakElement = document.createElement("br");
    let hrdivElement = document.createElement("div");
    let hrElement = document.createElement("hr");


    imgElement.src = array[0];
    pAnchorElement.setAttribute("href", array[1]);
    pAnchorElement.textContent = array[2];
    spanElement.textContent = array[3];

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
    hrdivElement.appendChild(hrElement);
    divElement1.appendChild(articleElement);
    divElement1.appendChild(divElement2);
    divElement1.appendChild(hrdivElement);
    divElement1.appendChild(breakElement);
    profileElement.appendChild(divElement1);
}
//[image_link,link_address,link_title,description]
let arrayItem_11 = ["images/highlights/konda_teaching_july2021.jpg", "https://krmopuri.github.io/", " Konda Reddy Mopuri ", " July-Nov Semester (2022) begins and our faculty are all set to go to the board for the teaching test"];

let arrayItem1_12 = ["images/highlights/Prof_Mahesh_Sep9_2022.jpeg", "https://uwaterloo.ca/civil-environmental-engineering/profile/mdpandey", "Mahesh Pandey", " (Univ. Waterloo, Canada) interacted with School members, sharing insights on use of ML for nuclear plant risk-assesment (Sep 2022)"];

let arrayItem1_13 = ["images/highlights/varahan_lectures.png", "https://www.ou.edu/coe/cs/people/varahan", "S. Lakshmivarahan (Varahan)", ", globally recognized Applied Mathematician, delivered lectures in the School (Jan 2023)"];

let arrayItem1 = ["images/spotlights/neeraj_tedxGuwahati2023.png", "https://www.youtube.com/watch?v=CYMMLLeGrVs", "TEDx Talk", " by Neeraj Kumar Sharma sharing the excitement of working with sound (Feb 2023)"];

let arrayItem2 = ["images/spotlights/debanga_state_award_may2023.jpg", "https://debanga.github.io/", "Debanga Raj Neog", ",  receives the Young Scientist Award 2023 by the Assam Science Technology and Environment Council (May 2023)"];

let arrayItem3 = ["images/spotlights/online_learning.png","dsai_bsc_program.html", "Online BSc(Hons) Degree", " programme in DS&AI launched in the Coursera Education platform (Jul 2023)"];

let array = [arrayItem1, arrayItem2, arrayItem3];

//Insert New Item here
// let arrayItem4 = ["images/highlights/konda_teaching_july2021.jpg", "#", "  ", ", July-Nov Semester (2022) begins and our faculty are all set to go to the board for the teaching test"];
// array.push(arrayItem4);

array.reverse();

let itemNumber = 0;
for (let item in array) {
    itemNumber += 1;
    if (itemNumber <= 3) {
        createSpotLightItem(array[item], itemNumber);
    }

}

// let more = document.createElement('button');
// more.innerHTML = `<h2> <a href="spotlight.html">See More</a></h2>`;
// document.getElementById('profile').appendChild(more);

