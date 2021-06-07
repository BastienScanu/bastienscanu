import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import {TweenLite} from 'gsap';

class Home extends Component {
  componentDidMount() {
    if (window.matchMedia('(min-width: 48em)').matches) {
      let width;
      let height;
      let largeHeader;
      let canvas;
      let ctx;
      let points;
      let animateHeader = true;
      let target;

      // Util
      const getDistance = (p1, p2) => {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
      };

      // Canvas manipulation
      const drawLines = p => {
        if (!p.active) {
          return;
        }

        for (let i = 0; i < p.closest.length; i++) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.closest[i].x, p.closest[i].y);
          ctx.strokeStyle = `rgba(216, 255, 205, ${p.active})`;
          ctx.stroke();
        }
      };

      const circle = (pos, rad, color) => {
        const _this = {};

        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;

        return _this;
      };

      const drawCircle = point => {
        if (!point.active) {
          return;
        }

        ctx.beginPath();
        ctx.arc(point.pos.x, point.pos.y, point.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(316, 255, 205, ${point.active})`;
        ctx.fill();
      };

      const initHeader = () => {
        width = window.innerWidth;
        height = window.innerHeight * 0.7;
        target = {x: width / 2, y: height / 2};

        largeHeader = document.getElementById('particles');
        largeHeader.style.height = `${height}px`;

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // Create points
        points = [];
        for (let x = 0; x < width; x += width / 20) {
          for (let y = 0; y < height; y += height / 20) {
            const px = x + (Math.random() * width / 20);
            const py = y + (Math.random() * height / 20);
            const p = {x: px, originX: px, y: py, originY: py};
            points.push(p);
          }
        }

        // For each point find the 5 closest points
        for (let i = 0; i < points.length; i++) {
          const closest = [];
          const p1 = points[i];
          for (let j = 0; j < points.length; j++) {
            const p2 = points[j];
            if (p1 !== p2) {
              let placed = false;
              for (let k = 0; k < 5; k++) {
                if (!placed) {
                  if (closest[k] === undefined) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }

              for (let k = 0; k < 5; k++) {
                if (!placed) {
                  if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
            }
          }

          p1.closest = closest;
        }

        for (let i = 0; i < points.length; i++) {
          const c = circle(points[i], 2 + (Math.random() * 2), 'rgba(255,255,255,0.3)');
          points[i].circle = c;
        }
      };

      const shiftPoint = p => {
        TweenLite.to(p, 1 + Number(Math.random()), {x: p.originX - 50 + (Math.random() * 100),
          y: p.originY - 50 + (Math.random() * 100),
          onComplete: () => {
            shiftPoint(p);
          }});
      };

      const mouseMove = e => {
        let posx = 0;
        let posy = 0;
        if (e.pageX || e.pageY) {
          posx = e.pageX;
          posy = e.pageY;
        } else if (e.clientX || e.clientY) {
          posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        target.x = posx;
        target.y = posy;
      };

      const scrollCheck = () => {
        animateHeader = document.body.scrollTop <= height;
      };

      const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = `${height}px`;
        canvas.width = width;
        canvas.height = height;
      };

      const animate = () => {
        if (animateHeader) {
          ctx.clearRect(0, 0, width, height);
          for (let i = 0; i < points.length; i++) {
            // Detect points in range
            if (Math.abs(getDistance(target, points[i])) < 4000) {
              points[i].active = 0.3;
              points[i].circle.active = 0.6;
            } else if (Math.abs(getDistance(target, points[i])) < 20000) {
              points[i].active = 0.1;
              points[i].circle.active = 0.3;
            } else if (Math.abs(getDistance(target, points[i])) < 40000) {
              points[i].active = 0.02;
              points[i].circle.active = 0.1;
            } else {
              points[i].active = 0;
              points[i].circle.active = 0;
            }

            drawLines(points[i]);
            drawCircle(points[i].circle);
          }
        }

        requestAnimationFrame(animate);
      };

      const initAnimation = () => {
        animate();
        for (let i = 0; i < points.length; i++) {
          shiftPoint(points[i]);
        }
      };

      const addListeners = () => {
        if (!('ontouchstart' in window)) {
          window.addEventListener('mousemove', mouseMove);
        }

        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
      };

      initHeader();
      initAnimation();
      addListeners();
    }
  }

  render() {
    const {t} = this.props;
    return (
      <section id="home">
        <div id="particles" className="particles">
          <canvas id="demo-canvas"/>
          <div className="container" id="hey">
            <h1>Bastien Scanu</h1>
            <h2>{t('home:job')}</h2>
          </div>
        </div>
      </section>
    );
  }
}

Home.defaultProps = {
  t: PropTypes.func
};

Home.propTypes = {
  t: PropTypes.func
};

export default withTranslation(['common', 'home'])(Home);
