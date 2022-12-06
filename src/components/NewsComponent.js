import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Card, CardTitle, CardImg, CardBody, CardText, Button } from 'reactstrap';

function News()
{
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=15b55b5fbb23488997e479a43a32d3d5")
        .then((response)=>{
            // console.log(response);
            setData(response.data.articles);
        })
    })
    return (
        <div className='container'>
            <div className='row my-row'>
                    {
                        data.map((value) => {
                            return(
                                <div key={value} className='col-12 col-sm-3'>
                                    <Card style={{margin: '5px', marginTop: '10px'}} width = "100%">
                                        <CardImg  src={value.urlToImage} alt=" News Image" />
                                        <CardBody>
                                            <CardTitle>{value.title}</CardTitle>
                                            <CardText>{value.description}</CardText>
                                            <Button style={{backgroundColor: '#1111bb'}} href={value.url}>Full Article</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            );
                        })
                    }
            </div>
        </div>
    );
}

export default News;