'use strict';

// ===========================================
// program code flow starts here
// ===========================================

var num_stores = 5;
var store = [];
var num = 0;
var grid_rows = [
    [' ', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm', 'Total', 'Workers'] 
    // first row (header) of table grid
];  
var hourly_totals = [0];

store[0] = new Store('1st and Pike', 23, 65, 6.3, 0, 6, 20, []);
store[1] = new Store('SEATAC', 3, 24, 1.2, 0, 6, 20, []);
store[2] = new Store('Seattle Center', 11, 38, 3.7, 0, 6, 20, []);
store[3] = new Store('Capitol Hill', 20, 38, 2.3, 0, 6, 20, []);
store[4] = new Store('Alki', 2, 14, 3.6, 0, 6, 20, []);

for (var i = 0; i < num_stores; i++){
    calculate_sales();
    num++;
}
render();

// ===========================================
// program code flow ENDS here
// ===========================================

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

function calculate_sales() {
    grid_rows[num + 1] = [];
    grid_rows[num + 1].push (store[num].name); 
    // num + 1 because 1st row of grid is header
    // starting i at 1 on purpose because first column of table is name
    for (var i = 1; i < (store[num].store_close - store[num].store_open +1); i++) {
        var random_custs = getRandomIntInclusive(store[num].min_custs, store[num].max_custs);
        var random_sales = random_custs * Math.floor(store[num].avg_purchase + .5);
        store[num].total_sales = store[num].total_sales + random_sales;
        store[num].daily_purchases.push (random_sales);
        grid_rows[num + 1].push (random_sales);
    }
    i = store[num].store_close - store[num].store_open + 1;
    var workers = Math.floor((store[num].total_sales / 20 / i) + .5);
    grid_rows[num + 1].push (store[num].total_sales); // total to end of row
    grid_rows[num + 1].push (workers); // add #workers to end of row
}

function render() {
    var total_hour = 0;
    grid_rows[num_stores + 1] = [];
    grid_rows[num_stores + 1].push ('Totals ');
    for (var i = 1; i < 15; i++) {
        for (var j = 1; j < num_stores + 1; j++) {
            total_hour = total_hour + grid_rows[j][i];
        }
        grid_rows[num_stores + 1].push (total_hour);
    }
    var table_element = document.getElementById('nums-table');
    var tr_element = [];
    var td_element = [];
    for (var i = 0; i < num_stores + 2; i++) {
        tr_element = document.createElement('tr');
        for (var j = 0; j < 17; j++) {
            td_element = document.createElement('td');
            td_element.textContent = grid_rows[i][j];
            tr_element.appendChild(td_element);
        }
        table_element.appendChild(tr_element);
    }
}

// FORM CODE HERE ================================================================

// ===============================
// Practical Example
// ===============================

var add_store = document.getElementById('add-store');

function add_new_store (event){
    // var event = <event>
    event.preventDefault();
    console.log('adding a new store');

    // Collect a value <event>.target.<name>.value

    var name = event.target.store_name.value;
    var min_custs = event.target.min_custs.value;
    var max_custs = event.target.max_custs.value;
    var avg_purchase = event.target.avg_purchase.value;
    var store_open = event.target.store_open.value;
    var store_close = event.target.store_close.value;

    console.log(name, min_custs, max_custs, avg_purchase, store_open, store_close);

    var add_store = new Store(name, min_custs, max_custs, avg_purchase, store_open, store_close);

    console.log(newStore);
    
    // ==============================================

    //add the new store to my all stores array
    Stores.push(newStore);

    // Clear an elements inner html
    storeTable.innerHTML = '';
    // then re-render the table
    render();

    }

    add_store.addEventListener('submit', add_new_store);
