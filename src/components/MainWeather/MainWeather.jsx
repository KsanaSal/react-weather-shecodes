import { Wrap } from './MainWeather.styled';

export const MainWeather = () => {
  return (
    <Wrap>
      <div>
        <h1>Kyiv</h1>
        <h3>
          December <span>07</span>
        </h3>
        <h3>
          Wednesday <span>16:33</span>
        </h3>
        <h2>Snowy</h2>
      </div>
      <div>
        <span>icon</span>
        <span>-1 ℃</span>
      </div>
      <div>
        <span>Precipitation:</span>
        <span>16 %</span>
        <span>Wind:</span>
        <span>4 m/c</span>
      </div>
    </Wrap>
  );
};
