'use strict';
  
  var first = {
    name: "1st and Pike",
    min_custs: 23,
    max_custs: 65,
    avg_purchase: 6.3,
    total_sales: 0,
    daily_purchases: [],
  };
  var second = {
    name: "SEATAC",
    min_custs: 3,
    max_custs: 24,
    avg_purchase: 1.2,
    total_sales: 0,
    daily_purchases: [],
  };
  var third = {
    name: "Seattle Center",
    min_custs: 11,
    max_custs: 38,
    avg_purchase: 3.7,
    total_sales: 0,
    daily_purchases: [],
  };
  var fourth = {
    name: "Capitol Hill",
    min_custs: 20,
    max_custs: 38,
    avg_purchase: 2.3,
    total_sales: 0,
    daily_purchases: [],
  };
  var fifth = {
    name: "Alki",
    min_custs: 2,
    max_custs: 14,
    avg_purchase: 3.6,
    total_sales: 0,
    daily_purchases: [],
  };

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

first.calculate_sales = function (){
    for(var i = 0; i < 14; i++){
        var random_custs = getRandomIntInclusive(this.min_custs, this.max_custs);
        var random_sales = random_custs * this.avg_purchase;
        first.total_sales = first.total_sales + random_sales;
        this.daily_purchases.push(random_sales);
    }
};
  
first.render = function() {
    console.log("first to the page");

    var first_ul = document.getElementById("first-store");
    var title_li = document.createElement("li");
    var title_h3 = document.createElement("h3");

    title_h3.textContent = first.name + " Hourly purchases";
    first_ul.appendChild(title_h3);
    for (var i = 0; i < this.daily_purchases.length; i++) {
        var new_li = document.createElement("li");
        var purchases = Math.floor(this.daily_purchases[i] + .5);
        new_li.textContent = `Hour ${i + 6}:00 to ${i + 7}:00 purchases: ${purchases}`;
        first_ul.appendChild(new_li);
    }
    title_li.textContent = "Total: " + Math.floor(first.total_sales + .5);
    first_ul.appendChild(title_li);
};

second.calculate_sales = function () {
    for (var i = 0; i < 14; i++) {
        var random_custs = getRandomIntInclusive(this.min_custs, this.max_custs);
        var random_sales = random_custs * this.avg_purchase;
        second.total_sales = second.total_sales + random_sales;
        this.daily_purchases.push(random_sales);
    }
};

second.render = function () {
    console.log("second to the page");
    
    var second_ul = document.getElementById("second-store");
    var title_li = document.createElement("li");
    var title_h3 = document.createElement("h3");

    title_h3.textContent = second.name + " Hourly purchases";
    second_ul.appendChild(title_h3);
    for (var i = 0; i < this.daily_purchases.length; i++) {
        var new_li = document.createElement("li");
        var purchases = Math.floor(this.daily_purchases[i] + .5);
        new_li.textContent = `Hour ${i + 6}:00 to ${i + 7}:00 purchases: ${purchases}`;
        second_ul.appendChild(new_li);
    }
    title_li.textContent = "Total: " + Math.floor(second.total_sales + .5);
    second_ul.appendChild(title_li);
};

third.calculate_sales = function () {
    for (var i = 0; i < 14; i++) {
        var random_custs = getRandomIntInclusive(this.min_custs, this.max_custs);
        var random_sales = random_custs * this.avg_purchase;
        third.total_sales = third.total_sales + random_sales;
        this.daily_purchases.push(random_sales);
    }
};

third.render = function () {
    console.log("third to the page");
    
    var third_ul = document.getElementById("third-store");
    var title_li = document.createElement("li");
    var title_h3 = document.createElement("h3");

    title_h3.textContent = third.name + " Hourly purchases";
    third_ul.appendChild(title_h3);
    for (var i = 0; i < this.daily_purchases.length; i++) {
        var new_li = document.createElement("li");
        var purchases = Math.floor(this.daily_purchases[i] + .5);
        new_li.textContent = `Hour ${i + 6}:00 to ${i + 7}:00 purchases: ${purchases}`;
        third_ul.appendChild(new_li);
    }
    title_li.textContent = "Total: " + Math.floor(third.total_sales + .5);
    third_ul.appendChild(title_li);
};

fourth.calculate_sales = function () {
    for (var i = 0; i < 14; i++) {
        var random_custs = getRandomIntInclusive(this.min_custs, this.max_custs);
        var random_sales = random_custs * this.avg_purchase;
        fourth.total_sales = fourth.total_sales + random_sales;
        this.daily_purchases.push(random_sales);
    }
};

fourth.render = function () {
    console.log("fourth to the page");
    
    var fourth_ul = document.getElementById("fourth-store");
    var title_li = document.createElement("li");
    var title_h3 = document.createElement("h3");

    title_h3.textContent = fourth.name + " Hourly purchases";
    fourth_ul.appendChild(title_h3);
    for (var i = 0; i < this.daily_purchases.length; i++) {
        var new_li = document.createElement("li");
        var purchases = Math.floor(this.daily_purchases[i] + .5);
        new_li.textContent = `Hour ${i + 6}:00 to ${i + 7}:00 purchases: ${purchases}`;
        fourth_ul.appendChild(new_li);
    }
    title_li.textContent = "Total: " + Math.floor(fourth.total_sales + .5);
    fourth_ul.appendChild(title_li);
};

fifth.calculate_sales = function () {
    for (var i = 0; i < 14; i++) {
        var random_custs = getRandomIntInclusive(this.min_custs, this.max_custs);
        var random_sales = random_custs * this.avg_purchase;
        fifth.total_sales = fifth.total_sales + random_sales;
        this.daily_purchases.push(random_sales);
    }
};

fifth.render = function () {
    console.log("fifth to the page");
    
    var fifth_ul = document.getElementById("fifth-store");
    var title_li = document.createElement("li");
    var title_h3 = document.createElement("h3");

    title_h3.textContent = fifth.name + " Hourly purchases";
    fifth_ul.appendChild(title_h3);
    for (var i = 0; i < this.daily_purchases.length; i++) {
        var new_li = document.createElement("li");
        var purchases = Math.floor(this.daily_purchases[i] + .5);
        new_li.textContent = `Hour ${i + 6}:00 to ${i + 7}:00 purchases: ${purchases}`;
        fifth_ul.appendChild(new_li);
    }
    title_li.textContent = "Total: " + Math.floor(fifth.total_sales + .5);
    fifth_ul.appendChild(title_li);
};

first.calculate_sales(); 
first.render();
  
second.calculate_sales();
second.render();

third.calculate_sales();
third.render();

fourth.calculate_sales();
fourth.render();

fifth.calculate_sales();
fifth.render();