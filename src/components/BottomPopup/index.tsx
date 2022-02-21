import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

import styles from './styles';

export class BottomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({show: true});
  };

  close = () => {
    this.setState({show: false});
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) {
      return view;
    }
    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{
          flex: 1,
        }}>
        <View style={{flex: 1}} />
      </TouchableWithoutFeedback>
    );
  }

  renderContent = () => {
    const {component} = this.props;
    return (
      <View style={styles.modal}>
        <View style={styles.shortLine}></View>
        {component}
      </View>
    );
  };

  render() {
    let {show} = this.state;
    const {onTouchOutside} = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'flex-end',
          }}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              height: 'auto',
            }}>
            {/* <View>
              <Text
                style={{
                  color: '#182E44',
                  fontSize: 20,
                  fontWeight: '500',
                  margin: 15,
                }}>
                {title}
              </Text>
            </View> */}
            {this.renderContent()}
            {/* {this.renderContent()} */}
          </View>
        </View>
      </Modal>
    );
  }
}
