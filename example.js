let banksJSON = [
  { banks: 'BBVA', valueMax: 100000, valueMin: 50000 },
  { banks: 'BanColombia', valueMax: 200000, valueMin: 100000 },
  { banks: 'Davivienda', valueMax: 300000, valueMin: 150000 },
]

class User {
  constructor(name, selectedBank, loan) {
    this.name = name
    this.selectedBank = selectedBank
    this.loan = loan
  }
}

let user = new User('Cristian', 'BBVA', 100000)

const loansBanks = {}
loansBanks['BBVA'] = bankBbva
loansBanks['BanColombia'] = bankBanColombia
loansBanks['Davivienda'] = bankDavivienda
loansBanks['Error'] = error
loansBanks['ErrorChosen'] = errorChosen
let key

function validateBank({name,selectedBank,loan}) {
  let bankSelectedByUser = banksJSON.find(
    (res) => res.banks === selectedBank
  )

  bankSelectedByUser ?
    bankSelectedByUser.valueMax >= loan &&
      bankSelectedByUser.valueMin <= loan
      ? (key = bankSelectedByUser.banks)
      : (key = 'Error')
    : (key = 'ErrorChosen')
}

validateBank(user)
optios(key)

function optios(key) {
  loansBanks[key]()
}

function bankBbva() {

  let newText = document.createTextNode(
    `Bienvenido ${user.name} al banco ${user.selectedBank}  aprobo su prestamo ✔`
  )

  let selectedDiv = document.getElementById('container')

  selectedDiv.classList.remove('ban-colombia', 'davivienda')
  selectedDiv.classList.add('bbva')
  selectedDiv.appendChild(newText)
}

function bankBanColombia() {

  let newText = document.createTextNode(
    `Bienvenido ${user.name} al banco ${user.selectedBank}  aprobo su prestamo ✔`
  )

  let selectedDiv = document.getElementById('container')

  selectedDiv.classList.remove('bbva', 'davivienda')
  selectedDiv.classList.add('ban-colombia')
  selectedDiv.appendChild(newText)
}

function bankDavivienda() {

  let newText = document.createTextNode(
    `Bienvenido ${user.name} al banco ${user.selectedBank}  aprobo su prestamo ✔`
  )

  let selectedDiv = document.getElementById('container')

  selectedDiv.classList.remove('bbva', 'ban-colombia')
  selectedDiv.classList.add('davivienda')
  selectedDiv.appendChild(newText)
}

function error() {

  let newText = document.createTextNode(
    `Bienvenido ${user.name} al banco ${user.selectedBank}, Nuestra entidad no acepta su prestamo, verifique que tope le podemos prestar ❌`
  )

  let selectedDiv = document.getElementById('container')

  selectedDiv.classList.remove('bbva', 'ban-colombia', 'davivienda')
  selectedDiv.classList.add('error')
  selectedDiv.appendChild(newText)
}

function errorChosen() {

  let newText = document.createTextNode(
    `Bienvenido ${user.name} el banco ${user.selectedBank}, no existe con nosotros ⚠`
  )

  let selectedDiv = document.getElementById('container')

  selectedDiv.classList.remove('bbva', 'ban-colombia', 'davivienda')
  selectedDiv.classList.add('error-escogido')
  selectedDiv.appendChild(newText)
}