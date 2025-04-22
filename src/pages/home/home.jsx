import React, { useEffect , useState} from 'react'
import './home.css' 
import Navbar from '../../components/navbar/navbar'
import Card from '../../components/card/card'
import Loder from '../../components/loder/loder'

function Home() {
  const [loading, setLoading] = useState(true);
  const hotelCards = [
    {
      id: 1,
      location: "Paris, France",
      description: "10 min walk to Eiffel Tower",
      date: "Apr 9–14",
      price: "$120 night",
      rating: 4.9,
      imageUrl: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
    },
    {
      id: 2,
      location: "Dubai, UAE",
      description: "Luxury skyline suite",
      date: "May 1–6",
      price: "$240 night",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b1"
    },
    {
      id: 3,
      location: "Tokyo, Japan",
      description: "Modern hotel with city view",
      date: "Jun 10–15",
      price: "$170 night",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: 4,
      location: "New York, USA",
      description: "In the heart of Manhattan",
      date: "Jul 20–25",
      price: "$200 night",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb"
    },
    {
      id: 5,
      location: "Barcelona, Spain",
      description: "Stylish hotel near beach",
      date: "Aug 12–17",
      price: "$130 night",
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1"
    },
    {
      id: 6,
      location: "Rome, Italy",
      description: "Classic hotel near Colosseum",
      date: "Sep 3–8",
      price: "$140 night",
      rating: 4.7,
      imageUrl: "https://images.pexels.com/photos/1375383/pexels-photo-1375383.jpeg"
    },
    {
      id: 7,
      location: "Amsterdam, Netherlands",
      description: "Canal-side boutique hotel",
      date: "Oct 5–11",
      price: "$150 night",
      rating: 4.8,
      imageUrl: "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg"
    },
    {
      id: 8,
      location: "London, UK",
      description: "Luxury hotel with Thames view",
      date: "Nov 1–6",
      price: "$190 night",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1582719478181-d763d9bfbf39"
    },
    {
      id: 9,
      location: "Lisbon, Portugal",
      description: "Charming stay in old town",
      date: "Dec 12–17",
      price: "$110 night",
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1582719478181-d763d9bfbf39"
    },
    {
      id: 10,
      location: "Bangkok, Thailand",
      description: "Modern hotel in city center",
      date: "Jan 10–15",
      price: "$90 night",
      rating: 4.4,
      imageUrl: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg"
    },
    {
      id: 11,
      location: "Seoul, South Korea",
      description: "Trendy Gangnam hotel",
      date: "Feb 8–13",
      price: "$115 night",
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1576675782873-4b2a59f0d3b2"
    },
    {
      id: 12,
      location: "Sydney, Australia",
      description: "Near the Opera House",
      date: "Mar 2–7",
      price: "$160 night",
      rating: 4.9,
      imageUrl: "https://images.pexels.com/photos/261107/pexels-photo-261107.jpeg"
    },
    {
      id: 13,
      location: "Istanbul, Turkey",
      description: "Bosphorus view hotel",
      date: "Apr 14–19",
      price: "$130 night",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1582719761767-01930f620575"
    },
    {
      id: 14,
      location: "Cape Town, South Africa",
      description: "Mountain view boutique hotel",
      date: "May 10–15",
      price: "$125 night",
      rating: 4.6,
      imageUrl: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg"
    },
    {
      id: 15,
      location: "Vienna, Austria",
      description: "Elegant historic stay",
      date: "Jun 5–10",
      price: "$145 night",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1590490360189-2bb6ec9cbb5d"
    },
    {
      id: 16,
      location: "Athens, Greece",
      description: "View of the Acropolis",
      date: "Jul 22–27",
      price: "$135 night",
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1595672014853-94b3fc58f9eb"
    },
    {
      id: 17,
      location: "Berlin, Germany",
      description: "Central hotel near museums",
      date: "Aug 8–13",
      price: "$120 night",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1576675904711-7ab070f1c5e9"
    },
    {
      id: 18,
      location: "Milan, Italy",
      description: "Design-forward luxury hotel",
      date: "Sep 15–20",
      price: "$160 night",
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1576675827776-84f7a918ad37"
    },
    {
      id: 19,
      location: "Rio de Janeiro, Brazil",
      description: "Near Copacabana beach",
      date: "Oct 11–16",
      price: "$100 night",
      rating: 4.4,
      imageUrl: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
    },
    {
      id: 20,
      location: "Prague, Czech Republic",
      description: "Romantic riverside hotel",
      date: "Nov 3–8",
      price: "$110 night",
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1600585154154-7b3b9bfc69c6"
    }
  ];
  
  
  
   useEffect(()=>{
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
   },[])
  return (
    <div className='home'>
      <nav>
        <Navbar/>
      </nav>
      {
        loading ? <Loder/> :
        <div className="cards">
            {
              hotelCards.map((hotel)=>{
                 return  <Card key={hotel.id} location={hotel.location} desc={hotel.description} date={hotel.date} price={hotel.price} rating={hotel.rating} image={hotel.imageUrl} id={hotel.id}/>
              })
            }
       </div>
      }
      <button className="add-button">+</button>
    </div>
  )
}

export default Home