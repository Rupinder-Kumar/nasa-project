
const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission:'Kepler Exploration X',
    rocket: 'Explore IS1',
    launchDate: new Date('Decement 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
}

saveLaunch(launch);

function existsLaunchWithId(launchId) {
    return launchesDatabase.has(launchId);
}


async function getAllLaunches() {
    return await launchesDatabase.find({},{
        '__v': 0,
        '_id': 0,
    });
}

async function saveLaunch(launch) {
    const planet = await planets.findOne({
        keplerName: launch.target
    });

    if(!planet) {
        throw new Error('No Matching planet found')
    }

    await launchesDatabase.updateOne({
        flightNumber: launch.flightNumber
    }, launch, {
        upsert: true,
    });
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launchesDatabase.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ['ZTM','NASA'],
        upcoming: true,
        success: true,
    }));
}

function abortLaunchById(launchId) {
    const aborted = launchesDatabase.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}


module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById
}