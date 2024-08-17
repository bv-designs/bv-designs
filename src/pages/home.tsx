import React from 'react';
import { VideoGrid } from '../components';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <VideoGrid from="home" />
        <Link
          to="/projects"
          className="absolute right-8 pb-1 hover:underline text-gray-500 hover:text-black transition duration-300"
        >
          Show More
        </Link>
      </div>

      <section className="bg-gray-100 py-12 mt-8">
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center animate__animated animate__fadeInUp">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 animate__animated animate__fadeInUp animate__delay-1s">
            At BV Designs, we pride ourselves on our commitment to innovation,
            adaptability, and design excellence. Our team of experts constantly
            pushes the boundaries of what's possible, creating spaces that are
            not only visually stunning but also highly functional and adaptable
            to the ever-changing needs of our clients. With a focus on
            sustainable design and cutting-edge technology, we bring your vision
            to life with precision and creativity. Our approach is rooted in a
            deep understanding of architectural principles, coupled with a
            relentless pursuit of perfection. We believe in the power of design
            to transform spaces, enhance lives, and inspire communities.
          </p>
        </div>
      </section>

      <section className="bg-gray-200 py-12 mt-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Architecture Design
              </h3>
              <p className="text-gray-600">
                We offer innovative architectural design solutions that blend
                functionality with aesthetic appeal, tailored to meet your
                specific needs.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interior Design</h3>
              <p className="text-gray-600">
                Our interior design services create beautiful, functional spaces
                that reflect your style and enhance your living or working
                environment.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Project Management
              </h3>
              <p className="text-gray-600">
                From concept to completion, our project management services
                ensure that your project is delivered on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
