import React from "react";
import { useEffect, useState, } from "react";
import HeaderServices from "../main/HeaderServises";
import { backEndAPI } from "../services/backend";
import './ITServices.css';
import Footer from "../main/Footer";
import { Helmet } from "react-helmet";


function ItServicesComponent(props) {
    const { service, direction = 'left' } = props;
    return (
        <div className="row-flex" style={{
            flexDirection: direction === 'left' ? 'row' : 'row-reverse',
            backgroundColor: direction === 'left' ? '#e8e6e6' : '#e8e6e6'
        }}>
            <div className='image' style={{ backgroundImage: `url(../${service.image.name})` }}></div>
            <div className="text-box">
                <div className="title">{it-services-info.name}</div>
                <div className="main-points">
                    {it-services-info.mainPoints.map(point => (<div>{point}</div>))}
                </div>
                <div className="show-more" style={{
                    backgroundColor: direction === 'right' ? '#5c5adb' : '#040321',
                    color: '#ffffff'
                }}><a href="/it-services-info">Дізнатися більше</a></div>
            </div>
        </div>);

}
function ITservices() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        backEndAPI.getServices()
            .then((response) => {
                setData(response);
                setIsLoading(false);

            })
            .catch((error) => console.log(error));
    }, []);
    console.log(data);
    return (
        <div className="main">
            <Helmet>
                <title>Services</title>
                <meta name="description" content="My page description" />
            </Helmet>
            <HeaderServices />

            <div >
                {data.map((service, i) =>
                    <ItServicesComponent
                        service={service}
                        direction={i % 2 ? 'left' : 'right'}
                    />)
                }


            </div>
            <Footer />
        </div>

    );

}








export default ITservices-info;




