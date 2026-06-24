 import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  text: { fontSize: 18},
  container: { padding: 20, marginTop: 50,  backgroundColor: '#8e5e5e'},
  title: { fontSize: 45,
  fontFamily: 'JimNightshade_400Regular',
  color: '#9f1f1f',
  marginBottom: 20,},
  input: { borderWidth: 5, padding: 10, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 25, },
  text: { fontSize: 18 },
  actions: { flexDirection: 'row', gap: 10 },
  edit: { color: 'blue' },
  delete: { color: 'red' },
});