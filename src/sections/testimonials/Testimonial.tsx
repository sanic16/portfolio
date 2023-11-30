import Card from "../../components/Card"

type Props = {
    testimonial: {
        id: number,
        quote: string,
        avatar: string,
        name: string,
        profession: string
    }
}

const Testimonial = (props: Props) => {
  return (
    <Card className="light">
        <p>{props.testimonial.quote}</p>
        <div className="testimonial__client">
            <div className="testimonial__client-avatar">
                <img src={props.testimonial.avatar} alt="Testimonial Avatar" />
            </div>
            <div className="testimonial__client-details">
                <h6>{props.testimonial.name}</h6>
                <small>{props.testimonial.profession}</small>
            </div>
        </div>
    </Card>
  )
}

export default Testimonial