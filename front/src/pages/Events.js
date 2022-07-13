import '../styles/cards.css';
import {Link} from 'react-router-dom';
const Events = () => {
    const posts = [
        {id: 1, title:'Card1', text:'This is first post. This is first post. This is first post. This is first post.'},
        {id: 2, title:'Card2', text:'This is second post. This is second post. This is second post.'},
        {id: 3, title:'Card3', text:'This is third post. This is third post. This is third post. This is third post.'},
        {id: 4, title:'Card4', text:'This is forth post. This is forth post. This is forth post. This is forth post.'}
    ];
    const res = posts.map(function(item) {
		return <>
            <div class="card card-1">
                <div class="card__icon"><i class="fas fa-bolt"></i></div>
                <p class="card__exit"><i class="fas fa-times"></i></p>
                <h2 class="card__title">{item.text}</h2>
                <p class="card__apply">
                <p class="card__link"><Link to={"event/" + item.id} replace="true">{item.title}</Link></p>
                </p>
            </div>
            
            </>
	});
    return (
        <div class="main-container">
            <div class="cards">
                {res}
            </div>
        </div>
    )
}

export default Events