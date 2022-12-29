const buttonGet = document.getElementById('button-get');
const buttonMore = document.getElementById('button-more');
buttonMore.disabled = true;
let breedsList = document.getElementById('breeds-list');
let quantityOnThePage = 5;
let pageNumber = 0;

function renderPage() {
    pageNumber ++;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const breedsJson = JSON.parse(xhr.responseText)
            console.log(breedsJson);
            for (let i = 0; i < breedsJson.data.length; i++) {
                        console.log(breedsJson.data[i].breed);
                        breedsList.innerHTML += `<div>${breedsJson.data[i].breed}</div>`;
                        buttonGet.disabled = true;
                        buttonMore.disabled = false;
                    }
        }
    };
    xhr.open("GET", `https://catfact.ninja/breeds?limit=${quantityOnThePage}&page=${pageNumber}`, true);
    xhr.send();
    }



    
// async function renderPage() {
//     pageNumber ++;
//     const response = await fetch(`https://catfact.ninja/breeds?limit=${quantityOnThePage}&page=${pageNumber}`);
//     const breedsJson = await response.json();
//     for (let i = 0; i < breedsJson.data.length; i++) {
//         console.log(breedsJson.data[i].breed);
//         breedsList.innerHTML += `<div>${breedsJson.data[i].breed}</div>`;
//     }
//     buttonGet.disabled = true;
//     buttonMore.disabled = false;
// }















// async function renderAnotherPage() {
//     pageNumber ++;    
//     const response = await fetch(`https://catfact.ninja/breeds?limit=${quantityOnThePage}&page=${pageNumber}`);
//     const breedsJson = await response.json();
//     for (let i = 0; i < breedsJson.data.length; i++) {
//     console.log(breedsJson.data[i].breed);
//     breedsList.innerHTML += `<div>${breedsJson.data[i].breed}</div>`;
// }
// }