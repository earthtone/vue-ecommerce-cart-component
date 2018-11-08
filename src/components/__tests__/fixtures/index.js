import { arrayOf, build, fake } from 'test-data-bot'

export const productBuilder = build('Product').fields({
  name: fake(f => f.lorem.words()),
  quantity: fake(f => f.random.number({ min: 1, max: 5 })),
  price: fake(f => Number(parseFloat(f.commerce.price()).toFixed(2)))
})

export const productList = build('ProductList').fields({
  items: arrayOf(productBuilder(), 5)
})

export const surchargeBuilder = build('Surcharge').fields({
  name: fake(f => f.lorem.word()),
  amount: fake(f => parseFloat(f.commerce.price()).toFixed(2))
})

export const surchargeListBuilder = build('SurchargeList').fields({
  charges: arrayOf(surchargeBuilder(), 3)
})
