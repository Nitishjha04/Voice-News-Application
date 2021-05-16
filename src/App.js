import React, {useState ,useEffect} from 'react';
import {Typography} from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = '09e51838e88312335b0b906538e489382e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const[ newsArticles, setNewsArticles]=useState([]);
    const classes = useStyles();

    useEffect(() =>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles, number})=>{
                if(command==='newHeadLines'){
                    setNewsArticles(articles);
                }else if(command==="open"){
                    window.open(articles[number-1].url,'_blank');
                }
            }
        })
    }, [])

    return (
        <div>
            <h2 className={classes.text}>Alan AI News Application</h2>
            <div className={classes.logoContainer}>
                {newsArticles.length ? (
                    <div className={classes.infoContainer }>
                        <div className={classes.card}><Typography variant="h6"><strong style={{color: 'yellow'}}>Try saying: </strong><br /><br />Open article number [4]</Typography></div>
                        <div className={classes.card}><Typography variant="h6"><strong style={{color: 'yellow'}}>Try saying: </strong><br /><br />Go back</Typography></div>
                    </div>) : 
                <div className={classes.logoContainer}>
                  <img src="https://images.pexels.com/photos/6185245/pexels-photo-6185245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className={classes.voiceLogo} alt="Sign of Voice"/>
                </div>}

            </div>   
            <NewsCards articles={newsArticles} />
            <h3 className={classes.text}>Created By: Nitish Kumar Jha</h3> 
    </div>            
  );
}

export default App;
