'use client';

import { Select } from '@radix-ui/themes';
import React from 'react';

const AsigneeSelect = () => {
   return (
      <Select.Root>
         <Select.Trigger placeholder="Assign..." />
         <Select.Content>
            <Select.Group>
               <Select.Label>Suggestions:</Select.Label>
               <Select.Item value="1">Kristijan</Select.Item>
            </Select.Group>
         </Select.Content>
      </Select.Root>
   );
};

export default AsigneeSelect;
