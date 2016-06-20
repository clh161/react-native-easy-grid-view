'use strict';
import {View, ListView} from "react-native";
import React, {Component} from "react";
import GridViewDataSource from "./GridViewDataSource";
class GridView extends Component {
    static DataSource = GridViewDataSource;

    constructor(props) {
        super(props);
    }

    render() {
        return <ListView renderRow={this._renderRow.bind(this)} {...this.props}/>
    }

    _renderRow(data, sectionID, rowID, highlightRow) {
        var cells = [];
        for (var i = 0; i < this.props.dataSource.cellsInRow; i++) {
            var view = <View key={rowID+"-"+i} style={{flex:1}}/>;
            if (i < data.length) {
                view = <View key={rowID+"-"+i} style={{flex:1,justifyContent:'center'}}>
                    {this.props.renderCell(data[i])}
                </View>
            }
            view.props.style.flex = 1;
            //Add spacing
            if (this.props.spacing) {
                if (rowID > 0) {
                    view.props.style.marginTop = this.props.spacing / 2;
                }
                if (rowID < this.props.dataSource.getRowCount()) {
                    view.props.style.marginBottom = this.props.spacing / 2;
                }
                if (i > 0) {
                    view.props.style.marginLeft = this.props.spacing / 2;
                }
                if (i < this.props.dataSource.cellsInRow - 1) {
                    view.props.style.marginRight = this.props.spacing / 2;
                }
            }
            cells.push(view);
        }
        return <View key={rowID} style={{flexDirection:'row',justifyContent:'space-between'}}>
            {cells}
        </View>
    }
}
export default GridView;
