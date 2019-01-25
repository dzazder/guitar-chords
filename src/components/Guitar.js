import React, { Component } from 'react';

var width = 800;
var height = 300;
var marginX = 50;
var marginY = 50;
var stringSpace = 30;
var tresholdSpace = 80;
var stringCount = 6;
var tresholdCount = 6;
var guitarWidth = tresholdSpace * tresholdCount;
var guitarHeight = stringSpace * (stringCount - 1);
var nutWidth = 10;
var holdRadius = 8;
var holdColor = 'red';
var defaultColor = 'black';

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
        line({ ctx, x1: marginX, y1: marginY + i * stringSpace, x2: marginX + nutWidth + guitarWidth, y2: marginY + i * stringSpace });
    }
}

function drawTresholds(ctx) {
    for (var i = 0; i < tresholdCount; i++) {
        line({ ctx, x1: marginX + nutWidth + i * tresholdSpace, y1: marginY, x2: marginX + nutWidth + i * tresholdSpace, y2: marginY + guitarHeight });
    }
}

function drawChord(ctx, chord) {
    console.log(chord);
    if (chord && chord.holds) {
        for (var i = 0; i < chord.holds.length; i++) {
            if (chord.holds[i] > 0) {
                var cx = marginX + nutWidth + chord.holds[i] * tresholdSpace - tresholdSpace / 2;
                var cy = marginY + i * stringSpace;
                ctx.beginPath();
                ctx.arc(cx, cy, holdRadius, 0, 2 * Math.PI, false);
                ctx.fillStyle = holdColor;
                ctx.fill();
                ctx.closePath();

                ctx.fillStyle = defaultColor;
            }
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
