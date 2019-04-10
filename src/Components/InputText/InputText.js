import React,{Fragment,Component} from "react";
class InputTextComp extends Component{
    state={
        value: "",
    };
    onhandleChange=(e)=>{
        const currentValue = e.target.value;
        this.setState(()=>{
            return{
                value: currentValue
            };
        });
    }
    render(){
        const {ariaLableText,name,labelText,domElementID ,inputType}= this.props;
        return(
            <Fragment>
                <label htmlFor={domElementID}>{labelText}</label>
                <input 
                     
                    onChange={this.onhandleChange} 
                    type={inputType}
                    aria-label={ariaLableText}
                    aria-required="true"
                    name={name}
                    id={domElementID}
                />
            </Fragment>
        );
    }
};
export default InputTextComp; 