const allNames = [
    'Vojtěch', 'Adam',
    'Hugo',    'Hana',
    'Arnošt',  'Miloslava',
    'Ema',     'Erika',
    'Hugo',    'Nela',
    'Kamil',   'Adam',
    'Tomáš',   'Dávid',
    'Vanda',   'Kazimír',
    'Sabina',  'Hana'
  ];

  let namesCount = [];

for (let thisName of allNames) {
    if (namesCount[thisName] == 1) {
        namesCount[thisName] += 1;
    } else {
        namesCount[thisName] = 1;
    }
    }

    console.log(namesCount);
    
