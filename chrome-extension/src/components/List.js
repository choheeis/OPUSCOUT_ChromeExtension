import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    border: 0.5px solid #2B2CFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

    .value {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        text-align: center;
        font-size: 15px;
        color: #000000;
    }
`;

function List({ listValue }) {
    return(
        <ListStyle>
            {
                Object.keys(listValue).map((key, index) =>
                    <div key={index} className='value'>{listValue[key]}</div>
                )
            }
        </ListStyle>
    )
}

export default List;