import { useParams } from "react-router-dom";


const Info = () => {

    const data = {
        1: {name:"침대", subject:"아늑함"},
        2: {name:"덕배", subject:"포메"},
        3: {name:"조이", subject:"브로콜리"},
    }

    //useParams()
    let param = useParams();
    // console.log(param); //URL주소에 값을 키로 받아줌
    // console.log(param.num);
    
    const {name, subject} = data[param.num];

    return (
        <div>
            <h3>Info 페이지</h3>
            {name}의 데이터 {subject}
        </div>
    )
}

export default Info;