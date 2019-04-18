var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.chooseTable = function () {
        console.log('Choose table into cafe');
    };
    Table.prototype.sitOnTheTable = function () {
        console.log('Sit down to the table');
    };
    return Table;
}());
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.askForMenu = function () {
        console.log('Ask for menu');
    };
    Menu.prototype.openMenu = function () {
        console.log('Open the menu');
    };
    Menu.prototype.chooseDishes = function () {
        console.log('Choose dishes from menu');
    };
    return Menu;
}());
var MakeOrder = /** @class */ (function () {
    function MakeOrder() {
    }
    MakeOrder.prototype.askWaiterToCome = function () {
        console.log('Ask waiter come to your table');
    };
    MakeOrder.prototype.makeAnOrder = function () {
        console.log('Make the order from menu');
    };
    MakeOrder.prototype.closeMenu = function () {
        console.log('Close the menu');
    };
    MakeOrder.prototype.giveMenuToWaiter = function () {
        console.log('Give menu to the waiter');
    };
    return MakeOrder;
}());
var Pay = /** @class */ (function () {
    function Pay() {
    }
    Pay.prototype.askWaiterForCheck = function () {
        console.log('Ask waiter for check of your dishes');
    };
    Pay.prototype.putMoneyToCheck = function () {
        console.log('Put money for the order');
    };
    Pay.prototype.giveMoneyWithCheckToWaiter = function () {
        console.log('Give money with check to the waiter');
    };
    Pay.prototype.getUpFromTable = function () {
        console.log('Get up from the table');
    };
    return Pay;
}());
// Класс с фасадом
var DinnerFacade = /** @class */ (function () {
    function DinnerFacade(table, menu, makeorder, pay) {
        this.table = table;
        this.menu = menu;
        this.makeorder = makeorder;
        this.pay = pay;
    }
    DinnerFacade.prototype.makeOrder = function () {
        this.table.chooseTable();
        this.table.sitOnTheTable();
        this.menu.askForMenu();
        this.menu.openMenu();
        this.menu.chooseDishes();
        this.makeorder.askWaiterToCome();
        this.makeorder.makeAnOrder();
        this.makeorder.closeMenu();
        this.makeorder.giveMenuToWaiter();
    };
    DinnerFacade.prototype.payment = function () {
        this.pay.askWaiterForCheck();
        this.pay.putMoneyToCheck();
        this.pay.giveMoneyWithCheckToWaiter();
        this.pay.getUpFromTable();
    };
    return DinnerFacade;
}());
var table = new Table();
var menu = new Menu();
var makeorder = new MakeOrder();
var pay = new Pay();
var valik = new DinnerFacade(table, menu, makeorder, pay);
valik.makeOrder();
valik.payment();
