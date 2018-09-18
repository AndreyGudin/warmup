module.exports = function warmup(temperature) {
  var res=0;
  res=temperature*1.8 + 32;
  console.log(res);
  return res;
};
