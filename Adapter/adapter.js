var getGDCity = function () {
  var GDCity = [
    {
      name: 'Shenzhen',
      id: 11
    },
    {
      name: 'Guangzhou',
      id: 12
    }
  ];
  return GDCity;
};

var render = function (fn) {
  console.log('开始渲染广东省地图');
  document.write(JSON.stringify(fn()));
};

var newGDCity = {
  Shenzhen: 11,
  Guangdong: 12,
  Zhuhai: 13
};

var addressAdapter = function (oldAddressFn) {
  var address = {},
      oldAddress = oldAddressFn();
  for (var i = 0, len = oldAddress.length; i < len; i++) {
    address[oldAddress.name] = oldAddress.id;
  }
  return function () {
    return address;
  };
};

render(addressAdapter(getGDCity));