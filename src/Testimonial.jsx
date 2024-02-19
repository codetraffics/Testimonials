import { useState } from "react";
import "./style.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "I highly recommend @codetraffics to everyone",
      author: "John Smith",
    },
    {
      quote:
        "@codetraffics completely changed our business with our new website",
      author: "Bill Gates",
    },
    {
      quote:
        "We now have enough time to think about improving our products. Thanks to @codetraffics",
      author: "Elon Musk",
    },
    {
      quote:
        "Our customers now smiles. Thanks to @codetraffics for the great job",
      author: "Time Ferris",
    },
    {
      quote:
        "Looking for an ecommerce for your business, look no further than @codetraffics",
      author: "Russel Brunson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        - {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonial;
