import { View, Text } from 'react-native';
import { useState } from 'react';
import { DrugTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <DrugTitle
          title={data.name}
          subTitle={data.classification}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}>
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}>
            {text}
            {!readMore && '...'}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() =>
                readMore
                  ? (setText(data.description.slice(0, 100)),
                    setReadMore(false))
                  : (setText(data.description), setReadMore(true))
              }>
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
