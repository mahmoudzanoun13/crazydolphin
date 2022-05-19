import React from 'react';
import diving from '../../assets/images/diving.jpg';
import padi from '../../assets/images/padi.png';
import cmas from '../../assets/images/cmas.png';
import ndl from '../../assets/images/ndl.png';
import dan from '../../assets/images/dan.jpg';

export const Diving = () => {
  return (
    <div className="bg-gray-800 mt-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">Diving</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="flex flex-col items-center py-8 mb-8 bg-yellow-500">
        <div className="flex p-2">
          <img src={padi} alt="padi_icon" className="w-12 h-12 m-2" />
          <img src={cmas} alt="cmas_icon" className="w-12 h-12 m-2" />
        </div>
        <div className="flex p-2">
          <img src={ndl} alt="ndl_icon" className="w-12 h-12 m-2" />
          <img src={dan} alt="dan_icon" className="w-12 h-12 m-2" />
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={diving} alt="fish_image" />
        </div>
        <div className="container mx-auto px-4 py-10">
          <h4 className="text-xl font-medium text-white py-8">Diving is exciting</h4>
          <p className="text-gray-400">
            Diving is fun and exciting. It`s an easy activity that, from the moment you are in, you want to repeat it
            over and over again. For that reason we make sure that if you are diving with us, you only have to enjoy it!
            Diving Center Crazy Dolphin offers professional diving services with traditional Egyptian hospitality. There
            is wide range of diving activities - both for beginners and certified divers: introduction dive , daily diving
            and dive courses (PADI, NDL). Don`t forget to try night dives , wreck and house reef with us which you will
            find pretty fascinating! Safari/mini safari diving is the adventure of lifetime. Make it happen with Crazy
            Dolphin!<br/>
            All our boats start from marina beside our diving center. We pick up our guests from any place. We take
            care of all the details.<br/><br/>

            Introduction dive<br/>
            Intro Dive is for beginners and non-swimmers. Just try it with us and diving is no longer scary for you! Our professional
            instructor will take you underwater in total safety. You don’t need to worry about anything, just enjoy the experience of
            breathing under the water for the first time.<br/>
            Intro Dive is non-certification dive. It is made from boat or beach, or house reef.<br/><br/>

            Daily diving<br/>
            During daily diving trips you will be able to observe great variety of marina life, to enjoy the picturesque landscapes.<br/>
            Daily diving includes 2 dives at different sites, lunch from our chef, non-alcoholic drinks, instructor and equipment.
            We have everything to make your day a memorable one.<br/><br/>

            Night dive<br/>
            Night dive is special because even a familiar site looks different at night.<br/>
            We offer night dive from the house reef El Palacio. If there is enough interest, it can be arranged from the boat.<br/>
            It`s a fantastic experience. Many creatures that are not visible during the day come out of their hiding places and can
            be seen at night underwater.<br/><br/>

            Wreck dive<br/>
            If you want to dive at the famous wrecks of Thistlegorm, Abu Nuhas, Salem Express we can arrange these diving for an
            additional charge. Wreck excursions depend on a calm weather and number of participants.<br/>
            Please, let us know in advance if possible, if you are interested, so we can try to organize diving trip during your
            vacation in Hurghada.<br/><br/>

            House reef<br/>
            Our diving center is located to offer fascinating house reef full of magical diversity of underwater beauty. El Palacio
            offers a large reef full of underwater creatures. A very good location for introduction dives, check dives, night dives
            and snorkelers.<br/><br/>

            Safari diving and mini safari<br/>
            Welcome to a holiday on the waves! Liveaboard diving is perfect for experiencing some of the best dive sites in the Red
            Sea from luxury surroundings with a top notch team of dive guides.<br/>
            Book your safari or mini safari with Crazy Dolphin and enjoy safety and knowledge of our highly trained team ofguides,
            crew and chefs to offer first class customer service.<br/>
            You don't have to be a seasoned diver to enjoy a liveaboard - whatever your level, we'll have something to suit you.
            Fascinating dive briefings, fabulous meals and an impressive choice of routes, including Ras Mohamed, Thistlegorm,
            Elphinstone, Brothers, Fury and Daedalus.<br/>
            Our boat is ready to make your trip comfortable and memorable.<br/><br/>

            Dive courses<br/>
            In our diving center we follow the standards of PADI and NDL. All our courses are PADI or NDL certified and are given by
            qualified professionals. We have all the necessary to give the courses in the most comfortable and safe way as possible.<br/><br/>

            PADI courses<br/>
            Try dive<br/>
            Have your first diving experience in the warm, clear waters of the Red sea! Your instructor will teach you the basics of
            diving. During your first dive you will experience how it is to descend, to breathe and to move underwater. You will dive
            up to 6 meters.<br/>
            Duration: 1 day / 1 dive<br/>
            Including: full equipment<br/>
            Minimum age: 10 years with the permission of parents.<br/><br/>

            Scuba Diver (SD)<br/>
            Become a Scuba Diver! With the Scuba Diver certificate you will be able to dive up to 12 meters under the supervision of
            a divemaster. This course equalizes the first half of the Open Water course.<br/>
            Duration: 2 days / 3 dives and time to study the first part of the theory (book Open Water Diver Manual)<br/>
            Including: full equipment, certificate.<br/>
            Minimum age: 15 years with the permission of parents. For the Junior Scuba Diver course the minimum age is 10 years.<br/><br/>

            Open Water Diver (OWD)<br/>
            This is the first level of the diving certification. With this course you will be able to dive anywhere in the world with
            a buddy to18 meters.<br/>
            Duration: 3-4 days to learn how to dive (more or less 6 dives) and time to study the theory (book Open Water Diver Manual).<br/>
            Including: full equipment, book, dvd, logbook and certification card.<br/>
            Minimum age: 15 years with the permission of parents. For the Junior Open Water course the minimum age is 10 years with
            the permission of parents.<br/><br/>

            Advanced Open Water Diver (AOWD)<br/>
            This course is for Open Water Divers who want to take their diver training to the next level. The course includes 5 dives,
            with 2 obligatory dives: a deep dive and a navigation dive. You can choose the other three dives from: a cave dive, a wreck
            dive, a peak performance buoyancy dive or an underwater photography dive.<br/>
            Duration: 3 days / 5 dives and time to study the theory (book Adventures in Diving Manual).<br/>
            Including: full equipment, book, dvd, logbook and certification card.<br/>
            Minimum age: 15 years with the permission of parents.<br/><br/>

            Rescue Diver (RD)<br/>
            This course is for al Advanced Divers who want to learn more about safety during diving. You will learn the basic
            techniques of prevention, first aid, control of stress and rescues in diving.<br/>
            Duration: minimum 5 days and time to study the theory.<br/>
            Including: full equipment, Rescue Diver kit (book, dvd) and certification card.<br/>
            Minimum age: 15 years with the permission of parents.<br/><br/>

            Divemaster (DM)<br/>
            This is the first level of professional diving. After this course you are able to teach diving professionally!<br/>
            Duration: minimum 10 days and time to study the theory.<br/>
            Including: Divemaster kit (book, dvd) and certification card.<br/>
            Minimum age: 18 years<br/><br/><br/>

            NDL courses<br/><br/>

            Diver NDL<br/><br/>

            Diver NDL is main basic course for the beginners. At the theory part of this course you will get all the necessary
            knowledge about the theory of diving, planning of dives, equipment and physiology of diving.
            Max.recomendeddepth - 18 m<br/>
            Duration: 3-4 days, diving in the sea up to 18 meters<br/>  
            Including: full equipment, certificate, book<br/>
            Minimum age: Under 15 years with the permission of parents  and under the direct supervision of a certified adult
            diver (reached the age of majority). For the Junior  Diver NDL course the minimum age is 10 years.<br/><br/>

            Universal Diver<br/><br/>

            This is the next level in diving certification. This course allows you to feel all the diversity of diving – its
            adventure side. UNIVERSAL DIVER NDL is qualified to effectively navigate under water, improve the safety and comfort
            of night dive and deep dive (18-30 meters).<br/>
            Duration: 2 days with 5 dives in the open sea<br/>
            Including: full equipment, book, certificate, log book.<br/>
            Minimum age: 15 years with the permission of parents. <br/><br/>

            Advanced Universal Diver<br/><br/>
          
            At the course ADVANCED UNIVERSAL DIVER NDL you will learn in full 3 specialty NDL (deep dive, night dive and underwater
            navigation). Max. recommended depth 39 meters.<br/>
            Duration: 2 days<br/>
            Including: full equipment, book, certificate<br/><br/>

            Rescue Diver<br/><br/>
          
            Diving is the activity that somehow connected with the risk for life and health. That`s why there is course Rescue Diver
            which will help you to give the first aid to the divers.<br/>
            Duration: 2 days (theory and practical part)<br/>
            Included: full equipment, book, certificate<br/><br/>

            Medical First Aid<br/><br/>

            Theoretical course within 1 day. Certification payment is made separately to NDL.
            It is obligatory to have Rescue Diver and MFA certificates to start the course Divemaster NDL.<br/><br/>

            Divemaster NDL<br/><br/>

            This course is the first professional level in diving. On passing the course Divemaster successfully, the diver has the
            possibility to work and earn in the dive industry as guide, to help the instructor while making the courses, to make try
            dives.<br/>
            Duration: from 10 days<br/>
            Including: full equipment, book<br/>
          </p>
        </div>
      </div>
    </div>
  )
}
