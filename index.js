const baseUrl = "https://ergast.com/api/f1/"
var criteria = ""

/* VARIABLES */
const _driver = "driver"
const _circuit = "circuit"
const _constructor = "constructor"
const _grid = "grid"
const _result = "result"
const _fastest = "fastest"
const _status = "status"
const _year = "year"
const _round = "round"
const _standing = "standing"
const _lap = "lap"
const _pitstop = "pitstop"

var ergastFunctions = {
    seasons: {
        all: async function()   {
            option.seasons()
            response = await getResponse(baseUrl+criteria)
            return response
        },
        filters: async function(userFilters) {
            if(userFilters.hasOwnProperty(_circuit)) { filter.circuit(userFilters[_circuit]) };
            if(userFilters.hasOwnProperty(_constructor)) { filter.constructor(userFilters[_constructor]) };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            if(userFilters.hasOwnProperty(_grid)) { filter.grid(userFilters[_grid]) };
            if(userFilters.hasOwnProperty(_result)) { filter.result(userFilters[_result]) };
            if(userFilters.hasOwnProperty(_fastest)) { filter.fastest(userFilters[_fastest]) };
            if(userFilters.hasOwnProperty(_status)) { filter.status(userFilters[_status]) };
            option.seasons();
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    races: {
        all: async function()   {
            option.races()
            response = await getResponse(baseUrl+criteria)
            return response
        },
        filters: async function(userFilters)   {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_circuit)) { filter.circuit(userFilters[_circuit]) };
            if(userFilters.hasOwnProperty(_constructor)) { filter.constructor(userFilters[_constructor]) };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            if(userFilters.hasOwnProperty(_grid)) { filter.grid(userFilters[_grid]) };
            if(userFilters.hasOwnProperty(_result)) { filter.result(userFilters[_result]) };
            if(userFilters.hasOwnProperty(_fastest)) { filter.fastest(userFilters[_fastest]) };
            if(userFilters.hasOwnProperty(_status)) { filter.status(userFilters[_status]) };
            option.races();
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    results: {
        all: async function()   {
            option.results()
            response = await getResponse(baseUrl+criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_circuit)) { filter.circuit(userFilters[_circuit]) };
            if(userFilters.hasOwnProperty(_constructor)) { filter.constructor(userFilters[_constructor]) };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            if(userFilters.hasOwnProperty(_grid)) { filter.grid(userFilters[_grid]) };
            if(userFilters.hasOwnProperty(_fastest)) { filter.fastest(userFilters[_fastest]) };
            if(userFilters.hasOwnProperty(_status)) { filter.status(userFilters[_status]) };
            if(userFilters.hasOwnProperty(_result)) { filter.result(userFilters[_result]) };
            option.results();
            if(userFilters.hasOwnProperty(_result)) { criteria = criteria.replace("/results.json", ".json") };
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    qualifying: {
        all: async function()   {
            option.qualifying()
            response = await getResponse(baseUrl+criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_circuit)) { filter.circuit(userFilters[_circuit]) };
            if(userFilters.hasOwnProperty(_constructor)) { filter.constructor(userFilters[_constructor]) };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            if(userFilters.hasOwnProperty(_grid)) { filter.grid(userFilters[_grid]) };
            if(userFilters.hasOwnProperty(_result)) { filter.result(userFilters[_result]) };
            if(userFilters.hasOwnProperty(_fastest)) { filter.fastest(userFilters[_fastest]) };
            if(userFilters.hasOwnProperty(_status)) { filter.status(userFilters[_status]) };
            option.qualifying();
            if(userFilters.hasOwnProperty(_standing)) {
                filter.qualifying(userFilters[_standing])
                criteria = criteria.replace("/qualifying.json","/")
            }
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    standings: {
        drivers: async function(userFilters)    {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            option.driverStandings();
            if(userFilters.hasOwnProperty(_standing)) { filter.standing(userFilters[_standing]) };
            response = await getResponse(baseUrl+criteria)
            return response
        },
        constructors: async function(userFilters)    {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_constructor)) { filter.driver(userFilters[_constructor]) };
            option.constructorStadings();
            if(userFilters.hasOwnProperty(_standing)) { filter.standing(userFilters[_standing]) };
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    drivers: {
        all: async function()   {
            option.drivers()
            response = await getResponse(baseUrl+criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_circuit)) { filter.circuit(userFilters[_circuit]) };
            if(userFilters.hasOwnProperty(_constructor)) { filter.constructor(userFilters[_constructor]) };
            if(userFilters.hasOwnProperty(_grid)) { filter.grid(userFilters[_grid]) };
            if(userFilters.hasOwnProperty(_result)) { filter.result(userFilters[_result]) };
            if(userFilters.hasOwnProperty(_fastest)) { filter.fastest(userFilters[_fastest]) };
            if(userFilters.hasOwnProperty(_status)) { filter.status(userFilters[_status]) };
            if(userFilters.hasOwnProperty(_standing)) { filter.driverStanding(userFilters[_standing]) };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            option.drivers();
            if(userFilters.hasOwnProperty(_driver)) { criteria = criteria.replace("/drivers.json", ".json") };
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    constructors: {
        all: async function()   {
            option.constructors()
            response = await getResponse(baseUrl+criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_circuit)) { filter.circuit(userFilters[_circuit]) };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            if(userFilters.hasOwnProperty(_grid)) { filter.grid(userFilters[_grid]) };
            if(userFilters.hasOwnProperty(_result)) { filter.result(userFilters[_result]) };
            if(userFilters.hasOwnProperty(_fastest)) { filter.fastest(userFilters[_fastest]) };
            if(userFilters.hasOwnProperty(_status)) { filter.status(userFilters[_status]) };
            if(userFilters.hasOwnProperty(_standing)) { filter.driverStanding(userFilters[_standing]) };
            if(userFilters.hasOwnProperty(_constructor)) { filter.constructor(userFilters[_constructor]) };
            option.constructors();
            if(userFilters.hasOwnProperty(_constructor)) { criteria = criteria.replace("/constructors.json", ".json") };
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    circuits: {
        all: async function()   {
            option.circuits()
            response = await getResponse(baseUrl+criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_constructor)) { filter.constructor(userFilters[_constructor]) };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            if(userFilters.hasOwnProperty(_grid)) { filter.grid(userFilters[_grid]) };
            if(userFilters.hasOwnProperty(_result)) { filter.result(userFilters[_result]) };
            if(userFilters.hasOwnProperty(_fastest)) { filter.fastest(userFilters[_fastest]) };
            if(userFilters.hasOwnProperty(_status)) { filter.status(userFilters[_status]) };
            if(userFilters.hasOwnProperty(_circuit)) { filter.circuit(userFilters[_circuit]) };
            option.constructors();
            if(userFilters.hasOwnProperty(_circuit)) { criteria = criteria.replace("/circuits.json", ".json") };
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    status: {
        all: async function()   {
            option.status()
            response = await getResponse(baseUrl+criteria)
            return response
        },
        filters: async function(userFilters)    {
            if(userFilters.hasOwnProperty(_year)) {
                filter.year(userFilters[_year])
                if(userFilters.hasOwnProperty(_round)) {
                    filter.round(userFilters[_round])
                }
            };
            if(userFilters.hasOwnProperty(_circuit)) { filter.circuit(userFilters[_circuit]) };
            if(userFilters.hasOwnProperty(_constructor)) { filter.constructor(userFilters[_constructor]) };
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            if(userFilters.hasOwnProperty(_grid)) { filter.grid(userFilters[_grid]) };
            if(userFilters.hasOwnProperty(_result)) { filter.result(userFilters[_result]) };
            if(userFilters.hasOwnProperty(_fastest)) { filter.fastest(userFilters[_fastest]) };
            if(userFilters.hasOwnProperty(_status)) { filter.status(userFilters[_status]) };
            option.status();
            if(userFilters.hasOwnProperty(_status)) { criteria = criteria.replace("/status.json", ".json") };
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    lapTime: {
        filters: async function(userFilters)    {
            filter.year(userFilters[_year])
            filter.round(userFilters[_round])
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            option.lap(userFilters[_lap]);
            response = await getResponse(baseUrl+criteria)
            return response
        }
    },

    pitStops: {
        filters: async function(userFilters)    {
            filter.year(userFilters[_year])
            filter.round(userFilters[_round])
            if(userFilters.hasOwnProperty(_driver)) { filter.driver(userFilters[_driver]) };
            if(userFilters.hasOwnProperty(_lap)) { filter.lap(userFilters[_lap]) };
            option.pitStops();
            if(userFilters.hasOwnProperty(_pitstop)) { criteria = criteria.replace("/pitstops.json", filter.pitStop(userFilters[_pitstop])) };
            response = await getResponse(baseUrl+criteria)
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

var option = {
    seasons: function() { criteria+="seasons.json" },
    races: function() { criteria+="races.json" },
    drivers: function() { criteria+="drivers.json" },
    constructors: function() { criteria+="constructors.json" },
    circuits: function() { criteria+="circuits.json" },
    results: function() { criteria+="results.json" },
    qualifying: function() { criteria+="qualifying.json" },
    status: function() { criteria+="status.json" },
    sprint: function() { criteria+="sprint.json" },
    driverStandings: function() { criteria+="driverStandings.json" },
    constructorStadings: function() { criteria+="constructorStandings.json" },
    pitStops: function() { criteria+="pitstops.json" },
    lap: function(id) { criteria += `laps/${id}.json` }
}

var filter = {
    circuit: function(id) { criteria += `circuits/${id}/` },
    constructor: function(id) { criteria += `constructors/${id}/` },
    driver: function(id) { criteria += `drivers/${id}/` },
    grid: function(id) { criteria += `grid/${id}/` },
    result: function(id) { criteria += `results/${id}/` },
    fastest: function(id) { criteria += `fastest/${id}/` },
    status: function(id) { criteria += `status/${id}/` },
    year: function(id) { criteria += `${id}/` },
    round: function(id) { criteria += `${id}/` },
    lap: function(id) { criteria += `laps/${id}/` },
    pitStop: function(id) { return `/pitstops/${id}.json` },
    standing: function(id) { criteria = criteria.replace(".json", `/${id}.json`) },
    driverStanding: function(id) { criteria += `driverStandings/${id}/` },
    constructorStanding: function(id) { criteria += `constructorStandings/${id}/` },
    qualifying: function(id) { criteria += `qualifying/${id}.json` },
}

module.exports = ergastFunctions