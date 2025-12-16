import { motion } from 'framer-motion';

const speakers = [
  {
    name: 'Dr. —————-',
    title: 'Médico —————-',
    bio: 'Referência em medicina esportiva e performance. Conhecido por sua didática única e vasto conhecimento em fisiologia e metabolismo.',
    highlight: true,
  },
];

export default function Speakers() {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const featuredVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="palestrantes" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(/images/speakers_section.png)',
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#BC989A]/5 to-[#F9F4F5]"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Palestrantes</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
          <p className="text-lg text-[#593234]">
            Conheça os renomados profissionais que estarão no CONECC 2026, compartilhando experiência e perspectivas que inspiram o futuro da medicina.
          </p>
        </motion.div>

        {/* Featured Speaker */}
        <motion.div
          className="mb-16 p-8 bg-white rounded-lg shadow-lg border-l-4 border-[#5D2126]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={featuredVariants}
          whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(93, 33, 38, 0.25)' }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Featured Speaker Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <motion.div
                className="w-48 h-48 rounded-full overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/speaker-default.jpg"
                  alt={speakers[0].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="flex-1">
              <div className="inline-block mb-4 px-3 py-1 bg-[#5D2126] text-[#F9F4F5] text-xs font-bold rounded-full">
                PALESTRANTE PRINCIPAL
              </div>
              <h3 className="text-3xl font-bold text-[#5D2126] mb-2">{speakers[0].name}</h3>
              <p className="text-[#BC989A] font-semibold mb-4">{speakers[0].title}</p>
              <p className="text-[#593234] leading-relaxed text-lg">{speakers[0].bio}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

