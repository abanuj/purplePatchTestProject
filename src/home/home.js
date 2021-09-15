import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Header } from '../components';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Home = (props) => {
    useEffect(() => {
        props.getUserList();
        return () => {
            console.log('clerr');
        }
    }, []);
    const handleContactclick = (userId) => {
        props.makeSelection(userId);
        console.log(userId);
    }
    const CONTACTLIST = props.userDataList;
    const renderTile = ({ item }) => {
        const selectedListData = props.selectedList;
        const str = item.traits.name;
        const nameSplit = str.split(" ");
        const backColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
        return (

            <TouchableOpacity
                onPress={() => handleContactclick(item.id)}
                style={styles.oneTyle}>
                <View style={styles.imageView}>

                    {
                        JSON.stringify(props.selectedList).includes(item.id) ?
                            <View style={{ width: 20, height: 20, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faCheck} size={12} />
                            </View> :
                            <View style={[styles.iconStyle, { backgroundColor: backColor }]}>
                                <Text style={{ fontSize: 13, color: 'white' }}>
                                    {nameSplit[0].charAt(0).toUpperCase()}
                                    {nameSplit[nameSplit.length - 1].charAt(0).toUpperCase()}
                                </Text>
                            </View>
                    }
                </View>
                <View style={styles.nameView}>
                    <Text>{item.traits.name}</Text>
                </View>
            </TouchableOpacity>
        )
    };
    return (
        <>
            <Header />
            <FlatList
                data={CONTACTLIST}
                renderItem={renderTile}
                keyExtractor={item => item.id}
            />
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    oneTyle: {
        width: '100%',
        height: 70,
        borderBottomWidth: 0.2,
        borderColor: 'grey',
        flexDirection: 'row'
    },
    imageView: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameView: {
        width: '80%',
        height: '100%',
        justifyContent: 'center'
    },
    iconStyle: {
        width: 45,
        height: 45,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
