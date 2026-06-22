import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import { useFonts, JimNightshade_400Regular } from '@expo-google-fonts/jim-nightshade';
import AppLoading from 'expo-app-loading';



export default function App() {

   const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addItem = () => {
    if (!text.trim()) return;
    if (editingId) {
      setItems(items.map(i => i.id === editingId ? { ...i, name: text } : i));
      setEditingId(null);
    } else {
      setItems([...items, { id: Date.now().toString(), name: text }]);
    }
    setText('');
  };

  const editItem = (id, name) => {
    setEditingId(id);
    setText(name);
  };

  const deleteItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  let [fontsLoaded] = useFonts({
  JimNightshade_400Regular,
});

if (!fontsLoaded) {
  return <AppLoading />;
}
    return (
    <View style={styles.container}>
      <Text style={styles.title}> Data Entry </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={text}
        onChangeText={setText}
      />

      <Button title={editingId ? "Update" : "Add"} onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.text}>{item.name}</Text>

            <View style={styles.actions}>
              <TouchableOpacity onPress={() => editItem(item.id, item.name)}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );

}










