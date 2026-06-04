import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import StarRating from './StarRating';
import { heroSlides } from '../data/content';
import { titlePath, watchPath } from '../utils/catalog';

export default function HeroSlider() {
  return (
    <Swiper
      className="hero-swiper"
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      speed={800}
      loop
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-image">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-overlay">
              <span className="slide-badge">Featured</span>
              <p className="slide-year">{slide.year}</p>
              <h1>{slide.title}</h1>
              <StarRating rating={slide.rating} />
              <p className="slide-description">{slide.description}</p>
              <div className="genre">
                {slide.genres.map((genre) => (
                  <span key={genre} className="category">
                    {genre}
                  </span>
                ))}
                <span className="category category--4k">4K</span>
              </div>
              <div className="slide-actions">
                <Link
                  to={watchPath('hero', slide.id)}
                  className="btn btn--primary btn--lg"
                >
                  <i className="fa-solid fa-play" aria-hidden="true" />
                  Watch Now
                </Link>
                <Link
                  to={titlePath('hero', slide.id)}
                  className="btn btn--ghost btn--lg"
                >
                  <i className="fa-solid fa-circle-info" aria-hidden="true" />
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
