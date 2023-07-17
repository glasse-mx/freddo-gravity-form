import { useState } from "react"
import { submitGravityForm } from "../hooks/submitGravityForm"
import { FieldSelector } from "./FieldSelector"

export const GravityForm = ({ id, title, description, fields, button, loading, setLoading, submitted, sendSubmission }) => {

    const [formState, setFormState] = useState({})

    // Guardo los valores de los campos en el estado
    const onGravityChanged = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // Se envia la peticion POST para crear una entrada de formulario
    const onGravitySubmission = (e) => {
        e.preventDefault()
        setLoading(true)
        const resp = submitGravityForm(formState, 1, loading, setLoading, submitted, sendSubmission)

    }

    return (
        <form className="glasse_contact_form" onSubmit={onGravitySubmission}>

            {
                title &&
                (
                    <div className="form__header">
                        {title && <h3>{title}</h3>}
                        {description && <p>{description}</p>}
                    </div>
                )
            }

            <div className="form__body">
                {
                    fields?.map(field => <FieldSelector key={field.id} field={field} state={formState} setState={onGravityChanged} />)
                }
            </div>

            <div className="form__footer">
                <input
                    type="submit"
                    value={button?.text ? button.text : "Envia tu Mensaje"}

                />
            </div>
        </form>
    )
}

