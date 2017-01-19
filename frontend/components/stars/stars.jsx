import React from 'react';

class Stars extends React.Component {
  constructor() {
    super();

    this.state = { width: null, height: null };

    this.stars = [];
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      });
    }

    this.setState({
      width: window.innerWidth,
      height: window.innerHeight }, () => this.draw());
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

    this.stars.forEach(star => {
      if (star.x > this.state.width / 2)
        star.x += 0.02;
      else
        star.x -= 0.02;

      if (star.y > this.state.height / 2)
        star.y += 0.02;
      else
        star.y -= 0.02;

      ctx.strokeStyle = 'rgba(240, 240, 240, 0.8)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 1, 0, 2 * Math.PI);
      ctx.stroke();
    });

    requestAnimationFrame(this.draw);
  }

  render() {
    return (
      <div>
        <canvas
          width={this.state.width}
          height={this.state.height}
          ref="stars"
          className="stars"></canvas>
      </div>
    );
  }
}

export default Stars;
