import React from 'react';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import Image1 from '../../../assets/images/gigi.jpg';
import Image2 from '../../../assets/images/nick.jpg';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../../src/theme.js';

const About = () => {
    return (
        <ThemeProvider theme={theme}>
        <div>
            <Navbar />
            <div className="bg-blue-700 py-4"></div>
            
            <section className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">About DZIKO CENTRE FOR CLIMATE JUSTICE (DZIKO CCJ)</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                    <p className="text-lg text-gray-700">
                        DZIKO CCJ was founded in January 2024 with a bold mission: to empower the next generation of
                        environmental leaders and activists. We believe that young people have the power to drive positive change in
                        the world, particularly in the urgent fight against climate change and environmental degradation. Our organization is
                        dedicated to providing young people with the knowledge, skills, and resources they need to become effective advocates for
                        the planet.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
                    <p className="text-lg text-gray-700">
                        Our vision is a world where every young person is empowered to take action to protect and preserve the
                        environment. We envision a future where sustainability is not just a buzzword but a way of life, and where every individual
                        understands their role in creating a more sustainable and equitable world for all.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Our Approach</h2>
                    <p className="text-lg text-gray-700">
                        At DZIKO CCJ, we take a multi-faceted approach to environmental activism and education. We
                        believe in the power of education to inspire change, so we work with schools, communities, and youth organizations to
                        provide environmental education and awareness programs. We also support youth-led projects and initiatives that
                        address pressing environmental issues, from plastic pollution to deforestation to climate change.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Meet Our Expert Team: Driven Professionals Crafting Sustainable Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
                            <h2 className="text-xl font-bold mb-2">Dzidedi Senaya - Co-founder</h2>
                            <img className="w-full h-auto rounded-md mb-4" src={Image1} alt="Dzidedi Senaya" />
                            <p className="text-gray-700 mt-4">
                                With a fervent dedication to climate justice, environmental sustainability, ethical sourcing, and web development, Dzidedi Senaya emerges as a formidable force in the realm of social entrepreneurship. As the co-founder of the Dziko Centre for Climate Justice, she champions causes close to her heart, advocating for tangible change and amplifying voices for a greener, more equitable world.
                                Simultaneously, as the Founder and Executive Director of Lebene Botanicals, Dzidedi leads a passionate team in the creation of premium natural skin and hair care products. Ethically sourcing raw materials from Ghana, her mission extends beyond beauty to support local communities and foster environmental sustainability. Leveraging Ghana's rich natural resources, Dzidedi aims to meet the demand for sustainable beauty solutions while positively impacting livelihoods and ecosystems.
                                In the realm of technology, Dzidedi is an adept web developer and software engineer in training, undergoing rigorous education at esteemed institutions like MEST Africa and ALX Africa. Armed with certifications in design thinking and high-performance teams, she has honed her craft through practical experiences, including a job simulation with Moreton Bay Regional Council. Dzidedi harbors a profound interest in leveraging her web development skills for the betterment of community development sectors, recognizing the transformative potential of technology in driving positive change.
                                Dzidedi's dedication to positive change extends beyond her entrepreneurial endeavors. She actively engages as a proactive member of prestigious organizations, including the Young African Leadership Initiative (YALI), showcasing her commitment to continuous learning and societal impact. Her roles within these organizations and her professional background underscore Dzidedi's dedication to creating lasting change, combining business acumen with a genuine passion for community development. This demonstrates that business success and social responsibility are not mutually exclusive.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow flex flex-col items-center">
                            <h2 className="text-xl font-bold mb-4 mt-1">Nicholas Adomako - Co-founder</h2>
                            <img className="w-full h-auto rounded-md mb-4" src={Image2} alt="Nicholas Adomako" />
                            <p className="text-gray-700 mt-4">
                                Nicholas Adomako, the visionary Founder of Dikopem Prestige Ltd., is a dedicated advocate for positive change in both social and environmental domains. Since June 2022, Nicholas has been at the forefront of pioneering initiatives and forging impactful partnerships aimed at addressing community challenges. His journey began as an Audit Staff at Amoako - Boateng & Associates (Chartered Accountants) in 2020, where he seamlessly aligned his financial acumen with a deep-seated vision for community development.
                                Nicholas is not just a business leader; he is a proactive member of prestigious organizations, including the Association of Accounting Technicians, Chartered Accountants Worldwide, Youth Leadership Parliament, and the Young African Leadership Initiative. These affiliations showcase his commitment to continuous learning, integrating financial expertise with a broader perspective on leadership and societal impact.
                                His roles within these organizations and his professional background underscore Nicholas's dedication to creating lasting change. His approach combines financial excellence with a genuine passion for community development, demonstrating that business success and social responsibility are not mutually exclusive.
                                Nicholas Adomako's impactful contributions highlight his keen sense of responsibility and a deep understanding of the interconnectedness of financial health and community well-being. As a forward-thinking leader, Nicholas eagerly anticipates exploring collaborative opportunities for mutual growth, recognizing that true progress is achieved through collective efforts. His journey exemplifies the potential for individuals to drive positive change, one visionary initiative at a time.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Our Partners</h2>
                    <p className="text-lg text-gray-700">
                        DZIKO CCJ collaborates with a range of partners, including businesses, non-profits, government agencies,
                        and educational institutions, to maximize our impact and reach. Together, we work towards common goals and
                        shared values, leveraging each other's strengths and resources to create positive change.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Join Us</h2>
                    <p className="text-lg text-gray-700">
                        Are you passionate about protecting the environment and making a difference in your community? Join DZIKO CCJ
                        today and become part of a growing movement of young people who are dedicated to saving the planet.
                        Together, we can create a brighter, greener future.
                    </p>
                </div>
            </section>
            <Footer />
            <div className="bg-blue-900 py-4"></div>
        </div>
        </ThemeProvider>
    );
}

export default About;
