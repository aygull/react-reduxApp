import {connect} from "react-redux";
import List from './List';
import {itemsSelector} from "../selectors";


const mapStateToProps = (state) => ({
    items: itemsSelector(state),
});
const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;