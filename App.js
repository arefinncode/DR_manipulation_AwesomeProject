import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity,TextInput, } from 'react-native';



export default class App extends React.Component {
    clearText = () => {
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    ref={component => this._textInput = component}
                    style={{height: 50, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
                />
                {/*<TextInput*/}
                    {/*ref={component => this._textInput = component}*/}
                    {/*style={{height: 50, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}*/}
                {/*/>*/}
                <TouchableOpacity onPress={this.clearText}>
                    <Text>Clear text</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


class App2 extends React.Component {
    render() {
        return (



                <View style={styles.container}>
                    {/*<MyCComponent/>*/}


                    <Text>Open up App.js to start working on your app!</Text>
                    <Text>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.</Text>



                    <TouchableOpacity>
                        {/*<MyButton label="Press me!" />*/}
                        <MyButton2 label="Press me!" />
                    </TouchableOpacity>


                </View>






        );
    }
}

class MyButton2 extends React.Component {
    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps);
    }

    render() {

        console.log("this._root: ",this._root);
        // console.log("this: ",this);
        return (
            <View ref={component => this._root = component} {...this.props}>
                <Text>{this.props.label}</Text>
            </View>
        )
    }
}


class MyButton extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.label}</Text>
            </View>
        )
    }
}



class MyCComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myButtonOpacity: 1, };
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.5})}
                              onPressOut={() => this.setState({myButtonOpacity: 1})}>
                <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>
                    <Text>Press me!</Text>
                </View>
            </TouchableOpacity>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
