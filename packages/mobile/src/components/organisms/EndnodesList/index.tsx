import React from 'react';

import { useNavigation } from '@react-navigation/native';

import NoEndnodeCard from '@molecules/NoEndnodeCard';

import { Endnode } from '@utils/interfaces';

import * as S from './styles';

interface EndnodeList {
  data: Endnode[];
}

const EndnodesList: React.FC<EndnodeList> = ({ data }) => {
  const navigation = useNavigation();

  if (data.length === 0) {
    return <NoEndnodeCard />;
  }

  return (
    <S.Container
      data={data}
      keyExtractor={endnode => endnode.id}
      renderItem={({ item }) => (
        <S.VerticalCard
          iconName="endnode"
          title={item.name}
          subTitle={item.room}
          onPress={() => {
            navigation.navigate('ShowEndnode', { endnode: item });
          }}
        />
      )}
    />
  );
};

export default EndnodesList;
