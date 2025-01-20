 const globalSymbol1 = Symbol.for('globalKey');
  const globalSymbol2 = Symbol.for('globalKey');
 console.log(globalSymbol1 === globalSymbol2); 
 console.log(Symbol('local') === Symbol('local'));
