function Menu(item) {
    this.item = item;
}

//foods
const food1 = new Menu("Sweet & Smokey Burger R80");
const food2 = new Menu("Classic Bacon Burger R92");
const food3 = new Menu("Guacamole Burger R74");
const food4 = new Menu("Triple Berry Crumble Cake R85");
const food5 = new Menu("Cheese cake R42");
	
//drinks
const drink1 = new Menu("Cappuccino R32");
const drink2 = new Menu("Latte R43");
const drink3 = new Menu("Hot Chocolate R38");
const drink4 = new Menu("Aperol Spritz R51");
const drink5 = new Menu("Margarita R63");

let foods= [food1, food2, food3, food4, food5];
let drinks= [drink1, drink2, drink3, drink4, drink5];
 
let cafe = {};
cafe.addMenu = function (){
	foods.forEach(function(f){
			let fd = document.getElementById('foods');
			let list = document.createElement('li');
				list.innerHTML = f.item;
			 fd.appendChild(list)
	});

	drinks.forEach(function(d){
			let dr = document.getElementById('drinks');
			let list = document.createElement('li');
				list.innerHTML = d.item;
			 dr.appendChild(list);
	});
}
cafe.addMenu();


//prompt session 

function theOrder(){
    var cost = 0;
        maincourse = true;
        drink = true;

        alert('Please choose a (number) for your Order');

        var food = prompt('Do you want: \r\n 1) Sweet & Smokey Burger R80 \r\n 2) Classic Bacon Burger R92 \r\n 3) Guacamole Burger R74 \r\n 4) Triple Berry Crumble Cake R85 \r\n 5) Cheese cake R42');

        if(food == 1){
            cost+=80;
            document.getElementById('order1').innerHTML = food1.item;
        } else if(food == 2){
            cost +=92;
            document.getElementById('order1').innerHTML = food2.item;
        } else if (food == 3) {
            cost +=74;
            document.getElementById('order1').innerHTML = food3.item;
        }else if (food == 4) {
            cost +=85;
            document.getElementById('order1').innerHTML = food4.item;
        }else if (food == 5) {
            cost +=42;
            document.getElementById('order1').innerHTML = food5.item;
        } else{
            console.log('You did not buy any food');
            maincourse = false;
        }

        var drinkOrder = prompt('Would you like a drink yes or no?');

        if(drinkOrder == 'yes'){
            var drinkFlavour  = prompt('what will be your drink \r\n 1) Cappuccino R32 \r\n 2) Latte R43 \r\n 3) Hot Chocolate R38 \r\n 4) Aperol Spritz R51 \r\n 5) Margarita R63');
        }
        if(drinkFlavour == 1){
            cost +=32;
            document.getElementById('order2').innerHTML = drink1.item;
        } else if(drinkFlavour == 2) {
            cost +=43;
            document.getElementById('order2').innerHTML = drink2.item;
        }else if(drinkFlavour == 3){
            cost +=38;
            document.getElementById('order2').innerHTML = drink3.item;
        }else if(drinkFlavour == 4){
            cost +=51;
            document.getElementById('order2').innerHTML = drink4.item;
        }else if(drinkFlavour == 5){
            cost +=63;
            document.getElementById('order2').innerHTML = drink5.item;
        }else{
            console.log('You did not buy any drink');
            drink = false;
        }

        var Tip = prompt('Please enter Tip amount:');
        document.getElementById('order3').innerHTML = 'R' + Tip;
        var addTip = Tip * 1;
        cost+=addTip;
        document.getElementById('order4').innerHTML = 'Your total cost is: R' + cost;
        alert('Your total cost is: R' + cost);
    }

    function chkOut(){
    	alert('Thank you for visiting, \r\n We would love to have you back Soon.')
    }