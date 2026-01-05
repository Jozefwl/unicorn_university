# University Assignments
Homework assignments from [Unicorn university](https://unicornuniversity.net/).

## Assignment 1
> Develop a program in the JavaScript programming language based on your solution to homework 1 that will convert a number from one number system to another. You can choose between which number systems you will convert numbers. The program will contain at least one function with an input argument that will contain the number to be converted. The return value of this function will contain the converted number in the required number system.

### Example I/O

I: *1001*
O: **9**

## Assignment 2
> Design and develop a program in the JavaScript programming language that generates a list of employees. Your program will contain function main() with one argument that will contain the dtoIn input data. The main function will return dtoOut output data. Each employee has a first name, surname, gender, birthdate and workload. Persons can be either men (male) or women (female), working hours are either 10, 20, 30 or 40 hours/week. Full time corresponds to 40 hours/week. Individual data will be generated randomly, i.e. you will randomly generate frist name, surname, date of birth, etc. In the input data, on the basis of which the script will generate the list of employees, the following data will be entered: Number of employees. Age range in which persons are to be represented.  

### Example I/O

I: 
```
const dtoIn = {
    count: 1,
    age: {
        min: 20,
        max: 60
    }
};
```
O: 
```
const dtoOut = {
    gender: 'male',
    birthdate: '1972-04-27T05:33:00.000Z',
    name: 'Čeněk',
    surname: 'Němec',
    workload: 10
  }
```
## Assignment 3
>Design and develop a program in the JavaScript programming language that follows the previous assignment BSDE 2022 Winter Zadání domácí úkol / homework assignment 03 - generates a list of employees. Extend your program to get the following values based on the generated list of employees:

    number of employees
    number of employees according to the workload (10, 20, 30 and 40hrs/week)
    average age (rounded to one decimal place)
    minimum age (youngest employee)
    maximum age (oldest employee)
    median age
    median workload
    average workload - females
    list of employees sorted by workload ascending

>Your program will contain function main() with one argument that will contain the dtoIn input data. Within the main function, you should call the function that generate the list of employees and then the function that calculate and return the requested values. The mainfunction will return dtoOut output data.

### Example I/O

I: 
```
const dtoIn = {
    count: 3, //number of employees to be generated
    age: {
        min: 20, //minimum age of employee(s)
        max: 60  //maximum age of employee(s)
        }
};
```
O: 
```
const dtoOut = {
    peopleCount: 3,
    workload10: 1,
    workload20: 1,
    workload30: 1,
    workload40: 0,
    averageAge: 45,
    minAge: 26,
    maxAge: 60,
    medianAge: 49,
    medianWorkload: 20,
    averageWomenWorkload: 20,
    sortedByWorkload: [
      {
        gender: 'female',
        birthdate: '1996-03-06T06:46:00.000Z',
        workload: 10,
        name: 'Nela',
        surname: 'Čechová'
      },
      {
        gender: 'female',
        birthdate: '1973-11-12T09:28:00.000Z',
        workload: 20,
        name: 'Sabina',
        surname: 'Štěpánková'
      },
      {
        gender: 'female',
        birthdate: '1962-09-17T02:14:00.000Z',
        workload: 30,
        name: 'Evžénie',
        surname: 'Černá'
      }
    ]
  }

```

## Assignment 4

>Design and develop a program in the JavaScript programming language that follows the previous assignment assignment 2 - generates a list of employees. Extend your program to get the most common names in the generated list of employees:

    all employes
    females
    males
    females with part-time workload (10, 20 or 30hrs/week)
    males with full-time workload (40hrs/week)

>Your program will contain function main() with one argument that will contain the dtoIn input data. Within the main function, you should call the function that generate the list of employees and then the function that calculate and return the requested values. The mainfunction will return dtoOut output data.

### Example I/O

I: 
```
const dtoIn = {
    count: 3, //number of employees to be generated
    age: {
        min: 20, //minimum age of employee(s)
        max: 60  //maximum age of employee(s)
        }
};
```
O: 
```
const dtoOut = {
  names: {
    all: { Hana: 1, 'Tomáš': 1, Ludmila: 1 },
    male: { 'Tomáš': 1 },
    female: { Hana: 1, Ludmila: 1 },
    femalePartTime: { Hana: 1, Ludmila: 1 },
    maleFullTime: {}
  },
  chartData: {
    all: [
      { label: 'Hana', value: 1 },
      { label: 'Tomáš', value: 1 },
      { label: 'Ludmila', value: 1 }
    ],
    male: [ { label: 'Tomáš', value: 1 } ],
    female: [ { label: 'Hana', value: 1 }, { label: 'Ludmila', value: 1 } ],
    femalePartTime: [ { label: 'Hana', value: 1 }, { label: 'Ludmila', value: 1 } ],
    maleFullTime: []
  }
} 
```
