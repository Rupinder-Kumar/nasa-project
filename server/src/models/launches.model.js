const launches = new Map();
const launch = {
    flightNumber: 100,
    mission:'Kepler Exploration X',
    rocket: 'Explore IS1',
    launchDate: new Date('Decement 27, 2030'),
    destination: 'Kepler-442 b',
    customers: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);
module.exports = {
    launches
}