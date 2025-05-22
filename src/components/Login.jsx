import { Form, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
  const [isSigned, setisSigned] = useState(true);
  const [errormessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    setisSigned(!isSigned);
  };

  const handleClickbutton = () => {
    const message = checkValidate(email.current.value, password.current.value);

    seterrorMessage(message);
    if (message) return;
    if (!isSigned) {

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_medium.jpg"
          alt="logo"
        />
      </div>

      <Form
        onSubmit={(e) => e.preventDefault()}
        className="w-80 p-6 absolute  bg-black my-20 mx-auto right-0 left-0 rounded-lg text-white opacity-[85]"
      >
        <h1 className="font-bold text-2xl py-2 mx-6 my-2">
          {isSigned ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 mx-6 my-2  w-56 border-white border-[0.05px]"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 mx-6 my-2 w-56 border-white border-[0.05px]"
          ref={password}
        />
        <p className="text-red-600 mx-6 text-xs ">{errormessage}</p>
        <button
          className="p-2 mx-6 my-2 bg-red-700 w-56"
          onClick={handleClickbutton}
        >
          {isSigned ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer p-2 mx-4 my-2" onClick={handleClick}>
          {isSigned ? "New to Netflix? Sign Up" : "Already User? Sign In"}
        </p>
      </Form>
    </div>
  );
};

export default Login;
