/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 365.0, "minX": 0.0, "maxY": 3923.0, "series": [{"data": [[0.0, 365.0], [0.1, 447.0], [0.2, 448.0], [0.3, 449.0], [0.4, 456.0], [0.5, 459.0], [0.6, 460.0], [0.7, 463.0], [0.8, 471.0], [0.9, 473.0], [1.0, 475.0], [1.1, 493.0], [1.2, 497.0], [1.3, 497.0], [1.4, 500.0], [1.5, 501.0], [1.6, 506.0], [1.7, 507.0], [1.8, 508.0], [1.9, 510.0], [2.0, 514.0], [2.1, 518.0], [2.2, 519.0], [2.3, 519.0], [2.4, 524.0], [2.5, 528.0], [2.6, 532.0], [2.7, 535.0], [2.8, 535.0], [2.9, 542.0], [3.0, 542.0], [3.1, 549.0], [3.2, 554.0], [3.3, 562.0], [3.4, 566.0], [3.5, 566.0], [3.6, 569.0], [3.7, 570.0], [3.8, 572.0], [3.9, 575.0], [4.0, 576.0], [4.1, 577.0], [4.2, 581.0], [4.3, 582.0], [4.4, 587.0], [4.5, 595.0], [4.6, 595.0], [4.7, 601.0], [4.8, 604.0], [4.9, 607.0], [5.0, 608.0], [5.1, 612.0], [5.2, 613.0], [5.3, 615.0], [5.4, 615.0], [5.5, 617.0], [5.6, 617.0], [5.7, 620.0], [5.8, 623.0], [5.9, 626.0], [6.0, 629.0], [6.1, 632.0], [6.2, 633.0], [6.3, 634.0], [6.4, 636.0], [6.5, 637.0], [6.6, 641.0], [6.7, 643.0], [6.8, 643.0], [6.9, 646.0], [7.0, 647.0], [7.1, 647.0], [7.2, 649.0], [7.3, 650.0], [7.4, 651.0], [7.5, 653.0], [7.6, 653.0], [7.7, 654.0], [7.8, 654.0], [7.9, 655.0], [8.0, 655.0], [8.1, 657.0], [8.2, 661.0], [8.3, 662.0], [8.4, 663.0], [8.5, 673.0], [8.6, 673.0], [8.7, 673.0], [8.8, 674.0], [8.9, 676.0], [9.0, 676.0], [9.1, 679.0], [9.2, 681.0], [9.3, 685.0], [9.4, 685.0], [9.5, 685.0], [9.6, 685.0], [9.7, 690.0], [9.8, 694.0], [9.9, 696.0], [10.0, 698.0], [10.1, 707.0], [10.2, 708.0], [10.3, 712.0], [10.4, 712.0], [10.5, 713.0], [10.6, 714.0], [10.7, 714.0], [10.8, 715.0], [10.9, 719.0], [11.0, 720.0], [11.1, 720.0], [11.2, 724.0], [11.3, 727.0], [11.4, 732.0], [11.5, 732.0], [11.6, 733.0], [11.7, 739.0], [11.8, 739.0], [11.9, 740.0], [12.0, 742.0], [12.1, 748.0], [12.2, 748.0], [12.3, 750.0], [12.4, 753.0], [12.5, 754.0], [12.6, 754.0], [12.7, 754.0], [12.8, 757.0], [12.9, 760.0], [13.0, 760.0], [13.1, 761.0], [13.2, 761.0], [13.3, 764.0], [13.4, 767.0], [13.5, 768.0], [13.6, 769.0], [13.7, 772.0], [13.8, 775.0], [13.9, 775.0], [14.0, 775.0], [14.1, 780.0], [14.2, 782.0], [14.3, 782.0], [14.4, 783.0], [14.5, 785.0], [14.6, 789.0], [14.7, 790.0], [14.8, 790.0], [14.9, 793.0], [15.0, 794.0], [15.1, 800.0], [15.2, 801.0], [15.3, 802.0], [15.4, 809.0], [15.5, 809.0], [15.6, 811.0], [15.7, 811.0], [15.8, 813.0], [15.9, 814.0], [16.0, 818.0], [16.1, 820.0], [16.2, 822.0], [16.3, 823.0], [16.4, 825.0], [16.5, 827.0], [16.6, 830.0], [16.7, 831.0], [16.8, 835.0], [16.9, 836.0], [17.0, 838.0], [17.1, 839.0], [17.2, 847.0], [17.3, 847.0], [17.4, 853.0], [17.5, 856.0], [17.6, 858.0], [17.7, 858.0], [17.8, 858.0], [17.9, 860.0], [18.0, 862.0], [18.1, 862.0], [18.2, 863.0], [18.3, 864.0], [18.4, 868.0], [18.5, 868.0], [18.6, 869.0], [18.7, 872.0], [18.8, 876.0], [18.9, 878.0], [19.0, 882.0], [19.1, 882.0], [19.2, 887.0], [19.3, 888.0], [19.4, 889.0], [19.5, 890.0], [19.6, 893.0], [19.7, 893.0], [19.8, 893.0], [19.9, 894.0], [20.0, 899.0], [20.1, 901.0], [20.2, 905.0], [20.3, 905.0], [20.4, 907.0], [20.5, 909.0], [20.6, 909.0], [20.7, 911.0], [20.8, 913.0], [20.9, 913.0], [21.0, 914.0], [21.1, 915.0], [21.2, 916.0], [21.3, 917.0], [21.4, 918.0], [21.5, 919.0], [21.6, 922.0], [21.7, 930.0], [21.8, 930.0], [21.9, 932.0], [22.0, 933.0], [22.1, 935.0], [22.2, 937.0], [22.3, 944.0], [22.4, 945.0], [22.5, 947.0], [22.6, 948.0], [22.7, 949.0], [22.8, 952.0], [22.9, 955.0], [23.0, 958.0], [23.1, 958.0], [23.2, 960.0], [23.3, 960.0], [23.4, 961.0], [23.5, 962.0], [23.6, 964.0], [23.7, 964.0], [23.8, 965.0], [23.9, 967.0], [24.0, 970.0], [24.1, 972.0], [24.2, 972.0], [24.3, 973.0], [24.4, 976.0], [24.5, 976.0], [24.6, 977.0], [24.7, 977.0], [24.8, 980.0], [24.9, 986.0], [25.0, 987.0], [25.1, 992.0], [25.2, 994.0], [25.3, 994.0], [25.4, 995.0], [25.5, 996.0], [25.6, 999.0], [25.7, 999.0], [25.8, 1000.0], [25.9, 1002.0], [26.0, 1003.0], [26.1, 1009.0], [26.2, 1010.0], [26.3, 1012.0], [26.4, 1014.0], [26.5, 1014.0], [26.6, 1016.0], [26.7, 1017.0], [26.8, 1020.0], [26.9, 1020.0], [27.0, 1020.0], [27.1, 1020.0], [27.2, 1026.0], [27.3, 1026.0], [27.4, 1027.0], [27.5, 1027.0], [27.6, 1031.0], [27.7, 1032.0], [27.8, 1032.0], [27.9, 1040.0], [28.0, 1045.0], [28.1, 1049.0], [28.2, 1050.0], [28.3, 1053.0], [28.4, 1054.0], [28.5, 1056.0], [28.6, 1057.0], [28.7, 1058.0], [28.8, 1058.0], [28.9, 1061.0], [29.0, 1061.0], [29.1, 1066.0], [29.2, 1072.0], [29.3, 1073.0], [29.4, 1075.0], [29.5, 1076.0], [29.6, 1089.0], [29.7, 1089.0], [29.8, 1091.0], [29.9, 1093.0], [30.0, 1098.0], [30.1, 1098.0], [30.2, 1104.0], [30.3, 1106.0], [30.4, 1108.0], [30.5, 1113.0], [30.6, 1113.0], [30.7, 1115.0], [30.8, 1116.0], [30.9, 1118.0], [31.0, 1120.0], [31.1, 1120.0], [31.2, 1126.0], [31.3, 1128.0], [31.4, 1128.0], [31.5, 1129.0], [31.6, 1130.0], [31.7, 1132.0], [31.8, 1133.0], [31.9, 1135.0], [32.0, 1136.0], [32.1, 1136.0], [32.2, 1136.0], [32.3, 1140.0], [32.4, 1141.0], [32.5, 1144.0], [32.6, 1148.0], [32.7, 1149.0], [32.8, 1154.0], [32.9, 1155.0], [33.0, 1156.0], [33.1, 1159.0], [33.2, 1164.0], [33.3, 1166.0], [33.4, 1170.0], [33.5, 1171.0], [33.6, 1178.0], [33.7, 1178.0], [33.8, 1178.0], [33.9, 1179.0], [34.0, 1184.0], [34.1, 1184.0], [34.2, 1187.0], [34.3, 1194.0], [34.4, 1200.0], [34.5, 1201.0], [34.6, 1202.0], [34.7, 1203.0], [34.8, 1204.0], [34.9, 1206.0], [35.0, 1206.0], [35.1, 1209.0], [35.2, 1213.0], [35.3, 1213.0], [35.4, 1213.0], [35.5, 1213.0], [35.6, 1215.0], [35.7, 1216.0], [35.8, 1224.0], [35.9, 1225.0], [36.0, 1229.0], [36.1, 1234.0], [36.2, 1235.0], [36.3, 1235.0], [36.4, 1241.0], [36.5, 1241.0], [36.6, 1242.0], [36.7, 1242.0], [36.8, 1248.0], [36.9, 1249.0], [37.0, 1249.0], [37.1, 1250.0], [37.2, 1251.0], [37.3, 1256.0], [37.4, 1258.0], [37.5, 1259.0], [37.6, 1260.0], [37.7, 1261.0], [37.8, 1267.0], [37.9, 1272.0], [38.0, 1273.0], [38.1, 1273.0], [38.2, 1273.0], [38.3, 1274.0], [38.4, 1275.0], [38.5, 1275.0], [38.6, 1276.0], [38.7, 1276.0], [38.8, 1280.0], [38.9, 1280.0], [39.0, 1281.0], [39.1, 1283.0], [39.2, 1284.0], [39.3, 1284.0], [39.4, 1285.0], [39.5, 1287.0], [39.6, 1290.0], [39.7, 1292.0], [39.8, 1293.0], [39.9, 1294.0], [40.0, 1296.0], [40.1, 1298.0], [40.2, 1303.0], [40.3, 1303.0], [40.4, 1308.0], [40.5, 1312.0], [40.6, 1312.0], [40.7, 1313.0], [40.8, 1317.0], [40.9, 1321.0], [41.0, 1322.0], [41.1, 1324.0], [41.2, 1326.0], [41.3, 1327.0], [41.4, 1329.0], [41.5, 1333.0], [41.6, 1338.0], [41.7, 1338.0], [41.8, 1338.0], [41.9, 1339.0], [42.0, 1339.0], [42.1, 1342.0], [42.2, 1342.0], [42.3, 1343.0], [42.4, 1344.0], [42.5, 1345.0], [42.6, 1345.0], [42.7, 1347.0], [42.8, 1350.0], [42.9, 1351.0], [43.0, 1353.0], [43.1, 1353.0], [43.2, 1353.0], [43.3, 1355.0], [43.4, 1355.0], [43.5, 1356.0], [43.6, 1358.0], [43.7, 1359.0], [43.8, 1359.0], [43.9, 1360.0], [44.0, 1363.0], [44.1, 1363.0], [44.2, 1364.0], [44.3, 1365.0], [44.4, 1369.0], [44.5, 1370.0], [44.6, 1371.0], [44.7, 1371.0], [44.8, 1373.0], [44.9, 1374.0], [45.0, 1376.0], [45.1, 1376.0], [45.2, 1380.0], [45.3, 1386.0], [45.4, 1387.0], [45.5, 1387.0], [45.6, 1388.0], [45.7, 1389.0], [45.8, 1389.0], [45.9, 1391.0], [46.0, 1394.0], [46.1, 1394.0], [46.2, 1396.0], [46.3, 1397.0], [46.4, 1398.0], [46.5, 1399.0], [46.6, 1399.0], [46.7, 1400.0], [46.8, 1404.0], [46.9, 1405.0], [47.0, 1406.0], [47.1, 1407.0], [47.2, 1411.0], [47.3, 1412.0], [47.4, 1413.0], [47.5, 1414.0], [47.6, 1416.0], [47.7, 1417.0], [47.8, 1417.0], [47.9, 1419.0], [48.0, 1422.0], [48.1, 1422.0], [48.2, 1423.0], [48.3, 1426.0], [48.4, 1430.0], [48.5, 1431.0], [48.6, 1431.0], [48.7, 1432.0], [48.8, 1435.0], [48.9, 1436.0], [49.0, 1437.0], [49.1, 1438.0], [49.2, 1440.0], [49.3, 1440.0], [49.4, 1440.0], [49.5, 1441.0], [49.6, 1442.0], [49.7, 1443.0], [49.8, 1444.0], [49.9, 1445.0], [50.0, 1450.0], [50.1, 1451.0], [50.2, 1452.0], [50.3, 1454.0], [50.4, 1458.0], [50.5, 1459.0], [50.6, 1459.0], [50.7, 1464.0], [50.8, 1465.0], [50.9, 1465.0], [51.0, 1467.0], [51.1, 1468.0], [51.2, 1472.0], [51.3, 1474.0], [51.4, 1475.0], [51.5, 1475.0], [51.6, 1478.0], [51.7, 1479.0], [51.8, 1482.0], [51.9, 1485.0], [52.0, 1486.0], [52.1, 1486.0], [52.2, 1486.0], [52.3, 1488.0], [52.4, 1492.0], [52.5, 1493.0], [52.6, 1493.0], [52.7, 1495.0], [52.8, 1497.0], [52.9, 1501.0], [53.0, 1503.0], [53.1, 1504.0], [53.2, 1505.0], [53.3, 1507.0], [53.4, 1508.0], [53.5, 1509.0], [53.6, 1511.0], [53.7, 1511.0], [53.8, 1512.0], [53.9, 1513.0], [54.0, 1514.0], [54.1, 1515.0], [54.2, 1517.0], [54.3, 1518.0], [54.4, 1522.0], [54.5, 1524.0], [54.6, 1524.0], [54.7, 1526.0], [54.8, 1530.0], [54.9, 1531.0], [55.0, 1531.0], [55.1, 1536.0], [55.2, 1539.0], [55.3, 1541.0], [55.4, 1544.0], [55.5, 1545.0], [55.6, 1547.0], [55.7, 1552.0], [55.8, 1553.0], [55.9, 1554.0], [56.0, 1559.0], [56.1, 1560.0], [56.2, 1562.0], [56.3, 1564.0], [56.4, 1565.0], [56.5, 1566.0], [56.6, 1567.0], [56.7, 1572.0], [56.8, 1574.0], [56.9, 1574.0], [57.0, 1580.0], [57.1, 1581.0], [57.2, 1584.0], [57.3, 1586.0], [57.4, 1586.0], [57.5, 1587.0], [57.6, 1587.0], [57.7, 1589.0], [57.8, 1589.0], [57.9, 1590.0], [58.0, 1591.0], [58.1, 1591.0], [58.2, 1593.0], [58.3, 1593.0], [58.4, 1596.0], [58.5, 1597.0], [58.6, 1598.0], [58.7, 1599.0], [58.8, 1602.0], [58.9, 1607.0], [59.0, 1608.0], [59.1, 1608.0], [59.2, 1610.0], [59.3, 1610.0], [59.4, 1615.0], [59.5, 1621.0], [59.6, 1623.0], [59.7, 1624.0], [59.8, 1624.0], [59.9, 1625.0], [60.0, 1627.0], [60.1, 1629.0], [60.2, 1635.0], [60.3, 1635.0], [60.4, 1636.0], [60.5, 1638.0], [60.6, 1639.0], [60.7, 1640.0], [60.8, 1643.0], [60.9, 1644.0], [61.0, 1644.0], [61.1, 1645.0], [61.2, 1647.0], [61.3, 1647.0], [61.4, 1653.0], [61.5, 1654.0], [61.6, 1665.0], [61.7, 1667.0], [61.8, 1669.0], [61.9, 1669.0], [62.0, 1673.0], [62.1, 1675.0], [62.2, 1676.0], [62.3, 1680.0], [62.4, 1681.0], [62.5, 1682.0], [62.6, 1683.0], [62.7, 1684.0], [62.8, 1685.0], [62.9, 1688.0], [63.0, 1691.0], [63.1, 1692.0], [63.2, 1696.0], [63.3, 1697.0], [63.4, 1698.0], [63.5, 1700.0], [63.6, 1708.0], [63.7, 1709.0], [63.8, 1711.0], [63.9, 1712.0], [64.0, 1715.0], [64.1, 1717.0], [64.2, 1718.0], [64.3, 1719.0], [64.4, 1721.0], [64.5, 1725.0], [64.6, 1726.0], [64.7, 1727.0], [64.8, 1731.0], [64.9, 1732.0], [65.0, 1732.0], [65.1, 1733.0], [65.2, 1735.0], [65.3, 1737.0], [65.4, 1737.0], [65.5, 1737.0], [65.6, 1742.0], [65.7, 1742.0], [65.8, 1745.0], [65.9, 1745.0], [66.0, 1751.0], [66.1, 1751.0], [66.2, 1751.0], [66.3, 1754.0], [66.4, 1755.0], [66.5, 1763.0], [66.6, 1763.0], [66.7, 1765.0], [66.8, 1765.0], [66.9, 1765.0], [67.0, 1766.0], [67.1, 1767.0], [67.2, 1771.0], [67.3, 1773.0], [67.4, 1773.0], [67.5, 1773.0], [67.6, 1774.0], [67.7, 1774.0], [67.8, 1782.0], [67.9, 1784.0], [68.0, 1790.0], [68.1, 1791.0], [68.2, 1794.0], [68.3, 1794.0], [68.4, 1797.0], [68.5, 1798.0], [68.6, 1798.0], [68.7, 1799.0], [68.8, 1799.0], [68.9, 1800.0], [69.0, 1801.0], [69.1, 1804.0], [69.2, 1809.0], [69.3, 1810.0], [69.4, 1813.0], [69.5, 1813.0], [69.6, 1816.0], [69.7, 1820.0], [69.8, 1821.0], [69.9, 1821.0], [70.0, 1824.0], [70.1, 1825.0], [70.2, 1826.0], [70.3, 1827.0], [70.4, 1829.0], [70.5, 1834.0], [70.6, 1841.0], [70.7, 1842.0], [70.8, 1843.0], [70.9, 1846.0], [71.0, 1847.0], [71.1, 1851.0], [71.2, 1852.0], [71.3, 1853.0], [71.4, 1858.0], [71.5, 1862.0], [71.6, 1870.0], [71.7, 1872.0], [71.8, 1875.0], [71.9, 1876.0], [72.0, 1878.0], [72.1, 1882.0], [72.2, 1882.0], [72.3, 1884.0], [72.4, 1891.0], [72.5, 1894.0], [72.6, 1895.0], [72.7, 1896.0], [72.8, 1900.0], [72.9, 1901.0], [73.0, 1912.0], [73.1, 1913.0], [73.2, 1917.0], [73.3, 1919.0], [73.4, 1920.0], [73.5, 1925.0], [73.6, 1933.0], [73.7, 1934.0], [73.8, 1935.0], [73.9, 1936.0], [74.0, 1941.0], [74.1, 1941.0], [74.2, 1942.0], [74.3, 1942.0], [74.4, 1943.0], [74.5, 1944.0], [74.6, 1944.0], [74.7, 1946.0], [74.8, 1954.0], [74.9, 1955.0], [75.0, 1955.0], [75.1, 1958.0], [75.2, 1961.0], [75.3, 1962.0], [75.4, 1969.0], [75.5, 1981.0], [75.6, 1985.0], [75.7, 2000.0], [75.8, 2000.0], [75.9, 2002.0], [76.0, 2005.0], [76.1, 2006.0], [76.2, 2007.0], [76.3, 2008.0], [76.4, 2020.0], [76.5, 2023.0], [76.6, 2027.0], [76.7, 2031.0], [76.8, 2037.0], [76.9, 2040.0], [77.0, 2041.0], [77.1, 2041.0], [77.2, 2042.0], [77.3, 2048.0], [77.4, 2054.0], [77.5, 2056.0], [77.6, 2056.0], [77.7, 2060.0], [77.8, 2064.0], [77.9, 2065.0], [78.0, 2068.0], [78.1, 2068.0], [78.2, 2068.0], [78.3, 2068.0], [78.4, 2075.0], [78.5, 2078.0], [78.6, 2082.0], [78.7, 2083.0], [78.8, 2085.0], [78.9, 2085.0], [79.0, 2086.0], [79.1, 2088.0], [79.2, 2094.0], [79.3, 2095.0], [79.4, 2099.0], [79.5, 2101.0], [79.6, 2105.0], [79.7, 2108.0], [79.8, 2109.0], [79.9, 2115.0], [80.0, 2119.0], [80.1, 2121.0], [80.2, 2125.0], [80.3, 2127.0], [80.4, 2137.0], [80.5, 2137.0], [80.6, 2138.0], [80.7, 2143.0], [80.8, 2150.0], [80.9, 2150.0], [81.0, 2155.0], [81.1, 2157.0], [81.2, 2163.0], [81.3, 2164.0], [81.4, 2166.0], [81.5, 2167.0], [81.6, 2172.0], [81.7, 2174.0], [81.8, 2175.0], [81.9, 2175.0], [82.0, 2178.0], [82.1, 2178.0], [82.2, 2180.0], [82.3, 2180.0], [82.4, 2184.0], [82.5, 2186.0], [82.6, 2186.0], [82.7, 2186.0], [82.8, 2194.0], [82.9, 2198.0], [83.0, 2205.0], [83.1, 2210.0], [83.2, 2215.0], [83.3, 2217.0], [83.4, 2218.0], [83.5, 2221.0], [83.6, 2237.0], [83.7, 2239.0], [83.8, 2241.0], [83.9, 2243.0], [84.0, 2244.0], [84.1, 2245.0], [84.2, 2255.0], [84.3, 2257.0], [84.4, 2262.0], [84.5, 2263.0], [84.6, 2265.0], [84.7, 2266.0], [84.8, 2267.0], [84.9, 2268.0], [85.0, 2270.0], [85.1, 2270.0], [85.2, 2277.0], [85.3, 2277.0], [85.4, 2280.0], [85.5, 2282.0], [85.6, 2283.0], [85.7, 2286.0], [85.8, 2287.0], [85.9, 2289.0], [86.0, 2292.0], [86.1, 2294.0], [86.2, 2297.0], [86.3, 2299.0], [86.4, 2302.0], [86.5, 2303.0], [86.6, 2305.0], [86.7, 2306.0], [86.8, 2314.0], [86.9, 2316.0], [87.0, 2321.0], [87.1, 2322.0], [87.2, 2333.0], [87.3, 2344.0], [87.4, 2345.0], [87.5, 2346.0], [87.6, 2359.0], [87.7, 2359.0], [87.8, 2361.0], [87.9, 2362.0], [88.0, 2372.0], [88.1, 2373.0], [88.2, 2384.0], [88.3, 2387.0], [88.4, 2389.0], [88.5, 2396.0], [88.6, 2400.0], [88.7, 2412.0], [88.8, 2424.0], [88.9, 2429.0], [89.0, 2431.0], [89.1, 2434.0], [89.2, 2442.0], [89.3, 2442.0], [89.4, 2445.0], [89.5, 2449.0], [89.6, 2459.0], [89.7, 2459.0], [89.8, 2460.0], [89.9, 2460.0], [90.0, 2462.0], [90.1, 2464.0], [90.2, 2476.0], [90.3, 2483.0], [90.4, 2488.0], [90.5, 2491.0], [90.6, 2491.0], [90.7, 2491.0], [90.8, 2499.0], [90.9, 2500.0], [91.0, 2501.0], [91.1, 2504.0], [91.2, 2530.0], [91.3, 2532.0], [91.4, 2533.0], [91.5, 2534.0], [91.6, 2543.0], [91.7, 2548.0], [91.8, 2549.0], [91.9, 2551.0], [92.0, 2572.0], [92.1, 2573.0], [92.2, 2577.0], [92.3, 2580.0], [92.4, 2587.0], [92.5, 2589.0], [92.6, 2597.0], [92.7, 2598.0], [92.8, 2602.0], [92.9, 2608.0], [93.0, 2608.0], [93.1, 2610.0], [93.2, 2618.0], [93.3, 2619.0], [93.4, 2621.0], [93.5, 2624.0], [93.6, 2627.0], [93.7, 2628.0], [93.8, 2628.0], [93.9, 2628.0], [94.0, 2632.0], [94.1, 2637.0], [94.2, 2638.0], [94.3, 2645.0], [94.4, 2676.0], [94.5, 2677.0], [94.6, 2688.0], [94.7, 2690.0], [94.8, 2691.0], [94.9, 2693.0], [95.0, 2699.0], [95.1, 2700.0], [95.2, 2713.0], [95.3, 2727.0], [95.4, 2732.0], [95.5, 2734.0], [95.6, 2755.0], [95.7, 2755.0], [95.8, 2755.0], [95.9, 2756.0], [96.0, 2766.0], [96.1, 2766.0], [96.2, 2769.0], [96.3, 2773.0], [96.4, 2788.0], [96.5, 2792.0], [96.6, 2794.0], [96.7, 2795.0], [96.8, 2799.0], [96.9, 2816.0], [97.0, 2816.0], [97.1, 2816.0], [97.2, 2818.0], [97.3, 2824.0], [97.4, 2832.0], [97.5, 2833.0], [97.6, 2843.0], [97.7, 2865.0], [97.8, 2869.0], [97.9, 2889.0], [98.0, 2943.0], [98.1, 2943.0], [98.2, 2953.0], [98.3, 2973.0], [98.4, 2981.0], [98.5, 2987.0], [98.6, 2989.0], [98.7, 2989.0], [98.8, 3022.0], [98.9, 3036.0], [99.0, 3090.0], [99.1, 3112.0], [99.2, 3193.0], [99.3, 3194.0], [99.4, 3231.0], [99.5, 3249.0], [99.6, 3314.0], [99.7, 3335.0], [99.8, 3336.0], [99.9, 3582.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 81.0, "series": [{"data": [[600.0, 67.0], [700.0, 63.0], [800.0, 63.0], [900.0, 71.0], [1000.0, 55.0], [1100.0, 53.0], [1200.0, 72.0], [1300.0, 81.0], [1400.0, 78.0], [1500.0, 73.0], [1600.0, 59.0], [1700.0, 68.0], [1800.0, 49.0], [1900.0, 36.0], [2000.0, 47.0], [2100.0, 44.0], [2200.0, 42.0], [2300.0, 28.0], [2400.0, 29.0], [2500.0, 24.0], [2600.0, 28.0], [2700.0, 23.0], [2800.0, 13.0], [2900.0, 10.0], [3000.0, 4.0], [3100.0, 4.0], [3300.0, 4.0], [3200.0, 2.0], [3500.0, 1.0], [3900.0, 1.0], [300.0, 1.0], [400.0, 16.0], [500.0, 41.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 508.0, "series": [{"data": [[0.0, 11.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 477.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 508.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 254.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.0000000000000004, "minX": 1.6581249E12, "maxY": 20.960212201591535, "series": [{"data": [[1.65812502E12, 3.0000000000000004], [1.65812496E12, 20.960212201591535], [1.6581249E12, 19.039337474120053]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812502E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 516.0, "minX": 1.0, "maxY": 1990.2857142857142, "series": [{"data": [[2.0, 646.5], [3.0, 842.3846153846154], [4.0, 529.3636363636364], [5.0, 630.0], [6.0, 1148.7037037037037], [7.0, 814.3333333333333], [8.0, 718.375], [9.0, 796.6153846153845], [10.0, 1038.8823529411764], [11.0, 877.0833333333334], [12.0, 1231.6060606060607], [13.0, 1150.1388888888891], [14.0, 837.0], [15.0, 1400.8947368421052], [16.0, 1207.1590909090908], [1.0, 516.0], [17.0, 1304.8275862068965], [18.0, 1277.0000000000002], [19.0, 1347.1538461538462], [20.0, 1585.1568627450977], [21.0, 1547.9387755102039], [22.0, 1990.2857142857142], [23.0, 1739.630952380952], [24.0, 1916.3859649122805], [25.0, 1751.88446969697]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[20.0312, 1522.8407999999986]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 110.93333333333334, "minX": 1.6581249E12, "maxY": 18855.616666666665, "series": [{"data": [[1.65812502E12, 401.7], [1.65812496E12, 18855.616666666665], [1.6581249E12, 12844.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65812502E12, 110.93333333333334], [1.65812496E12, 6434.133333333333], [1.6581249E12, 4121.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812502E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 620.9999999999999, "minX": 1.6581249E12, "maxY": 1612.8461538461552, "series": [{"data": [[1.65812502E12, 620.9999999999999], [1.65812496E12, 1612.8461538461552], [1.6581249E12, 1406.6086956521742]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812502E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 620.9999999999999, "minX": 1.6581249E12, "maxY": 1612.7931034482776, "series": [{"data": [[1.65812502E12, 620.9999999999999], [1.65812496E12, 1612.7931034482776], [1.6581249E12, 1406.4886128364394]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812502E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.6581249E12, "maxY": 41.57349896480336, "series": [{"data": [[1.65812502E12, 0.0], [1.65812496E12, 26.466843501326263], [1.6581249E12, 41.57349896480336]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812502E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 448.0, "minX": 1.6581249E12, "maxY": 3582.0, "series": [{"data": [[1.65812502E12, 820.0], [1.65812496E12, 3582.0], [1.6581249E12, 3335.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65812502E12, 812.4], [1.65812496E12, 2643.6000000000004], [1.6581249E12, 2296.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65812502E12, 820.0], [1.65812496E12, 3234.239999999999], [1.6581249E12, 3019.6499999999987]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65812502E12, 820.0], [1.65812496E12, 2814.2999999999997], [1.6581249E12, 2546.2]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65812502E12, 510.0], [1.65812496E12, 448.0], [1.6581249E12, 449.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65812502E12, 576.0], [1.65812496E12, 1626.0], [1.6581249E12, 1413.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812502E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 519.0, "minX": 1.0, "maxY": 2943.0, "series": [{"data": [[8.0, 1214.0], [2.0, 1144.5], [9.0, 809.0], [10.0, 1371.0], [11.0, 1111.5], [12.0, 2075.0], [3.0, 576.5], [13.0, 1884.5], [14.0, 1120.0], [15.0, 1465.0], [4.0, 924.0], [16.0, 2219.0], [1.0, 2943.0], [17.0, 1798.5], [18.0, 2002.5], [19.0, 1293.0], [20.0, 1422.0], [5.0, 1669.0], [21.0, 1547.0], [6.0, 1593.0], [25.0, 1382.0], [7.0, 1610.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 2321.0], [9.0, 519.0], [10.0, 1126.0], [11.0, 1165.5], [12.0, 1170.0], [13.0, 1372.0], [14.0, 1285.0], [15.0, 1033.0], [16.0, 1054.5], [17.0, 1092.5], [18.0, 913.0], [19.0, 1182.0], [20.0, 2462.0], [21.0, 893.0], [6.0, 969.0], [25.0, 767.0], [7.0, 1370.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 519.0, "minX": 1.0, "maxY": 2943.0, "series": [{"data": [[8.0, 1213.0], [2.0, 1144.5], [9.0, 809.0], [10.0, 1371.0], [11.0, 1111.5], [12.0, 2075.0], [3.0, 576.5], [13.0, 1884.5], [14.0, 1120.0], [15.0, 1465.0], [4.0, 919.5], [16.0, 2219.0], [1.0, 2943.0], [17.0, 1798.5], [18.0, 2002.5], [19.0, 1293.0], [20.0, 1422.0], [5.0, 1669.0], [21.0, 1547.0], [6.0, 1593.0], [25.0, 1382.0], [7.0, 1610.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 2321.0], [9.0, 519.0], [10.0, 1126.0], [11.0, 1165.5], [12.0, 1170.0], [13.0, 1372.0], [14.0, 1285.0], [15.0, 1033.0], [16.0, 1054.0], [17.0, 1092.5], [18.0, 913.0], [19.0, 1182.0], [20.0, 2462.0], [21.0, 893.0], [6.0, 969.0], [25.0, 767.0], [7.0, 1370.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.6581249E12, "maxY": 12.216666666666667, "series": [{"data": [[1.65812502E12, 0.15], [1.65812496E12, 12.216666666666667], [1.6581249E12, 8.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812502E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.6581249E12, "maxY": 9.683333333333334, "series": [{"data": [[1.65812502E12, 0.21666666666666667], [1.65812496E12, 9.683333333333334], [1.6581249E12, 6.7]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65812496E12, 1.3], [1.6581249E12, 0.6]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.65812496E12, 1.5833333333333333], [1.6581249E12, 0.75]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812502E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.6581249E12, "maxY": 9.683333333333334, "series": [{"data": [[1.65812502E12, 0.21666666666666667], [1.65812496E12, 9.683333333333334], [1.6581249E12, 6.7]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.65812496E12, 2.8833333333333333], [1.6581249E12, 1.35]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812502E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.6581249E12, "maxY": 9.683333333333334, "series": [{"data": [[1.65812502E12, 0.21666666666666667], [1.65812496E12, 9.683333333333334], [1.6581249E12, 6.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65812496E12, 2.8833333333333333], [1.6581249E12, 1.35]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812502E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

