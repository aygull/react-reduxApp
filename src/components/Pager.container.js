import {connect} from "react-redux";
import * as action from '../actions';
import Pager from './Pager';
import {pagesSelector, activePageSelector, currentPageSelector} from "../selectors";

const mapStateToProps = (state) => ({
    pages:pagesSelector(state),
    activePage: currentPageSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    setNewPage: (page) => dispatch(action.setNewPage(page)),
    nextPage: ()=> dispatch(action.nextPage()),
    prevPage: ()=>dispatch(action.prevPage()),
});

const PagerContainer = connect(mapStateToProps, mapDispatchToProps)(Pager);

export default PagerContainer;