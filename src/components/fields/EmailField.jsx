
export const EmailField = ({ id, label, state, setState }) => {
    return (
        <div className="field_row">
            <label>
                {label}
                <input
                    id={`input_${id}`}
                    type="email"
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
