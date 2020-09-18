import React from 'react';
import styled from 'styled-components';

const ListBarTitleStyle = styled.div`
    display: flex;
    width: 100%;
    height: 35px;
    margin-top: 20px;
    margin-bottom: 5px;
    border: 0.5px solid #2B2CFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        text-align: center;
        color: #000000;
        font-size: 14px;
    }
`;

function ListBarTitle({ titleArray }) {
    return(
        <ListBarTitleStyle>
            {
            titleArray.map((title, index) => 
                <div key={index} className='title'>{title}</div>
            )
            }
        </ListBarTitleStyle>
    )
}

export default ListBarTitle;