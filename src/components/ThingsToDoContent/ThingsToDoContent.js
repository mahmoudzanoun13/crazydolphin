import React from 'react';
import trips from '../../assets/images/trips.jpg';
import pyramid from '../../assets/images/pyramid.jpg';
import camel from '../../assets/images/camel.jpg';
import mosque from '../../assets/images/mosque.jpg';
import tempelate from '../../assets/images/tempelate.jpg';

export const ThingsToDoContent = () => {
  return (
    <div className="bg-gray-800 mt-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">Things to do</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={trips} alt="fish_image" />
        </div>
        <div className="container mx-auto px-4 py-10 md:order-[-1]">
          <h4 className="text-xl font-medium text-white py-8 text-center">Things to do</h4>
          <p className="text-gray-400 text-center">
            Take a short rest from usual diving days and enjoy the spirit of Egypt in its all variety.<br/><br/>

            We are glad to diversify your time with following options:<br/>
            - Quad safari<br/>
            - Luxor<br/>
            - Cairo<br/>
            - City tour<br/>
            - Grand Aquarium<br/>
            - Mini Egypt park<br/>
            - Dolphin world<br/><br/>

            Get to know more details by writing to us.<br/><br/>
 
            Hurghada City tour<br/><br/>
            
            The best way to get to know a new city is to take a city tour. This three-hour trip with private guide is the perfect
            way to see the sights of Hurghada including the Big Mosque, St. Mary Church, the port area and of course free time for
            shopping in the bazaars. Plan your trip at any time of the day as Hurghada is beautiful both in the daytime and in the
            evening.<br/><br/>

            Desert safari<br/><br/>
       
            Experience the beautiful desert of Hurghada on quad, buggy or jeep. There is no better way to see the stunning deserts
            than whilst racing across it on a transport which suits you best! Morning or sunset – any time is breathtaking for this
            amazing experience.<br/>            
            In addition discover how the Bedouin live in the deserts 35km outside of Hurghada  with the jeep safari. You'll ride a camel,
            have a delicious BBQ dinner and watch a traditional show with music under the stars.<br/><br/>

            Luxor Tour<br/><br/>
          
            You will be picked  up from your hotel in the morning. The way to Luxor takes 3 hours, enjoy your day tour in Luxor and
            visit Luxor west Bank, the valley of the kings, Hatshepsut temple and colossi of Memnon, then cross the river and have
            lunch in local restaurant in Luxor, continue our tour to visit the complex of  Karnak and Luxor temples, at the end of
            your day transfer back to Hurghada for a peaceful overnight stay.<br/>
            Possible individually by private car (up to 3 persons) or by bus with the group.<br/>
            Cairo Tour<br/><br/>

            Visit Cairo's most impressive sights on our Cairo tour from Hurghada!<br/>           
            Pick you up from your hotel in Hurghada in the night. You will discover the Pyramids of Giza, the Sphinx, the Egyptian
            Museum, the Hanging Church and Famous Bazaars of Cairo!<br/>
            Possible individually by private car (up to 3 persons) or by bus with the group.<br/><br/>

            Mini Park Egypt<br/><br/>
           
            A miniature park is an open space that displays miniature buildings and models. Miniature Museum includes a collection
            consisting of 60 works of art by well-selected artists.<br/>
            Mini Egypt Park offers a totally different experience compared to a traditional museum. This is a fantastic trip for our
            foreign guests which works as a live catalogue for them to recognize the touristic attractions in Egypt, making it easier
            to choose where to go or just enjoy the time observing the art.<br/><br/>

            Hurghada Grand Aquarium<br/><br/>
          
            Discover the "Red Sea in Glass" with the tour to the Hurghada Grand Aquarium - one of Egypt’s newest, family-friendly
            attractions! Marvel at the creatures of the freshwater aquarium, open-air zoo and much more.<br/><br/>

            Dolphin World<br/><br/>
 
            Dolphin World is one of the most perspective and successful Egyptian dolphinariums. Being planned in 2004, it was opened
            to public only in 2010! Dolphin World was designed and constructed meeting all the modern requirements to keeping sea
            animals.<br/>
            Watch Dolphin show, take photos with dolphins or try to swim with them together to get the most unforgettable memories!
          </p>
        </div>
      </div>
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">Other Photos</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-4 md:px-28 pb-40">
        <img src={pyramid} alt="pyramid" className="w-auto h-auto rounded-lg px-2" />
        <img src={camel} alt="camel" className="w-auto h-auto rounded-lg px-2" />
        <img src={mosque} alt="mosque" className="w-auto h-auto rounded-lg px-2" />
        <img src={tempelate} alt="tempelate" className="w-auto h-auto rounded-lg px-2" />
      </div>
    </div>
  )
}
