import {useState} from "react";

const useFormSubmission = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    if(event.target.type === "checkbox") {
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.checked}));
    } else
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export default useFormSubmission;