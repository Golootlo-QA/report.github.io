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
        data: {"result": {"minY": 438.0, "minX": 0.0, "maxY": 27515.0, "series": [{"data": [[0.0, 438.0], [0.1, 460.0], [0.2, 472.0], [0.3, 477.0], [0.4, 483.0], [0.5, 488.0], [0.6, 494.0], [0.7, 499.0], [0.8, 502.0], [0.9, 507.0], [1.0, 509.0], [1.1, 512.0], [1.2, 516.0], [1.3, 517.0], [1.4, 520.0], [1.5, 523.0], [1.6, 526.0], [1.7, 528.0], [1.8, 531.0], [1.9, 534.0], [2.0, 535.0], [2.1, 538.0], [2.2, 541.0], [2.3, 543.0], [2.4, 546.0], [2.5, 547.0], [2.6, 548.0], [2.7, 550.0], [2.8, 552.0], [2.9, 553.0], [3.0, 557.0], [3.1, 560.0], [3.2, 562.0], [3.3, 563.0], [3.4, 565.0], [3.5, 567.0], [3.6, 570.0], [3.7, 572.0], [3.8, 574.0], [3.9, 577.0], [4.0, 579.0], [4.1, 581.0], [4.2, 583.0], [4.3, 584.0], [4.4, 586.0], [4.5, 588.0], [4.6, 590.0], [4.7, 591.0], [4.8, 593.0], [4.9, 594.0], [5.0, 596.0], [5.1, 598.0], [5.2, 599.0], [5.3, 601.0], [5.4, 603.0], [5.5, 605.0], [5.6, 608.0], [5.7, 609.0], [5.8, 610.0], [5.9, 612.0], [6.0, 613.0], [6.1, 615.0], [6.2, 617.0], [6.3, 618.0], [6.4, 620.0], [6.5, 621.0], [6.6, 623.0], [6.7, 624.0], [6.8, 625.0], [6.9, 626.0], [7.0, 628.0], [7.1, 629.0], [7.2, 631.0], [7.3, 634.0], [7.4, 635.0], [7.5, 636.0], [7.6, 638.0], [7.7, 639.0], [7.8, 641.0], [7.9, 642.0], [8.0, 644.0], [8.1, 646.0], [8.2, 646.0], [8.3, 649.0], [8.4, 650.0], [8.5, 652.0], [8.6, 653.0], [8.7, 655.0], [8.8, 656.0], [8.9, 657.0], [9.0, 659.0], [9.1, 661.0], [9.2, 663.0], [9.3, 665.0], [9.4, 666.0], [9.5, 667.0], [9.6, 668.0], [9.7, 669.0], [9.8, 671.0], [9.9, 672.0], [10.0, 674.0], [10.1, 675.0], [10.2, 676.0], [10.3, 678.0], [10.4, 679.0], [10.5, 680.0], [10.6, 681.0], [10.7, 682.0], [10.8, 683.0], [10.9, 684.0], [11.0, 685.0], [11.1, 686.0], [11.2, 688.0], [11.3, 689.0], [11.4, 690.0], [11.5, 691.0], [11.6, 692.0], [11.7, 694.0], [11.8, 696.0], [11.9, 697.0], [12.0, 699.0], [12.1, 701.0], [12.2, 702.0], [12.3, 703.0], [12.4, 705.0], [12.5, 707.0], [12.6, 709.0], [12.7, 709.0], [12.8, 712.0], [12.9, 713.0], [13.0, 714.0], [13.1, 715.0], [13.2, 716.0], [13.3, 718.0], [13.4, 719.0], [13.5, 721.0], [13.6, 722.0], [13.7, 723.0], [13.8, 726.0], [13.9, 727.0], [14.0, 730.0], [14.1, 730.0], [14.2, 732.0], [14.3, 733.0], [14.4, 735.0], [14.5, 737.0], [14.6, 739.0], [14.7, 740.0], [14.8, 741.0], [14.9, 744.0], [15.0, 745.0], [15.1, 746.0], [15.2, 747.0], [15.3, 750.0], [15.4, 752.0], [15.5, 753.0], [15.6, 755.0], [15.7, 757.0], [15.8, 758.0], [15.9, 760.0], [16.0, 761.0], [16.1, 763.0], [16.2, 765.0], [16.3, 766.0], [16.4, 767.0], [16.5, 769.0], [16.6, 770.0], [16.7, 772.0], [16.8, 774.0], [16.9, 775.0], [17.0, 777.0], [17.1, 778.0], [17.2, 780.0], [17.3, 782.0], [17.4, 783.0], [17.5, 784.0], [17.6, 785.0], [17.7, 787.0], [17.8, 790.0], [17.9, 791.0], [18.0, 793.0], [18.1, 794.0], [18.2, 796.0], [18.3, 798.0], [18.4, 800.0], [18.5, 800.0], [18.6, 802.0], [18.7, 803.0], [18.8, 804.0], [18.9, 805.0], [19.0, 807.0], [19.1, 808.0], [19.2, 809.0], [19.3, 811.0], [19.4, 813.0], [19.5, 814.0], [19.6, 815.0], [19.7, 816.0], [19.8, 818.0], [19.9, 819.0], [20.0, 821.0], [20.1, 823.0], [20.2, 824.0], [20.3, 826.0], [20.4, 828.0], [20.5, 829.0], [20.6, 832.0], [20.7, 834.0], [20.8, 836.0], [20.9, 837.0], [21.0, 838.0], [21.1, 841.0], [21.2, 843.0], [21.3, 845.0], [21.4, 847.0], [21.5, 848.0], [21.6, 850.0], [21.7, 853.0], [21.8, 854.0], [21.9, 855.0], [22.0, 859.0], [22.1, 861.0], [22.2, 862.0], [22.3, 864.0], [22.4, 866.0], [22.5, 868.0], [22.6, 870.0], [22.7, 872.0], [22.8, 874.0], [22.9, 876.0], [23.0, 878.0], [23.1, 880.0], [23.2, 882.0], [23.3, 884.0], [23.4, 886.0], [23.5, 887.0], [23.6, 889.0], [23.7, 890.0], [23.8, 892.0], [23.9, 894.0], [24.0, 895.0], [24.1, 897.0], [24.2, 899.0], [24.3, 901.0], [24.4, 903.0], [24.5, 905.0], [24.6, 908.0], [24.7, 910.0], [24.8, 912.0], [24.9, 915.0], [25.0, 918.0], [25.1, 921.0], [25.2, 923.0], [25.3, 925.0], [25.4, 927.0], [25.5, 930.0], [25.6, 932.0], [25.7, 935.0], [25.8, 936.0], [25.9, 938.0], [26.0, 938.0], [26.1, 940.0], [26.2, 942.0], [26.3, 944.0], [26.4, 947.0], [26.5, 950.0], [26.6, 951.0], [26.7, 954.0], [26.8, 956.0], [26.9, 960.0], [27.0, 962.0], [27.1, 965.0], [27.2, 968.0], [27.3, 971.0], [27.4, 974.0], [27.5, 979.0], [27.6, 982.0], [27.7, 987.0], [27.8, 992.0], [27.9, 995.0], [28.0, 998.0], [28.1, 1002.0], [28.2, 1006.0], [28.3, 1010.0], [28.4, 1014.0], [28.5, 1018.0], [28.6, 1020.0], [28.7, 1024.0], [28.8, 1027.0], [28.9, 1033.0], [29.0, 1038.0], [29.1, 1041.0], [29.2, 1045.0], [29.3, 1048.0], [29.4, 1052.0], [29.5, 1056.0], [29.6, 1059.0], [29.7, 1063.0], [29.8, 1067.0], [29.9, 1072.0], [30.0, 1080.0], [30.1, 1086.0], [30.2, 1089.0], [30.3, 1093.0], [30.4, 1098.0], [30.5, 1100.0], [30.6, 1106.0], [30.7, 1116.0], [30.8, 1120.0], [30.9, 1125.0], [31.0, 1134.0], [31.1, 1139.0], [31.2, 1142.0], [31.3, 1147.0], [31.4, 1156.0], [31.5, 1166.0], [31.6, 1171.0], [31.7, 1176.0], [31.8, 1183.0], [31.9, 1188.0], [32.0, 1194.0], [32.1, 1204.0], [32.2, 1209.0], [32.3, 1214.0], [32.4, 1220.0], [32.5, 1225.0], [32.6, 1229.0], [32.7, 1235.0], [32.8, 1238.0], [32.9, 1246.0], [33.0, 1258.0], [33.1, 1263.0], [33.2, 1270.0], [33.3, 1277.0], [33.4, 1282.0], [33.5, 1294.0], [33.6, 1303.0], [33.7, 1312.0], [33.8, 1317.0], [33.9, 1327.0], [34.0, 1338.0], [34.1, 1347.0], [34.2, 1361.0], [34.3, 1364.0], [34.4, 1376.0], [34.5, 1383.0], [34.6, 1389.0], [34.7, 1398.0], [34.8, 1409.0], [34.9, 1416.0], [35.0, 1424.0], [35.1, 1432.0], [35.2, 1441.0], [35.3, 1449.0], [35.4, 1457.0], [35.5, 1463.0], [35.6, 1471.0], [35.7, 1481.0], [35.8, 1497.0], [35.9, 1506.0], [36.0, 1515.0], [36.1, 1525.0], [36.2, 1530.0], [36.3, 1539.0], [36.4, 1551.0], [36.5, 1562.0], [36.6, 1586.0], [36.7, 1593.0], [36.8, 1603.0], [36.9, 1617.0], [37.0, 1629.0], [37.1, 1647.0], [37.2, 1661.0], [37.3, 1688.0], [37.4, 1704.0], [37.5, 1717.0], [37.6, 1734.0], [37.7, 1748.0], [37.8, 1758.0], [37.9, 1772.0], [38.0, 1782.0], [38.1, 1805.0], [38.2, 1830.0], [38.3, 1847.0], [38.4, 1868.0], [38.5, 1887.0], [38.6, 1914.0], [38.7, 1922.0], [38.8, 1935.0], [38.9, 1957.0], [39.0, 1981.0], [39.1, 2008.0], [39.2, 2021.0], [39.3, 2041.0], [39.4, 2061.0], [39.5, 2091.0], [39.6, 2107.0], [39.7, 2118.0], [39.8, 2137.0], [39.9, 2163.0], [40.0, 2181.0], [40.1, 2204.0], [40.2, 2227.0], [40.3, 2245.0], [40.4, 2263.0], [40.5, 2286.0], [40.6, 2304.0], [40.7, 2315.0], [40.8, 2336.0], [40.9, 2345.0], [41.0, 2353.0], [41.1, 2370.0], [41.2, 2380.0], [41.3, 2391.0], [41.4, 2401.0], [41.5, 2421.0], [41.6, 2435.0], [41.7, 2452.0], [41.8, 2468.0], [41.9, 2481.0], [42.0, 2497.0], [42.1, 2504.0], [42.2, 2521.0], [42.3, 2536.0], [42.4, 2543.0], [42.5, 2559.0], [42.6, 2574.0], [42.7, 2582.0], [42.8, 2597.0], [42.9, 2610.0], [43.0, 2622.0], [43.1, 2644.0], [43.2, 2656.0], [43.3, 2665.0], [43.4, 2688.0], [43.5, 2701.0], [43.6, 2715.0], [43.7, 2726.0], [43.8, 2748.0], [43.9, 2776.0], [44.0, 2792.0], [44.1, 2807.0], [44.2, 2824.0], [44.3, 2846.0], [44.4, 2870.0], [44.5, 2881.0], [44.6, 2895.0], [44.7, 2918.0], [44.8, 2943.0], [44.9, 2964.0], [45.0, 2982.0], [45.1, 3010.0], [45.2, 3032.0], [45.3, 3052.0], [45.4, 3076.0], [45.5, 3108.0], [45.6, 3142.0], [45.7, 3162.0], [45.8, 3187.0], [45.9, 3225.0], [46.0, 3260.0], [46.1, 3285.0], [46.2, 3301.0], [46.3, 3331.0], [46.4, 3350.0], [46.5, 3376.0], [46.6, 3410.0], [46.7, 3441.0], [46.8, 3459.0], [46.9, 3481.0], [47.0, 3495.0], [47.1, 3525.0], [47.2, 3538.0], [47.3, 3569.0], [47.4, 3594.0], [47.5, 3602.0], [47.6, 3620.0], [47.7, 3634.0], [47.8, 3653.0], [47.9, 3662.0], [48.0, 3678.0], [48.1, 3695.0], [48.2, 3705.0], [48.3, 3721.0], [48.4, 3733.0], [48.5, 3745.0], [48.6, 3757.0], [48.7, 3767.0], [48.8, 3777.0], [48.9, 3796.0], [49.0, 3805.0], [49.1, 3812.0], [49.2, 3827.0], [49.3, 3836.0], [49.4, 3848.0], [49.5, 3865.0], [49.6, 3882.0], [49.7, 3898.0], [49.8, 3910.0], [49.9, 3924.0], [50.0, 3935.0], [50.1, 3944.0], [50.2, 3954.0], [50.3, 3975.0], [50.4, 3989.0], [50.5, 3999.0], [50.6, 4011.0], [50.7, 4021.0], [50.8, 4029.0], [50.9, 4034.0], [51.0, 4042.0], [51.1, 4054.0], [51.2, 4066.0], [51.3, 4069.0], [51.4, 4077.0], [51.5, 4092.0], [51.6, 4096.0], [51.7, 4102.0], [51.8, 4116.0], [51.9, 4126.0], [52.0, 4145.0], [52.1, 4161.0], [52.2, 4173.0], [52.3, 4184.0], [52.4, 4189.0], [52.5, 4199.0], [52.6, 4202.0], [52.7, 4211.0], [52.8, 4218.0], [52.9, 4224.0], [53.0, 4231.0], [53.1, 4239.0], [53.2, 4248.0], [53.3, 4253.0], [53.4, 4260.0], [53.5, 4270.0], [53.6, 4279.0], [53.7, 4282.0], [53.8, 4292.0], [53.9, 4299.0], [54.0, 4306.0], [54.1, 4313.0], [54.2, 4318.0], [54.3, 4327.0], [54.4, 4334.0], [54.5, 4343.0], [54.6, 4348.0], [54.7, 4358.0], [54.8, 4364.0], [54.9, 4371.0], [55.0, 4375.0], [55.1, 4380.0], [55.2, 4383.0], [55.3, 4390.0], [55.4, 4400.0], [55.5, 4404.0], [55.6, 4410.0], [55.7, 4416.0], [55.8, 4423.0], [55.9, 4428.0], [56.0, 4434.0], [56.1, 4440.0], [56.2, 4449.0], [56.3, 4453.0], [56.4, 4461.0], [56.5, 4467.0], [56.6, 4471.0], [56.7, 4481.0], [56.8, 4488.0], [56.9, 4496.0], [57.0, 4501.0], [57.1, 4505.0], [57.2, 4510.0], [57.3, 4516.0], [57.4, 4524.0], [57.5, 4532.0], [57.6, 4537.0], [57.7, 4548.0], [57.8, 4555.0], [57.9, 4560.0], [58.0, 4565.0], [58.1, 4570.0], [58.2, 4575.0], [58.3, 4580.0], [58.4, 4583.0], [58.5, 4591.0], [58.6, 4596.0], [58.7, 4599.0], [58.8, 4605.0], [58.9, 4610.0], [59.0, 4618.0], [59.1, 4622.0], [59.2, 4627.0], [59.3, 4632.0], [59.4, 4635.0], [59.5, 4641.0], [59.6, 4645.0], [59.7, 4649.0], [59.8, 4652.0], [59.9, 4658.0], [60.0, 4662.0], [60.1, 4667.0], [60.2, 4670.0], [60.3, 4673.0], [60.4, 4677.0], [60.5, 4680.0], [60.6, 4684.0], [60.7, 4689.0], [60.8, 4697.0], [60.9, 4704.0], [61.0, 4707.0], [61.1, 4709.0], [61.2, 4712.0], [61.3, 4717.0], [61.4, 4721.0], [61.5, 4727.0], [61.6, 4733.0], [61.7, 4737.0], [61.8, 4741.0], [61.9, 4744.0], [62.0, 4748.0], [62.1, 4751.0], [62.2, 4756.0], [62.3, 4760.0], [62.4, 4764.0], [62.5, 4769.0], [62.6, 4775.0], [62.7, 4780.0], [62.8, 4783.0], [62.9, 4786.0], [63.0, 4790.0], [63.1, 4795.0], [63.2, 4798.0], [63.3, 4803.0], [63.4, 4807.0], [63.5, 4812.0], [63.6, 4817.0], [63.7, 4822.0], [63.8, 4825.0], [63.9, 4830.0], [64.0, 4835.0], [64.1, 4838.0], [64.2, 4841.0], [64.3, 4844.0], [64.4, 4849.0], [64.5, 4856.0], [64.6, 4861.0], [64.7, 4865.0], [64.8, 4872.0], [64.9, 4877.0], [65.0, 4886.0], [65.1, 4891.0], [65.2, 4895.0], [65.3, 4899.0], [65.4, 4905.0], [65.5, 4909.0], [65.6, 4915.0], [65.7, 4923.0], [65.8, 4926.0], [65.9, 4930.0], [66.0, 4933.0], [66.1, 4937.0], [66.2, 4943.0], [66.3, 4950.0], [66.4, 4952.0], [66.5, 4957.0], [66.6, 4964.0], [66.7, 4970.0], [66.8, 4976.0], [66.9, 4982.0], [67.0, 4987.0], [67.1, 4993.0], [67.2, 4997.0], [67.3, 5002.0], [67.4, 5011.0], [67.5, 5015.0], [67.6, 5020.0], [67.7, 5027.0], [67.8, 5032.0], [67.9, 5035.0], [68.0, 5041.0], [68.1, 5044.0], [68.2, 5052.0], [68.3, 5056.0], [68.4, 5059.0], [68.5, 5066.0], [68.6, 5070.0], [68.7, 5073.0], [68.8, 5075.0], [68.9, 5078.0], [69.0, 5082.0], [69.1, 5087.0], [69.2, 5090.0], [69.3, 5093.0], [69.4, 5097.0], [69.5, 5100.0], [69.6, 5104.0], [69.7, 5108.0], [69.8, 5110.0], [69.9, 5115.0], [70.0, 5119.0], [70.1, 5122.0], [70.2, 5127.0], [70.3, 5131.0], [70.4, 5136.0], [70.5, 5138.0], [70.6, 5142.0], [70.7, 5145.0], [70.8, 5150.0], [70.9, 5153.0], [71.0, 5156.0], [71.1, 5164.0], [71.2, 5167.0], [71.3, 5173.0], [71.4, 5180.0], [71.5, 5185.0], [71.6, 5190.0], [71.7, 5195.0], [71.8, 5199.0], [71.9, 5204.0], [72.0, 5207.0], [72.1, 5212.0], [72.2, 5215.0], [72.3, 5220.0], [72.4, 5226.0], [72.5, 5228.0], [72.6, 5231.0], [72.7, 5236.0], [72.8, 5239.0], [72.9, 5244.0], [73.0, 5247.0], [73.1, 5254.0], [73.2, 5258.0], [73.3, 5262.0], [73.4, 5266.0], [73.5, 5275.0], [73.6, 5278.0], [73.7, 5283.0], [73.8, 5289.0], [73.9, 5294.0], [74.0, 5302.0], [74.1, 5305.0], [74.2, 5309.0], [74.3, 5314.0], [74.4, 5316.0], [74.5, 5320.0], [74.6, 5326.0], [74.7, 5332.0], [74.8, 5335.0], [74.9, 5341.0], [75.0, 5346.0], [75.1, 5351.0], [75.2, 5358.0], [75.3, 5362.0], [75.4, 5366.0], [75.5, 5368.0], [75.6, 5371.0], [75.7, 5377.0], [75.8, 5382.0], [75.9, 5387.0], [76.0, 5391.0], [76.1, 5397.0], [76.2, 5401.0], [76.3, 5407.0], [76.4, 5412.0], [76.5, 5414.0], [76.6, 5416.0], [76.7, 5420.0], [76.8, 5426.0], [76.9, 5432.0], [77.0, 5436.0], [77.1, 5439.0], [77.2, 5443.0], [77.3, 5448.0], [77.4, 5452.0], [77.5, 5458.0], [77.6, 5460.0], [77.7, 5464.0], [77.8, 5470.0], [77.9, 5474.0], [78.0, 5477.0], [78.1, 5480.0], [78.2, 5487.0], [78.3, 5491.0], [78.4, 5497.0], [78.5, 5505.0], [78.6, 5509.0], [78.7, 5512.0], [78.8, 5517.0], [78.9, 5521.0], [79.0, 5527.0], [79.1, 5532.0], [79.2, 5535.0], [79.3, 5538.0], [79.4, 5544.0], [79.5, 5548.0], [79.6, 5556.0], [79.7, 5559.0], [79.8, 5564.0], [79.9, 5567.0], [80.0, 5573.0], [80.1, 5578.0], [80.2, 5584.0], [80.3, 5590.0], [80.4, 5599.0], [80.5, 5604.0], [80.6, 5608.0], [80.7, 5615.0], [80.8, 5619.0], [80.9, 5622.0], [81.0, 5629.0], [81.1, 5636.0], [81.2, 5643.0], [81.3, 5650.0], [81.4, 5656.0], [81.5, 5663.0], [81.6, 5673.0], [81.7, 5677.0], [81.8, 5686.0], [81.9, 5692.0], [82.0, 5697.0], [82.1, 5705.0], [82.2, 5711.0], [82.3, 5716.0], [82.4, 5722.0], [82.5, 5729.0], [82.6, 5733.0], [82.7, 5743.0], [82.8, 5747.0], [82.9, 5753.0], [83.0, 5760.0], [83.1, 5766.0], [83.2, 5771.0], [83.3, 5782.0], [83.4, 5790.0], [83.5, 5796.0], [83.6, 5800.0], [83.7, 5806.0], [83.8, 5813.0], [83.9, 5822.0], [84.0, 5830.0], [84.1, 5838.0], [84.2, 5843.0], [84.3, 5850.0], [84.4, 5863.0], [84.5, 5869.0], [84.6, 5877.0], [84.7, 5882.0], [84.8, 5887.0], [84.9, 5896.0], [85.0, 5902.0], [85.1, 5911.0], [85.2, 5916.0], [85.3, 5918.0], [85.4, 5925.0], [85.5, 5934.0], [85.6, 5944.0], [85.7, 5951.0], [85.8, 5961.0], [85.9, 5965.0], [86.0, 5971.0], [86.1, 5979.0], [86.2, 5991.0], [86.3, 5995.0], [86.4, 6003.0], [86.5, 6009.0], [86.6, 6015.0], [86.7, 6023.0], [86.8, 6029.0], [86.9, 6038.0], [87.0, 6048.0], [87.1, 6054.0], [87.2, 6060.0], [87.3, 6068.0], [87.4, 6078.0], [87.5, 6085.0], [87.6, 6095.0], [87.7, 6100.0], [87.8, 6106.0], [87.9, 6115.0], [88.0, 6120.0], [88.1, 6132.0], [88.2, 6145.0], [88.3, 6156.0], [88.4, 6164.0], [88.5, 6172.0], [88.6, 6178.0], [88.7, 6185.0], [88.8, 6200.0], [88.9, 6206.0], [89.0, 6215.0], [89.1, 6228.0], [89.2, 6234.0], [89.3, 6245.0], [89.4, 6255.0], [89.5, 6265.0], [89.6, 6275.0], [89.7, 6292.0], [89.8, 6299.0], [89.9, 6311.0], [90.0, 6318.0], [90.1, 6330.0], [90.2, 6335.0], [90.3, 6347.0], [90.4, 6350.0], [90.5, 6359.0], [90.6, 6372.0], [90.7, 6386.0], [90.8, 6400.0], [90.9, 6418.0], [91.0, 6426.0], [91.1, 6440.0], [91.2, 6448.0], [91.3, 6455.0], [91.4, 6463.0], [91.5, 6475.0], [91.6, 6488.0], [91.7, 6495.0], [91.8, 6502.0], [91.9, 6514.0], [92.0, 6526.0], [92.1, 6538.0], [92.2, 6546.0], [92.3, 6554.0], [92.4, 6566.0], [92.5, 6582.0], [92.6, 6589.0], [92.7, 6596.0], [92.8, 6607.0], [92.9, 6617.0], [93.0, 6628.0], [93.1, 6649.0], [93.2, 6659.0], [93.3, 6667.0], [93.4, 6691.0], [93.5, 6706.0], [93.6, 6714.0], [93.7, 6734.0], [93.8, 6758.0], [93.9, 6778.0], [94.0, 6785.0], [94.1, 6798.0], [94.2, 6817.0], [94.3, 6836.0], [94.4, 6851.0], [94.5, 6873.0], [94.6, 6885.0], [94.7, 6894.0], [94.8, 6910.0], [94.9, 6918.0], [95.0, 6936.0], [95.1, 6949.0], [95.2, 6966.0], [95.3, 6983.0], [95.4, 7001.0], [95.5, 7023.0], [95.6, 7033.0], [95.7, 7052.0], [95.8, 7062.0], [95.9, 7084.0], [96.0, 7115.0], [96.1, 7130.0], [96.2, 7164.0], [96.3, 7191.0], [96.4, 7208.0], [96.5, 7257.0], [96.6, 7289.0], [96.7, 7328.0], [96.8, 7361.0], [96.9, 7421.0], [97.0, 7475.0], [97.1, 7514.0], [97.2, 7560.0], [97.3, 7625.0], [97.4, 7691.0], [97.5, 7721.0], [97.6, 7808.0], [97.7, 7879.0], [97.8, 7946.0], [97.9, 7984.0], [98.0, 8119.0], [98.1, 8185.0], [98.2, 8278.0], [98.3, 8461.0], [98.4, 8711.0], [98.5, 8882.0], [98.6, 9204.0], [98.7, 9492.0], [98.8, 9587.0], [98.9, 9805.0], [99.0, 10035.0], [99.1, 10571.0], [99.2, 11012.0], [99.3, 11615.0], [99.4, 12395.0], [99.5, 13819.0], [99.6, 21541.0], [99.7, 22654.0], [99.8, 23744.0], [99.9, 26589.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 641.0, "series": [{"data": [[400.0, 66.0], [500.0, 420.0], [600.0, 641.0], [700.0, 592.0], [800.0, 545.0], [900.0, 356.0], [1000.0, 228.0], [1100.0, 148.0], [1200.0, 140.0], [1300.0, 108.0], [1400.0, 104.0], [1500.0, 90.0], [1600.0, 53.0], [1700.0, 67.0], [1800.0, 46.0], [1900.0, 48.0], [2000.0, 44.0], [2100.0, 49.0], [2300.0, 74.0], [2200.0, 49.0], [2400.0, 60.0], [2500.0, 74.0], [2600.0, 63.0], [2700.0, 53.0], [2800.0, 54.0], [2900.0, 42.0], [3000.0, 38.0], [3100.0, 30.0], [3300.0, 37.0], [3200.0, 33.0], [3400.0, 42.0], [3500.0, 43.0], [3700.0, 76.0], [3600.0, 60.0], [3800.0, 72.0], [3900.0, 76.0], [4000.0, 109.0], [4300.0, 139.0], [4200.0, 131.0], [4100.0, 77.0], [4400.0, 147.0], [4600.0, 197.0], [4500.0, 163.0], [4800.0, 196.0], [4700.0, 224.0], [5100.0, 218.0], [4900.0, 183.0], [5000.0, 207.0], [5200.0, 202.0], [5300.0, 204.0], [5400.0, 213.0], [5500.0, 186.0], [5600.0, 149.0], [5700.0, 145.0], [5800.0, 127.0], [5900.0, 131.0], [6000.0, 126.0], [6100.0, 104.0], [6200.0, 94.0], [6300.0, 92.0], [6400.0, 91.0], [6500.0, 92.0], [6600.0, 67.0], [6800.0, 58.0], [6900.0, 60.0], [6700.0, 61.0], [7000.0, 56.0], [7100.0, 37.0], [7200.0, 22.0], [7300.0, 22.0], [7400.0, 21.0], [7600.0, 14.0], [7500.0, 18.0], [7900.0, 18.0], [7800.0, 13.0], [7700.0, 16.0], [8100.0, 14.0], [8000.0, 7.0], [8700.0, 6.0], [8200.0, 7.0], [8300.0, 5.0], [8400.0, 5.0], [8600.0, 4.0], [8500.0, 3.0], [9100.0, 4.0], [8900.0, 3.0], [9200.0, 4.0], [9000.0, 2.0], [8800.0, 4.0], [9300.0, 4.0], [9500.0, 8.0], [9700.0, 7.0], [9600.0, 2.0], [9400.0, 3.0], [9800.0, 4.0], [10000.0, 5.0], [9900.0, 3.0], [10100.0, 1.0], [10200.0, 1.0], [10600.0, 2.0], [10500.0, 5.0], [10400.0, 2.0], [11100.0, 4.0], [10900.0, 2.0], [11200.0, 1.0], [11000.0, 5.0], [10800.0, 1.0], [11400.0, 1.0], [11600.0, 1.0], [11800.0, 2.0], [12000.0, 3.0], [11900.0, 1.0], [12200.0, 2.0], [12600.0, 1.0], [12500.0, 2.0], [12300.0, 1.0], [13300.0, 1.0], [13100.0, 1.0], [13600.0, 2.0], [13800.0, 2.0], [13500.0, 1.0], [13700.0, 1.0], [20400.0, 2.0], [21500.0, 1.0], [21000.0, 1.0], [21400.0, 1.0], [21300.0, 1.0], [20900.0, 2.0], [22300.0, 2.0], [21800.0, 2.0], [22100.0, 1.0], [22200.0, 1.0], [22000.0, 1.0], [22400.0, 1.0], [23100.0, 2.0], [22600.0, 2.0], [23000.0, 2.0], [22900.0, 2.0], [23200.0, 2.0], [23800.0, 1.0], [24500.0, 1.0], [23700.0, 1.0], [24300.0, 1.0], [25300.0, 3.0], [25000.0, 1.0], [26300.0, 1.0], [26500.0, 1.0], [26800.0, 3.0], [27100.0, 1.0], [26900.0, 1.0], [27500.0, 1.0], [26700.0, 1.0], [27300.0, 1.0], [27000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 27500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5993.0, "series": [{"data": [[0.0, 67.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3282.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5993.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 26.90258215962442, "minX": 1.65813282E12, "maxY": 45.0, "series": [{"data": [[1.65813342E12, 45.0], [1.65813306E12, 45.0], [1.65813336E12, 45.0], [1.658133E12, 45.0], [1.6581333E12, 45.0], [1.65813294E12, 45.0], [1.65813324E12, 45.0], [1.65813354E12, 45.0], [1.65813288E12, 45.0], [1.65813318E12, 45.0], [1.65813348E12, 45.0], [1.65813282E12, 26.90258215962442], [1.65813312E12, 45.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65813354E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 541.0, "minX": 2.0, "maxY": 3722.457730032664, "series": [{"data": [[2.0, 1789.5], [32.0, 2858.5652173913045], [33.0, 1978.2631578947369], [34.0, 2068.5833333333335], [35.0, 2033.4583333333337], [36.0, 2306.8125], [37.0, 2306.304347826087], [38.0, 1983.9615384615388], [39.0, 2220.863636363636], [40.0, 2312.0499999999993], [41.0, 2446.5357142857138], [42.0, 2421.4666666666667], [43.0, 2406.962962962964], [44.0, 2390.0588235294113], [45.0, 3722.457730032664], [3.0, 749.0], [4.0, 727.1111111111112], [5.0, 549.7272727272727], [6.0, 579.25], [7.0, 758.7142857142856], [8.0, 541.0], [9.0, 770.0000000000001], [10.0, 729.0000000000001], [11.0, 814.047619047619], [12.0, 659.0], [13.0, 1030.0555555555552], [14.0, 828.0769230769231], [15.0, 963.6428571428571], [16.0, 1165.3999999999996], [17.0, 928.3333333333334], [18.0, 1249.9523809523807], [19.0, 1142.3684210526317], [20.0, 1499.1666666666665], [21.0, 1394.1428571428569], [22.0, 1268.782608695652], [23.0, 1265.2666666666667], [24.0, 1606.5238095238096], [25.0, 1404.7307692307693], [26.0, 1478.0588235294117], [27.0, 1851.75], [28.0, 1626.75], [29.0, 2186.56], [30.0, 1638.0833333333333], [31.0, 2602.4285714285716]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[43.35020329552753, 3544.8342606462456]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 45.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3063.4666666666667, "minX": 1.65813282E12, "maxY": 29685.85, "series": [{"data": [[1.65813342E12, 28391.15], [1.65813306E12, 13306.716666666667], [1.65813336E12, 29563.65], [1.658133E12, 12310.733333333334], [1.6581333E12, 29669.6], [1.65813294E12, 13139.583333333334], [1.65813324E12, 28641.483333333334], [1.65813354E12, 24660.333333333332], [1.65813288E12, 22971.083333333332], [1.65813318E12, 22006.333333333332], [1.65813348E12, 29685.85], [1.65813282E12, 26341.0], [1.65813312E12, 11105.066666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65813342E12, 7714.133333333333], [1.65813306E12, 3677.866666666667], [1.65813336E12, 8038.4], [1.658133E12, 3404.8], [1.6581333E12, 8072.533333333334], [1.65813294E12, 3626.6666666666665], [1.65813324E12, 7782.4], [1.65813354E12, 6698.666666666667], [1.65813288E12, 6340.266666666666], [1.65813318E12, 5981.866666666667], [1.65813348E12, 8081.066666666667], [1.65813282E12, 7270.4], [1.65813312E12, 3063.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65813354E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1681.5070422535207, "minX": 1.65813282E12, "maxY": 6758.127819548867, "series": [{"data": [[1.65813342E12, 3010.934734513276], [1.65813306E12, 6239.584686774942], [1.65813336E12, 2842.1061571125288], [1.658133E12, 6758.127819548867], [1.6581333E12, 2864.293868921773], [1.65813294E12, 6200.242352941179], [1.65813324E12, 2955.3585526315806], [1.65813354E12, 2638.4050955413973], [1.65813288E12, 3604.3606998654104], [1.65813318E12, 4942.569186875892], [1.65813348E12, 2808.3949313621924], [1.65813282E12, 1681.5070422535207], [1.65813312E12, 5568.197771587743]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65813354E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1681.4225352112683, "minX": 1.65813282E12, "maxY": 6758.100250626563, "series": [{"data": [[1.65813342E12, 3010.924778761061], [1.65813306E12, 6239.568445475643], [1.65813336E12, 2842.0870488322694], [1.658133E12, 6758.100250626563], [1.6581333E12, 2864.2854122621543], [1.65813294E12, 6200.2117647058785], [1.65813324E12, 2955.342105263162], [1.65813354E12, 2638.392356687902], [1.65813288E12, 3604.3270524899076], [1.65813318E12, 4942.559201141225], [1.65813348E12, 2808.385427666317], [1.65813282E12, 1681.4225352112683], [1.65813312E12, 5568.1838440111405]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65813354E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 34.48891235480463, "minX": 1.65813282E12, "maxY": 94.75689223057641, "series": [{"data": [[1.65813342E12, 36.26769911504424], [1.65813306E12, 72.36658932714612], [1.65813336E12, 35.39596602972398], [1.658133E12, 94.75689223057641], [1.6581333E12, 35.41649048625795], [1.65813294E12, 79.11999999999999], [1.65813324E12, 36.01206140350884], [1.65813354E12, 35.32866242038215], [1.65813288E12, 50.825033647375506], [1.65813318E12, 50.22253922967189], [1.65813348E12, 34.48891235480463], [1.65813282E12, 41.78873239436617], [1.65813312E12, 66.06963788300835]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65813354E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 438.0, "minX": 1.65813282E12, "maxY": 27515.0, "series": [{"data": [[1.65813342E12, 7052.0], [1.65813306E12, 8342.0], [1.65813336E12, 6524.0], [1.658133E12, 9587.0], [1.6581333E12, 6883.0], [1.65813294E12, 9805.0], [1.65813324E12, 6846.0], [1.65813354E12, 6787.0], [1.65813288E12, 6489.0], [1.65813318E12, 27515.0], [1.65813348E12, 6595.0], [1.65813282E12, 4349.0], [1.65813312E12, 7722.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65813342E12, 5527.5], [1.65813306E12, 6935.9], [1.65813336E12, 5425.200000000001], [1.658133E12, 7943.400000000001], [1.6581333E12, 5414.4], [1.65813294E12, 7921.6], [1.65813324E12, 5532.7], [1.65813354E12, 5461.6], [1.65813288E12, 4700.400000000001], [1.65813318E12, 11138.6], [1.65813348E12, 5390.3], [1.65813282E12, 2610.0], [1.65813312E12, 6840.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65813342E12, 6327.4000000000015], [1.65813306E12, 7517.19], [1.65813336E12, 6173.399999999999], [1.658133E12, 9199.869999999999], [1.6581333E12, 6009.4], [1.65813294E12, 9648.580000000002], [1.65813324E12, 6459.27], [1.65813354E12, 6317.099999999999], [1.65813288E12, 5490.479999999998], [1.65813318E12, 26816.96], [1.65813348E12, 6007.59], [1.65813282E12, 3055.2700000000013], [1.65813312E12, 7431.799999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65813342E12, 5767.25], [1.65813306E12, 7090.45], [1.65813336E12, 5689.85], [1.658133E12, 8464.599999999997], [1.6581333E12, 5668.699999999999], [1.65813294E12, 8357.199999999999], [1.65813324E12, 5760.7], [1.65813354E12, 5719.2], [1.65813288E12, 4904.6], [1.65813318E12, 22049.799999999996], [1.65813348E12, 5590.3], [1.65813282E12, 2806.7], [1.65813312E12, 7094.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65813342E12, 488.0], [1.65813306E12, 4761.0], [1.65813336E12, 457.0], [1.658133E12, 4509.0], [1.6581333E12, 468.0], [1.65813294E12, 3297.0], [1.65813324E12, 453.0], [1.65813354E12, 483.0], [1.65813288E12, 1586.0], [1.65813318E12, 447.0], [1.65813348E12, 471.0], [1.65813282E12, 438.0], [1.65813312E12, 497.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65813342E12, 3789.5], [1.65813306E12, 6267.0], [1.65813336E12, 1540.0], [1.658133E12, 6681.5], [1.6581333E12, 1991.0], [1.65813294E12, 5965.0], [1.65813324E12, 3605.5], [1.65813354E12, 1540.0], [1.65813288E12, 3596.0], [1.65813318E12, 4311.0], [1.65813348E12, 1628.0], [1.65813282E12, 1638.5], [1.65813312E12, 5962.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65813354E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 617.0, "minX": 1.0, "maxY": 6778.0, "series": [{"data": [[2.0, 6488.5], [36.0, 3096.5], [3.0, 6183.0], [4.0, 5945.0], [5.0, 6114.5], [6.0, 5828.0], [7.0, 6169.0], [8.0, 5558.0], [9.0, 5729.0], [10.0, 4750.0], [11.0, 4727.0], [12.0, 4121.5], [13.0, 3781.0], [14.0, 1922.0], [15.0, 3747.0], [16.0, 2064.0], [1.0, 6778.0], [17.0, 2715.0], [18.0, 2394.0], [19.0, 2728.0], [20.0, 3490.0], [21.0, 3721.0], [22.0, 2810.5], [23.0, 3726.0], [24.0, 2684.0], [26.0, 2400.5], [29.0, 1433.5], [31.0, 2358.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 617.0], [9.0, 4659.0], [13.0, 4620.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 617.0, "minX": 1.0, "maxY": 6778.0, "series": [{"data": [[2.0, 6488.5], [36.0, 3096.5], [3.0, 6183.0], [4.0, 5945.0], [5.0, 6114.0], [6.0, 5828.0], [7.0, 6169.0], [8.0, 5558.0], [9.0, 5728.0], [10.0, 4750.0], [11.0, 4727.0], [12.0, 4121.5], [13.0, 3781.0], [14.0, 1921.5], [15.0, 3747.0], [16.0, 2064.0], [1.0, 6778.0], [17.0, 2715.0], [18.0, 2393.5], [19.0, 2728.0], [20.0, 3490.0], [21.0, 3721.0], [22.0, 2810.0], [23.0, 3726.0], [24.0, 2684.0], [26.0, 2400.5], [29.0, 1433.5], [31.0, 2358.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 617.0], [9.0, 4659.0], [13.0, 4620.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.65813276E12, "maxY": 15.783333333333333, "series": [{"data": [[1.65813342E12, 15.066666666666666], [1.65813276E12, 0.03333333333333333], [1.65813306E12, 7.183333333333334], [1.65813336E12, 15.7], [1.658133E12, 6.65], [1.6581333E12, 15.766666666666667], [1.65813294E12, 7.083333333333333], [1.65813324E12, 15.2], [1.65813354E12, 12.333333333333334], [1.65813288E12, 12.383333333333333], [1.65813318E12, 11.683333333333334], [1.65813348E12, 15.783333333333333], [1.65813282E12, 14.916666666666666], [1.65813312E12, 5.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65813354E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.65813282E12, "maxY": 15.766666666666667, "series": [{"data": [[1.65813342E12, 15.066666666666666], [1.65813306E12, 7.166666666666667], [1.65813336E12, 15.7], [1.658133E12, 6.633333333333334], [1.6581333E12, 15.75], [1.65813294E12, 7.083333333333333], [1.65813324E12, 15.2], [1.65813354E12, 13.083333333333334], [1.65813288E12, 12.383333333333333], [1.65813318E12, 11.683333333333334], [1.65813348E12, 15.766666666666667], [1.65813282E12, 14.2], [1.65813312E12, 5.983333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65813306E12, 0.016666666666666666], [1.658133E12, 0.016666666666666666], [1.65813348E12, 0.016666666666666666], [1.6581333E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65813354E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.65813282E12, "maxY": 15.766666666666667, "series": [{"data": [[1.65813342E12, 15.066666666666666], [1.65813306E12, 7.166666666666667], [1.65813336E12, 15.7], [1.658133E12, 6.633333333333334], [1.6581333E12, 15.75], [1.65813294E12, 7.083333333333333], [1.65813324E12, 15.2], [1.65813354E12, 13.083333333333334], [1.65813288E12, 12.383333333333333], [1.65813318E12, 11.683333333333334], [1.65813348E12, 15.766666666666667], [1.65813282E12, 14.2], [1.65813312E12, 5.983333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.65813306E12, 0.016666666666666666], [1.658133E12, 0.016666666666666666], [1.65813348E12, 0.016666666666666666], [1.6581333E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65813354E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.65813282E12, "maxY": 15.766666666666667, "series": [{"data": [[1.65813342E12, 15.066666666666666], [1.65813306E12, 7.166666666666667], [1.65813336E12, 15.7], [1.658133E12, 6.633333333333334], [1.6581333E12, 15.75], [1.65813294E12, 7.083333333333333], [1.65813324E12, 15.2], [1.65813354E12, 13.083333333333334], [1.65813288E12, 12.383333333333333], [1.65813318E12, 11.683333333333334], [1.65813348E12, 15.766666666666667], [1.65813282E12, 14.2], [1.65813312E12, 5.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65813306E12, 0.016666666666666666], [1.658133E12, 0.016666666666666666], [1.65813348E12, 0.016666666666666666], [1.6581333E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65813354E12, "title": "Total Transactions Per Second"}},
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

