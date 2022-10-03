import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getWeatherData() {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Roskilde&appid=7223c54042475340ee3fdd774c8d75f9');
      const json = await response.json();
      this.setState({ data: json.weather });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getWeatherData();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>Weather in Roskilde: {item.main}, {item.description}</Text>
            )}
          />
        )}
        <SectionGrid
  itemDimension={130}
  sections={[
    {
      title: 'Monday',
      data: ["DMI: 21 degrees - cloudy","YR:18 degrees - cloudy"],
    },
    {
      title: 'Tuesday',
      data: ['DMI: 17 degrees - sunny', 'YR: 19 degrees - sunny'],
    },
    {
      title: 'Wednesday',
      data: ["DMI: 16 degrees - cloudy","YR:18 degrees - cloudy"],
    },
    {
      title: 'Thursday',
      data: ["DMI: 21 degrees - Sunny ","YR:21 degrees - cloudy"],
    },
    {
      title: 'Friday',
      data: ["DMI: 24 degrees - cloudy","YR:23 degrees - rainy"],
    },
  ]}
  renderItem={({ item }) => (<Text>{item}</Text>)}
  renderSectionHeader={({ section }) => (
    <Text style={{ fontSize: 20 }}>{section.title}</Text>
  )}
/>
      </View>
    );
  }
};