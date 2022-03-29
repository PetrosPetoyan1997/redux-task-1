import {GET_FILTER_LIST, UPDATE_CHECKED_VALUE} from "./types";

const initialFilterList = [
    {checked: false, labelName: 'Show All', value:'showAll'},
    {checked: true, labelName: 'Client ID', value:'clientId'},
    {checked: true, labelName: 'Code Key',  value: 'codeKey'},
    {checked: true, labelName: 'Name', value: 'name'},
    {checked: true, labelName: 'Legal Name', value: 'legalName'},
    {checked: true, labelName: 'Address', value: 'address'},
    {checked: true, labelName: 'Email', value: 'email'},
    {checked: true, labelName: 'Contact Person', value: 'contactPerson'},
    {checked: false, labelName: 'Holding', value: 'holding'}
]
function filterList(state = initialFilterList, action) {
    switch (action.type) {
        case UPDATE_CHECKED_VALUE:
            return state.map((checkboxData,i)=>{
                if(i === action.payload.position){
                    return {
                        ...checkboxData,
                        checked: action.payload.position === 0 ? !state[0].checked : !checkboxData.checked
                    }
                }else{
                    return {
                        ...checkboxData,
                        checked: action.payload.position === 0 ? !state[0].checked : checkboxData.checked
                    }
                }
            })
        default:
            return state
    }
}
export default filterList;