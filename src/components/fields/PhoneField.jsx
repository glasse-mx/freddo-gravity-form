
export const PhoneField = ({ label, id, state, setState }) => {

    return (
        <div className="field_row">
            <label>
                {label}
                <input id={`input_${id}`}
                    type="tel"
                    name={`input_${id}`}
                    placeholder={label}
                    state={state}
                    onChange={setState}
                    required
                />
            </label>
        </div>
    )
}


