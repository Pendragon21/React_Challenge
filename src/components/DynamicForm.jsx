import React from "react";


export function DynamicForm(props){

    return(
        <form action={props.formModels.action} id={props.formModels.id} method={props.formModels.method}>
            <input type={props.formModels.input.type} id={props.formModels.input.id} placeholder={props.formModels.input.placeholder} />

            <select name={props.formModels.select.name} id={props.formModels.select.type} label={props.formModels.select.label}>
                {props.formModels.select.options.map((options, value) => (
                    <option key={value}>
                        {options.label}
                    </option>
                ))}
            </select>

            <ul id={props.formModels.ul.type} name={props.formModels.ul.name} label={props.formModels.ul.label}>
                {props.formModels.ul.options.map((options, value) => (
                    <option key={value}>
                        {options.label}
                    </option>
                ))}
                
            </ul>
        </form>
    )

}