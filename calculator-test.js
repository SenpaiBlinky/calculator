
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 1,
    years: 1,
    rate: 1
  })).toEqual(0.08)
});


it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({
        amount: 1200,
        years: 1,
        rate: 1
      })).toEqual(100.54)
});

/// etc
