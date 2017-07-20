var closeDoor = {
    exeute: function() {
        console.log('关门');
    }
};

var openPC = {
    exeute: function() {
        console.log('开电脑');
    }
};

var openQQ = {
    exeute: function() {
        console.log('打开QQ');
    }
};

var MacroCommand = function () {
  this.commandList = [];
  return {
    add: function (command) {
      this.commandList.push(command);
    },

    execute: function () {
      for ( var i = 0, len = this.commandList.length; i < len; i++) {
        this.commandList[i].execute();
      }
    }
  };
};

var macro = new MacroCommand();
macro.add(closeDoor);
macro.add(openPC);
marco.add(openQQ);

macro.execute();