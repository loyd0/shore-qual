import { ValidateEmail } from "../Emails"

export const NAME_INPUT = {
    name: "name",
    required: true,
    input: {
        style: {
            background: '#3a3a3a1f',
        },
        className: "form-light mb-2",
        placeholder: "Name",
        type: "text"
    },
    label: {
        style: {},
        className: "",
        hidden: true,
        text: "Name"
    },
    validation: {
        validate: (input) => input && input.trim().split(" ").length > 1 && input.length > 2 && /^[A-z ]+$/gm.test(input),
        isValid: null,
    },
    error: {
        message: "Please enter your first and last name.",
        className: "text-red border-red"
    },
}
export const EMAIL_INPUT = {
    name: "email",
    required: true,
    input: {
        style: {
            background: '#3a3a3a1f',
        },
        className: "form-light mb-2",
        placeholder: "Email",
        type: "email"
    },
    label: {
        style: {},
        className: "",
        hidden: true,
        text: "Email"
    },
    validation: {
        validate: (input) => ValidateEmail(input),
        isValid: null
    },
    error: {
        message: "Please enter a valid email.",
        className: "text-red border-red"
    },

}
export const COMPANY_INPUT = {
    name: "company",
    required: true,
    input: {
        style: {
            background: '#3a3a3a1f',
        },
        className: "form-light mb-2",
        placeholder: "Company",
        type: "text"
    },
    label: {
        style: {},
        className: "",
        hidden: true,
        text: "Company"
    },
    validation: {
        validate: (input) => input && input.trim().length > 3 && /^[A-z ]+$/gm.test(input),
        isValid: null,
    },
    error: {
        message: "Your company name is required.",
        className: "text-red border-red"
    },
}
export const MESSAGE_INPUT = {
    name: "message",
    required: true,
    input: {
        style: {
            background: '#3a3a3a1f',
        },
        className: "form-light mb-2",
        placeholder: "Your message",
        type: "textarea"
    },
    label: {
        style: {},
        className: "",
        hidden: true,
        text: "Your message"
    },
    validation: {
        validate: (input) => input && input.trim().length > 5,
        isValid: null,
    },
    error: {
        message: "You need to add a message",
    },
}

export const CONTACT_SELECT_INPUT = {
    name: "topic[]",
    required: true,
    input: {
        style: {
            background: '#3a3a3a1f',
        },
        className: "form-light mb-2",
        placeholder: "General Enquiries",
        type: "select"
    },
    options: [
        { value: "General Enquiries", text: "General Enquiries"},
        { value: "Business Opportunities", text: "Business Opportunities"},
        { value: "Customer Support", text: "Customer Support"},
        { value: "Press Enquiries", text: "Press Enquiries"},
    ],
    label: {
        style: {},
        className: "",
        hidden: true,
        text: "Choose reason"
    },
    validation: {
        validate: (input) => !!input,
        isValid: null,
    },
    error: {
        message: "You need to pick a reason.",
    },
}