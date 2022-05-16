import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  age: number;
  name: string;
}

const Home: React.FC<Props> = ({ age, name }) => {
  const [ageCount, setAgeCount] = useState<number>(age);
  const jewook: string = "jewook";
  const minusAge = (value: number): void => {
    setAgeCount((prevAgeCount) => prevAgeCount - value);
  };
  const addAge = (): void => {
    setAgeCount((prevAgeCount) => prevAgeCount + 1);
  };

  const fetchData = async () => {
    const response = await axios({
      // url: "http://apis.data.go.kr/1160100/service/GetGeneralProductInfoService/getGoldPriceInfo",
      url: "http://localhost:4000/goldPrices",
      method: "get",
    });
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>{ageCount}</p>
      <button onClick={addAge}>+</button>
      <button onClick={() => minusAge(2)}>-</button>
    </div>
  );
};

export default Home;
