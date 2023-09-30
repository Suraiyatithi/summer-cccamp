import React, { useState } from 'react';
// import img1 from '../../assets/young-beautiful-stylish-woman-wedding-dress (1).jpg';
// import img2 from '../../assets/beautiful-young-woman-wearing-sari.jpg';
// import img3 from '../../assets/pexels-dhally-romy-12952754.jpg';
// import img5 from '../../assets/black-woman-with-light-pink-lips-sending-kiss.jpg';
// import img4 from '../../assets/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-blond-caucasian-young-woman-model-with-bright-makeup.jpg';
// import img6 from '../../assets/beautiful-girl-stands-near-walll-with-leaves.jpg';
import './Allcss/all.css';
import bg6 from '../../assets/pexels-pixabay-433244.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import img1 from '../../assets/young-beautiful.jpg'
import img2 from '../../assets/indian2.jpg';
import img3 from '../../assets/pexels-dhally.jpg';
import img4 from '../../assets/high-fashion.jpg';
import img5 from '../../assets/black-woman.jpg';
import img6 from '../../assets/beautiful-girl-stands-near-walll-with-leaves2.jpg';
import fly from '../../assets/clipart514179.png'
const images = [
  { id: 1, src: img6, category: 'classic' },
  { id: 2, src: img5, category: 'classic' },
  { id: 3, src: img1, category: 'bridal' },
  { id: 4, src: img2, category: 'bridal' },
  { id: 5, src: img3, category: 'all' },
  { id: 6, src: img4, category: 'all' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = selectedCategory === 'all' ? images : images.filter(img => img.category === selectedCategory);
  const triggerAnimations = () => {
    AOS.refresh(); // Refresh AOS to trigger animations
};

// Attach the scroll event listener
React.useEffect(() => {
    window.addEventListener('scroll', triggerAnimations);
    return () => {
        window.removeEventListener('scroll', triggerAnimations);
    };
}, []);
  return (
  <div className="background mt-24 mb-24" style={{backgroundImage:`url(${bg6})`}}>
    <div className="bg">
    <div className="relative">
      <div className='flex mx-auto lg:ml-56 -mb-10 s'>
       
       <img className='w-36 mx-auto ' src={fly} alt="" />
       </div>
       <p className='text-center text-rose-900 '>___________________________________ </p>
        <h2 className='text-2xl md:text-4xl font-bold text-center text-purple leading-tight'>Explore Our Gallery</h2>
        <p className='text-center text-rose-900'>___________________________________</p>
      </div>
      <div className='gallery'>
      <div className='categories'>
        <button className='text-xl p-3 m-8 hover:bg-purple-500 text-white' onClick={() => handleCategoryChange('all')}>Show All</button>
        <button className='text-xl p-3 m-8 hover:bg-purple-500 text-white' onClick={() => handleCategoryChange('classic')}>Classic</button>
        <button className='text-xl p-3 m-8 hover:bg-purple-500 text-white' onClick={() => handleCategoryChange('bridal')}>Bridal</button>
      </div>
      <div className='image-grid'>
        <div className='column'>
          {filteredImages.map(image => (
            <div key={image.id} className='image-item'>
              <img data-aos="fade-left" className='hoverable-image w-80' src={image.src} alt={`Image ${image.id}`} />
            </div>
          ))}
        </div>
        <div className='empty-column'></div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Gallery;



