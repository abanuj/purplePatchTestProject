import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilter, faEllipsisV, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const header = (props) => {
    return (
        <View style={styles.headerStyle}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.leftPane}>
                    {(props.selectedList).length > 0 ?
                        <>
                            <FontAwesomeIcon style={{marginTop:5, marginRight:10}} color={'white'} icon={faArrowLeft} />
                            <Text style={styles.textStyle}>{(props.selectedList).length} User Selected</Text>
                        </> :
                        <Text style={styles.textStyle}>All User</Text>}
                </View>
                <View style={styles.rightPane}>
                    <FontAwesomeIcon style={{ marginRight: 20 }} color={'white'} size={17} icon={faFilter} />
                    <FontAwesomeIcon icon={faEllipsisV} color={'white'} size={17} />
                </View>
            </View>
            <Text style={{ color: 'white', fontSize: 14, }}>{props.userDataList.length} Total User</Text>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.ThemeColor,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 5
    },
    leftPane: {
        width: '80%',
        height: 40,
        flexDirection: 'row',
    },
    rightPane: {
        height: 40,
        flexDirection: 'row',
    },
    textStyle: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    }
})
