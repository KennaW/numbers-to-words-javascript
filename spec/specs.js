describe('numberInWords', function() {
  it('returns string "one" for integer 1', function() {
    expect(numberInWords(1)).to.equal("one");
  });

  it('returns string "two" for integer 2', function() {
    expect(numberInWords(2)).to.equal("two");
  });

  it('returns string "ten" for integer 10', function() {
    expect(numberInWords(10)).to.equal("ten");
  });

  it('returns string "twenty-one" for integer 21', function() {
    expect(numberInWords(21)).to.equal("twenty-one");
  });

  it('returns string "seventy-seven" for integer 77', function() {
    expect(numberInWords(77)).to.equal("seventy-seven");
  });

  it('returns string "one hundred one" for integer 101', function() {
    expect(numberInWords(101)).to.equal("one hundred one");
  });

  it('returns string "one hundred thirty-seven" for integer 137', function() {
    expect(numberInWords(137)).to.equal("one hundred thirty-seven");
  });

  it('returns string "eight hundred sixty-four" for integer 864', function() {
    expect(numberInWords(864)).to.equal("eight hundred sixty-four");
  });

  it('returns string "four thousand, seven hundred forty-eight" for integer 4748', function() {
    expect(numberInWords(4748)).to.equal("four thousand, seven hundred forty-eight");
  });

  it('returns string "twelve thousand, three hundred thirteen" for integer 12313', function() {
    expect(numberInWords(12313)).to.equal("twelve thousand, three hundred thirteen");
  });

});
