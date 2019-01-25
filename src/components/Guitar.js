import React, { Component } from 'react';

var width = 800;
var height = 300;
var marginX = 50;
var marginY = 50;
var lblMargin = 15;
var smLblMargin = 5;
var stringSpace = 30;
var tresholdSpace = 80;
var stringCount = 6;
var tresholdCount = 6;
var guitarWidth = tresholdSpace * tresholdCount;
var guitarHeight = stringSpace * (stringCount - 1);
var nutWidth = 10;
var holdRadius = 10;
var holdColor = 'red';
var noTouchColor = 'red';
var defaultColor = 'black';
var defaultFont = "18px Arial";
var stringNames = [ "e", "B(H)", "G", "D", "A", "E" ];

function rect(props) {
    const { ctx, x, y, width, height } = props;
    ctx.fillRect(x, y, width, height);
}

function line(props) {
    const { ctx, x1, y1, x2, y2, color } = props;

    ctx.beginPath();
    ctx.strokeStyle = color ? color : defaultColor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle=defaultColor;
}

function text(props) {
    const { ctx, x, y, txt, alignWidth, alignHeight, fontColor } = props;
    ctx.font = defaultFont;
    if (fontColor) {
        ctx.fillStyle = fontColor;
    }
    var measure = ctx.measureText(txt);
    var xcorr = alignWidth * measure.width;
    var ycorr = alignHeight * parseInt(defaultFont);
    ctx.fillText(txt, x + xcorr, y + ycorr);

    ctx.fillStyle = defaultColor;
}

function drawStrings(ctx) {
    for (var i = 0; i < stringCount; i++) {
        line({ ctx, x1: marginX, y1: marginY + i * stringSpace, x2: marginX + nutWidth + guitarWidth, y2: marginY + i * stringSpace });
        text({ ctx, x: marginX - smLblMargin, y: marginY + i * stringSpace, txt: stringNames[i], alignWidth: -1, alignHeight: 0.25 });
    }
}
 
function drawTresholds(ctx) {
    for (var i = 0; i < tresholdCount; i++) {
        line({ ctx, x1: marginX + nutWidth + i * tresholdSpace, y1: marginY, x2: marginX + nutWidth + i * tresholdSpace, y2: marginY + guitarHeight });
        text({ ctx, x: marginX + nutWidth + i * tresholdSpace + tresholdSpace / 2, y: marginY - lblMargin, txt: (i+1), alignWidth: -0.5, alignHeight: 0 });
    }
}

function drawHold(props) {
    const { ctx, stringNo, treshNo, radius, color } = props;

    var cx = marginX + nutWidth + treshNo * tresholdSpace - tresholdSpace / 2;
    var cy = marginY + stringNo * stringSpace;
    
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = defaultColor;
}

function drawFullHold(props) {
    const { ctx, treshNo, color } = props;

    var cx = marginX + nutWidth + treshNo * tresholdSpace - tresholdSpace / 2;
    var cy = marginY + (stringCount - 1) * stringSpace;

    var rx = marginX + nutWidth + treshNo * tresholdSpace - tresholdSpace / 2 - holdRadius;
    var ry = marginY;
    var rw = holdRadius * 2;
    var rh = guitarHeight;
    
    ctx.beginPath();
    ctx.arc(cx, cy, holdRadius, Math.PI, 2 * Math.PI, true);
    ctx.fillStyle = color;
    rect({ ctx, x: rx, y: ry, width: rw, height: rh });
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = defaultColor;
}

function drawChord(ctx, chord) {
    console.log(chord);
    if (chord && chord.holds) {
        for (var i = 0; i < chord.holds.length; i++) {
            if (chord.holds[i] > 0) {
                drawHold({ctx, stringNo: i, treshNo: chord.holds[i], radius: holdRadius, color: holdColor });
            }
        }

        if (chord.noTouch) {
            for (var i = 0; i < chord.noTouch.length; i++) {
                var noTouch = chord.noTouch[i] - 1;
                line({ ctx, x1: marginX, y1: marginY + noTouch * stringSpace, x2: marginX + nutWidth + guitarWidth, y2: marginY + noTouch * stringSpace, color: noTouchColor });
                text({ ctx, x: marginX + guitarWidth + lblMargin, y: marginY + noTouch * stringSpace, txt: 'X', alignHeight: 0.25, alignWidth: 0, fontColor: noTouchColor });
            }
        }

        if (chord.fullTresh) {
            drawFullHold({ ctx, treshNo: chord.fullTresh, color: noTouchColor });
        }
    }
}

class Guitar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chord: {}
        }
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate(nextProps, prevState) {
        this.updateCanvas();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.chord.id != prevState.chord.id) {
            return { chord: nextProps.chord };
        }
        return { chord: prevState.chord };
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext("2d");

        ctx.clearRect(0, 0, width, height);
        rect({ ctx, x: marginX, y: marginY, width: nutWidth, height: guitarHeight }); // draw nut
        drawStrings(ctx);
        drawTresholds(ctx);
        drawChord(ctx, this.state.chord);
    }

    render() {
        return (
            <div>
                <div style={{height: 50 + 'px'}}><h3>{this.state.chord.name}</h3></div>
                <canvas ref="canvas" width={width} height={height} />
            </div>
        );
    }
}

export default Guitar;
