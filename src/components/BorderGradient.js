export const BorderGradient = (props) => {
    return (
        <div style={{padding:'7px', background:'linear-gradient(153deg, rgba(14,212,252,1) 33%, rgba(255,49,57,1) 100%)',borderRadius:'5px'}}>
            <div style={{padding:'0px', background:'#fffcfc57',borderRadius:'5px'}}>
                {props.children}
            </div>
        </div>
    )
}