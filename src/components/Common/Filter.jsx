import React, {useState, useEffect, useContext} from "react";

import "./Filter.scss";
import CheckboxWithLabel from "./CheckboxWithLabel";
import BtnType1 from "./BtnType1";

import {StoreContext} from "../../index";
import {getFilterList, updateCheckedValue} from "../../redux/filter/actions";

const Filter = ({cancelHandler})=>{
    const filterStore = useContext(StoreContext)
    const [checkboxValues, setCheckboxValues] = useState(filterStore.getState().filterList)
    const checkboxOnChange = (evt, position)=>{
        filterStore.dispatch(updateCheckedValue({position:position}))
        setCheckboxValues(filterStore.getState().filterList)
    }
    const saveHandler = ()=>{
        console.log(checkboxValues, 'checked values')
    }
    useEffect(()=>{
        filterStore.subscribe(()=>{
            setCheckboxValues(filterStore.getState().filterList)
        })
        filterStore.dispatch(getFilterList())
    },[])
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