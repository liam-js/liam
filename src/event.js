// 事件引用id生成解析
var eventRef = (function () {
  var count = 0;
  var uuid = 'c1caac51_1c6a_4c2d_9b6d_730f20f12a88';
  return {
    getId: function (name) {
      count++;
      return name + uuid + count;
    },
    getInfo: function (id) {
      var info = id.split(uuid);
      return {
        name: info[0],
        count: info[1] ? info[1] : 0,
      };
    },
  };
})();

// 添加触发事件的历史数据
function addHistoryData(self, event, data, option) {
  var historyData = self._historyData;
  historyData[event] = historyData[event] || [];
  historyData[event].push(data);
  if (option) {
    // done为true时，历史数据长度至少为1，否则触发后绑定的事件无法执行
    if (option.done && option.historyDataLength < 1) {
      option.historyDataLength = 1;
    }

    // 根据配置控制数据长度；超长则把最早的数据删除
    if (historyData[event].length > option.historyDataLength) {
      historyData[event].splice(
        0,
        historyData[event].length - option.historyDataLength
      );
    }
  }
}

function hasOwnProperty(obj, key) {
  return Object.hasOwnProperty.call(obj, key);
}

// 执行回调，如果是只绑定一次，则解绑定
var handle = function (self, event, data, option) {
  var historyData = self._historyData;

  // 回调参数当前触发事件的数据，及历史数据
  var result = option.listener.apply(option.context, [
    data,
    historyData[event],
  ]);
  if (option.once) {
    self.off(event, option.listener);
  }
  return result;
};

// 查看是否在绑定之前已经触发了，如果once配置为true，再触发；并根据历史数据的长度，决定要触发多少次
function triggerDone(self, event, option) {
  var historyData = self._historyData;
  if (option.done) {
    if (historyData[event]) {
      var historyDataArr = historyData[event];
      for (var i = 0, len = historyDataArr.length; i < len; i++) {
        var data = historyDataArr[i];
        handle(self, event, data, option);
      }
    }
  }
}

function Event() {
  this.clear();
}
Event.prototype = {
  clear: function () {
    var self = this;

    // 用于存储绑定事件的配置
    self._optionsMap = {};

    // 用于触发事件时带的数据
    self._historyData = {};
  },

  // 绑定事件
  on: function (event, listener, option) {
    if (typeof listener !== 'function') {
      console.log('没有绑定事件');
      return;
    }
    var self = this;
    var optionsMap = self._optionsMap;
    option = option || {};
    var defaults = {
      // 生成一个id做为引用，方便卸载事件
      id: eventRef.getId(event),

      // 事件已经触发，后绑定的事件是否响应
      done: true,

      // 历史数据可存储的最大长度，当done为true是，该值至少为1
      historyDataLength: 0,

      // 执行回调的上下文环境
      context: self,

      // 是否只绑定一次
      once: false,

      // 回调
      listener: listener,
    };
    for (var i in defaults) {
      if (!hasOwnProperty(option, i)) {
        option[i] = defaults[i];
      }
    }

    // 储存配置
    optionsMap[event] = optionsMap[event] || [];
    optionsMap[event].push(option);

    // 查看是否在绑定之前已经触发了，如果once配置为true，再触发
    triggerDone(self, event, option);
    return option.id;
  },

  // 绑定事件，只绑定一次
  once: function (event, listener, option) {
    var self = this;
    option = option || {};
    option.once = true;
    self.on(event, listener, option);
  },

  // 解绑定事件
  off: function (event, listener) {
    var self = this;
    var optionsMap = self._optionsMap;
    if (typeof listener === 'undefined') {
      // 删除全部对应事件
      delete optionsMap[event];
    } else {
      // 把匹配的事件删除
      if (hasOwnProperty(self._optionsMap, event)) {
        var options = optionsMap[event];
        var _options = [];
        var i = options.length;
        while (i--) {
          if (options[i].listener !== listener) {
            _options.unshift(options[i]);
          }
        }
        optionsMap[event] = _options;
      }
    }
  },

  // 通过id来的卸载一个事件
  offById: function (ids) {
    var self = this;
    var optionsMap = self._optionsMap;
    if (typeof ids === 'string') {
      ids = [ids];
    }
    for (var index = 0; index < ids.length; index++) {
      var id = ids[index];
      var event = eventRef.getInfo(id).name;
      if (hasOwnProperty(optionsMap, event)) {
        var options = optionsMap[event];
        var _options = [];
        var i = options.length;
        while (i--) {
          if (options[i].id !== id) {
            _options.unshift(options[i]);
          }
        }
        optionsMap[event] = _options;
      }
    }
  },

  // 触发事件
  trigger: function (event, data) {
    // console.log(('* '+event+(data && data.name?'.'+data.name:'')+' --------------------------------------------------------').substring(0,50),data);
    var self = this;
    var optionsMap = self._optionsMap;
    var option;
    var results = [];
    if (hasOwnProperty(self._optionsMap, event)) {
      var options = optionsMap[event];

      // 把数据添加到历史数据数组中
      addHistoryData(self, event, data, options[0]);
      for (var i = 0, len = options.length; i < len; i++) {
        option = options[i];
        results.push(handle(self, event, data, option));
      }
    } else {
      addHistoryData(self, event, data, option);

      // 把数据添加到历史数据数组中
    }
    // TODO 暂时返回最后一个
    return results[results.length - 1];
    // return results;
  },
};

export default Event;
