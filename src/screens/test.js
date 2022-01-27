import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Test = () => {
  let data = [
    {id: 1, name: 'John Brahm', designation: 'Project Manager'},
    {id: 2, name: 'Tom Jack', designation: 'Software Engineer'},
    {id: 3, name: 'Mark Bell', designation: 'QA Engineer'},
    {id: 4, name: 'Marshall Doe', designation: 'Software Engineer'},
    {id: 5, name: 'John Dow', designation: 'Product Manager'},
    {id: 6, name: 'Harry Jam', designation: 'Team Lead'},
    {id: 7, name: 'Oliver James', designation: 'Graphic Designer'},
    {id: 8, name: 'Ella Avery', designation: 'QA Engineer'},
    {id: 9, name: 'William Thomas', designation: 'Graphic Designer'},
    {id: 10, name: 'Edward Brian', designation: 'Team Lead'},
  ];

  const state = {
    refresh: false,
  };

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.header}>Employees</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <Text style={styles.footer}>End</Text>
      </View>
    );
  };

  const emptyListView = () => {
    return (
      <View>
        <Text>No records found.</Text>
      </View>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  const onItemSelect = item => {
    console.log('item', item);
  };

  return (
    <View>
      <FlatList
        data={data}
        extraData={state}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onItemSelect(item);
              }}>
              <PostComponent postBody={post?.postBody} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
