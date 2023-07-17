
import { NameField, PhoneField, EmailField, TextAreaField } from "./fields"

export const FieldSelector = ({ field, state, setState }) => {

    switch (field.type) {
        case "name":
            return <NameField
                field={field}
                id={field.id}
                inputs={field.inputs}
                state={state}
                setState={setState}
            />

        case "phone":
            return <PhoneField
                id={field.id}
                label={field.label}
                state={state}
                setState={setState}
            />

        case "email":
            return <EmailField
                id={field.id}
                label={field.label}
                state={state}
                setState={setState}
            />

        case "textarea":
            return <TextAreaField
                label={field.label}
                id={field.id}
                state={state}
                setState={setState}
            />

        default:
            return <p>Campo no soportado</p>
    }

}
