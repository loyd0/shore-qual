import React, { useRef, useState, useEffect } from 'react'
import { DynamicInput } from './DynamicInputs';
import { Link } from 'gatsby';
import CreateSubmissionData from './CreateSubmissionData';
import { setLocalStorage } from '../../hooks/useLocalStorage';
import { encode, convertArrayToObject } from '../General';






const DynamicForms = ({ form, preSubmitFunction }) => {

    const { inputs, formName, formType, submit, terms } = form
    const { buttonClass, buttonText } = submit


    const formRef = useRef(null)
    const initialInputs = convertArrayToObject([...inputs, {
        "name": "bot-field"
    }], "name")


    // formData State
    const [formData, setFormData] = useState(initialInputs)

    // Disable submission
    const [disabled, setDisabled] = useState(false)

    // Tracks whether the form has sent successfully and shows the Success Message
    const [formSent, setFormSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if honey pot has been triggered and don't send
        if (formData["bot-field"].value) {
            return setFormData(initialInputs)
        }

        const validFormInputs = Object.keys(formData)
            .map(key => { return { [key]: formData[key].value.trim()} })
            .reduce((obj, item) => { return {...item, ...obj} }, {})

        // Any other actions before submitting the form
        if (preSubmitFunction) {
            preSubmitFunction(validFormInputs)
        } 

        // Add this person to local storage so they can't submit again
        setLocalStorage("email", validFormInputs.email)

        const submissionData = CreateSubmissionData({
            ...validFormInputs,
            form_type: formType,
            // Create our own data
            first_name: validFormInputs.name?.split(" ")[0] || "unknown",
            last_name: validFormInputs.name?.split(" ").slice(1).join(" ").trim() || "unknown",
        })
        // console.log(submissionData)
        // Send the actual form
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": formName, ...submissionData })
        })
        .then(() => setFormSent(true) && setDisabled(true))
        .catch(error => console.log(error));
    };


    const handleValidation = (e) => {
        const name = e.currentTarget.name || e.currentTarget.id

        const valid = formData[name].validation.validate(e.currentTarget.value)

        console.log(valid) 
       

        setFormData({
            ...formData,
            [name]: {
                ...formData[name],
                validation : {
                    ...formData[name].validation,
                    // if the return from validation is a string add as message
                    isValid: typeof valid === "string" ? false : valid,
                    message: typeof valid === "string" ? valid : false,
                },
            }
        })
    }




    useEffect(() => {

        // Iterates through the inputs and runs them through the validation functions
        const valid = inputs.map(input => {
            return  input.validation?.validate(formData[input.name].value)
        })
        // Checks if the return value is a string so, if it is a string it is an error message
        const validForm = valid.filter(value => typeof value === "string" || !value ).length > 0
        if (validForm !== disabled) setDisabled(validForm)
       
    }, [formData, disabled, inputs])



    // Handle input change
    const handleChange = e => {
        console.log(formData)
        return setFormData({ ...formData, [e.target.name]:  { ...formData[e.target.name], value: e.target.value,  }});
    }


    // Set this to customisable
    if (formSent) return <div style={{minHeight: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h2 className="mx-5 text-center" >Thank you for submitting the form.</h2>
        <p className="mx-5 text-center" >We'll be in touch soon.</p>
    </div>

    return (
            <form
                ref={formRef}
                method="post"
                name={formName || "new-form"}
                className="mb-3"
            >
                {/* The bot-field */}
                <p className="d-none">
                    <label>Don’t fill this out if you're human: <input  
                        onChange={(e) => handleChange(e)} 
                        name="bot-field" /></label>
                </p>
                
                {/* Creates the inputs */}
                {
                    inputs && inputs.map((input, index) =>
                        <DynamicInput
                        key={`${index} ${input.name}`}
                        {...formData[input.name]}
                        onBlur={(e) => handleValidation(e)}
                        onChange={(e) => handleChange(e)}
                        value={formData[input.name].value}
                    />)
                }


                {terms ? <div className="small text-secondary mt-3 mb-2">By submitting this form you agree with the <Link className="text-secondary weight-500" to="/terms-of-service">
                    <span>Terms and Conditions</span>
                </Link> and <Link className="text-secondary weight-500" to="/privacy-policy"><span>Privacy Policy</span></Link>
                </div> : ""}

                {disabled ? <button
                    disabled
                    className={`btn btn-primary text-white ${buttonClass} `}
                    type="button">{buttonText}</button> :
                    <button
                        onClick={(e) => handleSubmit(e) && setDisabled(true)}
                        className={`btn btn-primary text-white ${buttonClass} `}
                        type="submit">{buttonText}
                    </button>}
            </form>
    )
}

DynamicForms.propTypes = {

}

export default DynamicForms




