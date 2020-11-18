/*global chrome*/
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import List from '../components/List';
import ListBarTitle from '../components/ListBarTitle';
import PageCount from '../components/PageCount';
import { getParameterByName } from '../util/utils';

function Item() {

    const listComponents = [ "순번", "아이템명", "브랜드명", "판매가격", "랭킹", "월판매량", "일판매량", "수익", "리뷰수", "별점", "셀러수", "경쟁강도"];
    const test = [
        { index: 1, name: '에스쁘아 쿠션', brand: '에스쁘아', price: 15420, ranking: 1, month_sales: 1300, revenue: 4500000, review: 3500, star: 5, seller: 130, opportunity_score: 5 },
        { index: 2, name: '유니클럽 커버 쿠션', brand: '유니클럽', price: 14900, ranking: 2, month_sales: 1000, revenue: 3000000, review: 2550, star: 5, seller: 70, opportunity_score: 4 },
        { index: 3, name: '롬앤 제로 쿠션', brand: '롬앤', price: 14450, ranking: 3, month_sales: 400, revenue: 3500000, review: 550, star: 2, seller: 100, opportunity_score: 3 },
        { index: 4, name: '에스쁘아 프로테일러', brand: '에스쁘아', price: 15830, ranking: 4, month_sales: 200, revenue: 4562000, review: 4000, star: 2, seller: 150, opportunity_score: 5 },
        { index: 5, name: '로하셀 글로시', brand: '로하셀', price: 18000, ranking: 5, month_sales: 50, revenue: 3000000, review: 1450, star: 4, seller: 172, opportunity_score: 4 },
        { index: 6, name: '로하셀 글로시 빔', brand: '로하셀', price: 18000, ranking: 6, month_sales: 60, revenue: 1450000, review: 3200, star: 5, seller: 270, opportunity_score: 5 },
        { index: 7, name: '로하셀 퍼벡트 쿠션', brand: '로하셀', price: 19600, ranking: 7, month_sales: 60, revenue: 3450000, review: 1200, star: 4, seller: 50, opportunity_score: 2 }
    ]
    const listValues = [
        {
            index: 1,
            name: '탐사 KFAD',
            brand: '탐사',
            price: 17900,
            ranking: 1,
            month_sales: 50,
            revenue: 3000000,
            review: 550,
            star: 5,
            seller: 70,
            opportunity_score: 1
        },
        {
            index: 2,
            name: '코멧 일회용',
            brand: '코멧',
            price: 7990,
            ranking: 2,
            month_sales: 47,
            revenue: 45000000,
            review: 510,
            star: 4,
            seller: 40,
            opportunity_score: 2
        },
        {
            index: 3,
            name: '코멧 일회용 블랙',
            brand: '코멧',
            price: 8450,
            ranking: 3,
            month_sales: 50,
            revenue: 256000,
            review: 124,
            star: 4,
            seller: 60,
            opportunity_score: 3
        },
        {
            index: 4,
            name: '성인 마스크',
            brand: '쿠팡',
            price: 6990,
            ranking: 4,
            month_sales: 50,
            revenue: 230000,
            review: 19,
            star: 3,
            seller: 10,
            opportunity_score: 3
        },
        {
            index: 5,
            name: '멜트블로운 화이트',
            brand: '멜트블로운',
            price: 5700,
            ranking: 5,
            month_sales: 100,
            revenue: 3000000,
            review: 1000,
            star: 5,
            seller: 120,
            opportunity_score: 5
        },
        {
            index: 6,
            name: '탐사 향균 마스크',
            brand: '탐사',
            price: 5920,
            ranking: 6,
            month_sales: 100,
            revenue: 42450000,
            review: 2100,
            star: 4,
            seller: 220,
            opportunity_score: 5
        },
        {
            index: 7,
            name: '고르고 일회용 마스크',
            brand: '나이키',
            price: 3470,
            ranking: 7,
            month_sales: 93,
            revenue: 2500000,
            review: 304,
            star: 5,
            seller: 30,
            opportunity_score: 2
        }
    ]
    
    /* eslint-disable no-undef */
    let searchWord = "";
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

                (urlState == "마스크") ?
                listValues.map((item, index) =>
                    <List key={index} listValue={item}></List>
                ) :
                test.map((item, index) =>
                    <List key={index} listValue={item}></List>
                )
                }   
                <PageCount></PageCount>
            </ContainerStyle>
        </>
    )
}

export default Item;

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