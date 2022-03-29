import React, {useState, useEffect} from "react";

import "./Filter.scss";
import CheckboxWithLabel from "./CheckboxWithLabel";
import BtnType1 from "./BtnType1";

import {updateCheckedValue} from "../../redux/filter/actions";
import {useSelector, useDispatch} from "react-redux";

const Filter = ({cancelHandler})=>{
    const filterList = useSelector((state)=> state.filterList)
    const dispatch = useDispatch()

    const [checkboxValues, setCheckboxValues] = useState(filterList)
    const checkboxOnChange = (evt, position)=>{
        dispatch(updateCheckedValue({position:position}))
    }
    const saveHandler = ()=>{
        console.log(checkboxValues, 'checked values')
    }
    useEffect(()=>{
        setCheckboxValues(filterList)
    }, [filterList])
    return (
        <div className="filter">
            <div className="filter-header">
                <CheckboxWithLabel    labelName={checkboxValues[0].labelName}
                                      value={checkboxValues[0].value}
                                      isChecked={checkboxValues[0].checked}
                                      key={checkboxValues[0].labelName}
                                      position={0}
                                      onChange={(evt, position)=>checkboxOnChange(evt, position)}
                />
            </div>
            <div className='filter-body'>
                {
                    checkboxValues.map((checkboxData,i)=>{
                        if(i !== 0){
                            return (
                                <CheckboxWithLabel
                                    labelName={checkboxData.labelName}
                                    value={checkboxData.value}
                                    isChecked={checkboxData.checked}
                                    key={checkboxData.labelName}
                                    position={i}
                                    onChange={(evt,position)=>checkboxOnChange(evt, position)}
                                />
                            )
                        }else{
                            return null;
                        }
                    })
                }
            </div>
            <div className='filter-footer'>
                <BtnType1 btnText={'Cancel'} classHelper={'-cancel-btn'} onClickHandler={cancelHandler}/>
                <BtnType1 btnText={'Save'}  classHelper={'-save-btn'} onClickHandler={saveHandler}/>
            </div>
        </div>
    )
}
export default Filter;