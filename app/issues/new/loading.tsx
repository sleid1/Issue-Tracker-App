import { Box } from '@radix-ui/themes';
import React from 'react';
// Changed with created component for Organized imports
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import { Skeleton } from '@/app/components';

const LoadingNewIssuePage = () => {
   return (
      <Box>
         <Skeleton />
         <Skeleton height="20rem" />
      </Box>
   );
};

export default LoadingNewIssuePage;
