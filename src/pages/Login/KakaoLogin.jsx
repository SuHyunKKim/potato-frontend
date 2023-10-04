import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

const KakaoLogin = () => {
  const navigate = useNavigate();
  const client_id = "4a86c154b1d30cfa2344eec577e91453";
  const redirect_uri = "http://localhost:3000/oauth/kakao";
  const code = useSearchParams()[0].get("code");

  const getKakaoToken = async () => {
    const baseUrl = "https://kauth.kakao.com/oauth/token";
    const config = {
      grant_type: "authorization_code",
      client_id,
      redirect_uri,
      code,
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    const { data: tokenRequest } = await axios.post(finalUrl);

    //
    console.log(tokenRequest);
    navigate("/");

    /* 백엔드와의 연동의 경우 위의 // 표시 아래줄 삭제후 아래의 코드 작성 필요
    return tokenRequest;
    */
  };

  getKakaoToken();
  /*
  useEffect(() => {
    (async() => {
      token = getKakaoToken();
      try{
        const {data: jwt} = await axios.get('백엔드에서 요청하는 주소') // data는 백엔드에서 오는 jwt
        localstorage.setItem("token", jwt);
        navigate("/");
      }
      catch(error){        
        console.log("로그인 실패")
        navigate("/login")
      }
    })()    
  })
  */
  /*
  이외에도 메인페이지에서 localstorage.get("token")의 값이 null이 아닌 경우 네비게이션바에 로그인 대신 로그아웃으로 설정 필요
  로그아웃 클릭시 localstorage.removeItem("token")으로 로그아웃
 */
  return <Loading>Loading...</Loading>;
};

export default KakaoLogin;
