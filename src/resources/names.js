const names = [
    'Ben',
    'Peter',
    'Clark',
    'Michael',
    'Jonathan',
    'William',
    'Lucas',
    'Christopher',
    'Christian',
    'Andrew',
    'Adam',
    'Brian',
    'Bryan',
    'Brett',
    'Benjamin',
    'David',
    'Evan',
    'Scott',
    'Stanly',
    'Jeffrey',
    'Jacob',
    'Nicholas',
    'Sebastian',
    'Marcus',
    'Francis',
    'Zachary',
    'Ryan',
    'Angela',
    'Brittney',
    'Amy',
    'Ashley',
    'Bridget',
    'Claire',
    'Debra',
    'Megan',
    'Holly',
    'Hilary',
    'Kimberly',
    'Julia',
    'Julie',
    'Jessie',
    'Jessica',
    'Cindy',
    'Sydney',
    'Emily',
    'Stephanie',
    'Tammy',
    'Shannon',
    'Frankie',
    'Troy',
    'Trevor',
    'Michele',
    'Chelsea',
    'Monica',
    'Rachel',
    'Phoebe',
    'Robin',
    'Lily',
    'Eileen'
]

const getRandomName = () => {
    const rNum = Math.floor(Math.random() * 59);
    return names[rNum];
}

export default getRandomName;