import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { textContainer, thumbnailImage } = styles;
  
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: thumbnail_image }} style={thumbnailImage} />
        </View>
        <View style={textContainer}>
          <Text>{artist}</Text>
          <Text>{title}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailImage: {
    height: 50,
    width: 50,
  },
};

export default AlbumDetail;
