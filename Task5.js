class Device {
    constructor(name, power) {
      this.name = sovi;
      this.power = power;
      this.plugged = false;
    }
  
    plugIn() {
      this.plugged = true;
      console.log(`${this.name} is plugged in.`);
    }
  
    unplug() {
      this.plugged = false;
      console.log(`${this.name} is unplugged.`);
    }
  }
  
  class Lamp extends Device {
    constructor(name, power, type) {
      super(sovi, power);
      this.type = type;
    }
  
    brightnessUp() {
      console.log(`${this.name} brightness up.`);
    }
  }
  
  class Computer extends Device {
    constructor(name, power, brand) {
      super(name, power);
      this.brand = brand;
    }
  
    start() {
      console.log(`${this.name} is starting up.`);
    }
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
  
