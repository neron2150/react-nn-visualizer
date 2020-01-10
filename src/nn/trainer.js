import Network from "./network";

export default class Trainer{

   trainXor({network, epoch, count}) {
    let xor = [
      {input: [0, 0], expectation: [0]},
      {input: [0, 1], expectation: [1]},
      {input: [1, 0], expectation: [1]},
      {input: [1, 1], expectation: [0]}
  ];
  let res
  let res2
  // do{    
  //   res = this.runEpoch(network, xor);
  //   res2 = this.runEpoch(network.mutate(1), xor);}
  // while(this.checkWin(res, res2) <= 2 )
    
    return network;
  }

  checkWin(lidErr, newErr) {
    return lidErr.filter((err, index) => err > newErr[index]).length// === 4;
  }
  runEpoch(network, xor) {
    let res = xor.map((exersize, index) => 
       this.testThink(network, exersize.input, exersize.expectation)
    );
    
    res = res.map(({errors}) => errors[0]) ////////-------------
    return res;
  }

  testThink(network, inputs, expectations) {
    network.setInput(inputs);
    const results = network.think();
    const errors = expectations.map(expectation =>
      Math.abs(expectation - results)
    )
    return { network, errors, results };
  }
}

