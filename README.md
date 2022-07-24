# ergast-f1

Module to access Ergast API data

# Installation
npm i ergast-f1

# Usage

`.all()` returns entire list of selected function

`.filters()` takes a dictionary as argument with filter type as key

### Example

ergast.seasons.all()

ergast.seasons.filter({
    driver: "hamilton",
    result: 1
})

gives response from <https://ergast.com/api/f1/drivers/hamilton/results/1/seasons.json>

# Filters list

## seasons.filters() and races.filters()
1. circuit
2. constructor
3. driver
4. grid
5. result
6. fastest
7. status

## results.filters()
1. circuit
2. constructor
3. driver
4. grid
5. result
6. fastest
7. status
8. year
9. round - will be ignored if specified without year

## qualifying.filters()
1. circuit
2. constructor
3. driver
4. grid
5. result
6. fastest
7. status
7. standing
8. year
9. round - will be ignored if specified without year

## standings.drivers.filters()
1. year
2. round
3. driver
4. standing

## standings.constructors.filter()
1. year
2. round
3. constructor
4. standing

## drivers.filters() and constructor.filters()
1. circuit
2. constructor
3. driver
4. grid
5. result
6. fastest
7. status
7. standing
8. year
9. round - will be ignored if specified without year

## status.filters()
1. circuit
2. constructor
3. driver
4. grid
5. result
6. fastest
7. status
8. year
9. round - will be ignored if specified without year

## lapTime.filters()
1. year
2. round
3. driver
4. lap

## pitStops.filters()
1. year
2. round
3. driver
4. lap
5. pitstop
