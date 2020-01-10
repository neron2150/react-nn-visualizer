import Synaps from "./synaps";
import Neuron from "./neuron";

export default class Layer {
  
  constructor(inputCount, outputCount, inputNeurons) {
      if (!inputNeurons){
        inputNeurons = this.createArrayOfNeurons(inputCount)
      }
        
    
    const outputNeurons = this.createArrayOfNeurons(outputCount)
    this.inputNeurons = inputNeurons;
    this.outputNeurons = outputNeurons;
    this.synapses = [];
    inputNeurons.forEach( (input) => 
      outputNeurons.forEach( (output) =>{
        const synaps = new Synaps({input, output, weight: Math.random()})
        this.synapses.push(synaps)
        input.synapses.push(synaps)
      })
    )
  }

  pulse() {
    this.synapses.forEach((synaps) => synaps.pulse());
  }
  activateInput () {
    this.synapses.forEach((synaps) => synaps.activateInput());
  } 
  activateOutput () {
    this.synapses.forEach((synaps) => synaps.activateOutput());
  }
  propagate () {
    //this.outputNeurons.forEach((neuron) => neuron.sum = 0)
    this.synapses.forEach((synaps) => synaps.activateInput());
  }
  createArrayOfNeurons(count) {
    return new Array(count)
      .fill()
      .map(() => new Neuron());
  }
  mutate(speed) {
    this.synapses.forEach((synaps) => synaps.mutate(speed));
  }
}