import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";

import styled from './NewsList.module.css'; //css


const NewsList = () => {
    
    // 1. API 가져오기
    //a2dd7382f3d0476aa86b41a2dee5d1e7
    
    // 5. 라우터로 들어오는 값의 처리
    const {category} = useParams(); // /는 QueryParam이 비어있음

    // category가 없거나 undefined이면 all로 처리, 그렇지 않으면 각 카테고리를 반환
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`;

    // 2. useEffect에서 화면로딩시 데이터처리

    const [data, setData] = useState();

    useEffect(() => {

        (async() => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a2dd7382f3d0476aa86b41a2dee5d1e7`;
            console.log(url);
            let {data: {articles}} = await axios.get(url);
            setData(articles);
            setLoading(true);
        })();

    }, [query]); // 6. 변화가 일어날때마다 재실행할 변수를 넣어줘야함

    // 3. 데이터 로딩처리 (데이터가 오기 전에 state는 undefined)
    const [loading, setLoading] = useState(false);

    if(loading === false) {
        return <div>로딩중</div>
    }

    // 4. li태그를 컴포넌트로 변경


    return (
        <>
            <div className={styled.news_container}>
                <h3>오늘의 헤드라인</h3>
                <ul className={styled.news_wrap}>
                    {
                        // props는 자식한테 전달하는 매개체
                        data.map((item, index) => <NewsArticle key={index+1} item={item} />)
                    }
                </ul>
            </div>
        </>
    )
}

export default NewsList;