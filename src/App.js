import { useEffect, useState } from 'react';
import './App.css';
import Detail from './component/detail/detail';
import List from './component/list/list';
import Search from './component/search/search';

function App() {
  document.title = "유기동물 조회서비스";

  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState();
  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30`)
      .then(response => response.json())
      .then(json => {
        // console.log(json.response.body.items.item);
        setPets(json.response.body.items.item);
      })
      .catch(e => {
        console.log(e);
      });

  }, []);

  const handleSearch = (bgnde, endde) =>{
    const key = process.env.REACT_APP_API_KEY;
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30&bgnde=${bgnde}&endde=${endde}`)
      .then(response => response.json())
      .then(json => {
        // console.log(json.response.body.items.item);
        setPets(json.response.body.items.item);
        setSelected(null);
      })
      .catch(e => {
        console.log(e);
      });
  }



  const handleSelected = (data) =>{
    setSelected(data);
  }


  return (
    <div className="container">
      <Search onSearch={handleSearch}/>
      { selected ? <Detail target={selected} /> : <></> }
      <List pets={pets} onSelected={handleSelected}/>
    </div>
  );
}

export default App;



// 화면보완, 검색옵션 시도선택 upr_cd