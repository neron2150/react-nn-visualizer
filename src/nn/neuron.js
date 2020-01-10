import Synaps from './synaps';
export default class Neuron {
	constructor() {
		this.synapses = [];
		this.value = 0;
		this.sum = 0;
	}
	sigmoid(sum) {	
		console.log(sum);
		
		return 1 / (1 + Math.pow(Math.E, sum));
	}
	
	activate() {
		this.value = this.sigmoid(this.sum);
		this.sum = 0
	}
	
	addSum(value) {
		this.sum += value;
	}

	propagate() {
		this.synapses.forEach(
			({weight, output}) => {
				output.addSum(this.value * weight);				
			}
		)
	}
}
