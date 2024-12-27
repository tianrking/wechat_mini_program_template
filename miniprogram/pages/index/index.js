// index.js
Page({
  data: {
      serverUrl: 'http://your-server-url.com/api',  // 请替换为你的服务器地址
      deviceStatus: '正常', // 设备状态
      connectionStatus: '未连接', // 连接状态
      dataList: [
         { label: '温度', value: '25°C' },
        { label: '湿度', value: '60%' },
       { label: '电压', value: '12V' },
      ],
      logMessages: ['程序启动'], // 日志信息
      inputValue: '', // 输入框的值
  },
  handleSettings: function () {
      console.log('Settings button clicked');
      // TODO: 跳转到设置页面
  },
  handleConnection: function () {
      console.log('Connection button clicked');
      // TODO: 连接蓝牙设备
      this.setData({ connectionStatus: '已连接'});
       this._addLogMessage("蓝牙连接成功");
  },
  handleButtonA: function () {
      console.log('Button A clicked');
      this._sendCommand('Button A');
      this._addLogMessage("发送 Button A 指令");
  },

  handleButtonB: function () {
      console.log('Button B clicked');
      this._sendCommand('Button B');
       this._addLogMessage("发送 Button B 指令");
  },

  handleButtonC: function () {
      console.log('Button C clicked');
      this._sendCommand('Button C');
      this._addLogMessage("发送 Button C 指令");
  },

  handleButtonD: function () {
      console.log('Button D clicked');
      this._sendCommand('Button D');
       this._addLogMessage("发送 Button D 指令");
  },
    handleButtonE: function () {
      console.log('Button E clicked');
      this._sendCommand('Button E');
      this._addLogMessage("发送 Button E 指令");
  },

  handleButtonF: function () {
      console.log('Button F clicked');
      this._sendCommand('Button F');
      this._addLogMessage("发送 Button F 指令");
  },
handleInputChange: function (e) {
      this.setData({
         inputValue: e.detail.value
       });
 },
 handleSendInput: function() {
    console.log("Input : " + this.data.inputValue);
    this._sendCommand(this.data.inputValue);
    this._addLogMessage("发送指令: " + this.data.inputValue);
     this.setData({inputValue: ''});
 },
  _addLogMessage: function(message) {
      const newMessages = this.data.logMessages.concat(message);
      this.setData({logMessages: newMessages});
  },
  _sendCommand: function(command) {
      //  模拟发送post请求
      wx.request({
          url: this.data.serverUrl,
          method: 'POST',
          data: {
              command: command
          },
          success: (res) => {
              console.log('发送成功', res);
               this._addLogMessage("发送成功， 响应： " + JSON.stringify(res.data));
          },
          fail: (res) => {
              console.log('发送失败', res);
              this._addLogMessage("发送失败：" + JSON.stringify(res));
          }
      });
  },
});