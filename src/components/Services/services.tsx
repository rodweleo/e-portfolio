import Service from "../service";

const services = [
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    description:
      "Get end-to-end development expertise with our full-stack development services. From frontend technologies like HTML, CSS, and JavaScript to backend technologies such as Node.js, Express, and databases like MongoDB or MySQL, our engineers are proficient in the entire stack. We create cohesive, scalable, and maintainable solutions that power your web applications from top to bottom.",
  },

  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Full-Stack Development",
    description:
      "Stay connected with your audience on the go. Our mobile app development services cater to both iOS and Android platforms, offering sleek and intuitive applications that engage users and meet your business objectives. Whether you're launching a new app or upgrading an existing one, our engineers ensure a seamless and responsive user experience from design to deployment.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Cloud Computing Solutions",
    description:
      "Embrace the flexibility and scalability of the cloud with our cloud computing services. Whether you're migrating existing applications or building new ones, we leverage platforms like AWS, Azure, or Google Cloud to optimize performance, enhance security, and reduce operational costs. Our engineers design and implement cloud-native solutions that align with your business goals",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with our cybersecurity services. Our engineers implement robust security measures to safeguard your applications and data. From conducting security assessments to implementing encryption, authentication, and authorization protocols, we prioritize the integrity and confidentiality of your systems, ensuring compliance with industry standards and regulations",
  },
];

const serviceList = services.map((service) => (
  <Service props={{ service: service }} />
));
const Services = () => {
  return (
    <section className="h-auto w-full p-5">
      <h2 className="text-white text-5xl">
        <span className="text-blue-500">My</span> Services
      </h2>
      <div className="flex flex-wrap w-full justify-between items-center">
        {serviceList}
      </div>
    </section>
  );
};

export default Services;
