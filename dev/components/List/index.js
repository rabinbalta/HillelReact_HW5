import React, { useState } from 'react';
import styles from './style.css';

const List = ({data}) => {
    const [quanNews, changeQuanNews] = useState(2);

    const toggleShow = () => {
        changeQuanNews(quanNews+2);
    } 

    return (
        <>
            <button
                className={styles.toggleNews}
                onClick={ toggleShow }
            >
                toggle 2 news
            </button>
            <ul className={styles.News}>
                {
                    data.slice([0], [quanNews]).map(news => (
                        <li className={styles.Topic} key={news.id}>                                
                            {news.text}
                        </li>
                    ))
                }                   
            </ul>               
        </>                    
    );  
}

export default List;