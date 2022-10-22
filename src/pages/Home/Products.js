import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import React from 'react';

export const Products = () => {
  return (
    <Box
      sx={{
        '&:hover': {
          background: '#f5f5f5',
        },
        p: 1.5,
        borderRadius: 2,
        transition: 'background 0.3s ease',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <img
            alt="Product"
            src="https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149"
            width="100%"
            style={{
              borderRadius: 8,
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Stack spacing={2}>
            <Typography
              variant="h5"
              fontWeight="500"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              CẦN BÁN GẤP 2 KHU ĐẤT LIỀN KỀ TẠI KHU PHỐ BÌNH ĐƯỜNG 3, PHƯỜNG AN
              BÌNH,
            </Typography>
            <Typography
              variant="body2"
              display="block"
              textOverflow="ellipsis"
              wordwrap="break-word"
              overflow="hidden"
              maxHeight="5em"
              lineHeight="1.8em"
              color="GrayText"
            >
              Cần bán 2 khu đất liền kề. - Tổng diện tích 2 khu đất là 3110m2. -
              Địa chỉ khu phố Bình Đường 3, phường An Bình, thành phố Dĩ An,
              tỉnh Bình Dương. - Giáp ranh đường số 9 khu phố 1 phường Linh Tây
              quận Thủ Đức. - Cách đường Phạm Văn Đồng 500m. - Cách chợ Thủ Đức
              2km. Cách khu công nghiệp sóng thần 1km. - Gần chợ Việt Lập. Gần
              trường học mãu giáo cấp 1- cấp 2_ cấp 3. ' - Gần bệnh viện đa khoa
              Thủ Đức. - Dạ dự án được xây dựng tự do. Được tách thửa và lên thổ
              cư. Giấy tờ pháp lý đầy đủ. - Có thể làm các công trình nhà cho
              thuê, hoặc kho bãi. Đường 2 làn xe chạy an toàn. - Khu dân ở đông
              đúc. - Khu 1 tầm 1700m 2 hai mặt tiền: Hướng Đông Bắc, mặt tiền
              21m; hướng Tây Bắc...12m - Khu thứ 2 khoản 1400m2, mặt tiền đường
              21m, hướng Đông
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
