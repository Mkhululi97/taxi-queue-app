// DOM element references
const joinBtn = document.querySelector(".join_queue");
const leaveBtn = document.querySelector(".leave_queue");
const joinQueueBtn = document.querySelector(".join_taxi_queue");
const departBtn = document.querySelector(".depart");
const passengerCountEl = document.querySelector(".passenger_queue_count");
const taxiCountEl = document.querySelector(".taxi_queue_count");
let locStrPassenger = 0;
let locStrTaxi = 0;
// Functions
function setupLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
function getLocalStorage() {
  passengerCountEl.innerHTML = locStrPassenger;
  taxiCountEl.innerHTML = locStrTaxi;
}
if (localStorage.getItem("passenger_count") || 0) {
  locStrPassenger = localStorage.getItem("passenger_count");
}
if (localStorage.getItem("taxi_count") || 0) {
  locStrTaxi = localStorage.getItem("taxi_count");
}

// create Factory Function instance
const taxiQueue = TaxiQueue(locStrPassenger, locStrTaxi);
getLocalStorage();

function joinButtonFunction() {
  taxiQueue.joinQueue();
  passengerCountEl.innerHTML = taxiQueue.queueLength();
  setupLocalStorage("passenger_count", taxiQueue.queueLength());
}
function leaveButtonFunction() {
  taxiQueue.leaveQueue();
  passengerCountEl.innerHTML = taxiQueue.queueLength();
  setupLocalStorage("passenger_count", taxiQueue.queueLength());
}
function joinQueueButtonFunction() {
  taxiQueue.joinTaxiQueue();
  taxiCountEl.innerHTML = taxiQueue.taxiQueueLength();
  setupLocalStorage("taxi_count", taxiQueue.taxiQueueLength());
}
function departButtonFunction() {
  taxiQueue.taxiDepart();
  passengerCountEl.innerHTML = taxiQueue.queueLength();
  taxiCountEl.innerHTML = taxiQueue.taxiQueueLength();
  setupLocalStorage("passenger_count", taxiQueue.queueLength());
  setupLocalStorage("taxi_count", taxiQueue.taxiQueueLength());
}
// DOM events
joinBtn.addEventListener("click", joinButtonFunction);
leaveBtn.addEventListener("click", leaveButtonFunction);
joinQueueBtn.addEventListener("click", joinQueueButtonFunction);
departBtn.addEventListener("click", departButtonFunction);
