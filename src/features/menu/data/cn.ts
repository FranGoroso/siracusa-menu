import { MenuData } from '../types';

export const chineseMenu: MenuData = {
  title: '我们的菜单',
  sections: [
    {
      title: '🥪 三明治和汉堡',
      items: [
        { name: '火腿芝士三明治', description: '', price: 5 },
        { name: '培根三明治', description: '', price: 5 },
        { name: '金枪鱼三明治', description: '', price: 5 },
        { name: '鸡肉三明治', description: '', price: 5 },
        { name: '猪里脊三明治', description: '', price: 5 },
        { name: '火腿三明治', description: '', price: 5 },
        { name: '芝士三明治', description: '', price: 5 },
        { name: '西班牙土豆煎蛋三明治', description: '', price: 5 },
        { name: 'Fuet（加泰罗尼亚香肠）', description: '', price: 5 },
        { name: '西班牙辣香肠', description: '', price: 5 },
        { name: '蔬菜三明治', description: '', price: 5 },
        { name: 'Botifarra（加泰罗尼亚香肠）', description: '', price: 5 },
        { name: '锡拉库扎特色三明治', description: '', price: 6 },
        { name: '炸鸡三明治', description: '', price: 7 },
        { name: '芝士汉堡', description: '', price: 6 },
        { name: '全套汉堡', description: '', price: 6 },
        { name: '超级汉堡', description: '', price: 7 },
      ]
    },
    {
      title: '🧀 额外配料',
      items: [
        { name: '芝士', description: '', price: 1 },
        { name: '火腿', description: '', price: 1 },
        { name: '番茄', description: '', price: 1 },
        { name: '鸡蛋', description: '', price: 1 },
      ]
    },
    {
      title: '🍽️ 主菜',
      items: [
        { name: '猪里脊配薯条和沙拉', description: '', price: 9 },
        { name: '鸡胸肉配薯条和沙拉', description: '', price: 9 },
        { name: 'Botifarra香肠配薯条和沙拉', description: '', price: 9 },
        { name: '汉堡配薯条和沙拉', description: '', price: 9 },
        { name: '额外煎蛋（每个）', description: '', price: 1.5 },
      ]
    },
    {
      title: '🥗 沙拉',
      items: [
        { name: '加泰罗尼亚沙拉', description: '', price: 6 },
        { name: '经典沙拉', description: '', price: 6 },
        { name: '凯撒沙拉', description: '', price: 6 },
      ]
    },
    {
      title: '🍟 配菜',
      items: [
        { name: '薯条', description: '', price: 4 },
        { name: '辣土豆', description: '', price: 5 },
        { name: '西班牙土豆煎蛋小吃', description: '', price: 3 },
        { name: '猪里脊配芝士酱小吃', description: '', price: 5 },
        { name: '蟹肉沙拉', description: '', price: 5 },
        { name: 'Botifarra香肠配番茄面包', description: '', price: 6 },
      ]
    },
    {
      title: '🧂 额外添加',
      items: [
        { name: '面包，额外酱料等', description: '', price: 1 },
        { name: '薯片袋（Lays，Doritos等）', description: '', price: 1.5 },
      ]
    },
    {
      title: '🌱 特殊选项',
      items: [
        { name: '🥛 无乳糖', description: '早餐：无乳糖面包配橄榄油和无乳糖咖啡牛奶。午餐：鱼汤配米饭和水果。', price: 8 },
        { name: '🥦 素食', description: '早餐：咖啡牛奶，全麦面包，炒蛋和切碎的番茄。午餐：蔬菜炖菜配印度香米和全麦面包。', price: 8 },
        { name: '🌾 无麸质', description: '早餐：无麸质麦片，无麸质吐司和果酱。午餐：炸鸡胸肉，番茄和薯条。', price: 8 },
      ]
    },
    {
      title: '🍳 蛋类特色',
      items: [
        { name: '炒蛋', description: '', price: 3 },
        { name: '煎蛋', description: '', price: 3 },
        { name: '普通煎蛋卷', description: '', price: 3 },
        { name: '西班牙土豆煎蛋', description: '', price: 3.5 },
      ]
    },
    {
      title: '👶 儿童菜单',
      items: [
        { name: '鸡胸肉或汉堡配薯条和沙拉 + 甜点', description: '', price: 7 },
        { name: '米饭，煎蛋和香肠', description: '', price: 7 },
      ]
    },
    {
      title: '🥤 软饮料',
      items: [
        { name: '罐装饮料（可口可乐，芬达，雪碧等）', description: '', price: 2 },
        { name: 'Bitter Kas', description: '', price: 2 },
        { name: '小瓶水', description: '', price: 1.5 },
        { name: '大瓶水', description: '', price: 2 },
        { name: '气泡水', description: '', price: 2 },
      ]
    },
    {
      title: '🥤 果汁',
      items: [
        { name: '杯装果汁（菠萝，橙子，桃子）', description: '', price: 2 },
        { name: '鲜榨橙汁', description: '', price: 3 },
      ]
    },
    {
      title: '🍺 啤酒',
      items: [
        { name: '生啤', description: '', price: 2 },
        { name: '啤酒柠檬水', description: '', price: 2 },
        { name: 'Estrella Damm / Galicia（中杯）', description: '', price: 2.5 },
        { name: 'Free Damm（中杯）', description: '', price: 2.5 },
        { name: 'Voll-Damm（中杯）', description: '', price: 2.8 },
        { name: '喜力（中杯）', description: '', price: 2.8 },
        { name: '1906（中杯）', description: '', price: 2.8 },
        { name: '非过滤Águila', description: '', price: 2.8 },
        { name: '科罗娜', description: '', price: 2.8 },
        { name: 'Desperados', description: '', price: 2.8 },
        { name: 'Estrella Damm / Galicia（小杯）', description: '', price: 2 },
        { name: 'Free Damm（小杯）', description: '', price: 2 },
        { name: 'Voll-Damm（小杯）', description: '', price: 2.2 },
      ]
    },
    {
      title: '🍷 葡萄酒',
      items: [
        { name: 'Alaja Cosecha（杯 / 瓶）', description: '', price: 2.5 },
        { name: 'Altaja Crianza（杯 / 瓶）', description: '', price: 2.8 },
        { name: 'Rioja（杯 / 瓶）', description: '', price: 3 },
        { name: 'Alaja白葡萄酒（杯 / 瓶）', description: '', price: 2.5 },
        { name: 'Delizia白葡萄酒（杯 / 瓶）', description: '', price: 2.8 },
        { name: 'Alaja桃红葡萄酒（杯 / 瓶）', description: '', price: 2.5 },
      ]
    },
    {
      title: '🍾 起泡酒',
      items: [
        { name: 'Roger de Flor（杯 / 瓶）', description: '', price: 3 },
      ]
    },
    {
      title: '🍸 其他饮料',
      items: [
        { name: '鸡尾酒（Fernet，金酒加托尼，朗姆可乐，威士忌可乐等）', description: '', price: 6 },
        { name: '孟买金酒加托尼', description: '', price: 7 },
        { name: '威士忌', description: '', price: 5 },
        { name: '利口酒', description: '', price: 4 },
        { name: '波特酒', description: '', price: 4 },
        { name: '马天尼', description: '', price: 4 },
        { name: '啤酒配马天尼', description: '', price: 4 },
        { name: '夏日红酒（配托尼或雪碧）', description: '', price: 3 },
        { name: '烈酒一杯', description: '', price: 2 },
      ]
    },
    {
      title: '🐖 100%伊比利亚火腿',
      items: [
        { name: '小三明治', description: '', price: 4 },
        { name: '吐司', description: '', price: 3.5 },
        { name: '拼盘', description: '', price: 10 },
      ]
    },
    {
      title: '☕ 咖啡',
      items: [
        { name: '意式浓缩', description: '', price: 1.5 },
        { name: '美式咖啡', description: '', price: 1.5 },
        { name: '咖啡牛奶', description: '', price: 1.7 },
        { name: '玛奇朵', description: '', price: 1.6 },
        { name: '卡布奇诺', description: '', price: 2 },
        { name: 'Carajillo（咖啡加利口酒）', description: '', price: 2 },
        { name: 'Bombón（咖啡加炼乳）', description: '', price: 2 },
        { name: '咖啡加奶油', description: '', price: 2 },
        { name: '热巧克力', description: '', price: 2 },
        { name: '草本茶', description: '', price: 1.8 },
        { name: '冰块', description: '', price: 0.5 },
      ]
    },
    {
      title: '🥐 早餐和糕点',
      items: [
        { name: '牛角面包', description: '', price: 1.5 },
        { name: '巧克力面包', description: '', price: 1.8 },
        { name: '火腿芝士牛角面包', description: '', price: 2.5 },
        { name: '吐司配果酱和黄油', description: '', price: 2 },
        { name: '吐司配橄榄油，番茄和风干火腿', description: '', price: 2.5 },
        { name: '吐司配橄榄油和番茄', description: '', price: 2 },
        { name: '额外糕点', description: '', price: 1.5 },
      ]
    },
  ]
};