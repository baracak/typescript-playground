const carBrand: string = 'Porsche';

if (carBrand === 'Škoda') {
  console.log('car brand is Škoda');
} else if (carBrand === 'VW') {
  console.log('car brand is VW');
} else {
  console.log('car brand is not Škoda but ' + carBrand);
}

const isVW: boolean = carBrand === 'VW' ? true : false;

const carQuality: string = carBrand === 'Peugeot' ? 'bad' : 'good';

const carQuality2: string = carBrand === 'Peugeot' ? 'bad' : carBrand === 'Škoda' ? 'average' : 'good';

console.log(JSON.stringify({ isVW, carQuality, carQuality2 }));

switch (carBrand) {
  case 'VW':
    console.log('good');
    break;
  case 'Peugeot':
    console.log('bad');
    break;
  case 'Škoda':
  case 'Audi':
    console.log('average');
    break;
  default:
    console.log('unknown');
}
