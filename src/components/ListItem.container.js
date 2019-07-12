import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { toggleInfo } from '../actions';
import ListItem from './ListItem';
import {getExpandedNode, isOpenedSelector} from "../selectors";

const mapStateToProps = (state, ownProps) => ({
    expanded: getExpandedNode(state),
    isOpened: isOpenedSelector(state, ownProps.item._id),
});

// const mapDispatchToProps = (dispatch, { item }) => ({
//     toggleExpand: () => dispatch(toggleInfo(item._id)),
// });

const mapDispatchToProps = (dispatch, { item }) =>
    bindActionCreators({
        toggleExpand: () => toggleInfo(item._id),
    }, dispatch)

const ListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ListItem);

export default ListItemContainer;