// DOM element references
const joinBtn = document.querySelector(".join_queue");
const joinQueueBtn = document.querySelector(".join_taxi_queue");
const departBtn = document.querySelector(".depart");
const passengerCountEl = document.querySelector(".passenger_queue_count");
const taxiCountEl = document.querySelector(".taxi_queue_count");

// create Factory Function instance
const taxiQueue = TaxiQueue();
// Functions
function joinButtonFunction() {
  taxiQueue.joinQueue();
  passengerCountEl.innerHTML = taxiQueue.queueLength();
}
function joinQueueButtonFunction() {
  taxiQueue.joinTaxiQueue();
  taxiCountEl.innerHTML = taxiQueue.taxiQueueLength();
}
function departButtonFunction() {
  taxiQueue.taxiDepart();
  passengerCountEl.innerHTML = taxiQueue.queueLength();
  taxiCountEl.innerHTML = taxiQueue.taxiQueueLength();
}
// DOM events
joinBtn.addEventListener("click", joinButtonFunction);
joinQueueBtn.addEventListener("click", joinQueueButtonFunction);
departBtn.addEventListener("click", departButtonFunction);
