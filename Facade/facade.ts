  class Table {

    chooseTable() {
      console.log('Choose table into cafe');
    }
  
    sitOnTheTable() {
      console.log('Sit down to the table');
    }
  
  }
  
  class Menu {
  
    askForMenu() {
      console.log('Ask for menu');
    }
  
    openMenu() {
      console.log('Open the menu');
    }
  
    chooseDishes() {
      console.log('Choose dishes from menu');
    }
  
  }
  
  class MakeOrder {
  
    askWaiterToCome() {
      console.log('Ask waiter come to your table');
    }
  
    makeAnOrder() {
      console.log('Make the order from menu');
    }
  
    closeMenu() {
      console.log('Close the menu');
    }
  
    giveMenuToWaiter() {
      console.log('Give menu to the waiter');
    }
  
  }
  
  class Pay {
  
    askWaiterForCheck() {
      console.log('Ask waiter for check of your dishes');
    }
  
    putMoneyToCheck() {
      console.log('Put money for the order');
    }
  
    giveMoneyWithCheckToWaiter() {
      console.log('Give money with check to the waiter');
    }
  
    getUpFromTable() {
      console.log('Get up from the table');
    }
  
  }
  
  // Класс с фасадом
  class DinnerFacade {
  
    private table: Table;
    private menu: Menu;
    private makeorder: MakeOrder;
    private pay: Pay;
  
    constructor(table: Table, menu: Menu, makeorder: MakeOrder, pay: Pay) {
      this.table = table;
      this.menu = menu;
      this.makeorder = makeorder;
      this.pay = pay;
    }
  
    public makeOrder() {
  
      this.table.chooseTable();
      this.table.sitOnTheTable();
  
      this.menu.askForMenu();
      this.menu.openMenu();
      this.menu.chooseDishes();
  
      this.makeorder.askWaiterToCome();
      this.makeorder.makeAnOrder();
      this.makeorder.closeMenu();
      this.makeorder.giveMenuToWaiter();
  
    }
  
    public payment() {
      this.pay.askWaiterForCheck();
      this.pay.putMoneyToCheck();
      this.pay.giveMoneyWithCheckToWaiter();
      this.pay.getUpFromTable();
    }
  
  }
  
  const table = new Table();
  const menu = new Menu();
  const makeorder = new MakeOrder();
  const pay = new Pay();
  
  let valik = new DinnerFacade(table, menu, makeorder, pay);
  valik.makeOrder();
  valik.payment();
  