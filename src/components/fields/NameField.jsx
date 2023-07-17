import { TextField } from "./TextField"

export const NameField = ({ inputs, state, setState }) => {

    return (
        <div className="name__row">
            {
                inputs
                    ? inputs.map(
                        input => (
                            !(input?.isHidden)
                            && <TextField
                                key={input.id}
                                id={input.id}
                                label={input.label}
                                state={state}
                                setState={setState}
                            />
                        )
                    )
                    : <p>"No hay campos"</p>
            }
        </div>
    )
}
