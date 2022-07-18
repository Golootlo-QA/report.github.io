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
        data: {"result": {"minY": 237.0, "minX": 0.0, "maxY": 64045.0, "series": [{"data": [[0.0, 237.0], [0.1, 243.0], [0.2, 245.0], [0.3, 247.0], [0.4, 249.0], [0.5, 250.0], [0.6, 251.0], [0.7, 252.0], [0.8, 254.0], [0.9, 254.0], [1.0, 255.0], [1.1, 256.0], [1.2, 258.0], [1.3, 258.0], [1.4, 259.0], [1.5, 259.0], [1.6, 260.0], [1.7, 260.0], [1.8, 261.0], [1.9, 262.0], [2.0, 262.0], [2.1, 263.0], [2.2, 263.0], [2.3, 264.0], [2.4, 265.0], [2.5, 266.0], [2.6, 267.0], [2.7, 267.0], [2.8, 267.0], [2.9, 268.0], [3.0, 269.0], [3.1, 269.0], [3.2, 270.0], [3.3, 270.0], [3.4, 271.0], [3.5, 271.0], [3.6, 272.0], [3.7, 272.0], [3.8, 273.0], [3.9, 273.0], [4.0, 274.0], [4.1, 274.0], [4.2, 275.0], [4.3, 275.0], [4.4, 275.0], [4.5, 276.0], [4.6, 276.0], [4.7, 277.0], [4.8, 277.0], [4.9, 277.0], [5.0, 278.0], [5.1, 278.0], [5.2, 278.0], [5.3, 278.0], [5.4, 278.0], [5.5, 279.0], [5.6, 279.0], [5.7, 279.0], [5.8, 280.0], [5.9, 280.0], [6.0, 281.0], [6.1, 281.0], [6.2, 282.0], [6.3, 282.0], [6.4, 282.0], [6.5, 283.0], [6.6, 283.0], [6.7, 284.0], [6.8, 284.0], [6.9, 284.0], [7.0, 285.0], [7.1, 285.0], [7.2, 286.0], [7.3, 286.0], [7.4, 287.0], [7.5, 287.0], [7.6, 287.0], [7.7, 287.0], [7.8, 288.0], [7.9, 288.0], [8.0, 289.0], [8.1, 289.0], [8.2, 290.0], [8.3, 290.0], [8.4, 290.0], [8.5, 290.0], [8.6, 291.0], [8.7, 291.0], [8.8, 292.0], [8.9, 292.0], [9.0, 292.0], [9.1, 293.0], [9.2, 293.0], [9.3, 294.0], [9.4, 294.0], [9.5, 295.0], [9.6, 295.0], [9.7, 296.0], [9.8, 296.0], [9.9, 297.0], [10.0, 297.0], [10.1, 298.0], [10.2, 299.0], [10.3, 299.0], [10.4, 300.0], [10.5, 300.0], [10.6, 301.0], [10.7, 301.0], [10.8, 302.0], [10.9, 303.0], [11.0, 303.0], [11.1, 304.0], [11.2, 305.0], [11.3, 305.0], [11.4, 306.0], [11.5, 306.0], [11.6, 307.0], [11.7, 307.0], [11.8, 308.0], [11.9, 308.0], [12.0, 309.0], [12.1, 310.0], [12.2, 310.0], [12.3, 312.0], [12.4, 312.0], [12.5, 313.0], [12.6, 314.0], [12.7, 315.0], [12.8, 315.0], [12.9, 316.0], [13.0, 317.0], [13.1, 318.0], [13.2, 318.0], [13.3, 319.0], [13.4, 320.0], [13.5, 321.0], [13.6, 321.0], [13.7, 322.0], [13.8, 323.0], [13.9, 324.0], [14.0, 325.0], [14.1, 326.0], [14.2, 327.0], [14.3, 327.0], [14.4, 328.0], [14.5, 329.0], [14.6, 330.0], [14.7, 331.0], [14.8, 332.0], [14.9, 333.0], [15.0, 334.0], [15.1, 335.0], [15.2, 337.0], [15.3, 337.0], [15.4, 339.0], [15.5, 339.0], [15.6, 341.0], [15.7, 342.0], [15.8, 343.0], [15.9, 344.0], [16.0, 345.0], [16.1, 346.0], [16.2, 347.0], [16.3, 348.0], [16.4, 349.0], [16.5, 352.0], [16.6, 354.0], [16.7, 354.0], [16.8, 355.0], [16.9, 356.0], [17.0, 357.0], [17.1, 358.0], [17.2, 359.0], [17.3, 360.0], [17.4, 361.0], [17.5, 362.0], [17.6, 363.0], [17.7, 364.0], [17.8, 365.0], [17.9, 367.0], [18.0, 369.0], [18.1, 371.0], [18.2, 372.0], [18.3, 374.0], [18.4, 377.0], [18.5, 378.0], [18.6, 381.0], [18.7, 383.0], [18.8, 386.0], [18.9, 389.0], [19.0, 390.0], [19.1, 392.0], [19.2, 395.0], [19.3, 397.0], [19.4, 399.0], [19.5, 401.0], [19.6, 403.0], [19.7, 404.0], [19.8, 405.0], [19.9, 408.0], [20.0, 410.0], [20.1, 413.0], [20.2, 414.0], [20.3, 416.0], [20.4, 419.0], [20.5, 421.0], [20.6, 422.0], [20.7, 424.0], [20.8, 426.0], [20.9, 427.0], [21.0, 430.0], [21.1, 431.0], [21.2, 433.0], [21.3, 435.0], [21.4, 438.0], [21.5, 440.0], [21.6, 442.0], [21.7, 443.0], [21.8, 444.0], [21.9, 446.0], [22.0, 450.0], [22.1, 452.0], [22.2, 454.0], [22.3, 454.0], [22.4, 457.0], [22.5, 460.0], [22.6, 464.0], [22.7, 466.0], [22.8, 468.0], [22.9, 471.0], [23.0, 474.0], [23.1, 476.0], [23.2, 480.0], [23.3, 482.0], [23.4, 485.0], [23.5, 487.0], [23.6, 489.0], [23.7, 491.0], [23.8, 493.0], [23.9, 496.0], [24.0, 499.0], [24.1, 501.0], [24.2, 505.0], [24.3, 507.0], [24.4, 511.0], [24.5, 516.0], [24.6, 518.0], [24.7, 519.0], [24.8, 522.0], [24.9, 524.0], [25.0, 527.0], [25.1, 531.0], [25.2, 533.0], [25.3, 535.0], [25.4, 536.0], [25.5, 539.0], [25.6, 543.0], [25.7, 546.0], [25.8, 552.0], [25.9, 556.0], [26.0, 558.0], [26.1, 561.0], [26.2, 564.0], [26.3, 568.0], [26.4, 571.0], [26.5, 574.0], [26.6, 577.0], [26.7, 579.0], [26.8, 581.0], [26.9, 583.0], [27.0, 590.0], [27.1, 593.0], [27.2, 598.0], [27.3, 601.0], [27.4, 604.0], [27.5, 610.0], [27.6, 613.0], [27.7, 615.0], [27.8, 618.0], [27.9, 620.0], [28.0, 621.0], [28.1, 625.0], [28.2, 630.0], [28.3, 632.0], [28.4, 636.0], [28.5, 638.0], [28.6, 641.0], [28.7, 645.0], [28.8, 648.0], [28.9, 652.0], [29.0, 659.0], [29.1, 662.0], [29.2, 665.0], [29.3, 668.0], [29.4, 671.0], [29.5, 675.0], [29.6, 677.0], [29.7, 679.0], [29.8, 681.0], [29.9, 686.0], [30.0, 690.0], [30.1, 694.0], [30.2, 697.0], [30.3, 698.0], [30.4, 704.0], [30.5, 707.0], [30.6, 712.0], [30.7, 716.0], [30.8, 718.0], [30.9, 720.0], [31.0, 724.0], [31.1, 726.0], [31.2, 729.0], [31.3, 731.0], [31.4, 735.0], [31.5, 737.0], [31.6, 739.0], [31.7, 742.0], [31.8, 745.0], [31.9, 748.0], [32.0, 751.0], [32.1, 754.0], [32.2, 755.0], [32.3, 758.0], [32.4, 761.0], [32.5, 765.0], [32.6, 768.0], [32.7, 770.0], [32.8, 772.0], [32.9, 774.0], [33.0, 775.0], [33.1, 778.0], [33.2, 780.0], [33.3, 783.0], [33.4, 787.0], [33.5, 789.0], [33.6, 791.0], [33.7, 793.0], [33.8, 796.0], [33.9, 798.0], [34.0, 800.0], [34.1, 801.0], [34.2, 804.0], [34.3, 806.0], [34.4, 808.0], [34.5, 811.0], [34.6, 814.0], [34.7, 815.0], [34.8, 818.0], [34.9, 820.0], [35.0, 823.0], [35.1, 825.0], [35.2, 827.0], [35.3, 829.0], [35.4, 830.0], [35.5, 833.0], [35.6, 836.0], [35.7, 837.0], [35.8, 839.0], [35.9, 840.0], [36.0, 843.0], [36.1, 844.0], [36.2, 846.0], [36.3, 847.0], [36.4, 849.0], [36.5, 850.0], [36.6, 852.0], [36.7, 853.0], [36.8, 856.0], [36.9, 858.0], [37.0, 859.0], [37.1, 860.0], [37.2, 861.0], [37.3, 863.0], [37.4, 866.0], [37.5, 869.0], [37.6, 869.0], [37.7, 871.0], [37.8, 872.0], [37.9, 874.0], [38.0, 875.0], [38.1, 878.0], [38.2, 879.0], [38.3, 882.0], [38.4, 884.0], [38.5, 886.0], [38.6, 888.0], [38.7, 889.0], [38.8, 891.0], [38.9, 893.0], [39.0, 895.0], [39.1, 896.0], [39.2, 898.0], [39.3, 900.0], [39.4, 902.0], [39.5, 903.0], [39.6, 904.0], [39.7, 907.0], [39.8, 908.0], [39.9, 910.0], [40.0, 913.0], [40.1, 914.0], [40.2, 916.0], [40.3, 918.0], [40.4, 919.0], [40.5, 920.0], [40.6, 921.0], [40.7, 924.0], [40.8, 925.0], [40.9, 927.0], [41.0, 929.0], [41.1, 931.0], [41.2, 933.0], [41.3, 935.0], [41.4, 937.0], [41.5, 938.0], [41.6, 940.0], [41.7, 942.0], [41.8, 946.0], [41.9, 947.0], [42.0, 949.0], [42.1, 951.0], [42.2, 952.0], [42.3, 956.0], [42.4, 957.0], [42.5, 959.0], [42.6, 960.0], [42.7, 963.0], [42.8, 965.0], [42.9, 967.0], [43.0, 968.0], [43.1, 971.0], [43.2, 973.0], [43.3, 975.0], [43.4, 976.0], [43.5, 977.0], [43.6, 981.0], [43.7, 982.0], [43.8, 985.0], [43.9, 987.0], [44.0, 989.0], [44.1, 991.0], [44.2, 994.0], [44.3, 995.0], [44.4, 997.0], [44.5, 998.0], [44.6, 1000.0], [44.7, 1001.0], [44.8, 1002.0], [44.9, 1004.0], [45.0, 1005.0], [45.1, 1006.0], [45.2, 1008.0], [45.3, 1009.0], [45.4, 1010.0], [45.5, 1012.0], [45.6, 1014.0], [45.7, 1016.0], [45.8, 1018.0], [45.9, 1019.0], [46.0, 1023.0], [46.1, 1025.0], [46.2, 1027.0], [46.3, 1029.0], [46.4, 1030.0], [46.5, 1032.0], [46.6, 1033.0], [46.7, 1036.0], [46.8, 1037.0], [46.9, 1038.0], [47.0, 1041.0], [47.1, 1044.0], [47.2, 1046.0], [47.3, 1047.0], [47.4, 1049.0], [47.5, 1050.0], [47.6, 1053.0], [47.7, 1054.0], [47.8, 1056.0], [47.9, 1057.0], [48.0, 1059.0], [48.1, 1061.0], [48.2, 1062.0], [48.3, 1065.0], [48.4, 1066.0], [48.5, 1067.0], [48.6, 1069.0], [48.7, 1070.0], [48.8, 1072.0], [48.9, 1072.0], [49.0, 1074.0], [49.1, 1075.0], [49.2, 1077.0], [49.3, 1079.0], [49.4, 1080.0], [49.5, 1080.0], [49.6, 1083.0], [49.7, 1085.0], [49.8, 1087.0], [49.9, 1088.0], [50.0, 1089.0], [50.1, 1091.0], [50.2, 1095.0], [50.3, 1096.0], [50.4, 1097.0], [50.5, 1098.0], [50.6, 1099.0], [50.7, 1100.0], [50.8, 1103.0], [50.9, 1104.0], [51.0, 1106.0], [51.1, 1108.0], [51.2, 1110.0], [51.3, 1113.0], [51.4, 1116.0], [51.5, 1118.0], [51.6, 1120.0], [51.7, 1122.0], [51.8, 1125.0], [51.9, 1127.0], [52.0, 1129.0], [52.1, 1130.0], [52.2, 1132.0], [52.3, 1134.0], [52.4, 1136.0], [52.5, 1138.0], [52.6, 1139.0], [52.7, 1143.0], [52.8, 1143.0], [52.9, 1145.0], [53.0, 1146.0], [53.1, 1149.0], [53.2, 1149.0], [53.3, 1150.0], [53.4, 1152.0], [53.5, 1153.0], [53.6, 1154.0], [53.7, 1156.0], [53.8, 1158.0], [53.9, 1159.0], [54.0, 1162.0], [54.1, 1165.0], [54.2, 1166.0], [54.3, 1169.0], [54.4, 1171.0], [54.5, 1172.0], [54.6, 1175.0], [54.7, 1177.0], [54.8, 1178.0], [54.9, 1180.0], [55.0, 1181.0], [55.1, 1184.0], [55.2, 1184.0], [55.3, 1186.0], [55.4, 1187.0], [55.5, 1189.0], [55.6, 1190.0], [55.7, 1192.0], [55.8, 1195.0], [55.9, 1197.0], [56.0, 1199.0], [56.1, 1201.0], [56.2, 1203.0], [56.3, 1205.0], [56.4, 1206.0], [56.5, 1207.0], [56.6, 1208.0], [56.7, 1210.0], [56.8, 1212.0], [56.9, 1214.0], [57.0, 1215.0], [57.1, 1217.0], [57.2, 1218.0], [57.3, 1220.0], [57.4, 1221.0], [57.5, 1224.0], [57.6, 1225.0], [57.7, 1229.0], [57.8, 1230.0], [57.9, 1232.0], [58.0, 1234.0], [58.1, 1237.0], [58.2, 1238.0], [58.3, 1240.0], [58.4, 1241.0], [58.5, 1243.0], [58.6, 1244.0], [58.7, 1246.0], [58.8, 1249.0], [58.9, 1250.0], [59.0, 1253.0], [59.1, 1255.0], [59.2, 1257.0], [59.3, 1259.0], [59.4, 1260.0], [59.5, 1262.0], [59.6, 1264.0], [59.7, 1265.0], [59.8, 1266.0], [59.9, 1267.0], [60.0, 1268.0], [60.1, 1269.0], [60.2, 1272.0], [60.3, 1274.0], [60.4, 1276.0], [60.5, 1278.0], [60.6, 1278.0], [60.7, 1281.0], [60.8, 1283.0], [60.9, 1284.0], [61.0, 1285.0], [61.1, 1287.0], [61.2, 1289.0], [61.3, 1293.0], [61.4, 1295.0], [61.5, 1298.0], [61.6, 1299.0], [61.7, 1302.0], [61.8, 1305.0], [61.9, 1307.0], [62.0, 1309.0], [62.1, 1312.0], [62.2, 1313.0], [62.3, 1317.0], [62.4, 1319.0], [62.5, 1321.0], [62.6, 1324.0], [62.7, 1327.0], [62.8, 1329.0], [62.9, 1332.0], [63.0, 1335.0], [63.1, 1337.0], [63.2, 1338.0], [63.3, 1341.0], [63.4, 1344.0], [63.5, 1347.0], [63.6, 1349.0], [63.7, 1353.0], [63.8, 1356.0], [63.9, 1357.0], [64.0, 1360.0], [64.1, 1361.0], [64.2, 1364.0], [64.3, 1367.0], [64.4, 1368.0], [64.5, 1369.0], [64.6, 1372.0], [64.7, 1374.0], [64.8, 1375.0], [64.9, 1378.0], [65.0, 1380.0], [65.1, 1381.0], [65.2, 1384.0], [65.3, 1387.0], [65.4, 1389.0], [65.5, 1391.0], [65.6, 1393.0], [65.7, 1395.0], [65.8, 1397.0], [65.9, 1400.0], [66.0, 1402.0], [66.1, 1405.0], [66.2, 1410.0], [66.3, 1414.0], [66.4, 1417.0], [66.5, 1419.0], [66.6, 1422.0], [66.7, 1425.0], [66.8, 1428.0], [66.9, 1431.0], [67.0, 1432.0], [67.1, 1434.0], [67.2, 1437.0], [67.3, 1439.0], [67.4, 1441.0], [67.5, 1443.0], [67.6, 1447.0], [67.7, 1449.0], [67.8, 1453.0], [67.9, 1456.0], [68.0, 1458.0], [68.1, 1462.0], [68.2, 1465.0], [68.3, 1469.0], [68.4, 1471.0], [68.5, 1474.0], [68.6, 1477.0], [68.7, 1479.0], [68.8, 1482.0], [68.9, 1485.0], [69.0, 1487.0], [69.1, 1492.0], [69.2, 1494.0], [69.3, 1498.0], [69.4, 1501.0], [69.5, 1503.0], [69.6, 1509.0], [69.7, 1515.0], [69.8, 1517.0], [69.9, 1520.0], [70.0, 1523.0], [70.1, 1528.0], [70.2, 1534.0], [70.3, 1536.0], [70.4, 1540.0], [70.5, 1542.0], [70.6, 1545.0], [70.7, 1547.0], [70.8, 1550.0], [70.9, 1556.0], [71.0, 1558.0], [71.1, 1561.0], [71.2, 1565.0], [71.3, 1570.0], [71.4, 1572.0], [71.5, 1578.0], [71.6, 1580.0], [71.7, 1588.0], [71.8, 1591.0], [71.9, 1594.0], [72.0, 1597.0], [72.1, 1604.0], [72.2, 1609.0], [72.3, 1613.0], [72.4, 1616.0], [72.5, 1620.0], [72.6, 1623.0], [72.7, 1626.0], [72.8, 1628.0], [72.9, 1632.0], [73.0, 1635.0], [73.1, 1638.0], [73.2, 1641.0], [73.3, 1647.0], [73.4, 1648.0], [73.5, 1651.0], [73.6, 1654.0], [73.7, 1658.0], [73.8, 1666.0], [73.9, 1673.0], [74.0, 1676.0], [74.1, 1680.0], [74.2, 1686.0], [74.3, 1692.0], [74.4, 1694.0], [74.5, 1697.0], [74.6, 1700.0], [74.7, 1705.0], [74.8, 1708.0], [74.9, 1711.0], [75.0, 1714.0], [75.1, 1720.0], [75.2, 1723.0], [75.3, 1730.0], [75.4, 1734.0], [75.5, 1740.0], [75.6, 1748.0], [75.7, 1757.0], [75.8, 1760.0], [75.9, 1770.0], [76.0, 1776.0], [76.1, 1781.0], [76.2, 1784.0], [76.3, 1789.0], [76.4, 1794.0], [76.5, 1800.0], [76.6, 1804.0], [76.7, 1810.0], [76.8, 1814.0], [76.9, 1822.0], [77.0, 1828.0], [77.1, 1830.0], [77.2, 1838.0], [77.3, 1844.0], [77.4, 1849.0], [77.5, 1856.0], [77.6, 1861.0], [77.7, 1867.0], [77.8, 1869.0], [77.9, 1876.0], [78.0, 1882.0], [78.1, 1885.0], [78.2, 1890.0], [78.3, 1896.0], [78.4, 1901.0], [78.5, 1908.0], [78.6, 1914.0], [78.7, 1919.0], [78.8, 1926.0], [78.9, 1931.0], [79.0, 1938.0], [79.1, 1949.0], [79.2, 1952.0], [79.3, 1956.0], [79.4, 1963.0], [79.5, 1974.0], [79.6, 1976.0], [79.7, 1985.0], [79.8, 1991.0], [79.9, 1996.0], [80.0, 2000.0], [80.1, 2006.0], [80.2, 2011.0], [80.3, 2018.0], [80.4, 2025.0], [80.5, 2031.0], [80.6, 2044.0], [80.7, 2055.0], [80.8, 2061.0], [80.9, 2071.0], [81.0, 2082.0], [81.1, 2095.0], [81.2, 2104.0], [81.3, 2109.0], [81.4, 2114.0], [81.5, 2129.0], [81.6, 2136.0], [81.7, 2143.0], [81.8, 2148.0], [81.9, 2159.0], [82.0, 2163.0], [82.1, 2173.0], [82.2, 2184.0], [82.3, 2198.0], [82.4, 2210.0], [82.5, 2224.0], [82.6, 2232.0], [82.7, 2238.0], [82.8, 2245.0], [82.9, 2255.0], [83.0, 2261.0], [83.1, 2270.0], [83.2, 2283.0], [83.3, 2299.0], [83.4, 2308.0], [83.5, 2319.0], [83.6, 2329.0], [83.7, 2340.0], [83.8, 2350.0], [83.9, 2360.0], [84.0, 2369.0], [84.1, 2378.0], [84.2, 2390.0], [84.3, 2397.0], [84.4, 2401.0], [84.5, 2407.0], [84.6, 2412.0], [84.7, 2424.0], [84.8, 2436.0], [84.9, 2447.0], [85.0, 2458.0], [85.1, 2466.0], [85.2, 2472.0], [85.3, 2480.0], [85.4, 2496.0], [85.5, 2512.0], [85.6, 2518.0], [85.7, 2526.0], [85.8, 2538.0], [85.9, 2549.0], [86.0, 2555.0], [86.1, 2567.0], [86.2, 2575.0], [86.3, 2584.0], [86.4, 2592.0], [86.5, 2603.0], [86.6, 2615.0], [86.7, 2620.0], [86.8, 2627.0], [86.9, 2642.0], [87.0, 2649.0], [87.1, 2657.0], [87.2, 2666.0], [87.3, 2685.0], [87.4, 2689.0], [87.5, 2698.0], [87.6, 2710.0], [87.7, 2719.0], [87.8, 2728.0], [87.9, 2739.0], [88.0, 2748.0], [88.1, 2754.0], [88.2, 2763.0], [88.3, 2772.0], [88.4, 2778.0], [88.5, 2787.0], [88.6, 2798.0], [88.7, 2804.0], [88.8, 2813.0], [88.9, 2820.0], [89.0, 2827.0], [89.1, 2835.0], [89.2, 2842.0], [89.3, 2851.0], [89.4, 2861.0], [89.5, 2872.0], [89.6, 2879.0], [89.7, 2887.0], [89.8, 2892.0], [89.9, 2904.0], [90.0, 2908.0], [90.1, 2919.0], [90.2, 2927.0], [90.3, 2936.0], [90.4, 2945.0], [90.5, 2960.0], [90.6, 2963.0], [90.7, 2970.0], [90.8, 2974.0], [90.9, 2983.0], [91.0, 2991.0], [91.1, 3000.0], [91.2, 3006.0], [91.3, 3016.0], [91.4, 3024.0], [91.5, 3035.0], [91.6, 3046.0], [91.7, 3053.0], [91.8, 3060.0], [91.9, 3070.0], [92.0, 3082.0], [92.1, 3095.0], [92.2, 3097.0], [92.3, 3102.0], [92.4, 3108.0], [92.5, 3119.0], [92.6, 3134.0], [92.7, 3149.0], [92.8, 3160.0], [92.9, 3172.0], [93.0, 3183.0], [93.1, 3193.0], [93.2, 3198.0], [93.3, 3208.0], [93.4, 3222.0], [93.5, 3232.0], [93.6, 3240.0], [93.7, 3259.0], [93.8, 3266.0], [93.9, 3274.0], [94.0, 3300.0], [94.1, 3314.0], [94.2, 3324.0], [94.3, 3341.0], [94.4, 3348.0], [94.5, 3354.0], [94.6, 3363.0], [94.7, 3374.0], [94.8, 3385.0], [94.9, 3392.0], [95.0, 3401.0], [95.1, 3412.0], [95.2, 3423.0], [95.3, 3438.0], [95.4, 3455.0], [95.5, 3470.0], [95.6, 3492.0], [95.7, 3507.0], [95.8, 3521.0], [95.9, 3537.0], [96.0, 3551.0], [96.1, 3572.0], [96.2, 3606.0], [96.3, 3626.0], [96.4, 3642.0], [96.5, 3661.0], [96.6, 3674.0], [96.7, 3695.0], [96.8, 3719.0], [96.9, 3742.0], [97.0, 3771.0], [97.1, 3787.0], [97.2, 3845.0], [97.3, 3876.0], [97.4, 3909.0], [97.5, 3939.0], [97.6, 3971.0], [97.7, 4009.0], [97.8, 4056.0], [97.9, 4152.0], [98.0, 4201.0], [98.1, 4271.0], [98.2, 4318.0], [98.3, 4431.0], [98.4, 4580.0], [98.5, 4775.0], [98.6, 5285.0], [98.7, 5682.0], [98.8, 5922.0], [98.9, 6660.0], [99.0, 7188.0], [99.1, 7850.0], [99.2, 8727.0], [99.3, 15134.0], [99.4, 60215.0], [99.5, 60227.0], [99.6, 60235.0], [99.7, 60247.0], [99.8, 60264.0], [99.9, 61021.0], [100.0, 64045.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 776.0, "series": [{"data": [[600.0, 230.0], [700.0, 275.0], [800.0, 396.0], [900.0, 399.0], [1000.0, 454.0], [1100.0, 403.0], [1200.0, 419.0], [1300.0, 321.0], [1400.0, 257.0], [1500.0, 203.0], [1600.0, 193.0], [1700.0, 143.0], [1800.0, 140.0], [1900.0, 122.0], [2000.0, 88.0], [2100.0, 87.0], [2300.0, 78.0], [2200.0, 74.0], [2400.0, 80.0], [2500.0, 78.0], [2600.0, 79.0], [2700.0, 84.0], [2800.0, 92.0], [2900.0, 93.0], [3000.0, 87.0], [3100.0, 72.0], [3200.0, 58.0], [3300.0, 74.0], [3400.0, 50.0], [3500.0, 41.0], [3700.0, 31.0], [3600.0, 40.0], [3800.0, 17.0], [3900.0, 22.0], [4000.0, 15.0], [4300.0, 10.0], [4100.0, 10.0], [4200.0, 11.0], [4600.0, 1.0], [4500.0, 6.0], [4400.0, 7.0], [4800.0, 3.0], [4700.0, 5.0], [4900.0, 1.0], [5000.0, 1.0], [5300.0, 3.0], [5200.0, 1.0], [5400.0, 2.0], [5600.0, 3.0], [5800.0, 5.0], [5700.0, 1.0], [6000.0, 2.0], [5900.0, 1.0], [6600.0, 3.0], [6400.0, 2.0], [6500.0, 2.0], [6700.0, 3.0], [6900.0, 1.0], [7000.0, 1.0], [7100.0, 1.0], [7300.0, 2.0], [7400.0, 3.0], [7500.0, 1.0], [7900.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 2.0], [8600.0, 1.0], [8300.0, 1.0], [8200.0, 1.0], [8700.0, 1.0], [8900.0, 2.0], [9100.0, 1.0], [10800.0, 1.0], [11600.0, 1.0], [12100.0, 1.0], [14800.0, 1.0], [15100.0, 1.0], [19100.0, 1.0], [23000.0, 1.0], [200.0, 776.0], [59900.0, 1.0], [60200.0, 34.0], [60900.0, 6.0], [61100.0, 1.0], [61000.0, 6.0], [62800.0, 1.0], [64000.0, 1.0], [300.0, 682.0], [400.0, 344.0], [500.0, 242.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 46.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6119.0, "series": [{"data": [[0.0, 46.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 424.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 911.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6119.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.49782293178521, "minX": 1.6581255E12, "maxY": 25.0, "series": [{"data": [[1.6581255E12, 20.052123552123557], [1.65812586E12, 25.0], [1.6581258E12, 25.0], [1.65812604E12, 18.49782293178521], [1.65812562E12, 25.0], [1.65812592E12, 25.0], [1.65812574E12, 25.0], [1.65812556E12, 25.0], [1.65812598E12, 24.945498783454994], [1.65812568E12, 25.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812604E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 368.0, "minX": 1.0, "maxY": 1916.9760385872073, "series": [{"data": [[2.0, 407.2105263157895], [3.0, 610.375], [4.0, 526.0833333333333], [5.0, 653.4166666666666], [6.0, 766.3333333333333], [7.0, 782.6363636363636], [8.0, 723.6], [9.0, 617.0], [10.0, 578.5454545454547], [11.0, 495.8478260869567], [12.0, 809.3333333333333], [13.0, 952.4444444444445], [14.0, 561.2244897959184], [15.0, 570.7222222222224], [16.0, 740.6346153846152], [1.0, 368.0], [17.0, 1039.3333333333333], [18.0, 926.1935483870966], [19.0, 1085.8000000000002], [20.0, 1221.7058823529414], [21.0, 561.7348484848486], [22.0, 727.8478260869566], [23.0, 532.9369369369367], [24.0, 499.92569659442756], [25.0, 1916.9760385872073]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[24.046000000000006, 1729.7564000000023]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 283.81666666666666, "minX": 1.6581255E12, "maxY": 17536.0, "series": [{"data": [[1.6581255E12, 13796.733333333334], [1.65812586E12, 283.81666666666666], [1.6581258E12, 6009.816666666667], [1.65812604E12, 5442.416666666667], [1.65812562E12, 7179.933333333333], [1.65812592E12, 1915.85], [1.65812574E12, 7866.9], [1.65812556E12, 10471.4], [1.65812598E12, 15468.75], [1.65812568E12, 7729.466666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6581255E12, 4420.266666666666], [1.65812586E12, 469.3333333333333], [1.6581258E12, 4846.933333333333], [1.65812604E12, 5879.466666666666], [1.65812562E12, 6971.733333333334], [1.65812592E12, 1920.0], [1.65812574E12, 7500.8], [1.65812556E12, 7389.866666666667], [1.65812598E12, 17536.0], [1.65812568E12, 7065.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812604E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 386.2017416545724, "minX": 1.6581255E12, "maxY": 27898.5090909091, "series": [{"data": [[1.6581255E12, 1350.1756756756754], [1.65812586E12, 27898.5090909091], [1.6581258E12, 1773.1654929577467], [1.65812604E12, 386.2017416545724], [1.65812562E12, 1844.778457772338], [1.65812592E12, 8469.515555555547], [1.65812574E12, 1699.74630261661], [1.65812556E12, 1713.8475750577365], [1.65812598E12, 766.0875912408752], [1.65812568E12, 1812.4504830917883]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812604E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 386.18432510885356, "minX": 1.6581255E12, "maxY": 27898.472727272732, "series": [{"data": [[1.6581255E12, 1350.0694980694968], [1.65812586E12, 27898.472727272732], [1.6581258E12, 1773.1496478873241], [1.65812604E12, 386.18432510885356], [1.65812562E12, 1844.7649938800475], [1.65812592E12, 8469.49777777778], [1.65812574E12, 1699.733788395903], [1.65812556E12, 1713.8140877598141], [1.65812598E12, 766.0705596107064], [1.65812568E12, 1812.4359903381635]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812604E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6581255E12, "maxY": 317.6727272727273, "series": [{"data": [[1.6581255E12, 39.60038610038614], [1.65812586E12, 317.6727272727273], [1.6581258E12, 17.334507042253527], [1.65812604E12, 0.0], [1.65812562E12, 23.170134638922928], [1.65812592E12, 157.15555555555542], [1.65812574E12, 21.4118316268487], [1.65812556E12, 22.407621247113166], [1.65812598E12, 8.988321167883218], [1.65812568E12, 23.31159420289854]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812604E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 408.0, "minX": 1.6581255E12, "maxY": 23063.0, "series": [{"data": [[1.6581255E12, 2914.0], [1.6581258E12, 5881.0], [1.65812604E12, 1195.0], [1.65812562E12, 4691.0], [1.65812592E12, 1423.0], [1.65812574E12, 4868.0], [1.65812556E12, 4309.0], [1.65812598E12, 23063.0], [1.65812568E12, 8959.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6581255E12, 1980.4999999999998], [1.6581258E12, 3912.8], [1.65812604E12, 737.4000000000001], [1.65812562E12, 4183.2], [1.65812592E12, 1276.4], [1.65812574E12, 3731.0], [1.65812556E12, 3506.4], [1.65812598E12, 3948.999999999996], [1.65812568E12, 5943.100000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6581255E12, 2507.38], [1.6581258E12, 5878.66], [1.65812604E12, 1195.0], [1.65812562E12, 4679.0], [1.65812592E12, 1423.0], [1.65812574E12, 4745.799999999997], [1.65812556E12, 4232.5], [1.65812598E12, 20933.78000000003], [1.65812568E12, 8683.409999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6581255E12, 2160.45], [1.6581258E12, 4481.499999999999], [1.65812604E12, 898.2], [1.65812562E12, 4384.599999999999], [1.65812592E12, 1383.6999999999998], [1.65812574E12, 3962.2999999999997], [1.65812556E12, 3705.7], [1.65812598E12, 5902.4], [1.65812568E12, 7370.149999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6581255E12, 518.0], [1.6581258E12, 574.0], [1.65812604E12, 408.0], [1.65812562E12, 2519.0], [1.65812592E12, 426.0], [1.65812574E12, 2300.0], [1.65812556E12, 797.0], [1.65812598E12, 457.0], [1.65812568E12, 1479.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6581255E12, 1337.0], [1.6581258E12, 3055.0], [1.65812604E12, 495.0], [1.65812562E12, 3543.0], [1.65812592E12, 677.0], [1.65812574E12, 3122.0], [1.65812556E12, 2363.5], [1.65812598E12, 1202.0], [1.65812568E12, 3403.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812604E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 6561.0, "series": [{"data": [[2.0, 2089.5], [3.0, 722.0], [4.0, 801.0], [5.0, 991.0], [6.0, 1502.0], [7.0, 2000.0], [8.0, 2712.5], [9.0, 2783.5], [10.0, 1379.0], [11.0, 2905.0], [12.0, 3097.0], [13.0, 2949.0], [14.0, 2519.0], [15.0, 2894.5], [16.0, 3089.0], [17.0, 1975.0], [18.0, 2086.0], [19.0, 2561.0], [20.0, 1822.0], [21.0, 2079.0], [22.0, 1428.0], [23.0, 2849.0], [24.0, 1361.0], [25.0, 2118.0], [26.0, 598.0], [27.0, 2331.0], [28.0, 3198.0], [29.0, 1874.5], [31.0, 600.0], [32.0, 1086.0], [33.0, 914.0], [34.0, 2644.5], [35.0, 2017.0], [36.0, 1663.5], [37.0, 544.0], [39.0, 2202.0], [38.0, 1229.0], [40.0, 898.0], [41.0, 563.0], [42.0, 2930.0], [45.0, 695.0], [48.0, 1182.5], [51.0, 453.5], [55.0, 614.0], [59.0, 792.0], [58.0, 562.0], [60.0, 694.0], [61.0, 478.0], [62.0, 585.5], [65.0, 539.0], [79.0, 477.5], [1.0, 2507.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 725.5], [3.0, 4126.0], [4.0, 4087.0], [5.0, 669.0], [6.0, 6561.0], [7.0, 1328.5], [8.0, 1205.0], [9.0, 1580.0], [10.0, 1447.0], [11.0, 1367.5], [12.0, 1330.5], [13.0, 1243.5], [14.0, 1317.5], [15.0, 1285.0], [16.0, 1213.0], [17.0, 1185.0], [18.0, 1327.0], [19.0, 1143.0], [20.0, 1088.5], [21.0, 967.0], [22.0, 807.0], [23.0, 780.0], [24.0, 770.0], [25.0, 986.0], [26.0, 412.0], [27.0, 772.0], [28.0, 1192.0], [29.0, 668.5], [31.0, 373.0], [33.0, 527.5], [32.0, 518.0], [34.0, 591.0], [35.0, 595.0], [36.0, 495.0], [37.0, 381.0], [39.0, 536.0], [38.0, 354.0], [40.0, 517.0], [41.0, 493.0], [42.0, 664.5], [45.0, 360.5], [48.0, 522.0], [51.0, 293.0], [55.0, 339.5], [59.0, 321.0], [58.0, 360.5], [60.0, 372.0], [61.0, 302.5], [62.0, 327.0], [65.0, 317.5], [70.0, 336.0], [72.0, 312.0], [79.0, 295.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 79.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 6561.0, "series": [{"data": [[2.0, 2078.0], [3.0, 722.0], [4.0, 801.0], [5.0, 990.5], [6.0, 1502.0], [7.0, 2000.0], [8.0, 2712.5], [9.0, 2783.5], [10.0, 1379.0], [11.0, 2905.0], [12.0, 3097.0], [13.0, 2949.0], [14.0, 2519.0], [15.0, 2894.5], [16.0, 3089.0], [17.0, 1975.0], [18.0, 2086.0], [19.0, 2561.0], [20.0, 1822.0], [21.0, 2079.0], [22.0, 1428.0], [23.0, 2849.0], [24.0, 1361.0], [25.0, 2118.0], [26.0, 598.0], [27.0, 2331.0], [28.0, 3198.0], [29.0, 1874.5], [31.0, 600.0], [32.0, 1086.0], [33.0, 914.0], [34.0, 2644.5], [35.0, 2017.0], [36.0, 1663.5], [37.0, 544.0], [39.0, 2202.0], [38.0, 1229.0], [40.0, 898.0], [41.0, 563.0], [42.0, 2929.5], [45.0, 695.0], [48.0, 1182.5], [51.0, 453.5], [55.0, 614.0], [59.0, 792.0], [58.0, 562.0], [60.0, 694.0], [61.0, 478.0], [62.0, 585.5], [65.0, 539.0], [79.0, 477.5], [1.0, 2507.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 725.5], [3.0, 4126.0], [4.0, 4087.0], [5.0, 669.0], [6.0, 6561.0], [7.0, 1328.5], [8.0, 1205.0], [9.0, 1580.0], [10.0, 1447.0], [11.0, 1367.5], [12.0, 1330.5], [13.0, 1243.5], [14.0, 1317.5], [15.0, 1285.0], [16.0, 1213.0], [17.0, 1185.0], [18.0, 1327.0], [19.0, 1143.0], [20.0, 1088.5], [21.0, 967.0], [22.0, 806.0], [23.0, 780.0], [24.0, 770.0], [25.0, 985.0], [26.0, 412.0], [27.0, 772.0], [28.0, 1192.0], [29.0, 668.5], [31.0, 373.0], [33.0, 527.5], [32.0, 518.0], [34.0, 591.0], [35.0, 595.0], [36.0, 495.0], [37.0, 381.0], [39.0, 536.0], [38.0, 354.0], [40.0, 517.0], [41.0, 493.0], [42.0, 664.5], [45.0, 360.5], [48.0, 522.0], [51.0, 293.0], [55.0, 339.5], [59.0, 321.0], [58.0, 360.5], [60.0, 372.0], [61.0, 302.5], [62.0, 327.0], [65.0, 317.5], [70.0, 336.0], [72.0, 312.0], [79.0, 295.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 79.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.6581255E12, "maxY": 34.233333333333334, "series": [{"data": [[1.6581255E12, 9.05], [1.65812586E12, 0.9166666666666666], [1.6581258E12, 9.466666666666667], [1.65812604E12, 11.083333333333334], [1.65812562E12, 13.616666666666667], [1.65812592E12, 3.75], [1.65812574E12, 14.65], [1.65812556E12, 14.433333333333334], [1.65812598E12, 34.233333333333334], [1.65812568E12, 13.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812604E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.6581255E12, "maxY": 22.9, "series": [{"data": [[1.6581255E12, 7.2], [1.6581258E12, 1.95], [1.65812604E12, 0.9666666666666667], [1.65812562E12, 1.85], [1.65812592E12, 0.4166666666666667], [1.65812574E12, 2.0833333333333335], [1.65812556E12, 3.8333333333333335], [1.65812598E12, 2.55], [1.65812568E12, 2.1666666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6581255E12, 0.6833333333333333], [1.6581258E12, 1.5166666666666666], [1.65812604E12, 2.216666666666667], [1.65812562E12, 2.3], [1.65812592E12, 0.31666666666666665], [1.65812574E12, 2.4833333333333334], [1.65812556E12, 2.7], [1.65812598E12, 4.666666666666667], [1.65812568E12, 2.05]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.6581255E12, 0.75], [1.65812586E12, 0.5], [1.6581258E12, 6.0], [1.65812604E12, 8.3], [1.65812562E12, 9.466666666666667], [1.65812592E12, 2.6], [1.65812574E12, 10.083333333333334], [1.65812556E12, 7.9], [1.65812598E12, 22.9], [1.65812568E12, 9.583333333333334]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.65812586E12, 0.4166666666666667], [1.65812592E12, 0.4166666666666667]], "isOverall": false, "label": "504", "isController": false}, {"data": [[1.65812598E12, 4.133333333333334]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812604E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6581255E12, "maxY": 31.7, "series": [{"data": [[1.6581255E12, 7.2], [1.6581258E12, 1.95], [1.65812604E12, 0.9666666666666667], [1.65812562E12, 1.85], [1.65812592E12, 0.4166666666666667], [1.65812574E12, 2.0833333333333335], [1.65812556E12, 3.8333333333333335], [1.65812598E12, 2.55], [1.65812568E12, 2.1666666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6581255E12, 1.4333333333333333], [1.65812586E12, 0.9166666666666666], [1.6581258E12, 7.516666666666667], [1.65812604E12, 10.516666666666667], [1.65812562E12, 11.766666666666667], [1.65812592E12, 3.3333333333333335], [1.65812574E12, 12.566666666666666], [1.65812556E12, 10.6], [1.65812598E12, 31.7], [1.65812568E12, 11.633333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812604E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.6581255E12, "maxY": 31.7, "series": [{"data": [[1.6581255E12, 7.2], [1.6581258E12, 1.95], [1.65812604E12, 0.9666666666666667], [1.65812562E12, 1.85], [1.65812592E12, 0.4166666666666667], [1.65812574E12, 2.0833333333333335], [1.65812556E12, 3.8333333333333335], [1.65812598E12, 2.55], [1.65812568E12, 2.1666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6581255E12, 1.4333333333333333], [1.65812586E12, 0.9166666666666666], [1.6581258E12, 7.516666666666667], [1.65812604E12, 10.516666666666667], [1.65812562E12, 11.766666666666667], [1.65812592E12, 3.3333333333333335], [1.65812574E12, 12.566666666666666], [1.65812556E12, 10.6], [1.65812598E12, 31.7], [1.65812568E12, 11.633333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812604E12, "title": "Total Transactions Per Second"}},
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

