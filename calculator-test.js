
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 290000,
    years: 18,
    rate: 6.2,
  };
  expect(calculateMonthlyPayment(values)).toEqual('2231.42');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 350000,
    years: 25,
    rate: 4.2,
  }
  expect(calculateMonthlyPayment(values)).toEqual('1886.30');
});

/// etc
