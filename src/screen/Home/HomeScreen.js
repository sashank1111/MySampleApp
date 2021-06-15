import React, { Component } from 'react';
import { View, Text, Button, Platform, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from './HomeScreenStyle';
import Loader from '../../utils/loader';
import { spacing } from '../../styles/spacing';
import actions from '../../redux/actions';
import strings from '../../constants/LocalizedStrings';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isloading: true
            data: [],
            formId: ''

        }
    }

    componentDidMount() {
        this.AllForum('')
    }

    AllForum = () => {
        this.setState({ isLoading: true });
        return (
            actions
                .allForum()
                .then(res => {
                    if (__DEV__) { console.log('All Data', res) }
                    if (res.status_code == 200) {
                        this.setState({
                            data: res.forums,
                            formId: res.forums._id,
                            isLoading: false
                        });
                        console.log(res.forums, '+forumdatata')

                    } else {
                        showError(res.message)
                        this.setState({ isLoading: false });
                    }
                })
                .catch(this.errorMethod)
        )
    }
    errorMethod = (error) => {
        this.setState({ isLoading: false });
        showError(error.message);
    }


    render() {
        const { isLoading } = this.state;
        return (
            <View style={{ flex: 1 }}>
                 <View style={styles.textMainViews}>
                       <Text style={styles.slotTimeText}>{strings.slotsTiming}</Text>
                    </View>
                <ScrollView>
                   
                    <FlatList
                        style={styles.flatliststyle}
                        data={this.state.data}
                        keyExtractor={(item => item.id)}
                        renderItem={({ item, index }) => (
                             <View style={styles.slotView}>
                                <View style={{ justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Forum', { Id: item._id })}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>
                                            {item.slotTime}
                                        </Text>
                                    </TouchableOpacity>
                                </View>


                                {item.status !== "booked" ?
                                     <View style={styles.freeView}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forum', { Id: item._id })}>
                                             <Text style={styles.textFreeSlot}>{strings.freeSlot}</Text>
                                        </TouchableOpacity>

                                    </View>
                                    :
                                     <View style={styles.bookedView}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forum', { Id: item._id })}>
                                             <Text style={styles.bookedSlot}>{strings.booked}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }

                            </View>
                        )}
                    />
                </ScrollView>
                <Loader loading={isLoading} />
            </View>
        );
    }
}
