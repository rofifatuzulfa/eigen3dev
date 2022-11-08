import React, { FC } from 'react';
import { Card, Col, Row } from "antd";

type Props = {
    image: string;
    title: string;
    description: string;
    author: string;
}
const {Meta} = Card;

const Cards: FC<Props> = ({image, title, description, author,}) => {
  return (
    <div>
        <Card hoverable style={{width: 300, height: 450}} cover={<img alt={title} src={image} style={{objectFit:'cover', height:'13rem'}} />}>
            <Meta title={title} description={description} />
            <h4 style={{marginTop: 20}}>{author}</h4>
        </Card>
    </div>
  )
}

export default Cards