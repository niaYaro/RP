const buttonGet = document.getElementById('button-get');
const buttonMore = document.getElementById('button-more');
buttonMore.disabled = true;
let breedsList = document.getElementById('breeds-list');
let quantityOnThePage = 5;
let pageNumber = 0;
async function renderPage() {
    pageNumber ++;
    const response = await fetch(`https://catfact.ninja/breeds?limit=${quantityOnThePage}&page=${pageNumber}`);
    const breedsJson = await response.json();
    for (let i = 0; i < breedsJson.data.length; i++) {
        console.log(breedsJson.data[i].breed);
        breedsList.innerHTML += `<div>${breedsJson.data[i].breed}</div>`;
    }
    buttonGet.disabled = true;
    buttonMore.disabled = false;
}
// async function renderAnotherPage() {
//     pageNumber ++;    
//     const response = await fetch(`https://catfact.ninja/breeds?limit=${quantityOnThePage}&page=${pageNumber}`);
//     const breedsJson = await response.json();
//     for (let i = 0; i < breedsJson.data.length; i++) {
//     console.log(breedsJson.data[i].breed);
//     breedsList.innerHTML += `<div>${breedsJson.data[i].breed}</div>`;
// }
// }