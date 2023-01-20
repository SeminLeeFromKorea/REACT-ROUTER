const NewsArticle = ({item}) => {
                            
    /* 1. url, urlToImage, title, author, description, publishedAt */

    const {url, urlToImage, title, author, description, publishedAt} = item;

    let date = new Date(publishedAt);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // console.log(props);

    return (
        <>
            <li>
                <a href={url}>
                    <img src={urlToImage} alt={title} />
                    <div>
                        <p>기자명: {author === null ? "정보없음" : author}</p>
                        {/* <p>작성일: {publishedAt}</p> */}
                        <p>{`작성일: ${year}년 ${month}월 ${day}일`}</p>
                        <p>기사제목: {title}</p>
                        <p>기사요약: {description}</p>
                    </div>
                </a>
            </li>
        </>
    )
}

export default NewsArticle;