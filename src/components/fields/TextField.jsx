export const TextField = ({ id, label, state, setState }) => {
    return (
        <label>
            {label}
            <input
                type="text"
                name={`input_${id.replace(".", "_")}`}
                id={`input_${id.replace(".", "_")}`}
                placeholder={label}
                state={state}
                onChange={setState}
            />
        </label>
    )
}
