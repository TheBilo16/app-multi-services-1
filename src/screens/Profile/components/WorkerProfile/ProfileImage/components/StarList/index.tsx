import React, { FC, memo } from 'react';
import * as SLS from './styles';
import { AntDesign } from '@expo/vector-icons';
import { IStar } from '../../../../../../../metadata/interfaces';
import { colors } from '../../../../../../../config';

interface IProps {
  stars : IStar[];
}

const StarList : FC<IProps> = ({ stars }) => (
  <SLS.Container>
    {
      stars.map((v,i) => (
        <AntDesign key={i} name={v.name} size={16} color={colors.stars} />
      ))
    }
  </SLS.Container>
);

export default memo(StarList);