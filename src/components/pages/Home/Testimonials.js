import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Julieta Garcia',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Dining at Little Lemon was an absolute delight! The atmosphere was warm and inviting, and the staff were incredibly friendly. I tried the lemon herb chicken, and it was cooked to perfection—juicy and full of flavor. The fresh lemon tart for dessert was the cherry on top! I can't wait to come back for more!`,
  },
  {
    fullName: 'Hernan Perez',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Little Lemon is my go-to spot! The atmosphere is cozy, and the staff is always friendly. I can't get enough of their lemon herb chicken—it's bursting with flavor! A perfect place for a casual dinner or special occasion. Highly recommend!`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `I had an amazing experience at Little Lemon! The fresh ingredients and vibrant flavors made every dish a delight. The staff went above and beyond to ensure we felt welcome. Don't miss their signature lemon tart for dessert—it's a must-try!`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Little Lemon exceeded my expectations! The ambiance is charming, and the menu offers a fantastic variety of dishes. I loved the seasonal salad and the pasta was cooked to perfection. It's a hidden gem that I can't wait to visit again!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) =>
          <TestimonialCard key={index} customer={customer} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
