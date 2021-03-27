import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from "react-redux";
import ListItem from "./components/ListItem";
import Input from "./components/Input"
import { complete, saveTodo } from "./reducers/todos"

const App = ({ data, underlineTodo, sendTodo }) => {
    const [value, setValue] = useState('')

    const handleChange = val => {
        setValue(val)
    }

    const handleSubmit = () => {
        sendTodo(value)
        setValue('')
    }

    return(
        <View style={styles.container}>
            <Input onChange={handleChange} value={value} onSubmit={handleSubmit} />
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) =>
                    <ListItem completed={item.completed} onPress={() => underlineTodo(item.id)} desc={item.desc} />
                }
            />
        </View>
    )
}

const mapStateToProps = state => {
    return { data: state.todos }
}

const mapDispatchToProps = dispatch => ({
    underlineTodo: (key) => dispatch(complete(key)),
    sendTodo: (text) => dispatch(saveTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    },
});