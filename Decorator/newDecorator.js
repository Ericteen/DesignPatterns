// 使用列表实现
function Sale(price) {
    this.price = price || 100;
    this.decorators_list = [];
}

Sale.decorators = {};

Sale.decorators.fedtax = {
    getPrice: function (price) {
        return price + price * 5 / 100;
    }
};

Sale.decorators.quebec = {
    getPrice: function (price) {
        return price + price * 7.5 / 100;
    }
};

Sale.decorators.money = {
    getPrice: function (price) {
        return "$" + price.toFixed(2);
    }
};

Sale.prototype.decorate = function (decorator) {
    this.decorators_list.push(decorator);
};

Sale.prototype.getPrice = function () {
    var price = this.price,
        i,
        max = this.decorators_list.length,
        name;
    for (i = 0; i < max; i += 1) {
        name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
};


// decorator 的调用 1
var sale = new Sale(100); // 价格是100美元
sale = sale.decorate('fedtax'); // 加上联邦税
sale = sale.decorate('quebec'); // 加上省税
sale = sale.decorate('money'); // 格式化
sale.getPrice(); // "$112.88"

// decorator 的调用 2
var sale = new Sale(100); // 价格是100美元
sale = sale.decorate('fedtax'); // 加上联邦税
sale = sale.decorate('cdn'); // 用加拿大元格式化
sale.getPrice(); // "CDN$ 105.00"