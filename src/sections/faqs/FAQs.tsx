import { useEffect } from "react"
import { faqs_data } from "../../utils/data"
import FAQ from "./FAQ"
import './faqs.css'
import AOS from 'aos'

const FAQs = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    })
  return (
    <section id='faqs'>
        <h2>Frequently Asked Questions</h2>
        <p>
            Here are some questions I usually get. Click to toggle the answer, 
            and if you still have some more questions, shoot me a message from the contact
            section!
        </p>
        <div className='container faqs__container' data-aos="fade-in">
            {
                faqs_data.map(faq => (
                    <FAQ 
                        key={faq.id}
                        faq={faq}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default FAQs