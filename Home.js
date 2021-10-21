
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import {
  Colors,
  DebugInstructions, 
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Task from './components/Task';
import Header from './components/Header';


export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [task, tempTask] = useState()
  const [taskItems, addTaskItem] = useState([])
  const addTask = () => {
    Keyboard.dismiss();
    addTaskItem([...taskItems, task])
    tempTask(null)
  }
  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    addTaskItem(itemsCopy)
  }


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
    <View style={styles.container}>
     
      <Header text={'List Task Today'}/>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'}  placeholderTextColor="black" value={task} onChangeText={text => tempTask(text)} />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View
        style={{
          borderBottomColor: '#aaa',
          borderBottomWidth: 1,
          paddingVertical:10,
          marginHorizontal:30,
          
        }}
      />
      <ScrollView
        style={styles.sroll}
        contentContainerStyle={{
          flexGrow: 1,

        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={
          styles.taskContainer
        }>
          {/* <Text style={styles.textTitle}>Danh sách công việc hôm nay</Text> */}
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>

        </View>

      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskContainer: {
    // paddingTop: 80,
    paddingHorizontal: 20,
  },
  Header: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#000"
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    // position: 'absolute',
    // bottom: 60,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#fff',
    borderWidth: 1,
    width: 270,
    color:'#000'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#48E65D',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#48E65D',
    borderWidth: 1,
  },
  addText: {
    color: '#fff'
  },
  sroll: {
    // marginBottom:150
  }
});

