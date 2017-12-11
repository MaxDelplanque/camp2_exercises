// Juste un espion qu'on met en place, on voir ce qui est affiché avec le console.log
// function myAwesomeFunction(text) {
//   console.log(text);
// }
//
// test("should make a console log", () => {
//   const logSpy = jest.spyOn(console,"log");
//
//   myAwesomeFunction("Hello,Sailor!");
//
//   expect(logSpy).toHaveBennCalledTimes(1);
//   logSpy.mockRestore();
// });

//-------------------------------------------------------------
// function myAwesomeFunction(text) {
//   console.log(text);
// }
//
// test("should make a console log", () => {
//   const logSpy = jest.spyOn(console,"log").mockImplementation();
// // Toutes les fonctions qui contiennent un console.log vont prendre des {} vides
// // voir doc de jest
//   myAwesomeFunction("Hello,Sailor!");
//
//   expect(logSpy).toHaveBennCalledTimes(1);
//   logSpy.mockRestore();
// });

//-------------------------------------------------------------
function myAwesomeFunction(text) {
  console.log(text + " o/");
}

test("should make a console log", () => {
  const logSpy = jest.spyOn(console,"log").mockImplementation();
  // Toutes les fonctions qui contiennent un console.log vont prendre des {} vides
  // voir doc de jest
  myAwesomeFunction("Hello,Sailor!");

  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(logSpy).toHaveBeenCalledWith("Hello, Sailor! o/");
  logSpy.mockRestore();
});
