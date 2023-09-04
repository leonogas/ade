import * as React from 'react';
import Button from './Button';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://reviewsplane.com/wp-content/uploads/2022/01/nina-mercado-_qN6tmGjmtg-unsplash.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center"  sx={{ mb: 4,
    fontSize: {
      lg: 80,
      md: 80,
      sm: 50,
      xs: 50
    }
  }}>
      Welcome
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h3"
        sx={{ mb: 2, mt: { xs: 1, sm: 1 }, fontSize: {lg: 50, md: 50, sm: 30, xs: 30}} }
      >
        Ultimate Reviews and Suggestions
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h4"
        sx={{ mb: 3, mt: { xs: 1, sm: 1 }, fontSize: {lg: 40, md: 40, sm: 20, xs: 20}} }
      >
        Let’s help reduce the time it takes you to make that decision
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/blog"
        sx={{ minWidth: 200 }}
      >
        Start Here
      </Button>
    </ProductHeroLayout>
  );
}