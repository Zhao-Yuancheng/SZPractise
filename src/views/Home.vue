<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFiguresStore } from "../store/figures";
import { storeToRefs } from "pinia";
const router = useRouter();
const figuresStores = useFiguresStore();
const { index_now } = storeToRefs(figuresStores);

// const figures = {
//     0: {
//         date: '9.1', data: [
//             { url: 'https://mp.weixin.qq.com/s/NK2IvP5WdqzmiIr9dC74hg', name: '全体集合！2025级军训记者排已就位!', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WYbaVj5b7H5F6VXSeN3TMVz5RzYX7U3L8icQ5CqNPicSdpMUJ6J2sPHvGE6PNtlVzHlDfMDhNRG3NA/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=1' },
//         ], picUrl: "https://mmbiz.qpic.cn/sz_mmbiz_gif/YkrO2ZjFY3Um75aDO98tnicNdqMsPxAPGrKx41kIlic24fwSrYQhDXOUcZRXqbn47OXqiaJicUlibvYAXHjevnByDzg/640?wx_fmt=gif&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=0"
//     },
//     1: {
//         date: '9.2', data: [
//             { url: 'https://mp.weixin.qq.com/s/Cyss_w_5UCEUqnJ34ggsKg', name: '军训小贴士', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3VSiasdbLhX1uWB7fJkzIiaj3LGJtnTbD4s4X3BmdsjK5v2BXEuk11ALpibpPnMhKfuZNicMa6ULdsy5Q/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2' },
//             { url: 'https://mp.weixin.qq.com/s/F-WvA-nXtow6XQXPCvl-nw', name: '我们的连队', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3VSiasdbLhX1uWB7fJkzIiaj31qxbWSLxnXDK6liakVD5vLkGdDbibMnYbRtmtUn4lKMNKO7kGMbvESfw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3' },
//         ], picUrl: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3VSiasdbLhX1uWB7fJkzIiaj3HFP2MavlmLyGQl68I9biakgJP11MlAlrmvPVcdZWnHJh6sURB1JHFWg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4"
//     },
//     2: {
//         date: '9.3', data: [
//             { url: 'https://mp.weixin.qq.com/s/yqU_vJXwYpINrsUF5CNM5w', name: '今天，为胜利传递、铭记！', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3VSiasdbLhX1uWB7fJkzIiaj3oI5Yz23hG7zRlTpuXV0Po3ZaqQBt2ZWMqfIy35bXX9Pkyj0hibotSZg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=10' },
//             { url: 'https://mp.weixin.qq.com/s/wbt9llwgHQGhrZ-OS-uxsQ', name: '直击爱国瞬间！兰州大学榆中校区阅兵式观看组图新鲜出炉！', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3UpFxnsHQ1MrVMrdj5ZAH9ibSvZGFERlbe5T61ugRDh1pkmCoFY87mlnprAnoMpjgt8OnEXavHqLMA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=10' },
//         ], picUrl: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3VSiasdbLhX1uWB7fJkzIiaj3Ig5NpXnEInjd1rhBZvDVxNVfBhX8xUOOTY9VYk3GA5ta6WgibKaJKjw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=16"
//     },
//     3: {
//         date: '9.4', data: [
//             { url: 'https://mp.weixin.qq.com/s/0sBTTO6BpriuX_cZZD4Apg', name: '新篇章从这里开始——兰州大学2025级榆中校区新生开学典礼组图大合集', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3XcqZdg6YCiaBuG03UD57xhrZsth8gWAA09fV1xODaAJibM2s02ibddFrib4SaOZUSbAVjBH0yrI6F7Nw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3' },
//             { url: 'https://mp.weixin.qq.com/s/_kpjO2tNEazShYbFLTZTxQ', name: '军训留声机 | 雨落萃英，浪漫开启', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3XcqZdg6YCiaBuG03UD57xhrKKlGRnlrVbQmQooSXLr4xMiaDTXCy4EkVo2LZCKYRvD4KSYsbcHdnLg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1' },
//             { url: 'https://mp.weixin.qq.com/s/9R2cv93xJY32wi26DLVTNQ', name: '以催化促蜕变，共赴成长之约——教师代表、化学化工学院席聘贤在兰州大学2025年榆中校区新生入学典礼上的致辞', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3XcqZdg6YCiaBuG03UD57xhrTNSziaTdLLuVTCyh5uwYebpIJ9VtRtHGdyoCTK5429lLbxHBYr0bknQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1' },
//             { url: 'https://mp.weixin.qq.com/s/oknIzJ7_izoVU7vkrgIiYA', name: '耕耘时代答卷，书写理想篇章——研究生新生代表邓万迟在兰州大学2025年榆中校区新生开学典礼上的发言', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3XcqZdg6YCiaBuG03UD57xhrHNMt0UNcQmAf8JXA4C3LOsUcW8rib14wHOMVsTmATI0DltQNpceWnCA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1' },
//         ], picUrl: "https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3XcqZdg6YCiaBuG03UD57xhrmL8riaNDIAGnKKjVsDI0TgvX9a0iaxtGNkOYuJ6FbKic3ctbEUaPImia7Q/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=1"
//     },
//     4: {
//         date: '9.5', data: [
//             { url: 'https://mp.weixin.qq.com/s/1s85MV-cRiC8vCSRubGS0A', name: '像小草一样生长——新生代表梁佳依的发言（附“我要上典礼”获奖名单）', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3XcqZdg6YCiaBuG03UD57xhruL33VZ5wYEpwbQekVB5z649ib45BO1dbkwAPAjnGx6upqqJibXfxb6Xw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1' },
//             { url: 'https://mp.weixin.qq.com/s/5y9vP8JX9dq1VZATg-Nk_A', name: '新生副班专访 | 揭秘！新生副班们的“带娃”秘诀', pic: 'https://findermp.video.qq.com/251/20304/stodownload?encfilekey=rjD5jyTuFrIpZ2ibE8T7YmwgiahniaXswqz1ibDokggxFFFgV9p9ThF5TwpDdWzzTQs5bkjiaN6ohtJHdMr07UWFv9d1l4mfqLby6iaZeYSIoSPeTm5xYVh4VtIw&token=2lt8WBSnjTlkK35pn8KMgkymm7wVMhjOORjcB7ksfHWEWoA3tic4zXCYibBQOSeKn4dmV9ISYhTzpne3JibMBOArLsbTljuh3VOuMTo6UhjwE3RBwKhCicXSLdQPoHruTiccFHRTiabicKu8HfwyYjaxccLQkHak4BXwSgt5PribiaclEpBY&idx=1&hy=SH&m=&scene=2&uzid=1&quot' },
//             { url: 'https://mp.weixin.qq.com/s/bpA6z_ikRPiiqjTvQeB0hQ', name: '我们的青春驶过一片色彩的海', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WahcEouvQZRkO0d0F1kzV6YS6NGk0cYiaYXDbC0mjSjePT553AEWHpk8K0jPDhp7zraQtZ7ia6nHHA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2' },
//             { url: 'https://mp.weixin.qq.com/s/5SCgktbrpC3SiC_FXxTMzQ', name: '快来测测你的室友属性', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3XcqZdg6YCiaBuG03UD57xhr8czkWAhBFOLT9f0zvn4zQ93ibFLYBeSA8BLDnKAKU0KzKGoKA251hlA/640?wx_fmt=png&from=appmsg' },
//             { url: 'https://mp.weixin.qq.com/s/DYLGxm7BxhseHKuym-67cA', name: '来兰大军训：解锁你的人生第一次', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WahcEouvQZRkO0d0F1kzV67SX6OfNFKKf21pxASDnsMI8EA2ia1ULBZwYxsu4gggBb6Jj3iceiaicUuw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=7' },
//             { url: 'https://mp.weixin.qq.com/s/sqAVqHiI4XhlVZ5IURYV0w', name: '军训留声机 | 青春之声，“音”你嘹亮', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3WahcEouvQZRkO0d0F1kzV6FP1uPcEJum18Ug1hnf5UL4w4IoQ1NU7CGQ8BJQBzHNgIR0WmQCUL8w/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=1' },
//         ], picUrl: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WahcEouvQZRkO0d0F1kzV6G6WtoUfFv7ZvEqFGLKiauWxt8e23p4JLHuJur1tkKRbJdg62kSBDXFg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=0"
//     },
//     5: {
//         date: '9.6', data: [
//             { url: 'https://mp.weixin.qq.com/s/XhwZ3gfkkCK2kKFy_Aquag', name: '迷彩！秋风？徙影纪——影子军团观察报告', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WahcEouvQZRkO0d0F1kzV6QiasMSj2pT6t1r76bLKq9x69iaHVgboVBrdyLEAPXSibQSYT827OzLoxQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4' },
//             { url: 'https://mp.weixin.qq.com/s/-46EOuBzLAB3EFAH6pLRvQ', name: '军训留声机 | 迷彩“多巴胺”，快乐注新篇', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3U5icoXoBnqxNib1iaGdpCZrCcAA7QSQyApMaYugCprUIIvib7t8vxaH6pRHNsic6micwnqP3RzibrTfNNvg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1' },
//             { url: 'https://mp.weixin.qq.com/s/mTkyzpnISMrahmkw0BUnmA', name: '藏在褶皱里的军训', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WahcEouvQZRkO0d0F1kzV6UFmgpevv3lP44GhX8dQOkSRdXPg95VODCsMsjz79O3ZtAvPmEEcia9A/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=5' },
//             { url: 'https://mp.weixin.qq.com/s/oB30h8pX6rFQevKpXNhXiw', name: '白衣护航迷彩青春 急救熔铸初心使命——护理学院联合军训团一营三连开展主题党日活动', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WahcEouvQZRkO0d0F1kzV6mk5hWLRgYXpH1Nna1p6bM6gA8U4YYibzoBV07vemGIiaTKmB1dLYTxJA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4' },
//             { url: 'https://mp.weixin.qq.com/s/MV1hNOhZ9pi3QDdAZbuWWA', name: '新生食“道”', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3U5icoXoBnqxNib1iaGdpCZrCcJRiceiaq4vrR8BOL50J7oHNfEfvelDvEyP9UnKMRVPdAsoMdMcJFMRYg/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=15&wx_lazy=1&quot' },
//             { url: 'https://mp.weixin.qq.com/s/-1BDbzDtERGj2CM5CX9NQA', name: '月台 | 军训里的passion', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3U5icoXoBnqxNib1iaGdpCZrCceewet5V6J8YXJRpwF1A8czbuu1BiaN5icSkqMFnE1IPAsWrelQAwWuMw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3' },
//             { url: 'https://mp.weixin.qq.com/s/KsctL5l2TvrWUX789YVfag', name: '钢铁是怎样炼成的', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3U5icoXoBnqxNib1iaGdpCZrCcR6H4aYvtm6gnlgIibrGpEu43VqtsMvI68EnFvnwyicURl96icOq94icE6A/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=1' },
//         ], picUrl: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3U5icoXoBnqxNib1iaGdpCZrCcmehDhtNogjnrMcufbibU5oL00YmCCOVZ800aM3PVroOeH1yyibFsO6PQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0"
//     },
//     6: {
//         date: '9.7', data: [
//             { url: 'https://mp.weixin.qq.com/s/knmvMiMcqsP6X9ovEjHTxA', name: '新生请查收！2025款兰大新生军训体验包', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3UgjvBaaYC36ZDP30dQmvOtooViak6chD5U84zVrENZ7DVsUeXItiaOqRPMKNyQnZoic5BCNqVA9qJiaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=3' },
//             { url: 'https://mp.weixin.qq.com/s/82E7Tpjcw6jcWGz9Ld_5sg', name: '奇迹大学生', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3UgjvBaaYC36ZDP30dQmvOtNibcVrOBWqdPIicbgFD58YnThoHrmFjL4Tkgia7pCzFyiaFUVPrEeke3VA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2' },
//             { url: 'https://mp.weixin.qq.com/s/Zgd6BSidWjzPZvmBbqDQOw', name: '声临其境——藏在军训时光里的独家记忆', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3UgjvBaaYC36ZDP30dQmvOt8zahJamqgHsEibd1icbHgXOQrJKibxrVzsNd56kEweKmiaH3ZAAIvEHiatg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3' },
//             { url: 'https://mp.weixin.qq.com/s/bzyblbPmssI-jAyb1S1SIQ', name: '偏旁赋韵——士卒的重构', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3UgjvBaaYC36ZDP30dQmvOtlXyqpaAWJQxTzuHicJODGQO8RuB8O2LXJAvUFEes6RMTmBcBgvoW5vQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=19' },
//             { url: 'https://mp.weixin.qq.com/s/Yr6zGuYfka_kYVoyEV8u9w', name: '百日菊与我们：让芳香流淌在兰大的土地上', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3UgjvBaaYC36ZDP30dQmvOt0TKqN4LhhjnPKudJZtKpDlFGhPQauqT6SiaUZJRupppMD1fTNQIVTtw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2' },
//         ], picUrl: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3UgjvBaaYC36ZDP30dQmvOtic2wlhUSMCxn90HIiaficGSWuaCzzrw48mOoYgfuJRgFrQWoLF8sX591Q/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0"
//     },
//     7: {
//         date: '9.8', data: [
//             { url: 'https://mp.weixin.qq.com/s/4EhMNwGK7ULAdBFICYlgeQ', name: '军训，一场史无前例的盛大PK赛', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WicXrHL6ibarjfic7hCJZWVahm2MYVINRE9NJDcopibzgDWu2QYXqicTbbmkcSaZ2p62RnFlIXG5aEdnw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4' },
//             { url: 'https://mp.weixin.qq.com/s/0mBy9ZOtCQqnFmfv7JiMWA', name: '长风、烈日、胡杨 | “骆驼”军训二三事', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WicXrHL6ibarjfic7hCJZWVahay04SItt15YXFiaVfK37P8hHjwfUVnlFvYCWPelx4nkdrDIWiaYEFA5Q/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=2' },
//             { url: 'https://mp.weixin.qq.com/s/ZUSnGIr2uHd2Da_CSGuviw', name: '八方来客', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3WicXrHL6ibarjfic7hCJZWVah3aBcV3pVyLnXmoE4yiavgbDIGuND7b9aK26khNRp61WqJNcY2zXnn9A/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=11' },
//             { url: 'https://mp.weixin.qq.com/s/kof-QEYQ-R-SaXA5BjZzaw', name: '兰大2025级军训“显眼包”图鉴——汗水织就军训忆，笑语点亮少年时', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WicXrHL6ibarjfic7hCJZWVahJicuVsLByuhqoB3gqJOjicuRRLV28kv62Q1MIiaRQviaYox4tlCRmVXSdg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2' },
//             { url: 'https://mp.weixin.qq.com/s/kJ4BGKOOMfJBHxL6839PCw', name: '军训特工队！当迷彩青春遇上情绪小人', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WicXrHL6ibarjfic7hCJZWVahUQdNawLrkE0DRaUHu9fggbTEB9Vib3gTRQLaLCPPodc2qETuaEMibDqQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4' },
//             { url: 'https://mp.weixin.qq.com/s/sh7ZBOodEuXwSZvzuDfDGA', name: '军训留声机 | 路过我青春的精灵', pic: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YkrO2ZjFY3WicXrHL6ibarjfic7hCJZWVahJiaIJVeszicqddgsQB51ONP4C9DNlYdNXcWbXBuic5Pfy2FibKyX61NbPw/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=1' },
//         ], picUrl: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YkrO2ZjFY3WicXrHL6ibarjfic7hCJZWVahj6WDGWwtdV2UuHVIKrdia84FAeJYs7X1Bviax2a1nQPLWGEEZUGJXC6A/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0"
//     },
// }

const figures = [
   {
    date: "建校伊始",
    data: [
      {
        url: "/pioneers/000",
        name: "校史溯源",
        pic: "./src/views/pioneers_imgs/0000.jpg",
      },
      {
        url: "/pioneers/001",
        name: "顾颉刚先生和辛树帜先生",
        pic: "./src/views/pioneers_imgs/0011.jpg",
      },
      // {
      //   url: "/pioneers/000",
      //   name: "校史溯源",
      //   pic: "./src/views/pioneers_imgs/0000.jpg",
      // },
    ],
    picUrl: [
      "./src/views/carousel_imgs/000.jpg",
      "./src/views/carousel_imgs/001.jpg",
      "./src/views/carousel_imgs/002.jpg",
      "./src/views/carousel_imgs/100.jpg",
      "./src/views/carousel_imgs/101.jpg",
      "./src/views/carousel_imgs/102.jpg",
    ],
  },
  
  {
    date: "发展时期",
    data: [
      {
        url: "/pioneers/200",
        name: "葛墨林",
        pic: "./src/views/pioneers_imgs/2000.jpg",
      },
      {
        url: "/pioneers/201",
        name: "黄建国",
        pic: "./src/views/pioneers_imgs/2011.jpg",
      },
      {
        url: "/pioneers/202",
        name: "丑纪范",
        pic: "./src/views/pioneers_imgs/2020.jpg",
      },
    ],
    picUrl: [
      "./src/views/carousel_imgs/200.jpg",
      "./src/views/carousel_imgs/201.jpg",
      "./src/views/carousel_imgs/202.jpg",
    ],
  },
   {
    date: "改革开放",
    data: [
      {
        url: "/pioneers/300",
        name: "刘冰校长",
        pic: "./src/views/pioneers_imgs/3003.jpg",
      },
      {
        url: "/pioneers/301",
        name: "水天明",
        pic: "./src/views/pioneers_imgs/3011.jpg",
      },
      {
        url: "/pioneers/302",
        name: "兰天考察队",
        pic: "./src/views/pioneers_imgs/3024.png",
      },
    ],
    picUrl: [
      "./src/views/carousel_imgs/300.jpg",
      "./src/views/carousel_imgs/301.jpg",
      "./src/views/carousel_imgs/302.jpg",
      "./src/views/carousel_imgs/303.jpg",
    ],
  },
  {
    date: "新世纪",
    data: [
      {
        url: "/pioneers/400",
        name: "黄建平",
        pic: "./src/views/pioneers_imgs/4000.jpg",
      },
      {
        url: "/pioneers/401",
        name: "周又和",
        pic: "./src/views/pioneers_imgs/4010.jpg",
      },
      {
        url: "/pioneers/402",
        name: "沈学顺",
        pic: "./src/views/pioneers_imgs/4020.jpg",
      },
    ],
    picUrl: [
      "./src/views/carousel_imgs/400.jpg",
      "./src/views/carousel_imgs/401.jpg",
      "./src/views/carousel_imgs/402.jpg",
      "./src/views/carousel_imgs/403.jpg",
    ],
  },
  {
    date: "新青年",
    data: [
      {
        url: "/pioneers/500",
        name: "金易",
        pic: "./src/views/pioneers_imgs/5001.jpg",
      },
      {
        url: "/pioneers/501",
        name: "靳志文",
        pic: "./src/views/pioneers_imgs/5010.jpg",
      },
      // {
      //   url: "/pioneers/000",
      //   name: "校史溯源",
      //   pic: "./src/views/pioneers_imgs/0000.jpg",
      // },
    ],
    picUrl: [
      "./src/views/carousel_imgs/500.jpg",
      "./src/views/carousel_imgs/501.jpg",
      "./src/views/carousel_imgs/502.jpg",
    ],
  },
];

const ticks = {
  0: "建校伊始",
  1: "发展时期",
  2: "改革开放",
  3: "新世纪",
  4: "新青年",
};
// const index_now = ref(0);

const figuresLength = Object.keys(figures).length;

console.log(index_now.value);
// console.log(figures[index_now.value]["picUrl"])
</script>


<template>
  <v-layout>
    <v-app-bar color="rgb(0,89,139)" height="34">
      <template v-slot:prepend>
        <v-btn
          class="elevation-10"
          href="https://www.lzu.edu.cn/"
          style="width: 90px; height: 30px"
        >
          <img src="./logo.png" alt="icon" style="width: 81px; height: 25px" />
        </v-btn>
      </template>
      <v-app-bar-title
        class="text-center"
        style="font-size: 16px; font-weight: bold"
        >榜样中的思政课&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</v-app-bar-title
      >
      <template v-slot:append>
        <v-btn
          class="elevation-10"
          href="https://marx.lzu.edu.cn/info/1134/6171.htm"
          style="width: 81px; height: 30px"
        >
          指导老师
        </v-btn>
      </template>
    </v-app-bar>

    <!--颜色没有加-->
    <v-main style="background-color: rgb(236, 252, 255)">
      <div align="center">
        <v-slider
          v-model="index_now"
          class="px-3 mt-3"
          max-width="340"
          :max="figuresLength - 1"
          thumb-size="10"
          thumb-color="#74a6df"
          track-color="#ddf0f6"
          track-size="3"
          track-fill-color="blue-grey"
          show-ticks="always"
          :ticks="ticks"
          tick-size="4"
          step="1"
          style="font-size: 0.7rem; color: rgb(0, 89, 139)"
        >
        </v-slider>
      </div>

      <!-- <v-card variant="text" class="mx-auto" max-width="340">
        <img
          :src="figures[index_now]['picUrl']"
          referrerPolicy="no-referrer"
          width="340"
        />
      </v-card> -->

      <v-carousel
        cycle
        height="250"
        hide-delimiter-background
        :show-arrows="false"
        class="elevation-10"
      >
        <v-carousel-item
          v-for="(carouselImg, index) in figures[index_now ]['picUrl']"
          :key="index"
          :src="carouselImg"
          class="pa-2"
          cover
        ></v-carousel-item>
      </v-carousel>

      <!-- <v-divider class="mt-3" thickness="12" color="info"></v-divider> -->

      <v-card
        class="mx-2 my-5 elevation-10"
        variant="tonal"
        color="blue-darken-4"
        v-for="(dayfigure, index) in figures[index_now]['data']"
        :key="index"
        @click="router.push(dayfigure['url'])"
      >
        <v-img :src="dayfigure.pic"></v-img>
        <v-card-text class="text-subtitle-1">{{ dayfigure.name }}</v-card-text>
      </v-card>
    </v-main>

    <v-footer
      class="text-center d-flex flex-column py-0"
      color="rgb(0,89,139)"
      height="40"
      elevation="0"
      app
    >
      <div class="font-weight-regular opacity-60" style="font-size: 0.6rem">
        地址： 兰州市榆中县夏官营镇兰州大学榆中校区 邮编：730107
      </div>
      <div style="font-size: 0.6rem">
        {{ new Date().getFullYear() }} —
        <strong>兰州大学大气科学学院 2025级作业小组</strong>
      </div>
    </v-footer>
  </v-layout>
</template>


<style scoped></style>
