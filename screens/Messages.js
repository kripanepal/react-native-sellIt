import React, { useState } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View, FlatList } from 'react-native';


import ItemSeparator from '../components/ItemSeparator';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

function Messages() {

    const [messages, setMessages] = useState([
        { id: 1, title: 'T1', description: 'D1', image: 'https://picsum.photos/200/300' },
        { id: 2, title: 'T2', description: 'D2', image: 'https://picsum.photos/100/100' },
        { id: 3, title: 'T3', description: 'D3', image: 'https://picsum.photos/200/200' },
    ]);

    const [refreshing, setReferencing] = useState(false);

    const deleteMessage = (id) => {
        console.log(id)
        setMessages(messages.filter((each) => each.id !== id
        ))
    }

    return (
        <FlatList ItemSeparatorComponent={ItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([{ id: 1, title: 'T1', description: 'D1', image: 'https://picsum.photos/200/300' },
                { id: 2, title: 'T2', description: 'D2', image: 'https://picsum.photos/100/100' },
                { id: 3, title: 'T3', description: 'D3', image: 'https://picsum.photos/200/200' }])
            }}
            data={messages} keyExtractor={(item) => item.id + ''} renderItem={({ item }) =>


                <ListItem profileImage={item.image}
                    title={item.title}
                    subtitle={item.description}
                    onPress={() => console.log(item.title)}
                    renderRightActions={() => (<ListItemDeleteAction onPress={() => deleteMessage(item.id)} />)}

                />

            }>
        </FlatList>
    );
}

export default Messages;