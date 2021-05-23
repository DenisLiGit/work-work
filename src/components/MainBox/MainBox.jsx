import React, { useEffect, useState } from 'react';
import './MainBox.scss';
import { Typography } from 'antd';
import { ApiStatic } from '../../Api/Api';

const { Title } = Typography;

const MainBox = () => {
  const [counters, setCounters] = useState({
    "register": 100,
    "solved": 9000
  })

  useEffect(() => {
    setCounters(ApiStatic.getCounter())
  }, [])

  return (
    <div className="mainBox">
      {/*<img src={MainImg} alt=""/>*/}
      <div className="mainBox__info">
        <div className="mainBox__text">
          <Title>Наш город</Title>
          <Typography.Paragraph>
            Инструмент для взаимодействия с органами местного
            самоуправления муниципальных образований в Республике
            Крым по вопросам развития Республики Крым, а также
            решения актуальных для них проблем путем создания
            оперативного канала прямого взаимодействия.
          </Typography.Paragraph>
        </div>
        <div className="mainBox__counters">
          <div className="mainBox__counters-wrap">
            <div>
              <b>{counters.register}</b>
              <Typography.Paragraph>Зарегистрировано проблем</Typography.Paragraph>
            </div>
            <div>
              <b>{counters.solved}</b>
              <Typography.Paragraph>Всего решено проблем</Typography.Paragraph>
            </div>
          </div>
          <button>
            Сообщить о проблеме
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
