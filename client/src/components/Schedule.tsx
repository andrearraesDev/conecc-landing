import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scheduleDays = [
  {
    date: '26/03',
    day: 'Quarta-feira',
    events: [
      { time: '17h', title: 'Check-in' },
      { time: '19h', title: 'Cerimônia de Abertura' },
      { time: '19h30', title: 'Composição da mesa de honra' },
      { time: '20h', title: 'Palestra Magna' },
      { time: '21h30', title: 'Check-out' },
    ],
  },
  {
    date: '27/03',
    day: 'Quinta-feira',
    events: [
      { time: '17h', title: 'Check-in' },
      { time: '19h', title: 'Cerimônia de Abertura' },
      { time: '19h30', title: 'Composição da mesa de honra' },
      { time: '20h', title: 'Palestra Magna' },
      { time: '21h30', title: 'Check-out' },
    ],
  },
  {
    date: '28/03',
    day: 'Sexta-feira',
    events: [
      { time: '17h', title: 'Check-in' },
      { time: '19h', title: 'Cerimônia de Abertura' },
      { time: '19h30', title: 'Composição da mesa de honra' },
      { time: '20h', title: 'Palestra Magna' },
      { time: '21h30', title: 'Check-out' },
    ],
  },
  {
    date: '29/03',
    day: 'Sábado',
    events: [
      { time: '17h', title: 'Check-in' },
      { time: '19h', title: 'Cerimônia de Abertura' },
      { time: '19h30', title: 'Composição da mesa de honra' },
      { time: '20h', title: 'Palestra Magna' },
      { time: '21h30', title: 'Check-out' },
    ],
  },
];

export default function Schedule() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

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

  const dayVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const eventsVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const eventItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="programacao" className="py-24 bg-[#F9F4F5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Programação do Congresso</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
          <p className="text-lg text-[#593234]">
            Confira a programação completa do I CONECC, com palestras, módulos temáticos e momentos de networking.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-4">
          {scheduleDays.map((scheduleDay, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-[#BC989A] pl-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={dayVariants}
              transition={{ delay: index * 0.1 }}
            >
              {/* Day Header */}
              <motion.button
                onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
                whileHover={{ x: 5 }}
              >
                <div>
                  <p className="text-2xl font-bold text-[#5D2126]">{scheduleDay.date}</p>
                  <p className="text-[#BC989A] font-semibold">{scheduleDay.day}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedDay === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#BC989A]" />
                </motion.div>
              </motion.button>

              {/* Events List */}
              <AnimatePresence>
                {expandedDay === index && (
                  <motion.div
                    className="mt-4 space-y-3 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={eventsVariants}
                  >
                    {scheduleDay.events.map((event, eventIdx) => (
                      <motion.div
                        key={eventIdx}
                        className="p-4 bg-white rounded-lg border-l-2 border-[#8C5E60] ml-4"
                        variants={eventItemVariants}
                        whileHover={{ x: 5, backgroundColor: '#F9F4F5' }}
                      >
                        <div className="flex gap-4">
                          <div className="shrink-0">
                            <p className="font-bold text-[#5D2126] min-w-24">{event.time}</p>
                          </div>
                          <div>
                            <p className="text-[#593234] font-medium">{event.title}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

