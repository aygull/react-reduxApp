import React from 'react';
import '../index.css';
// import {setNewPage, prevPage, nextPage} from "../actions";

const Pager = ({ pages, activePage, prevPage, nextPage, setNewPage }) => (
    <div className="Pager">
        <span
            className="Page"
            onClick={prevPage}
        >
            ←
        </span>
        { pages.map((page, index) => (
            <span
                key={page}
                className={`Page ${activePage === index ? 'active' : ''}`}
                onClick={()=>setNewPage(page)}
            >
                {page+1}
            </span>

        )) }
        <span
            className="Page"
            onClick={nextPage}
        >
            →
        </span>
    </div>
);

export default Pager;