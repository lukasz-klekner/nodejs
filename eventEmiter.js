import { Restaurant } from './restaurant.js'

const megaRestaurant = new Restaurant()
let tablesCount = 25

// Tutaj dodaj nasłuchiwanie
megaRestaurant
  .on('open', (data) => console.log(data))
  .on('close', (data) => console.log(data))
  .on('tableCountChange', (data) => {
    tablesCount += data
  })

megaRestaurant.open() // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation() // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation() // "Dostepnych stolików: 23."

megaRestaurant.reserveTable() // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation() // "Dostepnych stolików: 23."

megaRestaurant.reserveTable() // "Dostepnych stolików: 22."

megaRestaurant.reserveTable() // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation() // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation() // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable() // "Dostepnych stolików: 20."
console.log(tablesCount)

megaRestaurant.close()
