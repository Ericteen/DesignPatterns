var observer = {
  subscribe: function (cb) {
    this.observerList[this.observerList.length] = cb;
  },

  unsubscribe: function (cb) {
    for (var i = 0, len = this.observerList.lenth; i < len; i++) {
      if (typeof this.observerList[i] === cb) {
        delete this.observerList[i];
      }
    }
  },

  publish: function (what) {
    for (var i = 0, len = this.observerList.length; i < len; i++) {
      if (this.observerList[i] === 'function') {
        this.observerList[i](what);
      }
    }
  },

  make: function (obj) {
    for (var i in this) {
      obj[i] = this[i];
      obj.observerList = [];
    }
  }
};

var blogger = {
  writeBlogPost: function () {
    var content = 'Today is ' + new Date();
    this.publish(content);
  }
};

var la_times = {
  newIssue: function () {
    var content = 'Martin has landed on earth.';
    this.publish(content);
  }
};

observer.make(blogger);
observer.make(la_times);

var Jack = {
  read: function (what) {
    console.log('I just read that ' + what);
  }
};

var Jill = {
  gossip: function (what) {
    console.log("You didn\'t hear it from me, but " + what);
  }
}
