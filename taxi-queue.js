function TaxiQueue(locStrPassenger, locStrTaxi) {
  let passengersCount = locStrPassenger || 0;
  let numberOfTaxis = locStrTaxi || 0;
  function joinQueue() {
    passengersCount++;
  }

  function leaveQueue() {
    // check if the number of queue length is greater than 0.
    // update the passengersCount variable and minus one from
    //  the passengersCount number
    if (queueLength() > 0) {
      passengersCount = queueLength() - 1;
    }
  }

  function joinTaxiQueue() {
    numberOfTaxis++;
  }

  function queueLength() {
    return passengersCount;
  }

  function taxiQueueLength() {
    return numberOfTaxis;
  }

  function taxiDepart() {
    // check if the number of taxis in the queue is greater than zero and number of
    // passangers is greater than 11.
    // then.
    // minus one taxi from the queue each time
    // minus 12 passengers each time.
    if (queueLength() > 11 && taxiQueueLength()) {
      passengersCount = queueLength() - 12;
      numberOfTaxis = taxiQueueLength() - 1;
    }
  }

  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    taxiDepart,
  };
}
