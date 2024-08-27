import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Accordion from './Accordion';

function App() {
  const accordionData = [
    {
      id: "0",
      title: 'Выручка',
      today: '500 521',
      yesterday: '480 521',
      yesterdayPerc: '4%',
      thisWeek: '4 805 121',
      content: [
        {
          title: 'Наличные',
          today: '300 000',
          yesterday: '300 000',
          yesterdayPerc: '0%',
          thisWeek: '300 000',
        },
        {
          title: 'Безналичный расчет',
          today: '100 000',
          yesterday: '100 000',
          yesterdayPerc: '0%',
          thisWeek: '100 000',
        },
        {
          title: 'Кредитные карты',
          today: '100 521',
          yesterday: '100 521',
          yesterdayPerc: '0%',
          thisWeek: '100 521',
        }
      ]
    },
    {
      id: "1",
      title: 'Средний чек, руб',
      today: '1300',
      yesterday: '900',
      yesterdayPerc: '44%',
      thisWeek: '900',
      content: [
        {
          title: 'Наличные',
          today: '300 000',
          yesterday: '300 000',
          yesterdayPerc: '0%',
          thisWeek: '300 000',
        },
        {
          title: 'Безналичный расчет',
          today: '100 000',
          yesterday: '100 000',
          yesterdayPerc: '0%',
          thisWeek: '100 000',
        },
        {
          title: 'Кредитные карты',
          today: '100 521',
          yesterday: '100 521',
          yesterdayPerc: '0%',
          thisWeek: '100 521',
        }
      ]//`
    },
    {
      id: "2",
      title: 'Средний гость',
      today: '1 200',
      yesterday: '800',
      yesterdayPerc: '50%',
      thisWeek: '800',
      content: [
        {
          title: 'Наличные',
          today: '300 000',
          yesterday: '300 000',
          yesterdayPerc: '0%',
          thisWeek: '300 000',
        },
        {
          title: 'Безналичный расчет',
          today: '100 000',
          yesterday: '100 000',
          yesterdayPerc: '0%',
          thisWeek: '100 000',
        },
        {
          title: 'Кредитные карты',
          today: '100 521',
          yesterday: '100 521',
          yesterdayPerc: '0%',
          thisWeek: '100 521',
        }
      ]
    },
    {
      id: "3",
      title: 'Удаления из чека (после оплаты), руб',
      today: '1 000',
      yesterday: '1 100',
      yesterdayPerc: '-9%',
      thisWeek: '900',
      content: [
        {
          title: 'Наличные',
          today: '300 000',
          yesterday: '300 000',
          yesterdayPerc: '0%',
          thisWeek: '300 000',
        },
        {
          title: 'Безналичный расчет',
          today: '100 000',
          yesterday: '100 000',
          yesterdayPerc: '0%',
          thisWeek: '100 000',
        },
        {
          title: 'Кредитные карты',
          today: '100 521',
          yesterday: '100 521',
          yesterdayPerc: '0%',
          thisWeek: '100 521',
        }
      ]
    },
    {
      id: "4",
      title: 'Удаления из чека (до оплаты), руб',
      today: '1 300',
      yesterday: '1 300',
      yesterdayPerc: '0%',
      thisWeek: '900',
      content: [
        {
          title: 'Наличные',
          today: '300 000',
          yesterday: '300 000',
          yesterdayPerc: '0%',
          thisWeek: '300 000',
        },
        {
          title: 'Безналичный расчет',
          today: '100 000',
          yesterday: '100 000',
          yesterdayPerc: '0%',
          thisWeek: '100 000',
        },
        {
          title: 'Кредитные карты',
          today: '100 521',
          yesterday: '100 521',
          yesterdayPerc: '0%',
          thisWeek: '100 521',
        }
      ]
    },
    {
      id: '5',
      title: 'Количество чеков',
      today: '34',
      yesterday: '36',
      yesterdayPerc: '-6%',
      thisWeek: '34',
      content: [
        {
          title: 'Наличные',
          today: '300 000',
          yesterday: '300 000',
          yesterdayPerc: '0%',
          thisWeek: '300 000',
        },
        {
          title: 'Безналичный расчет',
          today: '100 000',
          yesterday: '100 000',
          yesterdayPerc: '0%',
          thisWeek: '100 000',
        },
        {
          title: 'Кредитные карты',
          today: '100 521',
          yesterday: '100 521',
          yesterdayPerc: '0%',
          thisWeek: '100 521',
        }
      ]
    },
    {
      id: '6',
      title: 'Количество гостей',
      today: '34',
      yesterday: '36',
      yesterdayPerc: '-6%',
      thisWeek: '32',
      content: [
        {
          title: 'Наличные',
          today: '300 000',
          yesterday: '300 000',
          yesterdayPerc: '0%',
          thisWeek: '300 000',
        },
        {
          title: 'Безналичный расчет',
          today: '100 000',
          yesterday: '100 000',
          yesterdayPerc: '0%',
          thisWeek: '100 000',
        },
        {
          title: 'Кредитные карты',
          today: '100 521',
          yesterday: '100 521',
          yesterdayPerc: '0%',
          thisWeek: '100 521',
        }
      ]
    }
  ];
  return (
    <div className="app">
      <div className='app__inner'>
        <table>
          <tr><th>Показатель</th><th className='app__sec'>Текущий день</th><th>Вчера</th><th>Этот день недели</th></tr>
          {accordionData.map((deal) => {
            return <Accordion deal={deal} />
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
