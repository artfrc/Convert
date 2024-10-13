const USD = 5.61
const EUR = 6.13 
const GBP = 7.32

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

amount.addEventListener('input', () => {

  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (e) => {
  e.preventDefault()

  switch(currency.value) {
    case "USD":             
      convertCurrency(amount.value, USD,"US$")
      break

    case "EUR":
      convertCurrency(amount.value, EUR,"€")
      break

    case "GBP":
      convertCurrency(amount.value, GBP,"£")
      break
  
  }

  
}

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`
    let total = amount * price
    
    total  = formatCurrencyBRL(total).replace("R$", "")

    result.textContent = `${total} Reais`
    footer.classList.add('show-result')
  } catch (error) {
    footer.classList.remove('show-result')
    console.log(error)
    alert('Não foi possível fazer a conversão. Por favor tente mais tarde.')    
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}