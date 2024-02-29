import Card from '@mui/material/Card';
import { Counter } from "./Counter";
import { Link } from 'react-router-dom';

export function Recipe({ data }) {
  return (
    <div>
      <Card className="card">
        <Link to={`/recipedetails/${data._id}`}>
          <img className="img" src={data.image} alt="chiken" />
        </Link>
        <div className="detail">
          <p className="title">{data.cuisines}-cuisine </p>
          <Link className='Link' to={`/recipedetails/${data._id}`}>
            <h3 className="name">{data.title}</h3></Link>
          <div className="count">
            <p className="de">{data.rating}</p>
            <Counter />
          </div>
        </div>
      </Card>
    </div>
  );
}
