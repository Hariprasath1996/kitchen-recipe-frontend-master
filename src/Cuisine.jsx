import * as React from 'react';

import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

export function Cuisine() {
 
  return (
      <div>
           
      <h1 className='side'>CUISINES</h1>
    <div className='cuisines'>
      <div>
      <Card className="card">
            <Link to={`/cuisines/indian`}>
                    <img className="img" src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="indian" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/indian`}>
                    <h3 className="name1">Indian Cuisines</h3></Link>
      </div>
      </Card>
      </div>
      <div>
      <Card className="card">
            <Link to={`/cuisines/mexican`}>
                    <img className="img" src="https://www.planetware.com/wpimages/2019/09/mexico-in-pictures-most-beautiful-places-to-visit-mexico-city.jpg" alt="mexican" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/mexican`}>
                    <h3 className="name1">Mexican Cuisines</h3></Link>
      </div>
      </Card>
      </div>
      <div>
      <Card className="card">
            <Link to={`/cuisines/italian`}>
                    <img className="img" src="https://www.kids-world-travel-guide.com/images/italy_coloseo_shutterstock_88957447_ed_1445441219_31892.jpg" alt="italian" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/italian`}>
                    <h3 className="name1">Italian Cuisines</h3></Link>
      </div>
      </Card>
      </div>
      <div>
      <Card className="card">
            <Link to={`/cuisines/german`}>
                    <img className="img" src="https://listaka.com/wp-content/uploads/2017/04/castles.jpg" alt="german" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/german`}>
                    <h3 className="name1">German Cuisines</h3></Link>
      </div>
      </Card>
      </div>   <div>
      <Card className="card">
            <Link to={`/cuisines/greek`}>
                    <img className="img" src="https://www.davestravelpages.com/wp-content/uploads/2019/08/parthenon-in-greece-1024x576.jpg" alt="greek" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/greek`}>
                    <h3 className="name1">Greek Cuisines</h3></Link>
      </div>
      </Card>
      </div>
      <div>
      <Card className="card">
            <Link to={`/cuisines/filipino`}>
                    <img className="img" src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/06/Manila-philippines.jpg" alt="filipino" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/filipino`}>
                    <h3 className="name1">filipino Cuisines</h3></Link>
      </div>
      </Card>
      </div>
      <div>
      <Card className="card">
            <Link to={`/cuisines/chinese`}>
                    <img className="img" src="https://cdn.enjoytravel.com/img/travel-news/forbidden-city-beijing.jpg" alt="chinese" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/chinese`}>
                    <h3 className="name1">Chinese Cuisines</h3></Link>
      </div>
      </Card>
      </div>
      <div>
      <Card className="card">
            <Link to={`/cuisines/japanese`}>
                    <img className="img" src="https://cdn.enjoytravel.com/img/travel-news/7-of-the-most-famous-monuments-in-japan-hero.jpg" alt="japanese" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/japanese`}>
                    <h3 className="name1">Japanese Cuisines</h3></Link>
      </div>
      </Card>
      </div>
      <div>
      <Card className="card">
            <Link to={`/cuisines/turky`}>
                    <img className="img" src="https://img.spotblue.com/app/uploads/2017/08/what-is-Turkey-famous-for.jpg" alt="turky" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/turky`}>
                    <h3 className="name1">Turky Cuisines</h3></Link>
      </div>
      </Card>
      </div>
      <div>
      <Card className="card">
            <Link to={`/cuisines/spanish`}>
                    <img className="img" src="https://gogoespana.com/wp-content/uploads/2020/03/Famous-Spanish-people-El-Cid.jpg" alt="spanish" />
            </Link>
      <div className="detail">
            <Link className='Link' to={`/cuisines/spanish`}>
                    <h3 className="name1">Spanish Cuisines</h3></Link>
      </div>
      </Card>
      </div>
     </div>
     </div>
  );
}
