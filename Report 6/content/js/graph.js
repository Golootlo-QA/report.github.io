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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 7893.0, "series": [{"data": [[0.0, 173.0], [0.1, 268.0], [0.2, 420.0], [0.3, 428.0], [0.4, 436.0], [0.5, 438.0], [0.6, 443.0], [0.7, 446.0], [0.8, 448.0], [0.9, 449.0], [1.0, 453.0], [1.1, 454.0], [1.2, 456.0], [1.3, 457.0], [1.4, 459.0], [1.5, 461.0], [1.6, 463.0], [1.7, 464.0], [1.8, 465.0], [1.9, 467.0], [2.0, 468.0], [2.1, 469.0], [2.2, 471.0], [2.3, 473.0], [2.4, 475.0], [2.5, 477.0], [2.6, 478.0], [2.7, 479.0], [2.8, 480.0], [2.9, 481.0], [3.0, 482.0], [3.1, 483.0], [3.2, 484.0], [3.3, 485.0], [3.4, 487.0], [3.5, 488.0], [3.6, 489.0], [3.7, 491.0], [3.8, 492.0], [3.9, 492.0], [4.0, 493.0], [4.1, 494.0], [4.2, 495.0], [4.3, 496.0], [4.4, 498.0], [4.5, 499.0], [4.6, 501.0], [4.7, 501.0], [4.8, 502.0], [4.9, 502.0], [5.0, 503.0], [5.1, 504.0], [5.2, 504.0], [5.3, 505.0], [5.4, 506.0], [5.5, 507.0], [5.6, 508.0], [5.7, 509.0], [5.8, 510.0], [5.9, 511.0], [6.0, 512.0], [6.1, 513.0], [6.2, 515.0], [6.3, 516.0], [6.4, 516.0], [6.5, 517.0], [6.6, 518.0], [6.7, 519.0], [6.8, 520.0], [6.9, 520.0], [7.0, 522.0], [7.1, 522.0], [7.2, 523.0], [7.3, 525.0], [7.4, 526.0], [7.5, 526.0], [7.6, 527.0], [7.7, 528.0], [7.8, 529.0], [7.9, 530.0], [8.0, 531.0], [8.1, 532.0], [8.2, 534.0], [8.3, 535.0], [8.4, 536.0], [8.5, 537.0], [8.6, 538.0], [8.7, 540.0], [8.8, 540.0], [8.9, 541.0], [9.0, 541.0], [9.1, 542.0], [9.2, 543.0], [9.3, 544.0], [9.4, 545.0], [9.5, 546.0], [9.6, 546.0], [9.7, 547.0], [9.8, 548.0], [9.9, 549.0], [10.0, 550.0], [10.1, 551.0], [10.2, 551.0], [10.3, 552.0], [10.4, 553.0], [10.5, 554.0], [10.6, 556.0], [10.7, 557.0], [10.8, 557.0], [10.9, 558.0], [11.0, 559.0], [11.1, 560.0], [11.2, 561.0], [11.3, 562.0], [11.4, 562.0], [11.5, 563.0], [11.6, 564.0], [11.7, 565.0], [11.8, 565.0], [11.9, 566.0], [12.0, 566.0], [12.1, 567.0], [12.2, 567.0], [12.3, 568.0], [12.4, 569.0], [12.5, 569.0], [12.6, 570.0], [12.7, 572.0], [12.8, 573.0], [12.9, 574.0], [13.0, 575.0], [13.1, 576.0], [13.2, 576.0], [13.3, 577.0], [13.4, 578.0], [13.5, 579.0], [13.6, 580.0], [13.7, 581.0], [13.8, 581.0], [13.9, 582.0], [14.0, 583.0], [14.1, 583.0], [14.2, 585.0], [14.3, 585.0], [14.4, 586.0], [14.5, 587.0], [14.6, 587.0], [14.7, 588.0], [14.8, 589.0], [14.9, 590.0], [15.0, 591.0], [15.1, 593.0], [15.2, 593.0], [15.3, 594.0], [15.4, 596.0], [15.5, 597.0], [15.6, 598.0], [15.7, 600.0], [15.8, 601.0], [15.9, 601.0], [16.0, 602.0], [16.1, 603.0], [16.2, 604.0], [16.3, 605.0], [16.4, 606.0], [16.5, 607.0], [16.6, 609.0], [16.7, 609.0], [16.8, 610.0], [16.9, 611.0], [17.0, 612.0], [17.1, 612.0], [17.2, 612.0], [17.3, 614.0], [17.4, 615.0], [17.5, 615.0], [17.6, 616.0], [17.7, 616.0], [17.8, 617.0], [17.9, 618.0], [18.0, 619.0], [18.1, 620.0], [18.2, 620.0], [18.3, 621.0], [18.4, 622.0], [18.5, 624.0], [18.6, 626.0], [18.7, 627.0], [18.8, 627.0], [18.9, 628.0], [19.0, 629.0], [19.1, 630.0], [19.2, 631.0], [19.3, 632.0], [19.4, 633.0], [19.5, 634.0], [19.6, 635.0], [19.7, 636.0], [19.8, 638.0], [19.9, 639.0], [20.0, 642.0], [20.1, 643.0], [20.2, 644.0], [20.3, 645.0], [20.4, 646.0], [20.5, 647.0], [20.6, 648.0], [20.7, 650.0], [20.8, 652.0], [20.9, 653.0], [21.0, 654.0], [21.1, 656.0], [21.2, 657.0], [21.3, 658.0], [21.4, 659.0], [21.5, 661.0], [21.6, 662.0], [21.7, 664.0], [21.8, 664.0], [21.9, 665.0], [22.0, 666.0], [22.1, 667.0], [22.2, 668.0], [22.3, 671.0], [22.4, 672.0], [22.5, 672.0], [22.6, 673.0], [22.7, 675.0], [22.8, 676.0], [22.9, 679.0], [23.0, 680.0], [23.1, 681.0], [23.2, 682.0], [23.3, 683.0], [23.4, 684.0], [23.5, 685.0], [23.6, 686.0], [23.7, 688.0], [23.8, 689.0], [23.9, 691.0], [24.0, 691.0], [24.1, 692.0], [24.2, 694.0], [24.3, 696.0], [24.4, 698.0], [24.5, 700.0], [24.6, 701.0], [24.7, 702.0], [24.8, 703.0], [24.9, 703.0], [25.0, 704.0], [25.1, 705.0], [25.2, 706.0], [25.3, 707.0], [25.4, 709.0], [25.5, 711.0], [25.6, 712.0], [25.7, 714.0], [25.8, 715.0], [25.9, 716.0], [26.0, 717.0], [26.1, 719.0], [26.2, 720.0], [26.3, 721.0], [26.4, 722.0], [26.5, 724.0], [26.6, 726.0], [26.7, 728.0], [26.8, 729.0], [26.9, 730.0], [27.0, 733.0], [27.1, 734.0], [27.2, 735.0], [27.3, 738.0], [27.4, 739.0], [27.5, 743.0], [27.6, 744.0], [27.7, 746.0], [27.8, 747.0], [27.9, 748.0], [28.0, 750.0], [28.1, 751.0], [28.2, 752.0], [28.3, 754.0], [28.4, 756.0], [28.5, 758.0], [28.6, 760.0], [28.7, 763.0], [28.8, 765.0], [28.9, 767.0], [29.0, 768.0], [29.1, 770.0], [29.2, 772.0], [29.3, 773.0], [29.4, 777.0], [29.5, 778.0], [29.6, 782.0], [29.7, 783.0], [29.8, 786.0], [29.9, 787.0], [30.0, 790.0], [30.1, 792.0], [30.2, 794.0], [30.3, 797.0], [30.4, 800.0], [30.5, 802.0], [30.6, 805.0], [30.7, 808.0], [30.8, 809.0], [30.9, 810.0], [31.0, 814.0], [31.1, 817.0], [31.2, 819.0], [31.3, 821.0], [31.4, 823.0], [31.5, 824.0], [31.6, 826.0], [31.7, 827.0], [31.8, 829.0], [31.9, 832.0], [32.0, 837.0], [32.1, 839.0], [32.2, 841.0], [32.3, 845.0], [32.4, 847.0], [32.5, 849.0], [32.6, 852.0], [32.7, 854.0], [32.8, 855.0], [32.9, 857.0], [33.0, 858.0], [33.1, 860.0], [33.2, 864.0], [33.3, 868.0], [33.4, 869.0], [33.5, 872.0], [33.6, 874.0], [33.7, 877.0], [33.8, 879.0], [33.9, 880.0], [34.0, 885.0], [34.1, 889.0], [34.2, 892.0], [34.3, 896.0], [34.4, 899.0], [34.5, 901.0], [34.6, 903.0], [34.7, 907.0], [34.8, 910.0], [34.9, 913.0], [35.0, 915.0], [35.1, 922.0], [35.2, 925.0], [35.3, 927.0], [35.4, 929.0], [35.5, 931.0], [35.6, 933.0], [35.7, 934.0], [35.8, 938.0], [35.9, 943.0], [36.0, 944.0], [36.1, 946.0], [36.2, 953.0], [36.3, 956.0], [36.4, 961.0], [36.5, 966.0], [36.6, 974.0], [36.7, 975.0], [36.8, 981.0], [36.9, 989.0], [37.0, 992.0], [37.1, 997.0], [37.2, 1002.0], [37.3, 1006.0], [37.4, 1011.0], [37.5, 1018.0], [37.6, 1020.0], [37.7, 1022.0], [37.8, 1025.0], [37.9, 1027.0], [38.0, 1032.0], [38.1, 1037.0], [38.2, 1042.0], [38.3, 1044.0], [38.4, 1047.0], [38.5, 1049.0], [38.6, 1052.0], [38.7, 1055.0], [38.8, 1058.0], [38.9, 1063.0], [39.0, 1064.0], [39.1, 1067.0], [39.2, 1075.0], [39.3, 1078.0], [39.4, 1082.0], [39.5, 1087.0], [39.6, 1095.0], [39.7, 1098.0], [39.8, 1101.0], [39.9, 1104.0], [40.0, 1109.0], [40.1, 1116.0], [40.2, 1119.0], [40.3, 1124.0], [40.4, 1130.0], [40.5, 1135.0], [40.6, 1138.0], [40.7, 1142.0], [40.8, 1147.0], [40.9, 1150.0], [41.0, 1152.0], [41.1, 1161.0], [41.2, 1164.0], [41.3, 1169.0], [41.4, 1172.0], [41.5, 1176.0], [41.6, 1179.0], [41.7, 1181.0], [41.8, 1183.0], [41.9, 1190.0], [42.0, 1192.0], [42.1, 1194.0], [42.2, 1198.0], [42.3, 1199.0], [42.4, 1203.0], [42.5, 1206.0], [42.6, 1210.0], [42.7, 1211.0], [42.8, 1217.0], [42.9, 1221.0], [43.0, 1225.0], [43.1, 1228.0], [43.2, 1231.0], [43.3, 1235.0], [43.4, 1238.0], [43.5, 1243.0], [43.6, 1245.0], [43.7, 1251.0], [43.8, 1255.0], [43.9, 1256.0], [44.0, 1260.0], [44.1, 1266.0], [44.2, 1270.0], [44.3, 1273.0], [44.4, 1276.0], [44.5, 1282.0], [44.6, 1285.0], [44.7, 1288.0], [44.8, 1294.0], [44.9, 1299.0], [45.0, 1303.0], [45.1, 1304.0], [45.2, 1310.0], [45.3, 1314.0], [45.4, 1319.0], [45.5, 1324.0], [45.6, 1326.0], [45.7, 1332.0], [45.8, 1335.0], [45.9, 1340.0], [46.0, 1343.0], [46.1, 1347.0], [46.2, 1352.0], [46.3, 1359.0], [46.4, 1361.0], [46.5, 1364.0], [46.6, 1366.0], [46.7, 1370.0], [46.8, 1372.0], [46.9, 1377.0], [47.0, 1379.0], [47.1, 1382.0], [47.2, 1386.0], [47.3, 1389.0], [47.4, 1392.0], [47.5, 1397.0], [47.6, 1399.0], [47.7, 1403.0], [47.8, 1406.0], [47.9, 1410.0], [48.0, 1412.0], [48.1, 1415.0], [48.2, 1419.0], [48.3, 1423.0], [48.4, 1427.0], [48.5, 1429.0], [48.6, 1435.0], [48.7, 1436.0], [48.8, 1439.0], [48.9, 1441.0], [49.0, 1446.0], [49.1, 1450.0], [49.2, 1452.0], [49.3, 1454.0], [49.4, 1458.0], [49.5, 1463.0], [49.6, 1468.0], [49.7, 1470.0], [49.8, 1473.0], [49.9, 1474.0], [50.0, 1478.0], [50.1, 1479.0], [50.2, 1484.0], [50.3, 1488.0], [50.4, 1493.0], [50.5, 1499.0], [50.6, 1501.0], [50.7, 1503.0], [50.8, 1504.0], [50.9, 1509.0], [51.0, 1512.0], [51.1, 1516.0], [51.2, 1521.0], [51.3, 1527.0], [51.4, 1534.0], [51.5, 1539.0], [51.6, 1542.0], [51.7, 1546.0], [51.8, 1548.0], [51.9, 1549.0], [52.0, 1551.0], [52.1, 1554.0], [52.2, 1558.0], [52.3, 1561.0], [52.4, 1568.0], [52.5, 1574.0], [52.6, 1580.0], [52.7, 1585.0], [52.8, 1588.0], [52.9, 1591.0], [53.0, 1594.0], [53.1, 1600.0], [53.2, 1602.0], [53.3, 1605.0], [53.4, 1608.0], [53.5, 1612.0], [53.6, 1623.0], [53.7, 1627.0], [53.8, 1635.0], [53.9, 1637.0], [54.0, 1644.0], [54.1, 1648.0], [54.2, 1650.0], [54.3, 1654.0], [54.4, 1656.0], [54.5, 1661.0], [54.6, 1664.0], [54.7, 1671.0], [54.8, 1673.0], [54.9, 1677.0], [55.0, 1679.0], [55.1, 1690.0], [55.2, 1692.0], [55.3, 1700.0], [55.4, 1707.0], [55.5, 1715.0], [55.6, 1719.0], [55.7, 1723.0], [55.8, 1733.0], [55.9, 1739.0], [56.0, 1742.0], [56.1, 1747.0], [56.2, 1751.0], [56.3, 1757.0], [56.4, 1761.0], [56.5, 1766.0], [56.6, 1769.0], [56.7, 1773.0], [56.8, 1780.0], [56.9, 1784.0], [57.0, 1786.0], [57.1, 1793.0], [57.2, 1797.0], [57.3, 1799.0], [57.4, 1803.0], [57.5, 1807.0], [57.6, 1812.0], [57.7, 1817.0], [57.8, 1821.0], [57.9, 1826.0], [58.0, 1831.0], [58.1, 1835.0], [58.2, 1839.0], [58.3, 1845.0], [58.4, 1851.0], [58.5, 1858.0], [58.6, 1864.0], [58.7, 1867.0], [58.8, 1872.0], [58.9, 1875.0], [59.0, 1881.0], [59.1, 1886.0], [59.2, 1892.0], [59.3, 1896.0], [59.4, 1906.0], [59.5, 1908.0], [59.6, 1914.0], [59.7, 1920.0], [59.8, 1925.0], [59.9, 1928.0], [60.0, 1934.0], [60.1, 1942.0], [60.2, 1946.0], [60.3, 1951.0], [60.4, 1958.0], [60.5, 1964.0], [60.6, 1973.0], [60.7, 1976.0], [60.8, 1984.0], [60.9, 1988.0], [61.0, 1992.0], [61.1, 1998.0], [61.2, 2001.0], [61.3, 2010.0], [61.4, 2012.0], [61.5, 2015.0], [61.6, 2022.0], [61.7, 2027.0], [61.8, 2032.0], [61.9, 2035.0], [62.0, 2040.0], [62.1, 2050.0], [62.2, 2056.0], [62.3, 2061.0], [62.4, 2066.0], [62.5, 2072.0], [62.6, 2079.0], [62.7, 2085.0], [62.8, 2088.0], [62.9, 2091.0], [63.0, 2099.0], [63.1, 2104.0], [63.2, 2108.0], [63.3, 2110.0], [63.4, 2113.0], [63.5, 2116.0], [63.6, 2121.0], [63.7, 2122.0], [63.8, 2135.0], [63.9, 2142.0], [64.0, 2146.0], [64.1, 2152.0], [64.2, 2159.0], [64.3, 2164.0], [64.4, 2168.0], [64.5, 2172.0], [64.6, 2176.0], [64.7, 2180.0], [64.8, 2183.0], [64.9, 2187.0], [65.0, 2193.0], [65.1, 2197.0], [65.2, 2200.0], [65.3, 2203.0], [65.4, 2211.0], [65.5, 2214.0], [65.6, 2222.0], [65.7, 2225.0], [65.8, 2228.0], [65.9, 2236.0], [66.0, 2239.0], [66.1, 2249.0], [66.2, 2254.0], [66.3, 2263.0], [66.4, 2272.0], [66.5, 2277.0], [66.6, 2281.0], [66.7, 2285.0], [66.8, 2294.0], [66.9, 2299.0], [67.0, 2304.0], [67.1, 2313.0], [67.2, 2322.0], [67.3, 2326.0], [67.4, 2330.0], [67.5, 2336.0], [67.6, 2343.0], [67.7, 2348.0], [67.8, 2356.0], [67.9, 2358.0], [68.0, 2370.0], [68.1, 2374.0], [68.2, 2377.0], [68.3, 2379.0], [68.4, 2383.0], [68.5, 2390.0], [68.6, 2392.0], [68.7, 2396.0], [68.8, 2400.0], [68.9, 2409.0], [69.0, 2414.0], [69.1, 2419.0], [69.2, 2432.0], [69.3, 2443.0], [69.4, 2446.0], [69.5, 2451.0], [69.6, 2461.0], [69.7, 2467.0], [69.8, 2481.0], [69.9, 2486.0], [70.0, 2490.0], [70.1, 2495.0], [70.2, 2498.0], [70.3, 2501.0], [70.4, 2502.0], [70.5, 2506.0], [70.6, 2510.0], [70.7, 2516.0], [70.8, 2521.0], [70.9, 2527.0], [71.0, 2531.0], [71.1, 2534.0], [71.2, 2545.0], [71.3, 2550.0], [71.4, 2561.0], [71.5, 2567.0], [71.6, 2572.0], [71.7, 2576.0], [71.8, 2580.0], [71.9, 2588.0], [72.0, 2592.0], [72.1, 2604.0], [72.2, 2610.0], [72.3, 2616.0], [72.4, 2619.0], [72.5, 2622.0], [72.6, 2625.0], [72.7, 2630.0], [72.8, 2634.0], [72.9, 2640.0], [73.0, 2644.0], [73.1, 2652.0], [73.2, 2657.0], [73.3, 2660.0], [73.4, 2666.0], [73.5, 2671.0], [73.6, 2679.0], [73.7, 2683.0], [73.8, 2685.0], [73.9, 2689.0], [74.0, 2694.0], [74.1, 2697.0], [74.2, 2701.0], [74.3, 2705.0], [74.4, 2708.0], [74.5, 2713.0], [74.6, 2716.0], [74.7, 2720.0], [74.8, 2728.0], [74.9, 2734.0], [75.0, 2739.0], [75.1, 2742.0], [75.2, 2745.0], [75.3, 2750.0], [75.4, 2754.0], [75.5, 2759.0], [75.6, 2762.0], [75.7, 2767.0], [75.8, 2771.0], [75.9, 2777.0], [76.0, 2783.0], [76.1, 2785.0], [76.2, 2790.0], [76.3, 2794.0], [76.4, 2801.0], [76.5, 2809.0], [76.6, 2812.0], [76.7, 2816.0], [76.8, 2824.0], [76.9, 2825.0], [77.0, 2829.0], [77.1, 2836.0], [77.2, 2840.0], [77.3, 2846.0], [77.4, 2854.0], [77.5, 2859.0], [77.6, 2862.0], [77.7, 2865.0], [77.8, 2871.0], [77.9, 2875.0], [78.0, 2878.0], [78.1, 2884.0], [78.2, 2888.0], [78.3, 2890.0], [78.4, 2893.0], [78.5, 2897.0], [78.6, 2900.0], [78.7, 2903.0], [78.8, 2907.0], [78.9, 2910.0], [79.0, 2913.0], [79.1, 2917.0], [79.2, 2923.0], [79.3, 2931.0], [79.4, 2933.0], [79.5, 2934.0], [79.6, 2936.0], [79.7, 2939.0], [79.8, 2945.0], [79.9, 2954.0], [80.0, 2957.0], [80.1, 2960.0], [80.2, 2962.0], [80.3, 2972.0], [80.4, 2976.0], [80.5, 2979.0], [80.6, 2982.0], [80.7, 2987.0], [80.8, 2991.0], [80.9, 2994.0], [81.0, 2996.0], [81.1, 3000.0], [81.2, 3003.0], [81.3, 3006.0], [81.4, 3009.0], [81.5, 3012.0], [81.6, 3016.0], [81.7, 3019.0], [81.8, 3028.0], [81.9, 3034.0], [82.0, 3038.0], [82.1, 3040.0], [82.2, 3043.0], [82.3, 3051.0], [82.4, 3055.0], [82.5, 3063.0], [82.6, 3067.0], [82.7, 3070.0], [82.8, 3072.0], [82.9, 3079.0], [83.0, 3083.0], [83.1, 3085.0], [83.2, 3088.0], [83.3, 3092.0], [83.4, 3102.0], [83.5, 3107.0], [83.6, 3113.0], [83.7, 3115.0], [83.8, 3121.0], [83.9, 3126.0], [84.0, 3128.0], [84.1, 3132.0], [84.2, 3137.0], [84.3, 3140.0], [84.4, 3143.0], [84.5, 3147.0], [84.6, 3150.0], [84.7, 3156.0], [84.8, 3159.0], [84.9, 3161.0], [85.0, 3169.0], [85.1, 3175.0], [85.2, 3178.0], [85.3, 3181.0], [85.4, 3184.0], [85.5, 3188.0], [85.6, 3192.0], [85.7, 3197.0], [85.8, 3200.0], [85.9, 3206.0], [86.0, 3208.0], [86.1, 3215.0], [86.2, 3220.0], [86.3, 3227.0], [86.4, 3232.0], [86.5, 3235.0], [86.6, 3238.0], [86.7, 3241.0], [86.8, 3245.0], [86.9, 3248.0], [87.0, 3252.0], [87.1, 3255.0], [87.2, 3260.0], [87.3, 3263.0], [87.4, 3266.0], [87.5, 3269.0], [87.6, 3274.0], [87.7, 3277.0], [87.8, 3283.0], [87.9, 3286.0], [88.0, 3294.0], [88.1, 3300.0], [88.2, 3303.0], [88.3, 3307.0], [88.4, 3312.0], [88.5, 3318.0], [88.6, 3323.0], [88.7, 3326.0], [88.8, 3332.0], [88.9, 3335.0], [89.0, 3339.0], [89.1, 3343.0], [89.2, 3351.0], [89.3, 3363.0], [89.4, 3370.0], [89.5, 3378.0], [89.6, 3381.0], [89.7, 3383.0], [89.8, 3386.0], [89.9, 3389.0], [90.0, 3398.0], [90.1, 3402.0], [90.2, 3405.0], [90.3, 3409.0], [90.4, 3416.0], [90.5, 3421.0], [90.6, 3425.0], [90.7, 3431.0], [90.8, 3434.0], [90.9, 3442.0], [91.0, 3447.0], [91.1, 3451.0], [91.2, 3456.0], [91.3, 3458.0], [91.4, 3462.0], [91.5, 3469.0], [91.6, 3473.0], [91.7, 3477.0], [91.8, 3483.0], [91.9, 3495.0], [92.0, 3500.0], [92.1, 3505.0], [92.2, 3516.0], [92.3, 3524.0], [92.4, 3529.0], [92.5, 3542.0], [92.6, 3546.0], [92.7, 3550.0], [92.8, 3559.0], [92.9, 3566.0], [93.0, 3571.0], [93.1, 3581.0], [93.2, 3588.0], [93.3, 3592.0], [93.4, 3604.0], [93.5, 3613.0], [93.6, 3620.0], [93.7, 3627.0], [93.8, 3629.0], [93.9, 3637.0], [94.0, 3651.0], [94.1, 3659.0], [94.2, 3673.0], [94.3, 3685.0], [94.4, 3696.0], [94.5, 3703.0], [94.6, 3710.0], [94.7, 3717.0], [94.8, 3732.0], [94.9, 3744.0], [95.0, 3765.0], [95.1, 3785.0], [95.2, 3794.0], [95.3, 3804.0], [95.4, 3816.0], [95.5, 3827.0], [95.6, 3845.0], [95.7, 3866.0], [95.8, 3881.0], [95.9, 3922.0], [96.0, 3941.0], [96.1, 3949.0], [96.2, 3967.0], [96.3, 3990.0], [96.4, 4012.0], [96.5, 4039.0], [96.6, 4053.0], [96.7, 4071.0], [96.8, 4097.0], [96.9, 4108.0], [97.0, 4126.0], [97.1, 4139.0], [97.2, 4189.0], [97.3, 4271.0], [97.4, 4321.0], [97.5, 4404.0], [97.6, 4436.0], [97.7, 4523.0], [97.8, 4591.0], [97.9, 4680.0], [98.0, 4763.0], [98.1, 4813.0], [98.2, 5013.0], [98.3, 5090.0], [98.4, 5145.0], [98.5, 5176.0], [98.6, 5235.0], [98.7, 5268.0], [98.8, 5283.0], [98.9, 5317.0], [99.0, 5436.0], [99.1, 5560.0], [99.2, 5730.0], [99.3, 5859.0], [99.4, 6054.0], [99.5, 6180.0], [99.6, 6228.0], [99.7, 6460.0], [99.8, 6679.0], [99.9, 7058.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 692.0, "series": [{"data": [[600.0, 544.0], [700.0, 370.0], [800.0, 252.0], [900.0, 169.0], [1000.0, 160.0], [1100.0, 158.0], [1200.0, 163.0], [1300.0, 168.0], [1400.0, 180.0], [1500.0, 159.0], [1600.0, 137.0], [1700.0, 127.0], [1800.0, 123.0], [1900.0, 112.0], [2000.0, 119.0], [2100.0, 133.0], [2200.0, 107.0], [2300.0, 116.0], [2400.0, 93.0], [2500.0, 109.0], [2600.0, 132.0], [2800.0, 137.0], [2700.0, 136.0], [2900.0, 155.0], [3000.0, 144.0], [3100.0, 149.0], [3300.0, 120.0], [3200.0, 144.0], [3400.0, 120.0], [3500.0, 87.0], [3700.0, 50.0], [3600.0, 68.0], [3800.0, 36.0], [3900.0, 31.0], [4000.0, 29.0], [4100.0, 25.0], [4200.0, 9.0], [4300.0, 7.0], [4400.0, 14.0], [4500.0, 7.0], [4600.0, 8.0], [4700.0, 10.0], [4800.0, 2.0], [4900.0, 4.0], [5100.0, 15.0], [5000.0, 7.0], [5200.0, 18.0], [5300.0, 8.0], [5400.0, 5.0], [5500.0, 6.0], [5600.0, 3.0], [5800.0, 3.0], [5700.0, 4.0], [6000.0, 3.0], [6100.0, 6.0], [5900.0, 4.0], [6200.0, 8.0], [6300.0, 2.0], [6600.0, 5.0], [6500.0, 2.0], [6400.0, 2.0], [6900.0, 2.0], [6800.0, 2.0], [7100.0, 2.0], [7000.0, 1.0], [7600.0, 2.0], [7800.0, 2.0], [100.0, 4.0], [200.0, 4.0], [300.0, 1.0], [400.0, 272.0], [500.0, 692.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3068.0, "series": [{"data": [[0.0, 273.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2853.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3068.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 14.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.77777777777778, "minX": 1.6581264E12, "maxY": 25.0, "series": [{"data": [[1.65812664E12, 25.0], [1.65812682E12, 25.0], [1.65812652E12, 25.0], [1.6581267E12, 25.0], [1.6581264E12, 12.77777777777778], [1.65812688E12, 25.0], [1.65812658E12, 25.0], [1.65812676E12, 25.0], [1.65812646E12, 24.38141470180308]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812688E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 579.2307692307692, "minX": 2.0, "maxY": 2423.7307692307686, "series": [{"data": [[2.0, 884.7142857142858], [8.0, 654.8333333333334], [9.0, 629.9117647058823], [10.0, 632.8250000000002], [11.0, 586.0909090909088], [3.0, 579.2307692307692], [12.0, 604.7608695652175], [13.0, 791.5945945945946], [15.0, 2423.7307692307686], [4.0, 652.0714285714284], [16.0, 882.1153846153848], [17.0, 772.1], [18.0, 804.1730769230769], [19.0, 905.26], [5.0, 692.7222222222224], [20.0, 1028.3170731707314], [21.0, 1287.9347826086953], [22.0, 1081.4838709677417], [23.0, 1823.1470588235293], [6.0, 620.8000000000001], [24.0, 1529.6097560975609], [25.0, 1913.8624290162961], [7.0, 615.6896551724138]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[23.77641752577323, 1796.53898195877]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1390.9333333333334, "minX": 1.6581264E12, "maxY": 28460.966666666667, "series": [{"data": [[1.65812664E12, 26222.033333333333], [1.65812682E12, 28460.966666666667], [1.65812652E12, 22122.033333333333], [1.6581267E12, 24471.216666666667], [1.6581264E12, 18334.433333333334], [1.65812688E12, 5283.3], [1.65812658E12, 22528.916666666668], [1.65812676E12, 24550.683333333334], [1.65812646E12, 22612.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65812664E12, 7142.4], [1.65812682E12, 7756.8], [1.65812652E12, 5956.266666666666], [1.6581267E12, 6664.533333333334], [1.6581264E12, 4992.0], [1.65812688E12, 1390.9333333333334], [1.65812658E12, 6135.466666666666], [1.65812676E12, 6681.6], [1.65812646E12, 6152.533333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812688E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 802.5008547008547, "minX": 1.6581264E12, "maxY": 2145.3276595744683, "series": [{"data": [[1.65812664E12, 1774.8351254480276], [1.65812682E12, 1670.1023102310244], [1.65812652E12, 2145.3276595744683], [1.6581267E12, 1926.865556978234], [1.6581264E12, 802.5008547008547], [1.65812688E12, 1291.8690476190473], [1.65812658E12, 2079.7093184979144], [1.65812676E12, 1915.9169859514686], [1.65812646E12, 2011.0194174757287]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812688E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 802.3435897435891, "minX": 1.6581264E12, "maxY": 2141.7290780141852, "series": [{"data": [[1.65812664E12, 1774.8172043010743], [1.65812682E12, 1670.084708470847], [1.65812652E12, 2141.7290780141852], [1.6581267E12, 1926.8540332906557], [1.6581264E12, 802.3435897435891], [1.65812688E12, 1285.5059523809525], [1.65812658E12, 2079.6731571627247], [1.65812676E12, 1915.8978288633448], [1.65812646E12, 2010.9680998613046]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812688E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 19.17601760176018, "minX": 1.6581264E12, "maxY": 114.02380952380946, "series": [{"data": [[1.65812664E12, 21.624850657108723], [1.65812682E12, 19.17601760176018], [1.65812652E12, 110.12624113475167], [1.6581267E12, 23.893725992317545], [1.6581264E12, 40.16239316239319], [1.65812688E12, 114.02380952380946], [1.65812658E12, 68.1460361613353], [1.65812676E12, 23.25925925925927], [1.65812646E12, 57.081830790568624]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812688E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 408.0, "minX": 1.6581264E12, "maxY": 7893.0, "series": [{"data": [[1.65812664E12, 3765.0], [1.65812682E12, 4763.0], [1.65812652E12, 7822.0], [1.6581267E12, 4309.0], [1.6581264E12, 6045.0], [1.65812688E12, 2783.0], [1.65812658E12, 7187.0], [1.65812676E12, 4935.0], [1.65812646E12, 7893.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65812664E12, 3239.3], [1.65812682E12, 3560.0], [1.65812652E12, 3745.4000000000015], [1.6581267E12, 3424.6000000000004], [1.6581264E12, 1095.8], [1.65812688E12, 2387.7999999999997], [1.65812658E12, 3286.0], [1.65812676E12, 3532.8], [1.65812646E12, 3266.600000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65812664E12, 3656.26], [1.65812682E12, 4220.899999999997], [1.65812652E12, 6460.879999999999], [1.6581267E12, 3975.3999999999987], [1.6581264E12, 4101.5599999999995], [1.65812688E12, 2777.88], [1.65812658E12, 6398.599999999997], [1.65812676E12, 4087.879999999999], [1.65812646E12, 6226.9]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65812664E12, 3378.0], [1.65812682E12, 3828.75], [1.65812652E12, 5092.749999999997], [1.6581267E12, 3589.9], [1.6581264E12, 1470.0], [1.65812688E12, 2629.0], [1.65812658E12, 5190.0], [1.65812676E12, 3731.1999999999994], [1.65812646E12, 4127.2]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65812664E12, 437.0], [1.65812682E12, 408.0], [1.65812652E12, 455.0], [1.6581267E12, 446.0], [1.6581264E12, 430.0], [1.65812688E12, 423.0], [1.65812658E12, 485.0], [1.65812676E12, 443.0], [1.65812646E12, 573.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65812664E12, 1211.0], [1.65812682E12, 1335.5], [1.65812652E12, 1765.5], [1.6581267E12, 2298.0], [1.6581264E12, 647.0], [1.65812688E12, 1366.0], [1.65812658E12, 1757.0], [1.65812676E12, 1484.0], [1.65812646E12, 1656.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812688E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 197.0, "minX": 1.0, "maxY": 3520.0, "series": [{"data": [[2.0, 2208.0], [3.0, 1888.5], [4.0, 603.5], [5.0, 2541.0], [6.0, 2327.5], [7.0, 1307.0], [8.0, 1555.0], [9.0, 1553.0], [10.0, 1217.0], [11.0, 1768.0], [12.0, 1471.0], [13.0, 1646.0], [14.0, 1423.5], [15.0, 1724.0], [16.0, 1688.5], [1.0, 3520.0], [17.0, 1556.0], [18.0, 1312.0], [19.0, 1314.0], [20.0, 1418.5], [21.0, 1219.5], [22.0, 1476.0], [23.0, 1061.0], [24.0, 1096.5], [25.0, 1770.0], [26.0, 1508.5], [27.0, 1362.0], [29.0, 778.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 525.0], [18.0, 440.0], [10.0, 574.0], [22.0, 197.0], [15.0, 341.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3519.5, "series": [{"data": [[2.0, 2204.5], [3.0, 1887.5], [4.0, 603.5], [5.0, 2540.0], [6.0, 2327.5], [7.0, 1307.0], [8.0, 1555.0], [9.0, 1553.0], [10.0, 1217.0], [11.0, 1768.0], [12.0, 1471.0], [13.0, 1646.0], [14.0, 1423.5], [15.0, 1724.0], [16.0, 1688.5], [1.0, 3519.5], [17.0, 1556.0], [18.0, 1312.0], [19.0, 1314.0], [20.0, 1418.5], [21.0, 1219.0], [22.0, 1476.0], [23.0, 1061.0], [24.0, 1096.5], [25.0, 1770.0], [26.0, 1508.5], [27.0, 1362.0], [29.0, 778.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 525.0], [18.0, 0.0], [10.0, 574.0], [22.0, 0.0], [15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3833333333333333, "minX": 1.6581264E12, "maxY": 15.15, "series": [{"data": [[1.65812664E12, 13.95], [1.65812682E12, 15.15], [1.65812652E12, 11.75], [1.6581267E12, 13.016666666666667], [1.6581264E12, 10.083333333333334], [1.65812688E12, 2.3833333333333333], [1.65812658E12, 11.983333333333333], [1.65812676E12, 13.05], [1.65812646E12, 12.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812688E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6581264E12, "maxY": 15.133333333333333, "series": [{"data": [[1.65812664E12, 13.933333333333334], [1.65812682E12, 15.133333333333333], [1.65812652E12, 11.633333333333333], [1.6581267E12, 13.016666666666667], [1.6581264E12, 9.75], [1.65812688E12, 2.716666666666667], [1.65812658E12, 11.983333333333333], [1.65812676E12, 13.05], [1.65812646E12, 12.016666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65812664E12, 0.016666666666666666], [1.65812682E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.65812652E12, 0.11666666666666667], [1.65812688E12, 0.08333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65812688E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6581264E12, "maxY": 15.133333333333333, "series": [{"data": [[1.65812664E12, 13.933333333333334], [1.65812682E12, 15.133333333333333], [1.65812652E12, 11.633333333333333], [1.6581267E12, 13.016666666666667], [1.6581264E12, 9.75], [1.65812688E12, 2.716666666666667], [1.65812658E12, 11.983333333333333], [1.65812676E12, 13.05], [1.65812646E12, 12.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.65812664E12, 0.016666666666666666], [1.65812682E12, 0.016666666666666666], [1.65812652E12, 0.11666666666666667], [1.65812688E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812688E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6581264E12, "maxY": 15.133333333333333, "series": [{"data": [[1.65812664E12, 13.933333333333334], [1.65812682E12, 15.133333333333333], [1.65812652E12, 11.633333333333333], [1.6581267E12, 13.016666666666667], [1.6581264E12, 9.75], [1.65812688E12, 2.716666666666667], [1.65812658E12, 11.983333333333333], [1.65812676E12, 13.05], [1.65812646E12, 12.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65812664E12, 0.016666666666666666], [1.65812682E12, 0.016666666666666666], [1.65812652E12, 0.11666666666666667], [1.65812688E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65812688E12, "title": "Total Transactions Per Second"}},
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

