var body = document.querySelector("body");
var button = document.querySelector("button");
var inputFields = document.querySelectorAll("input");
var table = document.querySelector("table");
var isFiltered = false;
var isMultipleFiltered = false;

var countries = [];

button.addEventListener("click", addEntry);

var tableHeadings = ["Name", "Population", "GDP", "Life Expectancy", "Languages"];

function CountryData(name, population, gdp, lifeExpectancy, languages) {
    this.name = name,
    this.population = population,
    this.gdp = gdp,
    this.lifeExpectancy = lifeExpectancy,
    this.languages = languages,
    this.fillTable = function() {
        var tr = document.createElement("tr");
        for(key in this) {
            if(key != 'fillTable') {
                var td = document.createElement("td");
                td.innerHTML = this[key];
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
}

function addEntry() {
    var lanArr = [];
    lanArr.push(inputFields[4].value.split(", "))

    var newEntry = new CountryData(inputFields[0].value, inputFields[1].value, inputFields[2].value, inputFields[3].value, lanArr);
    countries.push(newEntry);
    if(isFiltered == false) {
        countries[countries.length - 1].fillTable();
    }
    else if(isFiltered == true) {
        clearTable();

        for(i = 0; i < countries.length; i++) {
            countries[i].fillTable();
        }
        
        var filterToggles = document.querySelectorAll(".filter-toggle");
        for(i = 0; i < filterToggles.length; i++) {
            filterToggles[i].checked = false;
        }
        isFiltered = false;
    }

    
}   

function clearTable() {
    var tableContents = document.querySelectorAll("table tr");
        for(i = 1; i < tableContents.length; i++) {
            table.removeChild(tableContents[i]);
        }
}

var pgt = document.getElementById("pgt");
var ggt = document.getElementById("ggt");
var plt = document.getElementById("plt");
var glt = document.getElementById("glt");
var lee = document.getElementById("lee");
var lan = document.getElementById("lan");


pgt.addEventListener("click", function() {
    var filterInput = document.querySelector("#right-grid input").value;

    if(pgt.checked) {
        if(isMultipleFiltered == false) {
            isFiltered = true;
            clearTable();
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].population) > Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        else if(isMultipleFiltered == true) {
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].population) > Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        
        
    }
});

ggt.addEventListener("click", function() {
    var filterInput = document.querySelector("#right-grid input").value;

    if(ggt.checked) {
        if(isMultipleFiltered == false) {
            isFiltered = true;
            clearTable();
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].gdp) > Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        else if(isMultipleFiltered == true) {
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].gdp) > Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        
        
    }
});

plt.addEventListener("click", function() {
    var filterInput = document.querySelector("#right-grid input").value;

    if(plt.checked) {
        if(isMultipleFiltered == false) {
            isFiltered = true;
            clearTable();
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].population) < Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        else if(isMultipleFiltered == true) {
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].population) < Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        
        
    }
});

glt.addEventListener("click", function() {
    var filterInput = document.querySelector("#right-grid input").value;

    if(glt.checked) {
        if(isMultipleFiltered == false) {
            isFiltered = true;
            clearTable();
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].gdp) < Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        else if(isMultipleFiltered == true) {
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].gdp) < Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        
        
    }
});

lee.addEventListener("click", function() {
    var filterInput = document.querySelector("#right-grid input").value;

    if(lee.checked) {
        if(isMultipleFiltered == false) {
            isFiltered = true;
            clearTable();
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].lifeExpectancy) == Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        else if(isMultipleFiltered == true) {
            for(i = 0; i < countries.length; i++) {
                if(Number(countries[i].lifeExpectancy) == Number(filterInput)) {
                    countries[i].fillTable();
                }
            }
        }
        
        
    }
});

lan.addEventListener("click", function() {
    var filterInput = document.querySelector("#right-grid input").value;

    if(lan.checked) {
        if(isMultipleFiltered == false) {
            isFiltered = true;
            clearTable();

            for(i = 0; i < countries.length; i++) {
                for(j = 0; j < countries[i].languages[0].length; j++) {
                    if(filterInput == countries[i].languages[0][j]) {
                        countries[i].fillTable();
                    }
                }
            }
        }
        else if(isMultipleFiltered == true) {
            for(i = 0; i < countries.length; i++) {
                for(j = 0; j < countries[i].languages[0].length; j++) {
                    if(filterInput == countries[i].languages[0][j]) {
                        countries[i].fillTable();
                    }
                }
            }
        }
    }
})