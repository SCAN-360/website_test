export function get_magnitude_order(x) {
  var a = Math.floor(x);
  var b = a.toString();
  return b.length - 1;
}

export function get_lower_pad(x) {
  var a = get_magnitude_order(x);
  return x - Math.pow(10, a)
}

export function get_upper_pad(x) {
  var a = get_magnitude_order(x);
  return x + Math.pow(10, a - 1)
}


