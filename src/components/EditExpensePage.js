import React from 'react';

const EditExpensePage = (props) => (
    <div>
        edit {props.match.params.id}
    </div>
);

export default EditExpensePage;