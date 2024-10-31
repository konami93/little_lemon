import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p style={{ textAlign: "justify" }}>
          Little Lemon is a charming restaurant nestled in the heart of Chicago, known for its inviting atmosphere and vibrant Mediterranean-inspired cuisine. With a menu that highlights fresh, seasonal ingredients, diners can enjoy a variety of dishes ranging from zesty salads to flavorful pasta and grilled meats. The decor features warm colors and rustic touches, creating a cozy yet elegant dining experience. Perfect for casual lunches, romantic dinners, or special celebrations, Little Lemon is a beloved spot for both locals and visitors seeking a taste of culinary delight. Guests can indulge in a diverse array of dishes, such as their signature lemon herb chicken, vibrant mezze platters, and seasonal salads bursting with freshness. The carefully crafted cocktails and extensive wine list offer the perfect pairing for any meal.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} width={400} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} width={400} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
