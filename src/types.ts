type CarBrand = 'Škoda' | 'Citroen' | 'Porsche';

interface Car {
  brand: CarBrand;
  model: string;
  color: string;
  electric?: boolean;
}

interface BrokenCar extends Car {
  issue: string;
}

type RacingCar = Car & {
  topSpeed: number;
};

const octavia: Car = {
  brand: 'Škoda',
  model: 'Octavia',
  color: 'blue',
};

const saxo: BrokenCar = {
  brand: 'Citroen',
  model: 'Saxo',
  color: 'black',
  issue: 'light not working',
};

const porsche: RacingCar = {
  brand: 'Porsche',
  model: '911',
  color: 'red',
  topSpeed: 400,
};

function rideACar(car: Car) {
  if (car.brand === 'Škoda') {
    console.log(`I am from Czech Republic.`);
  }
  console.log(`I am riding ${car.brand} ${car.model} in ${car.color} color`);
}

function rideBrokenCar(car: BrokenCar) {
  rideACar(car);
  console.log(`\tBut I am having an issue: ${car.issue}`);
}

function rideRacingCar(car: RacingCar) {
  rideACar(car);
  console.log(`\tMy top speed is ${car.topSpeed}`);
}

rideACar(octavia);

rideBrokenCar(saxo);

rideRacingCar(porsche);
