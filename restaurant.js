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
    this.emit('tableCountChange', -1)
  }

  /**
   * Odwołano rezerwację na stolik.
   * Traktuj to jako po prostu 1 stolik więcej.
   */
  cancelTableReservation() {
    // Emit...
    this.emit('tableCountChange', +1)
  }

  /**
   * Ktoś wziął stolik bez rezerwacji.
   */
  takeTableWithoutReservation() {
    // Emit...
    this.emit('tableCountChange', -1)
  }

  /**
   * Stolik się popsuł, odpadła noga :/
   */
  markTableAsBroken() {
    // Emit...
    this.emit('tableCountChange', -1)
  }

  /**
   * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
   */
  cleanupTable() {
    // Emit...
    this.emit('tableCountChange', +1)
  }
}
