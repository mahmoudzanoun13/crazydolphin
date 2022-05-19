import React from 'react';
import snorkeling from '../../assets/images/snorkeling.jpg';

export const Snorkeling = () => {
  return (
    <div id="snorkeling" className="bg-gray-800">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">Snorkeling</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={snorkeling} alt="fish_image" />
        </div>
        <div className="container mx-auto px-4 py-10 md:order-[-1]">
          <h4 className="text-xl font-medium text-white py-8">Enjoy the snorkeling</h4>
          <p className="text-gray-400">
            Enjoy the snorkeling<br/><br/>

            Snorkeling is a wonderful opportunity to observe the underwater life of the Red sea in its natural setting.<br/>
            Our snorkelers are accompanied in water with our highly experienced snorkel guides.<br/>
            We offer sea trips to the island , trip to Dolphin house , fishing trip , glass bottom boat trips. To enjoy your<br/>
            privacy in the trip together with your friends and family, we offer a private trip with snorkeling, fishing,<br/>
            diving – according to your needs.<br/><br/><br/>

            Dolphin house<br/>
            Trip over the Red sea to spot and swim with wild dolphins.<br/>
            Dolphin house is an area, known for its high density of wild dolphins. Watch them in their natural habitat and take
            a swim: with luck, they may play beside you. At the trip snorkel around the corals or sunbathe on the deck – the
            choice is yours.<br/><br/>
 
            Island<br/>       
            Enjoy the day exploring Giftun or Paradise island with snorkeling or diving. Relax at the white sands and turquoise
            waters and join the boat trip for more snorkeling at stunning nearby reefs.<br/><br/>

            Fishing<br/>  
            Fishing is one of the best trips in the Red sea, which we offer both for full day and half day.
            Fishing equipment is included. If you are not in the mood to fish, take a sunbath on the deck or go for snorkeling.
            Enjoy your trip in full!<br/><br/>

            Glass bottom boat<br/>
            If you`d like to experience the Red sea`s underwater wonders by observation, glass boat trip is the perfect choice.
            From the comfort of your seat you can look through the glass bottom to admire colorful corals and fish.<br/> 
            Our boat is also ready for your daily trips – good combination of snorkeling and fishing or only snorkeling – up to
            your choice!<br/><br/>

            Private trip<br/>           
            To enjoy your privacy in the trip together with your friends and family, we offer a private trip with snorkeling,
            fishing and even diving – with individual organization according to your needs.
          </p>
        </div>
      </div>
    </div>
  )
}
