import React from 'react';

import './TasksFilter.css';

const TasksFilter = (props) => {
    const selectPriorityHandler = (event) =>{
        console.log('SelectTaskhandler, priority chosen: '+event.target.value)
        props.onSelectChange(event.target.value)
    }

    return (
        <div className='tasks-filter'>
            <div className='tasks-filter__control'>
                <label>Filter by priority</label>
                <select value={props.selected} onChange={selectPriorityHandler}>
                    <option value='All'>All</option>
                    <option value='High'>High</option>
                    <option value='Mid'>Mid</option>
                    <option value='Low'>Low</option>
                </select>
            </div>
        </div>
    );
};

export default TasksFilter;