import React, { use, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
// import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    document.title = "Log In | Marathon Hub";

    const setFavicon = (url) => {
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/png";
      link.rel = "icon";
      link.href = url;
      document.head.appendChild(link);
    };

    setFavicon("../../public/login.png");
  }, []);

  const { userWithEmailAndPass, logInWithGoogle, updateUser, setUser } =
    use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  // console.log(email);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [passerror, setPassError] = useState(" ");
  const handleLogInWithGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "User Created Successfully!",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Welcome back!",
                text: "Logged in successfully.",
                icon: "success",
              });
            }

            navigate(location.state?.from?.pathname || "/");
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong with Google login!",
        });
        console.error("Google login error:", error);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, ...userProfile } = Object.fromEntries(formData.entries());
    const email = formData.get("email");
    // const password = formData.get("password");
    const name = formData.get("name");
    const photo = formData.get("photo");

    console.log(email, password, name, photo, userProfile);

    if (!passwordRegex.test(password)) {
      setPassError(
        "Password must have at least 1 uppercase, 1 lowercase letter, and be at least 6 characters long."
      );
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least 1 uppercase, 1 lowercase letter, and be at least 6 characters long!",
      });
      return;
    }

    userWithEmailAndPass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Swal.fire({
        //   title: "User Logged In Successfully!",
        //   icon: "success",
        //   draggable: true,
        //   // navigate("/");
        // });
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error.message);
          });

        const newUser = { ...userProfile, uid: user.uid };
        console.log(newUser);

        fetch("https://hobby-hub-server-lilac.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "User Created Successfully!",
                icon: "success",
                draggable: true,
                // navigate("/");
              });
            } else {
              Swal.fire({
                title: "oops something went wrong",
                // icon: "success",
                draggable: true,
                // navigate("/");
              });
            }

            console.log("after added data in db", data);
          });
        navigate(location.state?.from?.pathname || "/");
        // console.log(user);
      })
      .then((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card-body w-96 mx-auto mt-32 shadow">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center">
        Sign Up !
      </h2>
      <form onSubmit={handleSignUp} className="fieldset">
        <label className="label">Name</label>
        <input type="text" name="name" className="input" placeholder="name" />

        <label className="label">Photo URL</label>
        <input
          type="text"
          name="photo"
          className="input"
          placeholder="Photo Url"
        />
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input w-full pr-10"
            placeholder="Password"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <p></p>
        <button className="btn btn-neutral mt-4">Sign Up</button>
        <p>
          have an account ?{" "}
          <Link to="/login" className="text-red-500">
            Log In
          </Link>
        </p>

        {passerror && <p className="text-red-500">{passerror}</p>}
      </form>

      <button onClick={handleLogInWithGoogle} className="btn">
        Sign up with google
      </button>
    </div>
  );
};

export default SignUp;
