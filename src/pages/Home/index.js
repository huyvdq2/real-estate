import { Divider } from '@mui/material';
import { Grid } from '@mui/material';
import { Pagination } from '@mui/material';
import { Paper } from '@mui/material';
import React from 'react';
import { CustomLink } from '../../components/CustomLink';
import { getPosts } from '../../db/utils';
import { Products } from './Products';

export default function Home() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return (
    <Paper
      sx={{
        borderRadius: 2,
        boxShadow: 'none',
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomLink to="/product/123">
            <Products />
          </CustomLink>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <CustomLink to="/product/123">
            <Products />
          </CustomLink>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <CustomLink to="/product/123">
            <Products />
          </CustomLink>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <CustomLink to="/product/123">
            <Products />
          </CustomLink>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <CustomLink to="/product/123">
            <Products />
          </CustomLink>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <Pagination
        sx={{
          width: '100%',
          mt: 1,
          '& ul': {
            justifyContent: 'center',
          },
        }}
        count={10}
      />
    </Paper>
  );
}
