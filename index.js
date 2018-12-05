function takeANumber(katzDeli, name) {
katzDeli.push(name);
return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var currentCustomer = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${currentCustomer}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

