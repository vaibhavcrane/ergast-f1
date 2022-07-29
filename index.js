/*
MIT License

Copyright (c) 2022 vaibhavcrane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const url = {
    _base: "https://ergast.com/api/f1/",
    _criteria: ""
}

/* Variables */
const ergastParams = {
    _driver: "driver",
    _circuit: "circuit",
    _constructor: "constructor",
    _grid: "grid",
    _result: "result",
    _fastest: "fastest",
    _status: "status",
    _year: "year",
    _round: "round",
    _standing: "standing",
    _lap: "lap",
    _pitstop: "pitstop"
}

var ergastFunctions = {
    seasons: {
        all: async function()   {
            option.seasons()
            response = await getResponse(url._base+url._criteria)
            return response
        },
        filters: async function(userFilters) {
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { filter.circuit(userFilters[ergastParams._circuit]) };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.constructor(userFilters[ergastParams._constructor]) };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            if(userFilters.hasOwnProperty(ergastParams._grid)) { filter.grid(userFilters[ergastParams._grid]) };
            if(userFilters.hasOwnProperty(ergastParams._result)) { filter.result(userFilters[ergastParams._result]) };
            if(userFilters.hasOwnProperty(ergastParams._fastest)) { filter.fastest(userFilters[ergastParams._fastest]) };
            if(userFilters.hasOwnProperty(ergastParams._status)) { filter.status(userFilters[ergastParams._status]) };
            option.seasons();
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    races: {
        all: async function()   {
            option.races()
            response = await getResponse(url._base+url._criteria)
            return response
        },
        filters: async function(userFilters)   {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { filter.circuit(userFilters[ergastParams._circuit]) };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.constructor(userFilters[ergastParams._constructor]) };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            if(userFilters.hasOwnProperty(ergastParams._grid)) { filter.grid(userFilters[ergastParams._grid]) };
            if(userFilters.hasOwnProperty(ergastParams._result)) { filter.result(userFilters[ergastParams._result]) };
            if(userFilters.hasOwnProperty(ergastParams._fastest)) { filter.fastest(userFilters[ergastParams._fastest]) };
            if(userFilters.hasOwnProperty(ergastParams._status)) { filter.status(userFilters[ergastParams._status]) };
            option.races();
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    results: {
        all: async function()   {
            option.results()
            response = await getResponse(url._base+url._criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { filter.circuit(userFilters[ergastParams._circuit]) };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.constructor(userFilters[ergastParams._constructor]) };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            if(userFilters.hasOwnProperty(ergastParams._grid)) { filter.grid(userFilters[ergastParams._grid]) };
            if(userFilters.hasOwnProperty(ergastParams._fastest)) { filter.fastest(userFilters[ergastParams._fastest]) };
            if(userFilters.hasOwnProperty(ergastParams._status)) { filter.status(userFilters[ergastParams._status]) };
            if(userFilters.hasOwnProperty(ergastParams._result)) { filter.result(userFilters[ergastParams._result]) };
            option.results();
            if(userFilters.hasOwnProperty(ergastParams._result)) { url._criteria = url._criteria.replace("/results.json", ".json") };
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    qualifying: {
        all: async function()   {
            option.qualifying()
            response = await getResponse(url._base+url._criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { filter.circuit(userFilters[ergastParams._circuit]) };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.constructor(userFilters[ergastParams._constructor]) };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            if(userFilters.hasOwnProperty(ergastParams._grid)) { filter.grid(userFilters[ergastParams._grid]) };
            if(userFilters.hasOwnProperty(ergastParams._result)) { filter.result(userFilters[ergastParams._result]) };
            if(userFilters.hasOwnProperty(ergastParams._fastest)) { filter.fastest(userFilters[ergastParams._fastest]) };
            if(userFilters.hasOwnProperty(ergastParams._status)) { filter.status(userFilters[ergastParams._status]) };
            option.qualifying();
            if(userFilters.hasOwnProperty(ergastParams._standing)) {
                filter.qualifying(userFilters[ergastParams._standing])
                url._criteria = url._criteria.replace("/qualifying.json","/")
            }
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    standings: {
        drivers: async function(userFilters)    {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            option.driverStandings();
            if(userFilters.hasOwnProperty(ergastParams._standing)) { filter.standing(userFilters[ergastParams._standing]) };
            response = await getResponse(url._base+url._criteria)
            return response
        },
        constructors: async function(userFilters)    {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.driver(userFilters[ergastParams._constructor]) };
            option.constructorStadings();
            if(userFilters.hasOwnProperty(ergastParams._standing)) { filter.standing(userFilters[ergastParams._standing]) };
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    drivers: {
        all: async function()   {
            option.drivers()
            response = await getResponse(url._base+url._criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { filter.circuit(userFilters[ergastParams._circuit]) };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.constructor(userFilters[ergastParams._constructor]) };
            if(userFilters.hasOwnProperty(ergastParams._grid)) { filter.grid(userFilters[ergastParams._grid]) };
            if(userFilters.hasOwnProperty(ergastParams._result)) { filter.result(userFilters[ergastParams._result]) };
            if(userFilters.hasOwnProperty(ergastParams._fastest)) { filter.fastest(userFilters[ergastParams._fastest]) };
            if(userFilters.hasOwnProperty(ergastParams._status)) { filter.status(userFilters[ergastParams._status]) };
            if(userFilters.hasOwnProperty(ergastParams._standing)) { filter.driverStanding(userFilters[ergastParams._standing]) };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            option.drivers();
            if(userFilters.hasOwnProperty(ergastParams._driver)) { url._criteria = url._criteria.replace("/drivers.json", ".json") };
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    constructors: {
        all: async function()   {
            option.constructors()
            response = await getResponse(url._base+url._criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { filter.circuit(userFilters[ergastParams._circuit]) };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            if(userFilters.hasOwnProperty(ergastParams._grid)) { filter.grid(userFilters[ergastParams._grid]) };
            if(userFilters.hasOwnProperty(ergastParams._result)) { filter.result(userFilters[ergastParams._result]) };
            if(userFilters.hasOwnProperty(ergastParams._fastest)) { filter.fastest(userFilters[ergastParams._fastest]) };
            if(userFilters.hasOwnProperty(ergastParams._status)) { filter.status(userFilters[ergastParams._status]) };
            if(userFilters.hasOwnProperty(ergastParams._standing)) { filter.driverStanding(userFilters[ergastParams._standing]) };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.constructor(userFilters[ergastParams._constructor]) };
            option.constructors();
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { url._criteria = url._criteria.replace("/constructors.json", ".json") };
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    circuits: {
        all: async function()   {
            option.circuits()
            response = await getResponse(url._base+url._criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.constructor(userFilters[ergastParams._constructor]) };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            if(userFilters.hasOwnProperty(ergastParams._grid)) { filter.grid(userFilters[ergastParams._grid]) };
            if(userFilters.hasOwnProperty(ergastParams._result)) { filter.result(userFilters[ergastParams._result]) };
            if(userFilters.hasOwnProperty(ergastParams._fastest)) { filter.fastest(userFilters[ergastParams._fastest]) };
            if(userFilters.hasOwnProperty(ergastParams._status)) { filter.status(userFilters[ergastParams._status]) };
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { filter.circuit(userFilters[ergastParams._circuit]) };
            option.constructors();
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { url._criteria = url._criteria.replace("/circuits.json", ".json") };
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    status: {
        all: async function()   {
            option.status()
            response = await getResponse(url._base+url._criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(ergastParams._year)) {
                filter.year(userFilters[ergastParams._year])
                if(userFilters.hasOwnProperty(ergastParams._round)) {
                    filter.round(userFilters[ergastParams._round])
                }
            };
            if(userFilters.hasOwnProperty(ergastParams._circuit)) { filter.circuit(userFilters[ergastParams._circuit]) };
            if(userFilters.hasOwnProperty(ergastParams._constructor)) { filter.constructor(userFilters[ergastParams._constructor]) };
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            if(userFilters.hasOwnProperty(ergastParams._grid)) { filter.grid(userFilters[ergastParams._grid]) };
            if(userFilters.hasOwnProperty(ergastParams._result)) { filter.result(userFilters[ergastParams._result]) };
            if(userFilters.hasOwnProperty(ergastParams._fastest)) { filter.fastest(userFilters[ergastParams._fastest]) };
            if(userFilters.hasOwnProperty(ergastParams._status)) { filter.status(userFilters[ergastParams._status]) };
            option.status();
            if(userFilters.hasOwnProperty(ergastParams._status)) { url._criteria = url._criteria.replace("/status.json", ".json") };
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    lapTime: {
        filters: async function(userFilters)    {
            filter.year(userFilters[ergastParams._year])
            filter.round(userFilters[ergastParams._round])
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            option.lap(userFilters[ergastParams._lap]);
            response = await getResponse(url._base+url._criteria)
            return response
        }
    },

    pitStops: {
        filters: async function(userFilters)    {
            filter.year(userFilters[ergastParams._year])
            filter.round(userFilters[ergastParams._round])
            if(userFilters.hasOwnProperty(ergastParams._driver)) { filter.driver(userFilters[ergastParams._driver]) };
            if(userFilters.hasOwnProperty(ergastParams._lap)) { filter.lap(userFilters[ergastParams._lap]) };
            option.pitStops();
            if(userFilters.hasOwnProperty(ergastParams._pitstop)) { url._criteria = url._criteria.replace("/pitstops.json", filter.pitStop(userFilters[ergastParams._pitstop])) };
            response = await getResponse(url._base+url._criteria)
            return response
        }
    }
}

/**
 * It takes a URL, checks for the limit on requested data, adds limit to the url and returns a response.
 * @param url - the url of the api
 * @returns JSON response from ergast
 */
async function getResponse(url)   {
    const initialRequest = new Request(url);
    const initialResponse = await fetch(initialRequest);
    const data = await initialResponse.json();
    url += `?limit=${data.MRData.total}`

    const request = new Request(url);
    const response = await fetch(request);
    const JSONFile = await response.json();
    return(JSONFile)
}

/* Adds the option selected to API URL. */
var option = {
    seasons: function() { url._criteria+="seasons.json" },
    races: function() { url._criteria+="races.json" },
    drivers: function() { url._criteria+="drivers.json" },
    constructors: function() { url._criteria+="constructors.json" },
    circuits: function() { url._criteria+="circuits.json" },
    results: function() { url._criteria+="results.json" },
    qualifying: function() { url._criteria+="qualifying.json" },
    status: function() { url._criteria+="status.json" },
    sprint: function() { url._criteria+="sprint.json" },
    driverStandings: function() { url._criteria+="driverStandings.json" },
    constructorStadings: function() { url._criteria+="constructorStandings.json" },
    pitStops: function() { url._criteria+="pitstops.json" },
    lap: function(id) { url._criteria += `laps/${id}.json` }
}

/* Adds the filter selected to API URL */
var filter = {
    circuit: function(id) { url._criteria += `circuits/${id}/` },
    constructor: function(id) { url._criteria += `constructors/${id}/` },
    driver: function(id) { url._criteria += `drivers/${id}/` },
    grid: function(id) { url._criteria += `grid/${id}/` },
    result: function(id) { url._criteria += `results/${id}/` },
    fastest: function(id) { url._criteria += `fastest/${id}/` },
    status: function(id) { url._criteria += `status/${id}/` },
    year: function(id) { url._criteria += `${id}/` },
    round: function(id) { url._criteria += `${id}/` },
    lap: function(id) { url._criteria += `laps/${id}/` },
    pitStop: function(id) { return `/pitstops/${id}.json` },
    standing: function(id) { url._criteria = url._criteria.replace(".json", `/${id}.json`) },
    driverStanding: function(id) { url._criteria += `driverStandings/${id}/` },
    constructorStanding: function(id) { url._criteria += `constructorStandings/${id}/` },
    qualifying: function(id) { url._criteria += `qualifying/${id}.json` },
}

module.exports = ergastFunctions