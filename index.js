const doTask = (iterations, callback) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        callback({
          error: true,
          message: "Obtuviste un 6"
        });
        return;
      }
    }
    return callback(null, {
      error: false,
      value: numbers
    });
  }

  doTask(10, function(err, result) {
    if (err) {
      console.error("Obtuviste un ", err.message);
      return;
    }
    console.log("Tiradas correctas: ", result.value);
  });