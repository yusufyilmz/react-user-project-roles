import React, { Component } from 'react';
import { Ul, Li } from './style';
import Input from '../Input';
import onClickOutside from 'react-onclickoutside'


class SelectBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
            value: '',
            list: this.props.list,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.list !== this.props.list) {
            this.setState({ list: this.props.list })
        }
    }

    toggleList = (e) => {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen,
            list: this.props.list,
            value: ''
        }))
    }

    selectItem(item) {
        this.setState(prevState => ({
            value: item.name,
            listOpen: !prevState.listOpen
        }), () => {
            this.props.selectItem(item);
        })
    }

    filterList = (e) => {
        const text = e.target.value;
        var list = this.props.list.filter(x => x.name.toLowerCase().startsWith(text.toLowerCase()))
        this.setState(prevState => ({
            value: text,
            list,
            listOpen: list.length > 0
        }), () => {
            this.props.selectItem({ name: text });

        })
    }
    handleClickOutside = (e) => {
        this.setState(prevState => ({
            listOpen: false
        }))
    }

    render() {
        return (
            <div>
                <Input
                    placeHolder={this.props.placeHolder}
                    text={this.props.text}
                    name={this.props.name}
                    onChange={this.filterList}
                    type="text"
                    required={true}
                    value={this.state.value}
                    onClick={this.toggleList} />
                {this.state.listOpen && <Ul >
                    {this.state.list.map((item) => {
                        if (item) return <Li
                            key={item.id}
                            onClick={() => this.selectItem(item)}>
                            {item.name}
                        </Li>
                    })}
                </Ul>
                }
            </div>
        )
    }

}

export default onClickOutside(SelectBox);
