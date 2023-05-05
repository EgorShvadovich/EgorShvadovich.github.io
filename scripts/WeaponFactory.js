class WeaponFactory {
    createDeagle() {
      return new Deagle();
    }
  
    createAk() {
      return new Ak();
    }
  
    createAwp() {
      return new Awp();
    }
  }
  
  class Deagle {
    constructor() {
      this.name = "Deagle";
      this.damage = 5;
      this.soundShoot = "deagle";
      this.image = 'styles/images/hand_deagle.png';
    }
  }
  
  class Ak {
    constructor() {
      this.name = "Ak";
      this.damage = 10;
      this.soundShoot = "ak";
      this.image = 'styles/images/hand_ak.png';
    }
  }
  
  class Awp {
    constructor() {
      this.name = "Awp";
      this.damage = 20;
      this.soundShoot = "awp1";
      this.image = 'styles/images/hand_awp.png';
    }
  }