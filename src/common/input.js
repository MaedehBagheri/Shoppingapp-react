import "./input.css"

const Input =({label,name,formik,type ="text"})=>{

    return(
        <div className="formControl">
            <label htmlFor={name}>{label}</label>
            <input
            id={name}
            {...formik.getFieldProps(name)}
            name={name}/>

            {formik.errors[name] && formik.touched[name]&&(
                <div>{formik.errors[name]}</div>
            )}
        </div>
    )
}

export default Input;