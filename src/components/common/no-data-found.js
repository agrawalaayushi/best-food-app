import React from 'react';

export const NoDataFound = (props) => (
    <div className="empty-data-wrp">
        <div className="empty-message">{props.msg}</div>
    </div>
)