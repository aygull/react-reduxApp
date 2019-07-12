import { connect } from "react-redux";
import ToolBar from './ToolBar';
import {setSearchString, toggleSorting, removeSorting} from "../actions";
import {searchStringSelector, sortingKeySelector} from "../selectors";


const mapStateToProps = (state) => ({
    value:searchStringSelector (state),
    sortingKey: sortingKeySelector(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: string => dispatch(setSearchString(string)),
    toggleSortKey : (key, isToggle) => () => dispatch(toggleSorting(key, isToggle)),
    removeSort: () =>()=> dispatch(removeSorting()),
    removeFilter: ()=>()=>dispatch(setSearchString('')),
});

const ToolBarContainer = connect(mapStateToProps, mapDispatchToProps)(ToolBar);

export default ToolBarContainer;