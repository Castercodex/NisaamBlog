import { useState, useEffect } from "react";
// import omit from "lodash";
// const useForm = () => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password1: "",
//     password2: "",
//   });

//   const [errors, setErrors] = useState({
//     usernameError: "",
//     emailError: "",
//     password1Error: "",
//     password2Error: "",
//   });

//   const validate = () => {
//     let usernameError = "";
//     let passwordError = "";
//     let emailError = "";

//     if (!values.username.trim()) {
//       setErrors({ ...errors, usernameError: "Username required" });
//       return false;
//       // usernameError = "Field Cannot Be Empty";
//     }

//     if (!values.password1.trim()) {
//       setErrors({ ...errors, passwordError: "Password required" });
//       return false;
//       // passwordError = "Password is Required";
//     } else if (values.password1 !== values.password2) {
//       setErrors({ ...errors, passwordError: "Passwords do not match" });
//       return false;
//       // passwordError = "Passwords Do not Match!";
//     }
//     if (emailError) {
//       setErrors({ emailError });
//       return false;
//     }

//     if (usernameError) {
//       setErrors({ usernameError });
//       return false;
//     }
//     if (passwordError) {
//       setErrors({ passwordError });
//       return false;
//     }
//     return true;
//   };
//   const handleChange = (e) => {
//     // const { name, value } = e.target;
//     // setValues({
//     //   ...values,
//     //   [name]: value,
//     // });

//     setValues({ ...values, [e.target.name]: e.target.value });

//     console.log(values);
//     console.log(errors);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isValid = validate();
//     if (isValid) {
//       console.log(values);
//       console.log("valid");
//       return;
//     }
//     if (!isValid) {
//       console.log(errors);
//       console.log("invalid");
//     }
//   };
//   return { handleChange, values, handleSubmit, errors };
// };

// export default useForm;

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({
    usernameError: true,
    emailError: true,
    passwordError: true,
  });

  const validate = (event, name, value) => {
    let error = "";
    if (name === "username") {
      if (!value.trim()) {
        error = "Username is required";
        setErrors({ ...errors, usernameError: error });
      } else if (value.length < 5) {
        error = "Username must be at least 5 characters";
        setErrors({ ...errors, usernameError: error });
      } else {
        delete errors.usernameError;
        setErrors({ ...errors });
      }
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
        setErrors({ ...errors, emailError: error });
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is invalid";
        setErrors({ ...errors, emailError: error });
      } else {
        delete errors.emailError;
        setErrors({ ...errors });
      }
    } else if (name === "password") {
      if (!value.trim()) {
        error = "Password is required";
        setErrors({ ...errors, passwordError: error });
      } else if (
        !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/).test(value)
      ) {
        setErrors({
          ...errors,
          passwordError:
            "Password should contains atleast 6 charaters and containing uppercase,lowercase and numbers",
        });
      } else {
        delete errors.passwordError;
        setErrors({ ...errors });
      }
    }

    return error;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    validate(e, e.target.name, e.target.value);

    // setErrors(false);
    // console.log(values);
  };
  useEffect(() => {
    if (Object.keys(errors).length <= 0) {
      setErrors(false);
    }
  }, [errors]);

  return { values, errors, handleChange };
};

export default useForm;
