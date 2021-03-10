import Cage from "./Cage.js"

class Zoo {
  constructor(name) {
    this.name = name
    this.cages = this.createCages()
    this.employees = []
  }

  createCages() {
    let newCages = []
    for (let i = 1; i <= 10; i++) {
      let newCage = new Cage()
      newCages.push(newCage)
    }
    return newCages
  }

  addEmployee(newEmployee) {
    this.employees.push(newEmployee)
  }

  addAnimal(animal) {
    for (let i = 0; i < this.cages.length; i++) {
      if (this.cages[i].isEmpty()) {
        this.cages[i].animal = animal
        return true
      }
    }

    return "All of the cages are full!"
  }

  visit() {
    let output = ""

    this.cages.forEach((cage) => {
      if (!cage.isEmpty()) {
        output += cage.animal.speak()
        output += "\n"
      }
    })

    this.employees.forEach((employee) => {
      output += employee.greet()
      output += "\n"
    })

    return output
  }
}

export default Zoo
