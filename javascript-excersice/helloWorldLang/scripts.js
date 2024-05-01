function helloWorld (langugeCode) {
  let greeting = {
    en : "Hello World",
    de : "Hallo Welt",
    es : "Hola Mundo",
    // undefined : "Hello World"
  };

  let defultGreeting = greeting["en"];
  return greeting[langugeCode] || defultGreeting;

}

console.log(helloWorld("en"));