import React from 'react';

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components
import HeroImage from './HeroImage';
import Grid from './Grid';

// hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// image
import NoImage from '../images/no_image.jpg';
import { property } from 'lodash';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  // return <div>Home Page</div>
  return (
    <>
      {state.results[0] ?
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
        : null}

        <Grid header='Popular movies'>
          {state.results.map(movie => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </Grid>
    </>
  );
}

export default Home;
