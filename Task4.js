function Device(name, power) {
    this.name = name;
    this.power = power;
    this.plugged = false;
  }
  
  Device.prototype.plugIn = function() {
    this.plugged = true;
    console.log(this.name + ' is plugged in.');
  }
  
  Device.prototype.unplug = function() {
    this.plugged = false;
    console.log(this.name + ' is unplugged.');
  }
  
  function Lamp(name, power, type) {
    Device.call(this, name, power);
    this.type = type;
  }
  
  Lamp.prototype = Object.create(Device.prototype);
  Lamp.prototype.constructor = Lamp;
  
  Lamp.prototype.brightnessUp = function() {
    console.log(this.name + ' brightness up.');
  }
  
  function Computer(name, power, brand) {
    Device.call(this, name, power);
    this.brand = brand;
  }
  
  Computer.prototype = Object.create(Device.prototype);
  Computer.prototype.constructor = Computer;
  
  Computer.prototype.start = function() {
    console.log(this.name + ' is starting up.');
  }
  
  const lamp = new Lamp('Table Lamp', 60, 'LED');
  const computer = new Computer('Desktop Computer', 500, 'Dell');
  
  console.log(lamp);
  console.log(computer);
  
  lamp.plugIn();
  computer.plugIn();
  
  lamp.brightnessUp();
  computer.start();
  
  lamp.unplug();
  computer.unplug();