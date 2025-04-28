import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from './Dropdown';

const mockList = [
  { id: 'react', count: 0 },
  { id: 'vue', count: 0 },
  { id: 'angular', count: 0 },
  { id: 'svelte', count: 0 },
];

export default function CounterList() {
  const [items, setItems] = useState(mockList);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleIncrement = (index) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        count: newItems[index].count + 1
      };
      return newItems;
    });
  };

  const handleReset = () => {
    setItems(mockList.map(item => ({ ...item, count: 0 })));
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={`counter-list ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <div className="current-time">
        <div className="date">{currentTime.toLocaleDateString(undefined, { 
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</div>
        <div className="time">{currentTime.toLocaleTimeString()}</div>
      </div>
      <Dropdown value={i18n.language} onChange={handleLanguageChange} />
      <h1 className="counter-header">{t('title')}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={item.id} onClick={() => handleIncrement(index)}>
            <span className="item-name">{t(`items.${item.id}`)}</span>
            <span className="item-count">{item.count}</span>
          </li>
        ))}
      </ul>
      <div className="total-count">
        {t('total')}: <span className="total-number">{totalCount}</span>
      </div>
      <button className="reset-button" onClick={handleReset}>
        {t('reset')}
      </button>
    </div>
  );
} 