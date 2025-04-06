import React, { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-parallax';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  useEffect(() => {
    let triggers: ScrollTrigger[] = [];

    const initAnimations = () => {
      if (containerRef.current) {
        // Title animation
        const titleTrigger = ScrollTrigger.create({
          trigger: '.animate-title',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          onEnter: () => {
            gsap.to('.animate-title', {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power2.out'
            });
          },
          onLeaveBack: () => {
            gsap.to('.animate-title', {
              y: 100,
              opacity: 0,
              duration: 1,
              ease: 'power2.in'
            });
          }
        });

        // Project cards animation
        const cardsTrigger = ScrollTrigger.create({
          trigger: '.project-cards-container',
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          onEnter: () => {
            gsap.to('.project-card', {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power2.out'
            });
          },
          onLeaveBack: () => {
            gsap.to('.project-card', {
              x: -100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power2.in'
            });
          }
        });

        triggers.push(titleTrigger, cardsTrigger);
        setIsLoaded(true);
      }
    };

    // Small delay to ensure DOM elements are ready
    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <Parallax
        blur={0}
        bgImage="/assets/images/Z_INT_1.png"
        bgImageAlt="Modern Architecture"
        strength={200}
        className="h-screen"
        renderLayer={percentage => (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: `rgba(0, 0, 0, ${0.5 + percentage * 0.2})`
            }}
          />
        )}
      >
        <div className="h-screen flex items-center justify-center">
          <motion.div
            style={{ scale }}
            className="text-center text-white"
          >
            <h1 
              className="text-6xl font-bold mb-4 animate-title"
              style={{ 
                opacity: 0, 
                transform: 'translateY(100px)',
                visibility: isLoaded ? 'visible' : 'hidden' 
              }}
            >
              Architectural Excellence
            </h1>
            <p className="text-xl">Creating spaces that inspire</p>
          </motion.div>
        </div>
      </Parallax>

      {/* Project Showcase Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            style={{ opacity }}
            className="project-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="project-card bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
                style={{ 
                  opacity: 0, 
                  transform: 'translateX(-100px)',
                  visibility: isLoaded ? 'visible' : 'hidden' 
                }}
              >
                <Parallax
                  blur={0}
                  bgImage={`/assets/images/Z_INT_${item + 1}.png`}
                  bgImageAlt={`Project ${item}`}
                  strength={100}
                  className="h-64"
                >
                  <div className="h-64" />
                </Parallax>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Project {item}</h3>
                  <p className="text-gray-600">
                    Modern architectural design with a focus on sustainability and elegance.
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Section with Scroll Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Our Design Philosophy</h2>
              <p className="text-gray-600">
                We believe in creating spaces that harmoniously blend form and function,
                utilizing innovative materials and sustainable practices to bring your
                architectural vision to life.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Parallax
                blur={0}
                bgImage="/assets/images/Z_INT_6.png"
                bgImageAlt="Design Philosophy"
                strength={100}
                className="h-96 rounded-lg overflow-hidden"
              >
                <div className="h-96" />
              </Parallax>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 150, label: 'Projects Completed' },
              { number: 80, label: 'Happy Clients' },
              { number: 25, label: 'Awards Won' },
              { number: 10, label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}+</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxDemo; 