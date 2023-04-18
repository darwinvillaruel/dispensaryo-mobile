import { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { COLORS, antibiotics } from '../constants';
import { DrugCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  const [antiBiotics, setAntiBiotics] = useState(antibiotics);

  const handleSearch = (value) => {
    if (!value.length) return setAntiBiotics(antibiotics);

    const filteredData = antibiotics.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setAntiBiotics(filteredData);
    } else {
      setAntiBiotics(antibiotics);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ felx: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={antiBiotics}
            renderItem={({ item }) => <DrugCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onFind={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
