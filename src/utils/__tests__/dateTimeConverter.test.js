import dateTimeConverter from "../dateTimeConverter";

// a sample datetime in the format that we receive from the bands in town API
const sampleDateTime = "2022-09-16T19:00:00";
//
test("Return the date from a string argument by removing text starting from 'T' and onwards", () => {
  expect(dateTimeConverter(sampleDateTime)[0]).toBe("2022-09-16");
});
