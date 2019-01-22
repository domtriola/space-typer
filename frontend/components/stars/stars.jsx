import React from 'react';
import ShootingStar from './shooting_star';

class Stars extends React.Component {
  constructor() {
    super();

    this.MAX_X = 1600;
    this.MAX_Y = 2000;

    this.state = { width: null, height: null };

    this.stars = [];
    this.shootingStars = [];

    this.draw = this.draw.bind(this);
    this.zoom = this.zoom.bind(this);
    this.spawnShootingStar = this.spawnShootingStar.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < 200; i++) {
      this.stars.push({
        x: Math.random() * this.MAX_X,
        y: Math.random() * this.MAX_Y
      });
    }

    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    }, () => this.draw());
  }

  draw() {
    let top  = window.pageYOffset || document.documentElement.scrollTop;
    let left = window.pageXOffset || document.documentElement.scrollLeft;
    let newWidth = left + window.innerWidth;
    let newHeight = top + window.innerHeight;

    if (newWidth !== this.state.width || newHeight !== this.state.height) {
      this.setState({
        width: newWidth,
        height: newHeight
      });
    }

    const ctx = this.refs.stars.getContext('2d');
    ctx.clearRect(0, 0, newWidth, newHeight);

    this.cleanUp();
    this.spawnShootingStar();
    this.drawStars(ctx, this.stars, this.pan);
    this.drawShootingStars(ctx);

    requestAnimationFrame(this.draw);
  }

  drawStars(ctx, stars, movement) {
    this.stars.forEach(star => {
      movement(star);

      ctx.strokeStyle = 'rgba(240, 240, 240, 0.8)';
      ctx.fillStyle = 'rgba(240, 240, 240, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 1, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    });
  }

  cleanUp() {
    let removed = 0;
    const newStars = [];
    this.stars.forEach(star => {
      if (star.x > 0)
        newStars.push(star);
      else
        removed++;
    });

    for (let i = 0; i < removed; i++) {
      newStars.push({
        x: this.MAX_X,
        y: Math.random() * this.MAX_Y
      });
    }

    this.stars = newStars;
  }

  spawnShootingStar() {
    if (Math.floor(Math.random() * 120) === 0)
      this.shootingStars.push(new ShootingStar(this.MAX_X, this.MAX_Y));
  }

  drawShootingStars(ctx) {
    this.shootingStars = this.shootingStars.filter(star => star.alive);

    if (this.shootingStars.length !== 0)
      this.shootingStars.forEach(star => star.move(ctx));
  }

  zoom(star) {
    if (star.x > this.state.width / 2)
      star.x += 0.02;
    else
      star.x -= 0.02;

    if (star.y > this.state.height / 2)
      star.y += 0.02;
    else
      star.y -= 0.02;
  }

  pan(star) {
    star.x -= 0.15;
  }

  render() {
    return (
      <div>
        <canvas
          ref="stars"
          width={this.state.width}
          height={this.state.height}
          className="stars"></canvas>
      </div>
    );
  }
}

export default Stars;
