import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import '../styles/Gallery.css';

const images = [
   '50 Relatable Funny Memes About Life Shared By Punsworld IG Page.jpg','45 Dark Memes For Pitch-Black Souls.jfif','download (6).jfif','66036c75-05e3-4f99-88f6-f1c83444e532.jfif','31c35207-38c2-4f2a-8ec4-12bb5f9e0c86.jfif',
   '10 Wacky & Funny School Memes.jfif','Science-Humor-Memes-Jokes.jfif','download (7).jfif','40 Dark Memes For a Morbid Laugh.jfif','46f30ce5-2c94-4b56-a290-2af7317c6617.jfif','Good News And Bad News.jfif','49 Scroll-Worthy Memes For The Banishment Of Boredom.jfif','854cb055-d1b2-44bd-866f-30e6c119997b.jfif','45 Dark Memes For Pitch-Black Souls (1).jfif',
   'Daily Funny Collection 566 (61 Pics).jfif','001ae1b3-5a31-4092-af32-ce909581ff45.jfif','This Artist Creates Dark Humor Comics With Unexpected Twists And Here Are His 28 Recent Works.jfif','mood humor silly me.jfif','a50a6e2b-5fb4-40b8-9ee9-978c1b5bdb4e.jfif','33 Funny Memes & Pics to Feed Your Humor Appetite _ Team Jimmy Joe.jfif','e63def22-815b-4e7e-9dd4-57e0eabf5ad0.jfif','This struggle is real😔.jfif','36 Pics and Memes to Improve Your Mood.jfif',
   '35 Funniest Memes and Random Random to Boost Your Humor _ Team Jimmy Joe.jfif','690a49c5-cf2c-4860-a4ca-d7eb7e3590bb.jfif','Sarcastic-Relatable-Memes.jfif','40 Wacky Memes and Pics to Entertain You Right Now.jfif','45 Scammers Who Got ‘Destroyed’ By The People They Were Trying To Rip Off (New Pics).jfif','Deeply Relatable Memes That Really Spoke To Us.jfif',
   '‘Not Quite Right’_ 24 New Dark Humor Comics With Surprising Endings.jfif','35 Funny Memes & Random Pics to Twerk Your Humor Bone _ Team Jimmy Joe.jfif','45 Dark Memes For Pitch-Black Souls (2).jfif','23 Dank Memes with a Very Specific Sense of Humor.jfif','viral story.jfif','8b74e129-4100-4181-88d6-f163a0dcf35d.jfif','Random 69 Memes Guaranteed to Make You Smirk.jfif','34 Funny Quotes And Sayings.jfif','Stay at Home Memes for Antisocial Introverts Who Will Happily Work From Home For the Rest of Their Lives.jfif',
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <ImageItem key={index} src={image} onClick={() => openModal(index)} />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <Modal
          src={images[selectedImageIndex]}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrevious={goToPreviousImage}
        />
      )}
    </div>
  );
};

export default Gallery;
