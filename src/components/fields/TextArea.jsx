
export const TextAreaField = ({ id, label, state, setState }) => {
    return (
        <label>
            {label}
            <textarea
                name={`input_${id}`}
                id={`input_${id}`}
                cols="30"
                rows="10"
                placeholder={label}
                state={state}
                onChange={setState}
            ></textarea>
        </label>
    )
}
