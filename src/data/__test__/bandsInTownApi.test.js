import { getArtist, getEvents } from "../bandsInTownApi";
import mockAxios from "axios";
// mocking axios to avoid sending requests to the actual bands in town API
// to ensure the tests perform well in case the API goes down, or the data in API
// doesn't exist anymore - to avoid uncertainty, I've mocking axios
jest.mock("axios");

const sampleArtist = "Eminem";

test("should have the sample name", async () => {
  let spy = jest.spyOn(mockAxios, "get");
  mockAxios.get.mockImplementation(() =>
    Promise.resolve({ data: { name: "Eminem" } }),
  );

  const result = await getArtist(sampleArtist);
  console.log(result.data.name);
  expect(result.data.name).toBe("Eminem");
  expect(spy).toHaveBeenCalledTimes(1);
});

test("should have 0 or more events for the given sample artist", async () => {
  let spy = jest.spyOn(mockAxios, "get");
  mockAxios.get.mockImplementation(() =>
    Promise.resolve({ data: [{ venue: { country: "USA" } }] }),
  );
  const result = await getEvents(sampleArtist);
  console.log(result.data[0].venue.country);
  expect(result.data.length).toBeGreaterThanOrEqual(0);
  expect(spy).toHaveBeenCalledTimes(1);
});
