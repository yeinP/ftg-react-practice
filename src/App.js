import { useEffect, useState } from "react";

function App(){
 const [loading, setLoading] = useState(true);
 const [coins, setCoins] = useState([]);
 const [myDal, setMyDal] = useState(0);

 const buyCoin = () => {};

 useEffect(() => {
  fetch("https://api.coinpaprika.com/v1/tickers")
  .then((response) =>  response.json())
  .then((json) => {
    setCoins(json)
    setLoading(false);

  });
 }, [])
 //코인 달러입력했을 때 구매할 수 있는 량 찾는 거 해보기 
 return ( 
  <div>
    <h1>the Coins!{loading ? "" : `(${coins.length})` }</h1>
    {loading ? <strong>loading,,,,</strong> :
      <div>
        <select>
          {coins.map((coin) =><option>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price}</option> )}
        </select>
        <input type="number" placeholder="how much?" />
        <span></span>
      </div>
    }
    
  </div>
 )

}
export default App;
