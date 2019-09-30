var body = document.querySelector("body");
var button = document.querySelector("button");
var inputFields = document.querySelectorAll("input");
var table = document.querySelector("table");
var filter = false;
var multi_filter = false;
var population_greater_than = document.getElementById("population_greater_than");
var gdp_greater_than = document.getElementById("gdp_greater_than");
var population_lesser_than = document.getElementById("population_lesser_than");
var gdp_lesser_than = document.getElementById("gdp_lesser_than");
var life_expectancy_equal_to = document.getElementById("life_expectancy_equal_to");
var language = document.getElementById("language");
var countries = [];

button.addEventListener("click", add_data);

var tableheaders = ["Name", "Population", "GDP", "Life Expectancy", "languages"];

function country_database(name, population, gdp, lifeExpectancy, languages) {
    this.name = name,
        this.population = population,
        this.gdp = gdp,
        this.lifeExpectancy = lifeExpectancy,
        this.languages = languages,
        this.table_content = function () {
            var tr = document.createElement("tr");
            for (key in this) {
                if (key != 'table_content') {
                    var td = document.createElement("td");
                    td.innerHTML = this[key];
                    tr.appendChild(td);
                }
            }
            table.appendChild(tr);
        }
}

function add_data() {
    var language_data = [];
    language_data.push(inputFields[4].value.split(", "))

    var newEntry = new country_database(inputFields[0].value, inputFields[1].value, inputFields[2].value, inputFields[3].value, language_data);
    countries.push(newEntry);
    if (filter == false) {
        countries[countries.length - 1].table_content();
    } else if (filter == true) {
        remove_data();

        for (i = 0; i < countries.length; i++) {
            countries[i].table_content();
        }

        var filterToggles = document.querySelectorAll(".filter-toggle");
        for (i = 0; i < filterToggles.length; i++) {
            filterToggles[i].checked = false;
        }
        filter = false;
    }


}

function remove_data() {
    var tableContents = document.querySelectorAll("table tr");
    for (i = 1; i < tableContents.length; i++) {
        table.removeChild(tableContents[i]);
    }
}

population_greater_than.addEventListener("click", function () {
    var filtered_item = document.querySelector("#filter_section input").value;

    if (population_greater_than.checked) {
        if (multi_filter == false) {
            filter = true;
            remove_data();
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].population) > Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        } else if (multi_filter == true) {
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].population) > Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        }


    }
});

gdp_greater_than.addEventListener("click", function () {
    var filtered_item = document.querySelector("#filter_section input").value;

    if (gdp_greater_than.checked) {
        if (multi_filter == false) {
            filter = true;
            remove_data();
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].gdp) > Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        } else if (multi_filter == true) {
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].gdp) > Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        }


    }
});

population_lesser_than.addEventListener("click", function () {
    var filtered_item = document.querySelector("#filter_section input").value;

    if (population_lesser_than.checked) {
        if (multi_filter == false) {
            filter = true;
            remove_data();
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].population) < Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        } else if (multi_filter == true) {
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].population) < Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        }


    }
});

gdp_lesser_than.addEventListener("click", function () {
    var filtered_item = document.querySelector("#filter_section input").value;

    if (gdp_lesser_than.checked) {
        if (multi_filter == false) {
            filter = true;
            remove_data();
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].gdp) < Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        } else if (multi_filter == true) {
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].gdp) < Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        }


    }
});

life_expectancy_equal_to.addEventListener("click", function () {
    var filtered_item = document.querySelector("#filter_section input").value;

    if (life_expectancy_equal_to.checked) {
        if (multi_filter == false) {
            filter = true;
            remove_data();
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].lifeExpectancy) == Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        } else if (multi_filter == true) {
            for (i = 0; i < countries.length; i++) {
                if (Number(countries[i].lifeExpectancy) == Number(filtered_item)) {
                    countries[i].table_content();
                }
            }
        }


    }
});

language.addEventListener("click", function () {
    var filtered_item = document.querySelector("#filter_section input").value;

    if (language.checked) {
        if (multi_filter == false) {
            filter = true;
            remove_data();

            for (i = 0; i < countries.length; i++) {
                for (j = 0; j < countries[i].languages[0].length; j++) {
                    if (filtered_item == countries[i].languages[0][j]) {
                        countries[i].table_content();
                    }
                }
            }
        } else if (multi_filter == true) {
            for (i = 0; i < countries.length; i++) {
                for (j = 0; j < countries[i].languages[0].length; j++) {
                    if (filtered_item == countries[i].languages[0][j]) {
                        countries[i].table_content();
                    }
                }
            }
        }
    }
})