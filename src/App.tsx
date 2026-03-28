/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  Utensils,
  Award,
  Coffee,
  Zap
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center rounded-full bg-blue-600 border-2 border-white overflow-hidden ${className}`}>
    <span className="text-white font-serif font-bold text-lg tracking-tighter flex items-center justify-center">
      <span className="relative z-10">S</span>
      <span className="relative z-0 -ml-1 mt-1 opacity-80">F</span>
    </span>
    {/* Subtle creative accent */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/50 to-transparent pointer-events-none"></div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Réservation', href: '#reservation' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
          <div className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
            <span className="text-gold">Soif</span>
            <span className="text-white">de Faim</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservation" 
            className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 text-sm uppercase tracking-widest font-medium"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-charcoal-light border-t border-white/10 py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif tracking-wide hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#reservation" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 bg-gold text-charcoal text-center font-bold uppercase tracking-widest"
            >
              Réserver une Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/restaurant-interior/1920/1080" 
          alt="Restaurant Ambiance" 
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block font-medium">Gastronomie Belge à Bruxelles</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
            Soif de <span className="text-gold italic">Faim</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Incroyable une cuisine franche, réfléchie, mais spontanée sur Bruxelles. 
            Une expérience sensorielle au cœur de la capitale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-10 py-4 bg-gold text-charcoal font-bold uppercase tracking-widest hover:bg-gold-light transition-all duration-300 shadow-lg"
            >
              Voir le Menu
            </a>
            <a 
              href="#reservation" 
              className="w-full sm:w-auto px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Réserver une Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block font-medium">Notre Histoire</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Une Passion pour la <br />
              <span className="text-gold italic">Cuisine Authentique</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Situé au cœur vibrant de Bruxelles, Soif de Faim est né d'une volonté simple : redonner ses lettres de noblesse à la cuisine belge tout en y insufflant une modernité audacieuse.
              </p>
              <p>
                Notre chef travaille main dans la main avec des producteurs locaux pour vous proposer une cuisine franche, réfléchie, mais toujours spontanée. Chaque plat raconte une histoire, celle de notre terroir et de nos saisons.
              </p>
              <p className="italic font-serif text-white">
                "La cuisine n'est pas seulement une affaire de goût, c'est une émotion partagée."
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">12</span>
                <span className="text-xs uppercase tracking-tighter text-white/50">Années d'Expérience</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-gold">3</span>
                <span className="text-xs uppercase tracking-tighter text-white/50">Étoiles Guide</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/seed/chef-cooking/800/1000" 
                alt="Chef at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 aspect-square border-8 border-charcoal overflow-hidden hidden md:block">
              <img 
                src="https://picsum.photos/seed/belgian-dish/400/400" 
                alt="Signature Dish" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold flex items-center justify-center rounded-full text-charcoal font-bold text-center p-4 leading-tight rotate-12">
              Produits Locaux
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturedMenu = () => {
  const dishes = [
    {
      name: "Mille-feuille de pommes de terre",
      description: "Fines couches de pommes de terre croustillantes, crème infusée aux herbes et fleur de sel.",
      price: "16€",
      image: "/2.png"
    },
    {
      name: "Burrata",
      description: "Burrata crémeuse des Pouilles, tomates anciennes, pesto de basilic et pignons grillés.",
      price: "18€",
      image: "/4.png"
    },
    {
      name: "Brandade",
      description: "Brandade de cabillaud légère, huile d'olive vierge, ail confit et fines herbes.",
      price: "19€",
      image: "/5.png"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block font-medium">Notre Sélection</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Plats Incontournables</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{dish.name}</h3>
                  <span className="text-gold font-bold">{dish.price}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {dish.description}
                </p>
                <button className="mt-6 text-xs uppercase tracking-widest text-gold flex items-center gap-2 hover:gap-4 transition-all">
                  Commander <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-sm font-bold">
            Voir le Menu Complet
          </button>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Utensils className="text-gold" size={32} />,
      title: "Ingrédients Frais",
      description: "Nous sélectionnons quotidiennement les meilleurs produits du terroir belge."
    },
    {
      icon: <Award className="text-gold" size={32} />,
      title: "Expertise Chef",
      description: "Une équipe passionnée dirigée par un chef étoilé aux techniques raffinées."
    },
    {
      icon: <Coffee className="text-gold" size={32} />,
      title: "Ambiance Cosy",
      description: "Un cadre élégant et chaleureux pour vos moments les plus précieux."
    },
    {
      icon: <Zap className="text-gold" size={32} />,
      title: "Service Rapide",
      description: "Une attention de chaque instant pour un service fluide et impeccable."
    }
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 group hover:bg-gold transition-all duration-300">
                <div className="group-hover:text-charcoal transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "/1.png",
    "/3.png",
    "/6.png",
    "/7.png",
    "/8.png"
  ];

  return (
    <section id="gallery" className="py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block font-medium">Immersion</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Galerie Photos</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-sm group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Chloé GDF",
      rating: 5,
      text: "Cuisine gourmande et généreuse, avec des produits frais et de saison, et un patron aux petits soins pour ses clients. Que demander de plus ? C’est tout simplement délicieux! La carte change tous les midis. Nous sommes venus à la soirée organisée par le restaurant le 5 décembre, la cocotte était incroyable! Un endroit à découvrir :-)"
    },
    {
      name: "Kahl Driver",
      rating: 5,
      text: "Toute une expérience inattendu. On voulait trouver un petit restaurant rapide pour l’heure du dîner, mais nous sommes tombés sur ce restaurant tout à fait exceptionnel. C’est le chef qui accueille les clients, s’occupe du service et prépare les plats. Les plats étaient exceptionnels, tellement bien exécutés. Comme c’est le chef qui fait le service, ils s’assurent que nous sommes vraiment satisfaits. On dirait qu’il lisait nos pensées et allant au delà de nos attentes, en anticipant nos besoins :-). C’est notre meilleure expérience culinaire à Bruxelles, nous reviendrons lorsque nous serons de retour."
    },
    {
      name: "Cyrano Sunyveres",
      rating: 5,
      text: "Dans ce ballet gastronomique, Antoine est à la fois le personnage principal, l'orchestre et le directeur, nous livrant chaque jour une représentation différente, composée selon l'inspiration du moment en restant à l'écoute de son public, pour le plus grand plaisir de celui-ci qui n'aura de cesse d'en redemander."
    }
  ];

  return (
    <section className="py-24 bg-charcoal overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif text-gold select-none">"</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block font-medium">Avis Clients</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ce qu'ils disent de nous</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-10 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < review.rating ? "text-gold fill-gold" : "text-white/20"} />
                ))}
              </div>
              <p className="text-white/80 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <h4 className="font-serif text-gold uppercase tracking-widest text-sm">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Votre demande de réservation a été envoyée. Nous vous contacterons prochainement.");
  };

  return (
    <section id="reservation" className="py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-10">Réserver une Table</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Nom Complet</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Téléphone</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Date</label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Heure</label>
                  <input 
                    type="time" 
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50">Convives</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-gold outline-none transition-colors"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="bg-charcoal">{n} Personnes</option>)}
                  </select>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gold text-charcoal font-bold uppercase tracking-widest hover:bg-gold-light transition-all duration-300 mt-4"
              >
                Confirmer la Réservation
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Contact & Accès</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2">Adresse</h4>
                  <p className="text-white/60">Chau. de Charleroi 140, 1060 Saint-Gilles, Belgique</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2">Téléphone</h4>
                  <p className="text-white/60">+32 474 53 39 77</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <Clock className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2">Horaires</h4>
                  <p className="text-white/60">Lun - Jeu : 12:00 - 15:30</p>
                  <p className="text-white/60">Ven : 12:00 - 15:30 | 19:30 - 21:30</p>
                  <p className="text-white/60">Sam - Dim : Fermé</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 aspect-video bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 group-hover:text-gold transition-colors">
                <MapPin size={48} className="mb-4" />
                <span className="uppercase tracking-widest text-xs">Carte Interactive</span>
              </div>
              <img 
                src="https://picsum.photos/seed/brussels-map/800/450?grayscale" 
                alt="Map" 
                className="w-full h-full object-cover opacity-20 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <Logo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
                <span className="text-gold">Soif</span>
                <span className="text-white">de Faim</span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Une cuisine franche, réfléchie, mais spontanée sur Bruxelles. L'excellence de la gastronomie belge revisitée.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8">Navigation</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">À Propos</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Notre Menu</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Galerie</a></li>
              <li><a href="#reservation" className="hover:text-gold transition-colors">Réservation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8">Contact</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-1" />
                <span>Chau. de Charleroi 140, 1060 Saint-Gilles</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+32 474 53 39 77</span>
              </li>
              <li className="flex items-center gap-3">
                <Utensils size={16} className="text-gold shrink-0" />
                <span>contact@soifdefaim.be</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Inscrivez-vous pour recevoir nos actualités et événements spéciaux.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-gold w-full"
              />
              <button className="bg-gold text-charcoal px-4 py-3 hover:bg-gold-light transition-colors">
                <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs uppercase tracking-widest">
          <p>© 2026 Soif de Faim. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
