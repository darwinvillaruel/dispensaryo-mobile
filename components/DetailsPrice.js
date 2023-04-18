import { View, Text } from 'react-native';
import { DrugPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsPrice = ({ data }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}>
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}>
          Brand: {data.brand}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}>
          {data.date}
        </Text>
      </View>
      <DrugPrice price={data.price} />
    </View>
  );
};

export default DetailsPrice;
