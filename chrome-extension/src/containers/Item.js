/*global chrome*/
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import List from '../components/List';
import ListBarTitle from '../components/ListBarTitle';
import PageCount from '../components/PageCount';
import { getParameterByName } from '../util/utils';

const ContainerStyle = styled.div`
    background: #ffffff;
    width: 100%;
    height: 550px;
    padding-top: 30px;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;

    .search-container {
        display: flex;
        width: 100%;
        height: 40px;
    }

    .search-title {
        color: #2B2CFF;
        font-size: 16px;
        font-weight: bold;
        margin: auto 0;
    }

    .search-value {
        display: inline-block;
        margin: auto 0;
        margin-left: 20px;
        line-height: 35px;
        padding: 0 10px;
        height: 35px;
        color: #000000;
        font-size: 16px;
        font-weight: bold;
        border: 1px solid #2B2CFF;
    }
`;

function Item() {

    const listComponents = [ "순번", "아이템명", "브랜드명", "판매가격", "랭킹", "월판매량", "일판매량", "수익", "리뷰수", "별점", "셀러수", "경쟁강도"];
    const listValues = [
        {
            index: 1,
            name: '가',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 2,
            name: '나',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 3,
            name: '다',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 4,
            name: '라',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 4,
            name: '라',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 4,
            name: '라',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 4,
            name: '라',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 4,
            name: '라',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 4,
            name: '라',
            brand: '나이키',
            price: 10000,
            ranking: 1
        },
        {
            index: 4,
            name: '라',
            brand: '나이키',
            price: 10000,
            ranking: 1
        }
    ]
    
    /* eslint-disable no-undef */
    let searchWord = '';
    const [urlState, setUrlState] = useState('');
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = decodeURI(tabs[0].url);
        searchWord = getParameterByName("q", url);
        if(searchWord === '') {
            setUrlState('검색어가 존재하지 않습니다.')
        }else {
            setUrlState(searchWord);
        }
    });
    /* eslint-enable no-undef */
    
    return(
        <>
            <Header></Header>
            <ContainerStyle>
                <div className="search-container">
                    <div className="search-title">검색어</div>
                    <div className="search-value">{urlState}</div>
                </div>
                <ListBarTitle titleArray={listComponents}></ListBarTitle>
                {
                listValues.map((item, index) =>
                    <List key={index} listValue={item}></List>
                )
                }
                <PageCount></PageCount>
            </ContainerStyle>
        </>
    )
}

export default Item;