process.on("exit", (code) => {
    let infoErr = {};
    console.log("exit code", code);
  
    if (code == -5) {
      infoErr = {
        description: "error de tipo",
      };
    }
  
    if (code == -4) {
      infoErr = {
        description: "entrada vacía",
      };
    }
    console.log(infoErr);
  });
  
  const args = process.argv.slice(2);
  console.log(args);
  
  validarTipo(args);
  
  if (args.length == 0) {
    process.exit(-4);
  }
  
  const suma = args.reduce((a, b) => {
    let acumulador = 0;
    acumulador = parseInt(a) + parseInt(b);
    return acumulador;
  });
  
  const info = {
    datos: {
      numeros: args,
      promedio: suma / args.length,
      max: Math.max(...args),
      min: Math.min(...args),
      ejecutable: process.title,
      pid: process.pid,
    },
  };
  
  console.log(info);
  
  function validarTipo(array) {
    array.forEach((element) => {
      if (isNaN(element)) {
        process.exit(-5);
      }
    });
  }