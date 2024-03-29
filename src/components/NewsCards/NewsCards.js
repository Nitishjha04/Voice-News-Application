import React from 'react';
import { Grid, Grow, Typography} from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, Health, Sports, Technology...', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'International News', info: 'BBC News, Buzzfeed, ABC News...', text: 'Give me the news from BBC News' },
  ];

const NewsCards = ({articles}) => {
    const classes= useStyles();
    if(!articles.length){
        return(
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {infoCards.map((infoCard) =>(
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{ backgroundColor: infoCard.color}}>
                            <Typography variant="h5"><strong style={{color: 'yellow'}}>{infoCard.title}</strong></Typography>
                            {
                                infoCard.info
                                    ?(<Typography variant="h6">
                                        <strong style={{color: 'darkorange'}}>{infoCard.title.split(' ')[2]}</strong>
                                        <br />{infoCard.info}
                                    </Typography>):null
                            }
                            <Typography variant="h6"><strong style={{color: 'lime'}}>Try Saying:</strong> <br /> <i>{infoCard.text}</i></Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>         
        </Grow>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article ,i) =>(
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}}>
                        <NewsCard article={article} i={i} />
                    </Grid>
                ))}
            </Grid>         
        </Grow>
    )
}

export default NewsCards;
