const DigitalPal = require('./DigitalPal.js')
const { prompt } = require('inquirer')

const dog = new DigitalPal()

const menu = () => {
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['Feed the dog', 'Send the dog to bed', 'Play with the dog', 'Take the dog outside', 'Take the dog inside', 'Let the dog destroy the furniture', 'Buy new furniture']
  })
    .then(({ action }) => {
      switch (action) {
        case 'Feed the dog':
          dog.feed()
          break
        case 'Send the dog to bed':
          dog.sleep()
          break
        case 'Play with the dog':
          dog.play()
          break
        case 'Take the dog outside':
          dog.goOutside()
          break
        case 'Take the dog inside':
          dog.goInside()
          break
        case 'Let the dog destroy the furniture':
          dog.destroyFurniture()
          break
        case 'Buy new furniture':
          dog.buyNewFurniture()
      }
      menu()
    })
    .catch(err => console.log(err))
}

menu()
