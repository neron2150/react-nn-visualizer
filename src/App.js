import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trainer from './nn/trainer';
import Network from './nn/network';
import Neuron from './nn/neuron';

class App extends Component {
  canvas;
  constructor() {
    super();
    this.nn =  new Network([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,1]);
    this.nn.setInput([0,1])
    this.trainer =  new Trainer();
  }
  componentDidMount() {
    this.canvas = document.getElementById('canvas').getContext('2d');
    
    this.canvas.font = "20px Arial";
    let y
    
    for(let x= -2; x<2 ;x+=0.001){
      y = new Neuron().sigmoid(x);
      this.canvas.fillRect(x*40+1700,y*40+100,2,2)
    }
    this.retrainNet()
  }
  retrainNet() {
    this.nn = this.nn.mutate(0.03);
    //this.nn =  this.trainer.trainXor({network: this.nn, epoch:1, count:1});
    console.log(this.nn.think());
    this.nn.out(this.drawRect.bind(this))
    
    
    setTimeout(() => {
      this.retrainNet();
    }, 30);
  }
  drawRect(x, y, r, g) {
    const size = 70;

    this.canvas.fillStyle = `rgb(${r*255},${g*255},${0})`;
    this.canvas.fillRect(x* size, y* size, size, size)
    this.canvas.fillStyle = `rgb(${0},${0},${0})`;
    this.canvas.fillText(g.toFixed(4), (x * size)+3, ((y+1) * size)-size/2);
  }
  render() {
      return (
      <canvas id="canvas" width="3000" height="2000">
      </canvas>
    );
  }
}

export default App;
