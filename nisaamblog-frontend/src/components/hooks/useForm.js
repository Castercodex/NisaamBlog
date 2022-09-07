import { useState, useEffect } from "react";

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
