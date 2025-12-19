import { motion } from 'framer-motion';

const supportTiers = [
    {
        name: 'Apoio Institucional',
        count: 4,
        size: 'medium',
    },
];

export default function InstitutionalSupport() {
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

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const logoVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="apoio-institucional" className="py-24 bg-[#F9F4F5]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto mb-16 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Apoio Institucional</h2>
                    <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
                    <p className="text-lg text-[#593234]">
                        Instituições que apoiam e contribuem para o sucesso do I CONECC.
                    </p>
                </motion.div>

                {/* Support Grid */}
                <div className="space-y-12">
                    {supportTiers.map((tier, tierIndex) => (
                        <motion.div
                            key={tierIndex}
                            className="space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={gridVariants}
                        >
                            {/* Support Grid */}
                            <motion.div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto" variants={gridVariants}>
                                {Array.from({ length: tier.count }).map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className={`bg-white rounded-lg border-2 border-[#D4B5B7] flex items-center justify-center transition-all duration-300 hover:border-[#BC989A] hover:shadow-lg ${tier.size === 'large'
                                            ? 'h-48'
                                            : tier.size === 'medium'
                                                ? 'h-40'
                                                : 'h-32'
                                            }`}
                                        variants={logoVariants}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                    >
                                        <img
                                            src="/images/amb-pi-logo.png"
                                            alt="AMB-PI - Apoio Institucional"
                                            className="w-full h-full object-contain p-6"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

