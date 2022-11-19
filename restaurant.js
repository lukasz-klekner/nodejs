import { EventEmitter } from 'events'

export class Restaurant extends EventEmitter {
  /**
   * Otwarcie restauracji.
   */
  open() {
    // Emit...
    this.emit('open', 'Opening a restaurant')
  }

  /**
   * Zamknięcie restauracji.
   */
  close() {
    // Emit...
    this.emit('close', 'Closing a restaurant')
  }

  /**
   * Stolik został zarezerowany na teraz.
   * Traktuj to jako po prostu 1 stolik mniej.
   */
  reserveTable() {
    // Emit...
    this.emit('book', 'Booking a table')
  }

  /**
   * Odwołano rezerwację na stolik.
   * Traktuj to jako po prostu 1 stolik więcej.
   */
  cancelTableReservation() {
    // Emit...
    this.emit('cancel', 'Canceling a table')
  }

  /**
   * Ktoś wziął stolik bez rezerwacji.
   */
  takeTableWithoutReservation() {
    // Emit...
    this.emit('free', 'Free booking a table')
  }

  /**
   * Stolik się popsuł, odpadła noga :/
   */
  markTableAsBroken() {
    // Emit...
    this.emit('broke', 'broken table')
  }

  /**
   * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
   */
  cleanupTable() {
    // Emit...
    this.emit('clean up', 'Cleaning up a table')
  }
}
