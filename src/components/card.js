import classes from './card.module.scss';
import Data from './card.json';

const cardDetail = Data.map((items, i) => {
    const { image, date, name, title, text } = items
    // console.log(image, date, name, title, text);
    return (
        <div className={classes.card} key={i}>
            <img src={image} alt='...' />
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.nameDate}>
                <span>
                    {name}
                </span>
                <span>
                    {date}
                </span>
            </div>
            <div className={classes.text}>
                {text}
            </div>
        </div>
    )
})

function Card() {
    return (
        <div className={classes.cardContainer}>
            {cardDetail}
        </div>
    )
}

export default Card;