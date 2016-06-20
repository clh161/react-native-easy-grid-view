'use strict';
import {ListView} from "react-native";

class GridViewDataSource extends ListView.DataSource {
    cloneWithCells(data, cellsInRow) {
        var groupedData = [];
        for (var i = 0; i < data.length; i++) {
            groupedData[Math.floor(i / cellsInRow)] = groupedData[Math.floor(i / cellsInRow)] || [];
            groupedData[Math.floor(i / cellsInRow)].push(data[i]);
        }
        var dataSource = super.cloneWithRows(groupedData);
        dataSource.cellsInRow = cellsInRow;
        return dataSource
    }

}
export default GridViewDataSource;
