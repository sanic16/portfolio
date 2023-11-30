
// ========================================= NAVBAR =========================================

export const navbar_links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]

// ========================================= HEADER =========================================
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


export const header_links = [
    {id: 1, link: 'https://instagram.com', icon: AiOutlineInstagram},
    {id: 2, link: 'https://twitter.com', icon: AiOutlineTwitter},
    {id: 3, link: 'https://dribbble.com', icon: AiOutlineDribbble},
    {id: 4, link: 'https://github.com', icon: AiFillGithub}
]

// ========================================= ABOUT =========================================

import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {BiHappyHeartEyes} from 'react-icons/bi'

export const about_data =  [
    {id: 1, icon: FaAward, title: 'Experience', desc: '3+ Years Working'},
    {id: 2, icon: TbBooks, title: 'Projects', desc: '180+ Completed'},
    {id: 3, icon: BiHappyHeartEyes, title: 'Clients', desc: '70+ happy clients'}
    ]

// ========================================= SERVICES =========================================
import {SiAdobexd} from 'react-icons/si'
import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'


export const services = [
    {
        id: 1, icon: SiAdobexd, title: 'UI/UX Design', desc: "My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product."
    },
    {
        id: 2, icon: RiReactjsLine, title: 'Frontend Development', desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop."
    },
    {
        id: 3, icon: FaServer, title: 'Backend Development', desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks."
    },
    {
        id: 4, icon: AiFillAppstore, title: 'App Development', desc: 'Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you.'
    }
]

// ========================================= PORTFOLIO =========================================

import Image1 from '../assets/project1.jpg'
import Image2 from '../assets/project2.jpg'
import Image3 from '../assets/project3.jpg'
import Image4 from '../assets/project4.jpg'
import Image5 from '../assets/project5.jpg'
import Image6 from '../assets/project6.jpg'
import Image7 from '../assets/project7.jpg'
import Image8 from '../assets/project8.jpg'
import Image9 from '../assets/project9.jpg'

export const projects = [
    {
        id: 1,
        category: 'uiux',
        image: Image1,
        title: "Project Title One (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 2,
        category: 'frontend',
        image: Image2,
        title: "Project Title Two (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 3,
        category: 'frontend',
        image: Image3,
        title: "Project Title Three (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 4,
        category: 'uiux',
        image: Image4,
        title: "Project Title Four (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 5,
        category: 'uiux',
        image: Image5,
        title: "Project Title Five (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! ",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 6,
        category: 'frontend',
        image: Image6,
        title: "Project Title Six (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 7,
        category: 'frontend',
        image: Image7,
        title: "Project Title Seven (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 8,
        category: 'backend',
        image: Image8,
        title: "Project Title Eight (Backend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 9,
        category: 'frontend',
        image: Image9,
        title: "Project Title Nine (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    }
]

// ========================================= TESTIMONIALS =========================================
import Avatar1 from '../assets/avatar1.jpg'
import Avatar2 from '../assets/avatar2.jpg'
import Avatar3 from '../assets/avatar3.jpg'
import Avatar4 from '../assets/avatar4.jpg'
import Avatar5 from '../assets/avatar5.jpg'
import Avatar6 from '../assets/avatar6.jpg'
import Avatar7 from '../assets/avatar7.jpg'


export const testimonials_data = [
        {
        id: 1,
        quote: "It's truly amazing how you did exactly what I want with the little information I gave. You'll be my go-to developer from today. Highly recommend!",
        avatar: Avatar1,
        name: 'Nana Ama McBrown',
        profession: 'Actress'
        },
        {
        id: 2,
        quote: "Good job, Hajia! Right on time! I really like how the project turned out, and my customers like it as well. It was fun collaborating with you.",
        avatar: Avatar2,
        name: 'Ernest Achiever',
        profession: 'Web Developer'
        },
        {
        id: 3,
        quote: "Impressive work, buddy. Highly recommend!",
        avatar: Avatar3,
        name: 'Daniel Vinyo',
        profession: 'Graphic Designer'
        },
        {
        id: 4,
        quote: "Wow. You finished earlier than you said. Everything's modern and beautifully done to the T. Great profession!",
        avatar: Avatar4,
        name: 'Diana Ayi',
        profession: 'Singer'
        },
        {
        id: 5,
        quote: "I like how the app turned out. You are incredible, Hajia.",
        avatar: Avatar5,
        name: 'Vivian Mensah',
        profession: 'Street Photographer'
        },
        {
        id: 6,
        quote: "Best developer in the world!",
        avatar: Avatar6,
        name: 'Hajia Bintu',
        profession: 'Brand Influencer'
        },
        {
        id: 7,
        quote: "Keep doing great stuff, dear! Nicely executed!",
        avatar: Avatar7,
        name: 'Nicki Nyarko',
        profession: 'Makeup Artist'
        }
    ]

// ========================================= FAQs =========================================
export const faqs_data = [
    {
      id: 1,
      question: "What do you need to start working on my project?",
      answer: "It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there."
    },
    {
      id: 2,
      question: "How long will my project take to complete?",
      answer: "This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date."
    },
    {
      id: 5,
      question: "Is hosting and domain registration inclusive in your pricing?",
      answer: "No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to."
    },
    {
      id: 4,
      question: "How much do you charge for an average website or app?",
      answer: "Once again, this depends. But my prices are affordable so you're good."
    },
    {
      id: 3,
      question: "What's your payment plan?",
      answer: "Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered."
    },
    {
      id: 6,
      question: "What if the project doesn't turn out good?",
      answer: "You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best."
    }
  ]

// ========================================= CONTACT =========================================
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'

export const contact_data = [
    {id: 1, icon: HiOutlineMail, link: 'mailto:dummyegator@gmail.com'},
    {id: 2, icon: RiMessengerLine, link: 'https://www.messenger.com/t/100087217880007'},
    {id: 3, icon: FaWhatsapp, link: 'https://wa.me/+233557097546'}
]


// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546



// ========================================= FOOTER =========================================

export const footer_links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const footer_socials = [
    {id: 1, link: 'https://instagram.com', icon: AiOutlineInstagram},
    {id: 2, link: 'https://twitter.com', icon: AiOutlineTwitter},
    {id: 3, link: 'https://dribbble.com', icon: AiOutlineDribbble},
    {id: 4, link: 'https://github.com', icon: AiFillGithub}
]

// ========================================= FLOATING NAV =======================================

import { AiFillHome } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { MdHomeRepairService } from 'react-icons/md'
import { AiFillMessage } from 'react-icons/ai'

export const floating_nav = [
    {id: 1, link: '#', icon: AiFillHome },
    {id: 2, link: '#about', icon: BsPersonFill},
    {id: 3, link: '#services', icon: MdHomeRepairService},
    {id: 4, link: '#portfolio', icon: AiFillMessage},
    {id: 5, link: '#contact', icon: AiFillMessage}
]