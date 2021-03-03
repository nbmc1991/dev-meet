import React, {useState} from 'react'
import TinderCard from 'react-tinder-card';
import './tindercards.css';


function TinderCards(){
    const [people, setPeople] = useState([
        {
            name: 'Steve Jobs',
            url:'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ4Mjc0OTU5/salma-hayek-14514423-1-402.jpg'
        },
        {
            name: 'Leornardo Dicaprio',
            url: 'https://media.vanityfair.com/photos/56450849eccc21966e939ea5/2:3/w_572,h_858,c_limit/leonardo-dicaprio-birthday.jpg'
        },
        {
            name: 'Jason Statham',
            url:'https://resizing.flixster.com/2ubbDHZSk_6-Ffxoyf_dcNDRVWY=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/165127/165127_v9_bb.jpg'
        },
    ]);

    return(
        <div>
<h1> tinder cards</h1>
<div className='tinderCards__cardContainer'>

{people.map(person => (
<TinderCard
className="swipe"
key={person.name}
preventSwipe={['up','down']}
>
    <div style={{backgroundImage: `url(${person.url})`}} className='card'>
        <h3>{person.name}</h3>
    </div>
</TinderCard>
))}
        </div>
        </div>
    )
}

export default TinderCards;