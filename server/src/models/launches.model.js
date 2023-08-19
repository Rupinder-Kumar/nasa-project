const launches = new Map();
let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission:'Kepler Exploration X',
    rocket: 'Explore IS1',
    launchDate: new Date('Decement 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customer: ['ZTM','NASA'],
        upcoming: true,
        success: true,
    }));
}

module.exports = {
    getAllLaunches,
    addNewLaunch
}