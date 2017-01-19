import Vector from './vector';

class ShootingStar {
  constructor(maxX, maxY) {
    this.pos = new Vector(Math.random() * maxX, Math.random() * maxY);
    this.velocity = this.randomVector();
    this.age = 0;
    this.lifespan = 20 + Math.random() * 80;
    this.trail = [];
    this.fade = 0.8;
    this.alive = true;

    this.move = this.move.bind(this);
    this.updateTrail = this.updateTrail.bind(this);
  }

  randomVector() {
    let x = Math.random() * 2;
    let y = Math.random() * 2;
    x = Math.floor(Math.random() * 2) === 0 ? x * -1 : x;
    y = Math.floor(Math.random() * 2) === 0 ? y * -1 : y;

    return new Vector(x, y);
  }

  move(ctx) {
    this.updateTrail();

    this.trail.forEach(point => {
      ctx.strokeStyle = `rgba(240, 240, 240, ${this.fade})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 1, 0, 2 * Math.PI);
      ctx.stroke();
    });
  }

  updateTrail() {
    if (this.age < this.lifespan) {
      this.trail.push(this.pos);
      this.pos = this.pos.plus(this.velocity);
    } else {
      this.fade -= 0.02;
      if (this.fade <= 0)
        this.alive = false;
    }

    this.age++;
  }
}

export default ShootingStar;
