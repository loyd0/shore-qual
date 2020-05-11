import { NAME_INPUT, EMAIL_INPUT, COMPANY_INPUT, MESSAGE_INPUT, CONTACT_SELECT_INPUT } from "./FormDataComponents"

export const learnMore = {
    formName: "new-form",
    formType: "learn-more",
    terms: false,
    submit: {
        buttonText: "Download",
        buttonClass: "mx-auto px-4 flex",
    },
    inputs: [
        { ...NAME_INPUT },
        { ...EMAIL_INPUT },
        { ...COMPANY_INPUT }
    ],
}

export const freeTrial = {
    formName: "new-form",
    formType: "free-trial",
    terms: false,
    submit: {
        buttonText: "Submit",
        buttonClass: "mx-auto px-4 flex",
    },
    inputs: [
        { ...NAME_INPUT },
        { ...EMAIL_INPUT },
        { ...COMPANY_INPUT }
    ],
}

export const demoForm = {
    formName: "new-form",
    formType: "demo-request",
    terms: true,
    submit: {
        buttonText: "Submit Request",
        buttonClass: "mx-auto px-4 w-100",
    },
    inputs: [
        {
            ...NAME_INPUT,
            input: {
                ...NAME_INPUT.input,
                className: "form-light text-light mb-2"
            },
            label: {
                ...NAME_INPUT.label,
                hidden: false
            }
        },
        {
            ...EMAIL_INPUT,
            input: {
                ...EMAIL_INPUT.input,
                className: "form-light text-light mb-2"
            },
            label: {
                ...EMAIL_INPUT.label,
                hidden: false
            }
        },
        {
            ...COMPANY_INPUT,
            input: {
                ...COMPANY_INPUT.input,
                className: "form-light text-light mb-2"
            },
            label: {
                ...COMPANY_INPUT.label,
                hidden: false
            }
        },
    ],
}

export const contactUsForm = {
    formName: "contact-us",
    terms: true,
    submit: {
        buttonText: "Send your feedback",
        buttonClass: "mx-auto px-4 w-100",
    },
    inputs: [
        {
            ...EMAIL_INPUT,
            input: {
                ...EMAIL_INPUT.input,
                style:{},
                className: "form-light text-dark mb-2",
                placeholder: "email@example.com"
            },
            label: {
                ...EMAIL_INPUT.label,
                text: "Your email",
                hidden: false
            }
        },
        {
            ...NAME_INPUT,
            input: {
                ...NAME_INPUT.input,
                style:{},
                placeholder: "First Last",
                className: "form-light text-dark mb-2"
            },
            label: {
                ...NAME_INPUT.label,
                hidden: false,
                text: "Your name",
            }
        },
        {
            ...CONTACT_SELECT_INPUT,
            input: {
                ...CONTACT_SELECT_INPUT.input,
                style:{
                  textIndent: '0px',
                  paddingLeft: 6
                },
                className: "form-light text-dark mb-2"
            },
            label: {
                ...CONTACT_SELECT_INPUT.label,
                hidden: false,
            }
        },
        {
            ...MESSAGE_INPUT,
            input: {
                ...MESSAGE_INPUT.input,
                style:{},
                className: "form-light text-dark mb-2"
            },
            label: {
                ...MESSAGE_INPUT.label,
                hidden: false,
            }
        }


    ]
}