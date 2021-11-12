function Greeting() {
  // state = isLoggedIn => false
  // <p>We now how to test now</p> == false
  // <p>Do we really, really? </p> == true
  return (
    <>
      <h2>Hello World!</h2>
      <p>We now how to test now</p>
      <p>Do we really, really? </p>
      <button>Toggle</button>
    </>
  );
}

export default Greeting;
