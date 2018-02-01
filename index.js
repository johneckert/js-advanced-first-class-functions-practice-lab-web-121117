// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(driver) {
    if (driver.hometown == town) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const relevantDrivers = [...drivers];
  return relevantDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(a, b) {
    return a.name > b.name;
  }, 0);
}

function totalRevenue(drivers) {
  const revenue = drivers.map(driver => driver.revenue);
  return revenue.reduce(function(a, b) {
    return a + b;
  });
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
