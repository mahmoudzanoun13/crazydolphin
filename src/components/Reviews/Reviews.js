import React from 'react';
import reviewOne from '../../assets/images/review_1.jpg';
import reviewTwo from '../../assets/images/review_2.jpg';
import reviewThree from '../../assets/images/review_3.jpg';
import reviewFour from '../../assets/images/review_4.jpg';
import reviewFive from '../../assets/images/review_5.jpg';
import reviewSix from '../../assets/images/review_6.jpg';
import reviewSeven from '../../assets/images/review_7.jpg';
import reviewEight from '../../assets/images/review_8.jpg';
import reviewNine from '../../assets/images/review_9.jpg';
import reviewTen from '../../assets/images/review_10.jpg';

export const Reviews = () => {
  const reviewsData = [
    {src: reviewOne, alt: "review_one"},
    {src: reviewTwo, alt: "review_two"},
    {src: reviewThree, alt: "review_three"},
    {src: reviewFour, alt: "review_four"},
    {src: reviewFive, alt: "review_five"},
    {src: reviewSix, alt: "review_six"},
    {src: reviewSeven, alt: "review_seven"},
    {src: reviewEight, alt: "review_eight"},
    {src: reviewNine, alt: "review_nine"},
    {src: reviewTen, alt: "review_ten"},
  ];
  return (
    <div
      id="reviews"
      style={{ gridAutoColumns: '21%', backgroundColor: 'rgb(19, 19, 19)'}}
      className="grid grid-flow-col gap-44 md:gap-16 rounded-lg overflow-x-auto overscroll-x-contain mt-24 mx-5 md:mx-0"
    >
      {
        reviewsData.map(review => (
          <div
            key={review.src}
            style={{color: 'rgb(88, 88, 88)', background: 'rgb(41, 41, 41)'}}
            className="w-56 md:w-80 h-52 rounded-lg m-4"
          >
            <div className="flex items-center justify-around">
              <img src={review.src} alt={review.alt} className="rounded-lg w-auto h-auto" />
            </div>
          </div>
        ))
      }
    </div>
  )
}
