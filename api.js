// 1st part .............
const loadData = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = data =>{
    const ElementData = document.getElementById('details');
    ElementData.innerText = data.quote;
}



// 2nd part .........
const buddyData = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddyData(data))
}
const displayBuddyData = (data) =>{
    const buddys = data.results;
    const buddysDiv = document.getElementById('buddy')
    for(const buddy of buddys){
        const h2 = document.createElement('h2');
        h2.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}`
        buddysDiv.appendChild(h2);
    }
}


// 3rd part /..............
const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => getCountries(data))
}
const getCountries= countriesData =>{
    const countryDiv = document.getElementById('countries');
   countriesData.forEach(country =>{
     const newDiv = document.createElement('div');
     newDiv.classList.add('countryDiv')
     newDiv.innerHTML = `
            <h2>${country.name}</h2>
            <p>${country.capital}</p>
            <button onclick="loadCountry('${country.name}')">Details</button>
     `
    //  const h2 = document.createElement('h2');
    //  h2.innerText = country.name;
    //  newDiv.appendChild(h2);
    //  const b = document.createElement('b');
    //  b.innerText= country.capital;
    //  newDiv.appendChild(b);
     countryDiv.appendChild(newDiv);
   })
}
const loadCountry = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data))
}

const displayCountryDetail = country =>{
    console.log(country)
    const counDiv = document.getElementById('countryId');
    counDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p> population : ${country.population}</p>
    <img width ="150px" src="${country.flag}">
    
    `

}



