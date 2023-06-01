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
    if (queueLength() > 11 && taxiQueueLength() > 0) {
      passengersCount = queueLength() - 12;
      numberOfTaxis = taxiQueueLength() - 1;
    }
  }
  function errorTxt() {
    if (queueLength() < 12 && taxiQueueLength() < 1) {
      return "not enough passangers and there're no taxi's in the queue";
    }
    if (queueLength() < 12) {
      return "not enough passangers";
    }
    if (taxiQueueLength() < 1) {
      return "no taxi's in the queue";
    }
  }
  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    taxiDepart,
    errorTxt,
  };
}
