import React, { Component } from 'react';

var width = 800;
var height = 500;
var marginX = 50;
var marginY = 50;
var stringSpace = 30;
var tresholdSpace = 80;
var stringCount = 6;
var tresholdCount = 6;
var guitarWidth = tresholdSpace * tresholdCount;
var guitarHeight = stringSpace * (stringCount - 1);
var nutWidth = 10;

function rect(props) {
  const { ctx, x, y, width, height } = props;
  ctx.fillRect(x, y, width, height);
}

function line(props) {
  const { ctx, x1, y1, x2, y2 } = props;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function drawStrings(ctx) {
  for (var i = 0; i < stringCount; i++) {
    line({ctx, x1: marginX, y1: marginY + i * stringSpace, x2: marginX + nutWidth + guitarWidth, y2: marginY + i * stringSpace});
  }
}

function drawTresholds(ctx) {
    for (var i = 0; i < tresholdCount; i++) {
      line({ctx, x1: marginX + nutWidth + i * tresholdSpace, y1: marginY, x2: marginX + nutWidth + i * tresholdSpace, y2: marginY + guitarHeight});
    }
  }

class Guitar extends Component {
    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext("2d");

        ctx.clearRect(0, 0, width, height);
        rect({ctx, x: marginX, y: marginY, width: nutWidth, height: guitarHeight}); // draw nut
        drawStrings(ctx);
        drawTresholds(ctx);
    }
    
    render() {
        return(
            <canvas ref="canvas" width={width} height={height} />
        );
    }
}

export default Guitar;
