import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

const contacts = [
  {
    icon: <FaEnvelope className="text-yellow-400 text-xl" />,
    label: 'Email',
    value: 'muhammadirsyaadfadhillah@gmail.com',
    href: 'mailto:muhammadirsyaadfadhillah@gmail.com',
  },
  {
    icon: <FaPhone className="text-yellow-400 text-xl" />,
    label: 'Phone',
    value: '0821-5927-0079',
    href: 'tel:081234567890',
  },
  {
    icon: <FaMapMarkerAlt className="text-yellow-400 text-xl" />,
    label: 'Location',
    value: 'Cikarang Timur, Jawa Barat',
    href: null,
  },
  {
    icon: <FaLinkedin className="text-yellow-400 text-xl" />,
    label: 'LinkedIn',
    value: 'Muhammad Irsyaad Fadhillah',
    href: 'https://www.linkedin.com/in/muhammad-irsyaad-fadhillah-56a904378/    ',
  },
  {
    icon: <FaGithub className="text-yellow-400 text-xl" />,
    label: 'GitHub',
    value: 'WitherVate',
    href: 'https://github.com/WitherVate',
  },
]

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/70 rounded-xl shadow-lg p-8">

        {/* Kolom Kiri - Info Kontak */}
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">
            My Contact
          </h2>
          <p className="mb-6 text-gray-700">
            Interested in discussing tech projects or other exciting topics? Contact me through the information below.
          </p>

          <div className="space-y-5 text-gray-800">
            {contacts.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3">
                {icon}
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan - Google Maps */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            My Location
          </h3>
          <div className="rounded-lg overflow-hidden shadow-md w-full h-80">
            <iframe
              title="Lokasi Pesantren Rabbaanii"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.9099527572673!2d107.17842239839476!3d-6.287388200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b445d8375b1%3A0x2be0e0c5314813b1!2sPesantren%20SMP%20dan%20SMA%20Rabbaanii%20Islamic%20School!5e0!3m2!1sid!2sid!4v1758808248901!5m2!1sid!2sid"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
