import { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import Colores from '@/constants/Colores';
import Favs from './favs';
import Feed from './feed';
import Models from './models';
import Settings from './settings';

const initialLayout = { width: Dimensions.get('window').width };

const TabsProfile = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'feed', title: 'Feed' },
    { key: 'modelos', title: 'Modelos' },
    { key: 'favoritos', title: 'Favoritos' },
    { key: 'configuracion', title: 'Configuración' },
  ]);

  const renderScene = SceneMap({
    feed: Feed,
    modelos: Models,
    favoritos: Favs,
    configuracion: Settings,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={styles.tabBar}
          indicatorStyle={styles.indicator}
          labelStyle={styles.label}
          activeColor={Colores.textPrimary}
          inactiveColor={Colores.textSecondary}
          pressOpacity={0.7}
        />
      )}
    />
  );
};

export default TabsProfile;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colores.background,
    borderBottomWidth: 1,
    borderColor: Colores.backgroundAccent,
    elevation: 0, 
  },
  indicator: {
    backgroundColor: Colores.textPrimary,
    height: 3,
    borderRadius: 2,
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'none',
    margin: 0,
  },
});
