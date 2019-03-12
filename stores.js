'use strict';
  
var num_stores = 5;
var store = [];
var num = 0;
var time_of_day;
var hour;
var hourly_totals = [];

function Store(name, min_custs, max_custs, avg_purchase, total_sales, store_open, store_close, daily_purchases){
    this.name = name;
    this.min_custs = min_custs;
    this.max_custs = max_custs;
    this.avg_purchase = avg_purchase;
    this.total_sales = total_sales;
    this.store_open = store_open;
    this.store_close = store_close;
    this.daily_purchases = daily_purchases;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var calculate_sales = function () {
    for (var i = 0; i < (store[num].store_close - store[num].store_open); i++) {
        var random_custs = getRandomIntInclusive(store[num].min_custs, store[num].max_custs);
        var random_sales = random_custs * store[num].avg_purchase;
        store[num].total_sales = store[num].total_sales + random_sales;
        store[num].daily_purchases.push(random_sales);
        hourly_totals[i] = hourly_totals[i] + random_sales;
    }
}

var render = function () {
    console.log('Store ' + store[num].name + ' to the page');

    var store_ul = document.getElementById('by-store');
    var tr_element = document.createElement('tr');
    var th_element = document.createElement('th');
    th_element.textContent = store[num].name;
    tr_element.appendChild(th_element);
  
    for (var i = 0; i < store[num].daily_purchases.length; i++) {
        var td_element = document.createElement('td');
        hour = i + 6;
        if (hour > 12) {hour = hour-12};
        if (i > 5) {time_of_day='pm'} else {time_of_day='am'};
        var purchases = Math.floor(store[num].daily_purchases[i] + .5);
        td_element.textContent = purchases;
        tr_element.appendChild(td_element);
    }
var td_element2 = document.createElement('td');
td_element2.textContent = Math.floor(store[num].total_sales + .5);
tr_element.appendChild(td_element2);
var td_element3 = document.createElement('td');
td_element3.textContent = Math.floor((store[num].total_sales/ 20) / (store[num].store_close - store[num].store_open) + .5);
tr_element.appendChild(td_element3);
table_element.appendChild(tr_element);
}

// ===========================================
// program code flow starts here
// ===========================================

store[0] = new Store('1st and Pike', 23, 65, 6.3, 0, 6, 20, []);
store[1] = new Store('SEATAC', 3, 24, 1.2, 0, 6, 20, []);
store[2] = new Store('Seattle Center', 11, 38, 3.7, 0, 6, 20, []);
store[3] = new Store('Capitol Hill', 20, 38, 2.3, 0, 6, 20, []);
store[4] = new Store('Alki', 2, 14, 3.6, 0, 6, 20, []);

// table first row
var table_element = document.getElementById('nums-table');
var tr_element1 = document.createElement('tr');
var tr_element = document.createElement('tr');
var th_element = document.createElement('th');
var tr_element2 = document.createElement('tr');

th_element.textContent = 'Branch name';
tr_element.appendChild(th_element);

for (var i = 0; i < 14; i++) {
    var td_element = document.createElement('td');
    hour = i + 6;
    if (hour > 12) {hour = hour-12};
    if (i > 5) {time_of_day = 'pm'} else {time_of_day = 'am'};
    td_element.textContent = hour + ':00 ' + time_of_day;
    tr_element.appendChild(td_element);
}
var td_element2 = document.createElement('td');
td_element2.textContent = 'Daily total';
tr_element.appendChild(td_element2);
var td_element3 = document.createElement('td');
td_element3.textContent = 'Workers';
tr_element.appendChild(td_element3);
table_element.appendChild(tr_element);

for (var i = 0; i < 14; i++) {
    var td_element = document.createElement('td');
    td_element.textContent = hourly_totals[i];
    tr_element.appendChild(td_element);
}
table_element.appendChild(tr_element);

for (var i = 0; i < num_stores; i++){
    calculate_sales();
    render();
    num++;
}
