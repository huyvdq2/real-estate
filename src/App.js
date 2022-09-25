import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import { Card, CardContent, Container, TextField } from '@mui/material';
import React from 'react';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  const [search, setSearch] = React.useState('');

  return (
    <DefaultLayout>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <TextField
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="outlined"
              placeholder="Nhập địa chỉ, từ khóa,..."
              InputProps={{
                endAdornment: (
                  <Button variant="contained" endIcon={<Search />}>
                    Tìm
                  </Button>
                ),
              }}
              label="Tìm kiếm bất động sản"
            />
          </CardContent>
        </Card>
      </Container>
    </DefaultLayout>
  );
}

export default App;
