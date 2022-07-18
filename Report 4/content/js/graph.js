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
        data: {"result": {"minY": 261.0, "minX": 0.0, "maxY": 63510.0, "series": [{"data": [[0.0, 261.0], [0.1, 459.0], [0.2, 472.0], [0.3, 477.0], [0.4, 484.0], [0.5, 491.0], [0.6, 497.0], [0.7, 499.0], [0.8, 502.0], [0.9, 506.0], [1.0, 510.0], [1.1, 514.0], [1.2, 518.0], [1.3, 521.0], [1.4, 523.0], [1.5, 526.0], [1.6, 529.0], [1.7, 532.0], [1.8, 535.0], [1.9, 538.0], [2.0, 540.0], [2.1, 542.0], [2.2, 545.0], [2.3, 547.0], [2.4, 549.0], [2.5, 551.0], [2.6, 554.0], [2.7, 556.0], [2.8, 560.0], [2.9, 562.0], [3.0, 565.0], [3.1, 568.0], [3.2, 569.0], [3.3, 570.0], [3.4, 572.0], [3.5, 573.0], [3.6, 575.0], [3.7, 577.0], [3.8, 578.0], [3.9, 580.0], [4.0, 583.0], [4.1, 586.0], [4.2, 588.0], [4.3, 589.0], [4.4, 592.0], [4.5, 593.0], [4.6, 595.0], [4.7, 598.0], [4.8, 600.0], [4.9, 602.0], [5.0, 604.0], [5.1, 606.0], [5.2, 607.0], [5.3, 609.0], [5.4, 610.0], [5.5, 613.0], [5.6, 615.0], [5.7, 617.0], [5.8, 619.0], [5.9, 621.0], [6.0, 623.0], [6.1, 626.0], [6.2, 628.0], [6.3, 630.0], [6.4, 631.0], [6.5, 633.0], [6.6, 636.0], [6.7, 638.0], [6.8, 641.0], [6.9, 643.0], [7.0, 646.0], [7.1, 648.0], [7.2, 650.0], [7.3, 652.0], [7.4, 653.0], [7.5, 655.0], [7.6, 657.0], [7.7, 659.0], [7.8, 661.0], [7.9, 662.0], [8.0, 664.0], [8.1, 665.0], [8.2, 667.0], [8.3, 669.0], [8.4, 671.0], [8.5, 673.0], [8.6, 674.0], [8.7, 676.0], [8.8, 679.0], [8.9, 680.0], [9.0, 682.0], [9.1, 684.0], [9.2, 686.0], [9.3, 688.0], [9.4, 689.0], [9.5, 692.0], [9.6, 693.0], [9.7, 695.0], [9.8, 697.0], [9.9, 699.0], [10.0, 701.0], [10.1, 703.0], [10.2, 705.0], [10.3, 707.0], [10.4, 709.0], [10.5, 711.0], [10.6, 714.0], [10.7, 716.0], [10.8, 718.0], [10.9, 720.0], [11.0, 722.0], [11.1, 724.0], [11.2, 726.0], [11.3, 728.0], [11.4, 730.0], [11.5, 731.0], [11.6, 734.0], [11.7, 735.0], [11.8, 737.0], [11.9, 739.0], [12.0, 740.0], [12.1, 742.0], [12.2, 744.0], [12.3, 745.0], [12.4, 747.0], [12.5, 749.0], [12.6, 752.0], [12.7, 753.0], [12.8, 754.0], [12.9, 758.0], [13.0, 759.0], [13.1, 761.0], [13.2, 762.0], [13.3, 764.0], [13.4, 765.0], [13.5, 767.0], [13.6, 768.0], [13.7, 770.0], [13.8, 772.0], [13.9, 775.0], [14.0, 777.0], [14.1, 779.0], [14.2, 781.0], [14.3, 783.0], [14.4, 785.0], [14.5, 788.0], [14.6, 790.0], [14.7, 793.0], [14.8, 794.0], [14.9, 797.0], [15.0, 798.0], [15.1, 800.0], [15.2, 801.0], [15.3, 804.0], [15.4, 805.0], [15.5, 808.0], [15.6, 810.0], [15.7, 811.0], [15.8, 813.0], [15.9, 815.0], [16.0, 817.0], [16.1, 818.0], [16.2, 820.0], [16.3, 822.0], [16.4, 823.0], [16.5, 826.0], [16.6, 827.0], [16.7, 831.0], [16.8, 834.0], [16.9, 836.0], [17.0, 837.0], [17.1, 839.0], [17.2, 840.0], [17.3, 842.0], [17.4, 844.0], [17.5, 845.0], [17.6, 848.0], [17.7, 850.0], [17.8, 852.0], [17.9, 854.0], [18.0, 856.0], [18.1, 857.0], [18.2, 859.0], [18.3, 861.0], [18.4, 862.0], [18.5, 864.0], [18.6, 865.0], [18.7, 868.0], [18.8, 869.0], [18.9, 871.0], [19.0, 872.0], [19.1, 873.0], [19.2, 875.0], [19.3, 878.0], [19.4, 880.0], [19.5, 882.0], [19.6, 885.0], [19.7, 887.0], [19.8, 888.0], [19.9, 890.0], [20.0, 892.0], [20.1, 893.0], [20.2, 896.0], [20.3, 898.0], [20.4, 900.0], [20.5, 902.0], [20.6, 904.0], [20.7, 905.0], [20.8, 907.0], [20.9, 909.0], [21.0, 912.0], [21.1, 914.0], [21.2, 917.0], [21.3, 920.0], [21.4, 921.0], [21.5, 923.0], [21.6, 925.0], [21.7, 926.0], [21.8, 928.0], [21.9, 930.0], [22.0, 932.0], [22.1, 934.0], [22.2, 936.0], [22.3, 937.0], [22.4, 939.0], [22.5, 941.0], [22.6, 943.0], [22.7, 946.0], [22.8, 947.0], [22.9, 950.0], [23.0, 951.0], [23.1, 953.0], [23.2, 955.0], [23.3, 956.0], [23.4, 959.0], [23.5, 960.0], [23.6, 963.0], [23.7, 964.0], [23.8, 967.0], [23.9, 969.0], [24.0, 970.0], [24.1, 973.0], [24.2, 974.0], [24.3, 977.0], [24.4, 978.0], [24.5, 979.0], [24.6, 981.0], [24.7, 984.0], [24.8, 985.0], [24.9, 987.0], [25.0, 989.0], [25.1, 991.0], [25.2, 993.0], [25.3, 995.0], [25.4, 996.0], [25.5, 999.0], [25.6, 1000.0], [25.7, 1002.0], [25.8, 1004.0], [25.9, 1006.0], [26.0, 1008.0], [26.1, 1010.0], [26.2, 1011.0], [26.3, 1012.0], [26.4, 1014.0], [26.5, 1016.0], [26.6, 1018.0], [26.7, 1019.0], [26.8, 1022.0], [26.9, 1023.0], [27.0, 1025.0], [27.1, 1028.0], [27.2, 1029.0], [27.3, 1032.0], [27.4, 1034.0], [27.5, 1036.0], [27.6, 1038.0], [27.7, 1040.0], [27.8, 1043.0], [27.9, 1045.0], [28.0, 1047.0], [28.1, 1050.0], [28.2, 1052.0], [28.3, 1055.0], [28.4, 1057.0], [28.5, 1059.0], [28.6, 1060.0], [28.7, 1063.0], [28.8, 1064.0], [28.9, 1066.0], [29.0, 1067.0], [29.1, 1068.0], [29.2, 1070.0], [29.3, 1072.0], [29.4, 1075.0], [29.5, 1077.0], [29.6, 1080.0], [29.7, 1081.0], [29.8, 1083.0], [29.9, 1086.0], [30.0, 1088.0], [30.1, 1090.0], [30.2, 1091.0], [30.3, 1093.0], [30.4, 1095.0], [30.5, 1098.0], [30.6, 1099.0], [30.7, 1101.0], [30.8, 1103.0], [30.9, 1106.0], [31.0, 1107.0], [31.1, 1109.0], [31.2, 1110.0], [31.3, 1112.0], [31.4, 1114.0], [31.5, 1115.0], [31.6, 1117.0], [31.7, 1119.0], [31.8, 1120.0], [31.9, 1122.0], [32.0, 1125.0], [32.1, 1126.0], [32.2, 1128.0], [32.3, 1130.0], [32.4, 1131.0], [32.5, 1133.0], [32.6, 1135.0], [32.7, 1137.0], [32.8, 1139.0], [32.9, 1142.0], [33.0, 1144.0], [33.1, 1146.0], [33.2, 1148.0], [33.3, 1150.0], [33.4, 1152.0], [33.5, 1154.0], [33.6, 1156.0], [33.7, 1158.0], [33.8, 1160.0], [33.9, 1162.0], [34.0, 1165.0], [34.1, 1166.0], [34.2, 1168.0], [34.3, 1170.0], [34.4, 1172.0], [34.5, 1175.0], [34.6, 1177.0], [34.7, 1179.0], [34.8, 1181.0], [34.9, 1183.0], [35.0, 1184.0], [35.1, 1187.0], [35.2, 1188.0], [35.3, 1189.0], [35.4, 1191.0], [35.5, 1193.0], [35.6, 1195.0], [35.7, 1197.0], [35.8, 1198.0], [35.9, 1201.0], [36.0, 1203.0], [36.1, 1205.0], [36.2, 1207.0], [36.3, 1210.0], [36.4, 1212.0], [36.5, 1214.0], [36.6, 1215.0], [36.7, 1216.0], [36.8, 1218.0], [36.9, 1220.0], [37.0, 1222.0], [37.1, 1224.0], [37.2, 1226.0], [37.3, 1228.0], [37.4, 1230.0], [37.5, 1232.0], [37.6, 1233.0], [37.7, 1236.0], [37.8, 1238.0], [37.9, 1240.0], [38.0, 1242.0], [38.1, 1244.0], [38.2, 1246.0], [38.3, 1248.0], [38.4, 1250.0], [38.5, 1251.0], [38.6, 1253.0], [38.7, 1257.0], [38.8, 1259.0], [38.9, 1261.0], [39.0, 1263.0], [39.1, 1265.0], [39.2, 1267.0], [39.3, 1270.0], [39.4, 1272.0], [39.5, 1274.0], [39.6, 1275.0], [39.7, 1277.0], [39.8, 1279.0], [39.9, 1281.0], [40.0, 1282.0], [40.1, 1285.0], [40.2, 1287.0], [40.3, 1290.0], [40.4, 1293.0], [40.5, 1294.0], [40.6, 1296.0], [40.7, 1298.0], [40.8, 1300.0], [40.9, 1301.0], [41.0, 1302.0], [41.1, 1305.0], [41.2, 1307.0], [41.3, 1308.0], [41.4, 1309.0], [41.5, 1311.0], [41.6, 1313.0], [41.7, 1315.0], [41.8, 1317.0], [41.9, 1319.0], [42.0, 1321.0], [42.1, 1323.0], [42.2, 1325.0], [42.3, 1327.0], [42.4, 1329.0], [42.5, 1330.0], [42.6, 1332.0], [42.7, 1333.0], [42.8, 1335.0], [42.9, 1336.0], [43.0, 1338.0], [43.1, 1341.0], [43.2, 1342.0], [43.3, 1344.0], [43.4, 1346.0], [43.5, 1347.0], [43.6, 1349.0], [43.7, 1352.0], [43.8, 1354.0], [43.9, 1356.0], [44.0, 1358.0], [44.1, 1359.0], [44.2, 1361.0], [44.3, 1364.0], [44.4, 1366.0], [44.5, 1368.0], [44.6, 1370.0], [44.7, 1372.0], [44.8, 1373.0], [44.9, 1374.0], [45.0, 1377.0], [45.1, 1379.0], [45.2, 1381.0], [45.3, 1383.0], [45.4, 1386.0], [45.5, 1388.0], [45.6, 1390.0], [45.7, 1392.0], [45.8, 1395.0], [45.9, 1396.0], [46.0, 1399.0], [46.1, 1401.0], [46.2, 1403.0], [46.3, 1404.0], [46.4, 1406.0], [46.5, 1408.0], [46.6, 1409.0], [46.7, 1411.0], [46.8, 1414.0], [46.9, 1415.0], [47.0, 1418.0], [47.1, 1420.0], [47.2, 1423.0], [47.3, 1425.0], [47.4, 1428.0], [47.5, 1430.0], [47.6, 1433.0], [47.7, 1436.0], [47.8, 1439.0], [47.9, 1441.0], [48.0, 1444.0], [48.1, 1446.0], [48.2, 1448.0], [48.3, 1449.0], [48.4, 1451.0], [48.5, 1453.0], [48.6, 1456.0], [48.7, 1458.0], [48.8, 1462.0], [48.9, 1464.0], [49.0, 1466.0], [49.1, 1468.0], [49.2, 1471.0], [49.3, 1474.0], [49.4, 1476.0], [49.5, 1479.0], [49.6, 1481.0], [49.7, 1482.0], [49.8, 1485.0], [49.9, 1487.0], [50.0, 1489.0], [50.1, 1492.0], [50.2, 1494.0], [50.3, 1496.0], [50.4, 1498.0], [50.5, 1500.0], [50.6, 1503.0], [50.7, 1505.0], [50.8, 1507.0], [50.9, 1509.0], [51.0, 1511.0], [51.1, 1514.0], [51.2, 1517.0], [51.3, 1519.0], [51.4, 1521.0], [51.5, 1524.0], [51.6, 1526.0], [51.7, 1528.0], [51.8, 1530.0], [51.9, 1532.0], [52.0, 1534.0], [52.1, 1535.0], [52.2, 1537.0], [52.3, 1539.0], [52.4, 1541.0], [52.5, 1544.0], [52.6, 1546.0], [52.7, 1549.0], [52.8, 1551.0], [52.9, 1552.0], [53.0, 1554.0], [53.1, 1556.0], [53.2, 1559.0], [53.3, 1562.0], [53.4, 1565.0], [53.5, 1567.0], [53.6, 1569.0], [53.7, 1571.0], [53.8, 1574.0], [53.9, 1576.0], [54.0, 1578.0], [54.1, 1581.0], [54.2, 1583.0], [54.3, 1585.0], [54.4, 1588.0], [54.5, 1590.0], [54.6, 1592.0], [54.7, 1594.0], [54.8, 1597.0], [54.9, 1598.0], [55.0, 1602.0], [55.1, 1604.0], [55.2, 1606.0], [55.3, 1607.0], [55.4, 1610.0], [55.5, 1613.0], [55.6, 1615.0], [55.7, 1617.0], [55.8, 1620.0], [55.9, 1622.0], [56.0, 1624.0], [56.1, 1626.0], [56.2, 1628.0], [56.3, 1630.0], [56.4, 1632.0], [56.5, 1635.0], [56.6, 1637.0], [56.7, 1639.0], [56.8, 1641.0], [56.9, 1643.0], [57.0, 1645.0], [57.1, 1648.0], [57.2, 1650.0], [57.3, 1652.0], [57.4, 1655.0], [57.5, 1657.0], [57.6, 1658.0], [57.7, 1661.0], [57.8, 1664.0], [57.9, 1668.0], [58.0, 1671.0], [58.1, 1673.0], [58.2, 1676.0], [58.3, 1678.0], [58.4, 1680.0], [58.5, 1683.0], [58.6, 1685.0], [58.7, 1687.0], [58.8, 1689.0], [58.9, 1691.0], [59.0, 1693.0], [59.1, 1695.0], [59.2, 1696.0], [59.3, 1700.0], [59.4, 1703.0], [59.5, 1705.0], [59.6, 1707.0], [59.7, 1711.0], [59.8, 1714.0], [59.9, 1716.0], [60.0, 1718.0], [60.1, 1723.0], [60.2, 1725.0], [60.3, 1728.0], [60.4, 1730.0], [60.5, 1732.0], [60.6, 1734.0], [60.7, 1736.0], [60.8, 1738.0], [60.9, 1741.0], [61.0, 1744.0], [61.1, 1746.0], [61.2, 1749.0], [61.3, 1751.0], [61.4, 1753.0], [61.5, 1756.0], [61.6, 1759.0], [61.7, 1760.0], [61.8, 1764.0], [61.9, 1766.0], [62.0, 1768.0], [62.1, 1770.0], [62.2, 1773.0], [62.3, 1776.0], [62.4, 1778.0], [62.5, 1782.0], [62.6, 1784.0], [62.7, 1786.0], [62.8, 1789.0], [62.9, 1791.0], [63.0, 1795.0], [63.1, 1798.0], [63.2, 1800.0], [63.3, 1803.0], [63.4, 1807.0], [63.5, 1809.0], [63.6, 1813.0], [63.7, 1815.0], [63.8, 1819.0], [63.9, 1822.0], [64.0, 1824.0], [64.1, 1828.0], [64.2, 1830.0], [64.3, 1832.0], [64.4, 1835.0], [64.5, 1837.0], [64.6, 1839.0], [64.7, 1842.0], [64.8, 1844.0], [64.9, 1847.0], [65.0, 1850.0], [65.1, 1853.0], [65.2, 1856.0], [65.3, 1859.0], [65.4, 1863.0], [65.5, 1864.0], [65.6, 1867.0], [65.7, 1869.0], [65.8, 1871.0], [65.9, 1874.0], [66.0, 1876.0], [66.1, 1880.0], [66.2, 1884.0], [66.3, 1885.0], [66.4, 1889.0], [66.5, 1892.0], [66.6, 1895.0], [66.7, 1897.0], [66.8, 1899.0], [66.9, 1902.0], [67.0, 1905.0], [67.1, 1907.0], [67.2, 1909.0], [67.3, 1910.0], [67.4, 1912.0], [67.5, 1914.0], [67.6, 1918.0], [67.7, 1921.0], [67.8, 1923.0], [67.9, 1924.0], [68.0, 1927.0], [68.1, 1929.0], [68.2, 1933.0], [68.3, 1935.0], [68.4, 1938.0], [68.5, 1941.0], [68.6, 1944.0], [68.7, 1947.0], [68.8, 1952.0], [68.9, 1953.0], [69.0, 1957.0], [69.1, 1959.0], [69.2, 1962.0], [69.3, 1965.0], [69.4, 1968.0], [69.5, 1973.0], [69.6, 1976.0], [69.7, 1978.0], [69.8, 1982.0], [69.9, 1985.0], [70.0, 1988.0], [70.1, 1992.0], [70.2, 1994.0], [70.3, 1997.0], [70.4, 1999.0], [70.5, 2004.0], [70.6, 2007.0], [70.7, 2010.0], [70.8, 2013.0], [70.9, 2017.0], [71.0, 2019.0], [71.1, 2021.0], [71.2, 2025.0], [71.3, 2030.0], [71.4, 2033.0], [71.5, 2035.0], [71.6, 2038.0], [71.7, 2041.0], [71.8, 2044.0], [71.9, 2048.0], [72.0, 2051.0], [72.1, 2054.0], [72.2, 2058.0], [72.3, 2061.0], [72.4, 2064.0], [72.5, 2067.0], [72.6, 2070.0], [72.7, 2075.0], [72.8, 2078.0], [72.9, 2082.0], [73.0, 2087.0], [73.1, 2089.0], [73.2, 2092.0], [73.3, 2096.0], [73.4, 2099.0], [73.5, 2104.0], [73.6, 2107.0], [73.7, 2110.0], [73.8, 2114.0], [73.9, 2116.0], [74.0, 2120.0], [74.1, 2123.0], [74.2, 2126.0], [74.3, 2131.0], [74.4, 2133.0], [74.5, 2136.0], [74.6, 2141.0], [74.7, 2145.0], [74.8, 2149.0], [74.9, 2151.0], [75.0, 2154.0], [75.1, 2157.0], [75.2, 2160.0], [75.3, 2163.0], [75.4, 2168.0], [75.5, 2173.0], [75.6, 2176.0], [75.7, 2181.0], [75.8, 2184.0], [75.9, 2189.0], [76.0, 2194.0], [76.1, 2196.0], [76.2, 2203.0], [76.3, 2207.0], [76.4, 2210.0], [76.5, 2215.0], [76.6, 2218.0], [76.7, 2222.0], [76.8, 2225.0], [76.9, 2232.0], [77.0, 2234.0], [77.1, 2239.0], [77.2, 2243.0], [77.3, 2247.0], [77.4, 2253.0], [77.5, 2256.0], [77.6, 2261.0], [77.7, 2265.0], [77.8, 2268.0], [77.9, 2273.0], [78.0, 2279.0], [78.1, 2282.0], [78.2, 2286.0], [78.3, 2290.0], [78.4, 2294.0], [78.5, 2300.0], [78.6, 2306.0], [78.7, 2311.0], [78.8, 2315.0], [78.9, 2323.0], [79.0, 2329.0], [79.1, 2333.0], [79.2, 2338.0], [79.3, 2343.0], [79.4, 2347.0], [79.5, 2352.0], [79.6, 2358.0], [79.7, 2362.0], [79.8, 2367.0], [79.9, 2374.0], [80.0, 2377.0], [80.1, 2383.0], [80.2, 2386.0], [80.3, 2391.0], [80.4, 2396.0], [80.5, 2401.0], [80.6, 2406.0], [80.7, 2412.0], [80.8, 2417.0], [80.9, 2425.0], [81.0, 2432.0], [81.1, 2439.0], [81.2, 2445.0], [81.3, 2454.0], [81.4, 2460.0], [81.5, 2466.0], [81.6, 2471.0], [81.7, 2477.0], [81.8, 2480.0], [81.9, 2486.0], [82.0, 2492.0], [82.1, 2499.0], [82.2, 2507.0], [82.3, 2514.0], [82.4, 2521.0], [82.5, 2527.0], [82.6, 2533.0], [82.7, 2538.0], [82.8, 2542.0], [82.9, 2546.0], [83.0, 2556.0], [83.1, 2562.0], [83.2, 2569.0], [83.3, 2574.0], [83.4, 2582.0], [83.5, 2593.0], [83.6, 2601.0], [83.7, 2607.0], [83.8, 2617.0], [83.9, 2624.0], [84.0, 2627.0], [84.1, 2633.0], [84.2, 2639.0], [84.3, 2648.0], [84.4, 2657.0], [84.5, 2665.0], [84.6, 2672.0], [84.7, 2679.0], [84.8, 2689.0], [84.9, 2701.0], [85.0, 2711.0], [85.1, 2719.0], [85.2, 2731.0], [85.3, 2739.0], [85.4, 2748.0], [85.5, 2757.0], [85.6, 2766.0], [85.7, 2776.0], [85.8, 2782.0], [85.9, 2798.0], [86.0, 2808.0], [86.1, 2820.0], [86.2, 2828.0], [86.3, 2838.0], [86.4, 2851.0], [86.5, 2860.0], [86.6, 2873.0], [86.7, 2885.0], [86.8, 2896.0], [86.9, 2911.0], [87.0, 2924.0], [87.1, 2935.0], [87.2, 2945.0], [87.3, 2956.0], [87.4, 2967.0], [87.5, 2976.0], [87.6, 2991.0], [87.7, 3003.0], [87.8, 3018.0], [87.9, 3037.0], [88.0, 3048.0], [88.1, 3063.0], [88.2, 3080.0], [88.3, 3091.0], [88.4, 3098.0], [88.5, 3107.0], [88.6, 3122.0], [88.7, 3127.0], [88.8, 3137.0], [88.9, 3154.0], [89.0, 3171.0], [89.1, 3178.0], [89.2, 3189.0], [89.3, 3202.0], [89.4, 3215.0], [89.5, 3230.0], [89.6, 3246.0], [89.7, 3262.0], [89.8, 3279.0], [89.9, 3290.0], [90.0, 3302.0], [90.1, 3312.0], [90.2, 3327.0], [90.3, 3339.0], [90.4, 3357.0], [90.5, 3373.0], [90.6, 3392.0], [90.7, 3403.0], [90.8, 3420.0], [90.9, 3438.0], [91.0, 3458.0], [91.1, 3475.0], [91.2, 3491.0], [91.3, 3524.0], [91.4, 3536.0], [91.5, 3556.0], [91.6, 3576.0], [91.7, 3591.0], [91.8, 3605.0], [91.9, 3617.0], [92.0, 3630.0], [92.1, 3644.0], [92.2, 3656.0], [92.3, 3672.0], [92.4, 3685.0], [92.5, 3700.0], [92.6, 3714.0], [92.7, 3728.0], [92.8, 3749.0], [92.9, 3765.0], [93.0, 3791.0], [93.1, 3810.0], [93.2, 3826.0], [93.3, 3844.0], [93.4, 3855.0], [93.5, 3871.0], [93.6, 3890.0], [93.7, 3902.0], [93.8, 3919.0], [93.9, 3936.0], [94.0, 3951.0], [94.1, 3962.0], [94.2, 3978.0], [94.3, 3995.0], [94.4, 4009.0], [94.5, 4024.0], [94.6, 4045.0], [94.7, 4060.0], [94.8, 4070.0], [94.9, 4093.0], [95.0, 4107.0], [95.1, 4128.0], [95.2, 4139.0], [95.3, 4162.0], [95.4, 4179.0], [95.5, 4193.0], [95.6, 4210.0], [95.7, 4228.0], [95.8, 4251.0], [95.9, 4266.0], [96.0, 4298.0], [96.1, 4323.0], [96.2, 4349.0], [96.3, 4372.0], [96.4, 4392.0], [96.5, 4413.0], [96.6, 4446.0], [96.7, 4487.0], [96.8, 4500.0], [96.9, 4521.0], [97.0, 4551.0], [97.1, 4586.0], [97.2, 4610.0], [97.3, 4650.0], [97.4, 4691.0], [97.5, 4727.0], [97.6, 4763.0], [97.7, 4811.0], [97.8, 4849.0], [97.9, 4879.0], [98.0, 4910.0], [98.1, 4960.0], [98.2, 5019.0], [98.3, 5083.0], [98.4, 5150.0], [98.5, 5216.0], [98.6, 5253.0], [98.7, 5311.0], [98.8, 5420.0], [98.9, 5586.0], [99.0, 5715.0], [99.1, 5814.0], [99.2, 5939.0], [99.3, 6134.0], [99.4, 6327.0], [99.5, 6773.0], [99.6, 7017.0], [99.7, 7356.0], [99.8, 8479.0], [99.9, 25709.0], [100.0, 63510.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 807.0, "series": [{"data": [[200.0, 1.0], [63500.0, 1.0], [300.0, 4.0], [400.0, 103.0], [500.0, 622.0], [600.0, 785.0], [700.0, 794.0], [800.0, 807.0], [900.0, 793.0], [1000.0, 777.0], [1100.0, 799.0], [1200.0, 756.0], [1300.0, 804.0], [1400.0, 680.0], [1500.0, 682.0], [1600.0, 666.0], [1700.0, 593.0], [1800.0, 561.0], [1900.0, 550.0], [2000.0, 460.0], [2100.0, 414.0], [2200.0, 360.0], [2300.0, 300.0], [2400.0, 254.0], [2500.0, 225.0], [2600.0, 199.0], [2700.0, 157.0], [2800.0, 142.0], [2900.0, 126.0], [3000.0, 118.0], [3100.0, 131.0], [3300.0, 106.0], [3200.0, 106.0], [3400.0, 87.0], [3500.0, 77.0], [3600.0, 116.0], [3700.0, 84.0], [3800.0, 96.0], [3900.0, 100.0], [4000.0, 96.0], [4100.0, 92.0], [4300.0, 68.0], [4200.0, 69.0], [4500.0, 53.0], [4400.0, 53.0], [4600.0, 43.0], [4700.0, 40.0], [4800.0, 41.0], [5000.0, 20.0], [4900.0, 34.0], [5100.0, 24.0], [5200.0, 33.0], [5300.0, 15.0], [5500.0, 14.0], [5400.0, 9.0], [5600.0, 9.0], [5700.0, 17.0], [5800.0, 11.0], [5900.0, 10.0], [6000.0, 9.0], [6100.0, 4.0], [6300.0, 5.0], [6200.0, 11.0], [6600.0, 3.0], [6400.0, 5.0], [6500.0, 2.0], [6900.0, 9.0], [6700.0, 2.0], [6800.0, 4.0], [7000.0, 6.0], [7100.0, 2.0], [7300.0, 7.0], [7200.0, 4.0], [7400.0, 2.0], [7500.0, 1.0], [7600.0, 1.0], [7700.0, 4.0], [7800.0, 1.0], [8100.0, 1.0], [8000.0, 2.0], [8300.0, 1.0], [8500.0, 2.0], [8400.0, 1.0], [8700.0, 1.0], [8800.0, 1.0], [24400.0, 1.0], [25100.0, 1.0], [25200.0, 1.0], [24700.0, 2.0], [25500.0, 2.0], [24600.0, 1.0], [25400.0, 1.0], [26400.0, 1.0], [26500.0, 1.0], [25700.0, 2.0], [26100.0, 3.0], [25600.0, 1.0], [25900.0, 1.0], [27100.0, 1.0], [26700.0, 1.0], [26900.0, 2.0], [27200.0, 1.0], [28000.0, 1.0], [28700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 63500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7609.0, "series": [{"data": [[0.0, 107.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7609.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7567.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 20.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.399441340782131, "minX": 1.65812856E12, "maxY": 25.0, "series": [{"data": [[1.65812922E12, 25.0], [1.65812856E12, 12.399441340782131], [1.65812952E12, 25.0], [1.65812862E12, 24.945578231292533], [1.65812958E12, 25.0], [1.65812892E12, 25.0], [1.65812946E12, 25.0], [1.6581288E12, 25.0], [1.65812886E12, 25.0], [1.65812916E12, 25.0], [1.65812874E12, 25.0], [1.6581297E12, 25.0], [1.65812904E12, 25.0], [1.6581291E12, 25.0], [1.6581294E12, 25.0], [1.65812898E12, 25.0], [1.65812928E12, 25.0], [1.65812934E12, 25.0], [1.65812868E12, 25.0], [1.65812964E12, 25.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6581297E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 550.3333333333334, "minX": 1.0, "maxY": 3827.9444444444434, "series": [{"data": [[2.0, 579.8750000000001], [3.0, 550.3333333333334], [4.0, 553.1999999999999], [5.0, 673.421052631579], [6.0, 912.2], [7.0, 753.090909090909], [8.0, 1028.125], [9.0, 1020.9999999999999], [10.0, 1134.3500000000001], [11.0, 1310.3809523809527], [12.0, 1692.4999999999998], [13.0, 1442.8333333333333], [14.0, 1865.0], [15.0, 1890.208333333333], [1.0, 2167.0], [16.0, 1892.5], [17.0, 2672.909090909091], [18.0, 3077.727272727273], [19.0, 2979.2777777777774], [20.0, 2575.3888888888882], [21.0, 3008.176470588235], [22.0, 3268.0555555555557], [23.0, 2928.4444444444443], [24.0, 3827.9444444444434], [25.0, 1805.6037255427507]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[24.703652878520554, 1805.2482519767332]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 51.2, "minX": 1.65812856E12, "maxY": 53107.683333333334, "series": [{"data": [[1.65812922E12, 31403.816666666666], [1.65812856E12, 11036.683333333332], [1.65812952E12, 28005.316666666666], [1.65812862E12, 13626.9], [1.65812958E12, 34421.2], [1.65812892E12, 22270.25], [1.65812946E12, 28533.916666666668], [1.6581288E12, 11561.983333333334], [1.65812886E12, 6890.7], [1.65812916E12, 31407.7], [1.65812874E12, 11499.666666666666], [1.6581297E12, 189.03333333333333], [1.65812904E12, 32099.966666666667], [1.6581291E12, 30368.3], [1.6581294E12, 28906.016666666666], [1.65812898E12, 30691.266666666666], [1.65812928E12, 30540.15], [1.65812934E12, 31309.25], [1.65812868E12, 10264.183333333332], [1.65812964E12, 53107.683333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65812922E12, 8558.933333333332], [1.65812856E12, 3054.9333333333334], [1.65812952E12, 7628.8], [1.65812862E12, 3763.2], [1.65812958E12, 9378.133333333333], [1.65812892E12, 6058.666666666667], [1.65812946E12, 7765.333333333333], [1.6581288E12, 3200.0], [1.65812886E12, 1902.9333333333334], [1.65812916E12, 8593.066666666668], [1.65812874E12, 3182.9333333333334], [1.6581297E12, 51.2], [1.65812904E12, 8746.666666666666], [1.6581291E12, 8268.8], [1.6581294E12, 7876.266666666666], [1.65812898E12, 8362.666666666666], [1.65812928E12, 8354.133333333333], [1.65812934E12, 8533.333333333334], [1.65812868E12, 2841.6], [1.65812964E12, 14464.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6581297E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 890.0890855457221, "minX": 1.65812856E12, "maxY": 4386.4054054054095, "series": [{"data": [[1.65812922E12, 1507.432701894316], [1.65812856E12, 1680.0195530726255], [1.65812952E12, 1683.5324384787466], [1.65812862E12, 3395.083900226756], [1.65812958E12, 1370.6269335759791], [1.65812892E12, 2935.3140845070466], [1.65812946E12, 1633.8296703296703], [1.6581288E12, 4008.7413333333348], [1.65812886E12, 4267.892376681618], [1.65812916E12, 1488.7497517378365], [1.65812874E12, 4056.2412868632696], [1.6581297E12, 903.8333333333334], [1.65812904E12, 1462.7043902439032], [1.6581291E12, 1545.713106295147], [1.6581294E12, 1628.169014084507], [1.65812898E12, 1533.117346938774], [1.65812928E12, 1525.1613891726242], [1.65812934E12, 1495.4049999999997], [1.65812868E12, 4386.4054054054095], [1.65812964E12, 890.0890855457221]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6581297E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 890.0814159292028, "minX": 1.65812856E12, "maxY": 4386.387387387387, "series": [{"data": [[1.65812922E12, 1507.4187437686926], [1.65812856E12, 1679.8547486033522], [1.65812952E12, 1683.5279642058179], [1.65812862E12, 3395.0181405895714], [1.65812958E12, 1370.6242038216576], [1.65812892E12, 2935.2929577464793], [1.65812946E12, 1633.8252747252766], [1.6581288E12, 4008.71733333333], [1.65812886E12, 4267.83856502242], [1.65812916E12, 1488.730883813307], [1.65812874E12, 4056.214477211799], [1.6581297E12, 903.8333333333334], [1.65812904E12, 1462.6917073170741], [1.6581291E12, 1545.6893704850345], [1.6581294E12, 1628.1516793066069], [1.65812898E12, 1533.1061224489797], [1.65812928E12, 1525.1491317671087], [1.65812934E12, 1495.397000000001], [1.65812868E12, 4386.387387387387], [1.65812964E12, 890.0814159292028]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6581297E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.65812856E12, "maxY": 62.5173333333333, "series": [{"data": [[1.65812922E12, 18.44765702891326], [1.65812856E12, 47.87430167597767], [1.65812952E12, 20.473154362416086], [1.65812862E12, 40.9909297052155], [1.65812958E12, 19.94085532302093], [1.65812892E12, 27.480281690140824], [1.65812946E12, 22.728571428571406], [1.6581288E12, 62.5173333333333], [1.65812886E12, 51.632286995515706], [1.65812916E12, 18.174776564051637], [1.65812874E12, 57.16353887399461], [1.6581297E12, 0.0], [1.65812904E12, 17.865365853658517], [1.6581291E12, 19.338493292053673], [1.6581294E12, 20.606717226435535], [1.65812898E12, 18.433673469387738], [1.65812928E12, 19.320735444330957], [1.65812934E12, 18.24700000000002], [1.65812868E12, 56.603603603603574], [1.65812964E12, 13.817109144542771]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6581297E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 432.0, "minX": 1.65812856E12, "maxY": 28737.0, "series": [{"data": [[1.65812922E12, 2858.0], [1.65812856E12, 4163.0], [1.65812952E12, 3831.0], [1.65812862E12, 5280.0], [1.65812958E12, 5588.0], [1.65812892E12, 28737.0], [1.65812946E12, 3930.0], [1.6581288E12, 8566.0], [1.65812886E12, 6028.0], [1.65812916E12, 3357.0], [1.65812874E12, 6903.0], [1.6581297E12, 1102.0], [1.65812904E12, 3218.0], [1.6581291E12, 6237.0], [1.6581294E12, 3438.0], [1.65812898E12, 3297.0], [1.65812928E12, 3104.0], [1.65812934E12, 3285.0], [1.65812868E12, 8380.0], [1.65812964E12, 3876.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65812922E12, 2140.8], [1.65812856E12, 3102.8], [1.65812952E12, 2728.0], [1.65812862E12, 4119.6], [1.65812958E12, 2544.4], [1.65812892E12, 5660.5999999999985], [1.65812946E12, 2728.8999999999996], [1.6581288E12, 5175.0], [1.65812886E12, 5203.4], [1.65812916E12, 2088.0], [1.65812874E12, 4847.799999999999], [1.6581297E12, 1102.0], [1.65812904E12, 2106.4], [1.6581291E12, 2102.0], [1.6581294E12, 2453.0000000000005], [1.65812898E12, 2490.0], [1.65812928E12, 2257.0], [1.65812934E12, 2179.0], [1.65812868E12, 5872.2], [1.65812964E12, 1391.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65812922E12, 2674.5800000000004], [1.65812856E12, 3737.3200000000033], [1.65812952E12, 3296.0], [1.65812862E12, 4818.199999999999], [1.65812958E12, 3171.3499999999995], [1.65812892E12, 26686.089999999997], [1.65812946E12, 3376.56], [1.6581288E12, 6808.0], [1.65812886E12, 5807.639999999999], [1.65812916E12, 2897.5000000000005], [1.65812874E12, 6689.24], [1.6581297E12, 1102.0], [1.65812904E12, 2589.62], [1.6581291E12, 4355.599999999997], [1.6581294E12, 3158.5599999999995], [1.65812898E12, 3070.000000000002], [1.65812928E12, 2785.0], [1.65812934E12, 2694.0], [1.65812868E12, 7598.090000000006], [1.65812964E12, 1933.4499999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65812922E12, 2330.8999999999987], [1.65812856E12, 3343.4999999999986], [1.65812952E12, 2959.25], [1.65812862E12, 4336.7], [1.65812958E12, 2820.0], [1.65812892E12, 7677.9999999999945], [1.65812946E12, 2995.399999999999], [1.6581288E12, 5658.0], [1.65812886E12, 5332.599999999999], [1.65812916E12, 2366.3999999999996], [1.65812874E12, 5381.399999999999], [1.6581297E12, 1102.0], [1.65812904E12, 2309.9999999999986], [1.6581291E12, 2474.0], [1.6581294E12, 2644.5999999999995], [1.65812898E12, 2672.0], [1.65812928E12, 2417.5], [1.65812934E12, 2407.0], [1.65812868E12, 6281.05], [1.65812964E12, 1552.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65812922E12, 517.0], [1.65812856E12, 436.0], [1.65812952E12, 511.0], [1.65812862E12, 2154.0], [1.65812958E12, 432.0], [1.65812892E12, 449.0], [1.65812946E12, 484.0], [1.6581288E12, 2092.0], [1.65812886E12, 598.0], [1.65812916E12, 534.0], [1.65812874E12, 1098.0], [1.6581297E12, 703.0], [1.65812904E12, 526.0], [1.6581291E12, 505.0], [1.6581294E12, 531.0], [1.65812898E12, 483.0], [1.65812928E12, 543.0], [1.65812934E12, 523.0], [1.65812868E12, 2431.0], [1.65812964E12, 442.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65812922E12, 1466.5], [1.65812856E12, 1517.0], [1.65812952E12, 1649.5], [1.65812862E12, 3353.0], [1.65812958E12, 1194.5], [1.65812892E12, 1566.5], [1.65812946E12, 1572.0], [1.6581288E12, 3948.0], [1.65812886E12, 4370.0], [1.65812916E12, 1443.0], [1.65812874E12, 3764.0], [1.6581297E12, 866.5], [1.65812904E12, 1446.0], [1.6581291E12, 1448.0], [1.6581294E12, 1634.0], [1.65812898E12, 1523.0], [1.65812928E12, 1498.5], [1.65812934E12, 1444.0], [1.65812868E12, 4153.5], [1.65812964E12, 797.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6581297E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 323.0, "minX": 1.0, "maxY": 63510.0, "series": [{"data": [[2.0, 3483.0], [32.0, 743.0], [33.0, 766.0], [35.0, 745.0], [34.0, 812.5], [37.0, 682.0], [3.0, 3867.5], [4.0, 3856.0], [5.0, 3743.0], [6.0, 3641.0], [7.0, 3261.0], [8.0, 3106.0], [9.0, 2363.5], [10.0, 2768.5], [11.0, 2057.0], [12.0, 1595.0], [13.0, 1497.0], [14.0, 1637.0], [15.0, 1591.5], [1.0, 3774.5], [16.0, 1481.0], [17.0, 1478.0], [18.0, 1565.0], [19.0, 1439.5], [20.0, 1533.0], [21.0, 1527.0], [22.0, 1379.5], [23.0, 1464.5], [24.0, 1471.0], [25.0, 1372.0], [26.0, 1218.0], [27.0, 994.0], [28.0, 885.5], [29.0, 706.5], [30.0, 787.0], [31.0, 862.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 891.0], [16.0, 323.0], [17.0, 622.0], [9.0, 1239.0], [23.0, 517.0], [12.0, 3156.0], [24.0, 63510.0], [25.0, 1325.0], [14.0, 1372.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 323.0, "minX": 1.0, "maxY": 63510.0, "series": [{"data": [[2.0, 3483.0], [32.0, 743.0], [33.0, 766.0], [35.0, 745.0], [34.0, 812.5], [37.0, 682.0], [3.0, 3867.5], [4.0, 3856.0], [5.0, 3743.0], [6.0, 3640.5], [7.0, 3261.0], [8.0, 3106.0], [9.0, 2363.5], [10.0, 2768.5], [11.0, 2057.0], [12.0, 1595.0], [13.0, 1497.0], [14.0, 1637.0], [15.0, 1591.5], [1.0, 3774.5], [16.0, 1481.0], [17.0, 1478.0], [18.0, 1565.0], [19.0, 1439.5], [20.0, 1533.0], [21.0, 1527.0], [22.0, 1379.5], [23.0, 1464.5], [24.0, 1471.0], [25.0, 1372.0], [26.0, 1218.0], [27.0, 994.0], [28.0, 885.5], [29.0, 706.5], [30.0, 787.0], [31.0, 862.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 891.0], [16.0, 323.0], [17.0, 622.0], [9.0, 1239.0], [23.0, 517.0], [12.0, 3156.0], [24.0, 63510.0], [25.0, 1325.0], [14.0, 1372.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.716666666666667, "minX": 1.65812856E12, "maxY": 27.933333333333334, "series": [{"data": [[1.65812922E12, 16.716666666666665], [1.65812856E12, 6.35], [1.65812952E12, 14.9], [1.65812862E12, 7.383333333333334], [1.65812958E12, 18.316666666666666], [1.65812892E12, 11.833333333333334], [1.65812946E12, 15.166666666666666], [1.6581288E12, 6.25], [1.65812886E12, 3.716666666666667], [1.65812916E12, 16.783333333333335], [1.65812874E12, 6.216666666666667], [1.65812904E12, 17.083333333333332], [1.6581291E12, 16.15], [1.6581294E12, 15.383333333333333], [1.65812898E12, 16.333333333333332], [1.65812928E12, 16.316666666666666], [1.65812934E12, 16.666666666666668], [1.65812868E12, 5.55], [1.65812964E12, 27.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812964E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.65812856E12, "maxY": 28.233333333333334, "series": [{"data": [[1.65812922E12, 16.7], [1.65812856E12, 5.95], [1.65812952E12, 14.9], [1.65812862E12, 7.35], [1.65812958E12, 18.3], [1.65812892E12, 11.833333333333334], [1.65812946E12, 15.166666666666666], [1.6581288E12, 6.233333333333333], [1.65812886E12, 3.716666666666667], [1.65812916E12, 16.683333333333334], [1.65812874E12, 6.2], [1.6581297E12, 0.1], [1.65812904E12, 17.083333333333332], [1.6581291E12, 16.15], [1.6581294E12, 15.383333333333333], [1.65812898E12, 16.316666666666666], [1.65812928E12, 16.233333333333334], [1.65812934E12, 16.65], [1.65812868E12, 5.533333333333333], [1.65812964E12, 28.233333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65812922E12, 0.016666666666666666], [1.65812856E12, 0.016666666666666666], [1.65812958E12, 0.016666666666666666], [1.65812898E12, 0.016666666666666666], [1.6581288E12, 0.016666666666666666], [1.65812934E12, 0.016666666666666666], [1.65812868E12, 0.016666666666666666], [1.65812964E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.65812874E12, 0.016666666666666666]], "isOverall": false, "label": "504", "isController": false}, {"data": [[1.65812928E12, 0.08333333333333333], [1.65812916E12, 0.1]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6581297E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.65812856E12, "maxY": 28.233333333333334, "series": [{"data": [[1.65812922E12, 16.7], [1.65812856E12, 5.95], [1.65812952E12, 14.9], [1.65812862E12, 7.35], [1.65812958E12, 18.3], [1.65812892E12, 11.833333333333334], [1.65812946E12, 15.166666666666666], [1.6581288E12, 6.233333333333333], [1.65812886E12, 3.716666666666667], [1.65812916E12, 16.683333333333334], [1.65812874E12, 6.2], [1.6581297E12, 0.1], [1.65812904E12, 17.083333333333332], [1.6581291E12, 16.15], [1.6581294E12, 15.383333333333333], [1.65812898E12, 16.316666666666666], [1.65812928E12, 16.233333333333334], [1.65812934E12, 16.65], [1.65812868E12, 5.533333333333333], [1.65812964E12, 28.233333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.65812874E12, 0.016666666666666666], [1.65812922E12, 0.016666666666666666], [1.65812856E12, 0.016666666666666666], [1.65812958E12, 0.016666666666666666], [1.65812898E12, 0.016666666666666666], [1.6581288E12, 0.016666666666666666], [1.65812928E12, 0.08333333333333333], [1.65812934E12, 0.016666666666666666], [1.65812868E12, 0.016666666666666666], [1.65812916E12, 0.1], [1.65812964E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6581297E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.65812856E12, "maxY": 28.233333333333334, "series": [{"data": [[1.65812922E12, 16.7], [1.65812856E12, 5.95], [1.65812952E12, 14.9], [1.65812862E12, 7.35], [1.65812958E12, 18.3], [1.65812892E12, 11.833333333333334], [1.65812946E12, 15.166666666666666], [1.6581288E12, 6.233333333333333], [1.65812886E12, 3.716666666666667], [1.65812916E12, 16.683333333333334], [1.65812874E12, 6.2], [1.6581297E12, 0.1], [1.65812904E12, 17.083333333333332], [1.6581291E12, 16.15], [1.6581294E12, 15.383333333333333], [1.65812898E12, 16.316666666666666], [1.65812928E12, 16.233333333333334], [1.65812934E12, 16.65], [1.65812868E12, 5.533333333333333], [1.65812964E12, 28.233333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65812874E12, 0.016666666666666666], [1.65812922E12, 0.016666666666666666], [1.65812856E12, 0.016666666666666666], [1.65812958E12, 0.016666666666666666], [1.65812898E12, 0.016666666666666666], [1.6581288E12, 0.016666666666666666], [1.65812928E12, 0.08333333333333333], [1.65812934E12, 0.016666666666666666], [1.65812868E12, 0.016666666666666666], [1.65812916E12, 0.1], [1.65812964E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6581297E12, "title": "Total Transactions Per Second"}},
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

