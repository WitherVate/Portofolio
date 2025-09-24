import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const ProjectSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .order("id", { ascending: false });

    if (error) console.error("Fetch error:", error);
    else setItems(data);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-12 text-white'>
      <div className='container mx-auto'>
        <h3 className='text-5xl text-yellow-400 font-bold text-center mb-10'>Projects</h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {items.map((item) => (
            <div key={item.id} className='bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform'>
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className='w-full h-48 object-cover'
                />
              )}
              <div className='p-6'>
                <h4 className='text-xl font-semibold text-yellow-300 mb-2'>{item.title}</h4>
                <p className='text-sm text-gray-300 mb-4'>{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block text-blue-400 hover:underline'
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;