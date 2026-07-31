"use strict";

const products = [

{
    id:1,
    category:"food",
    subCategory:"breakfast",
    name:"اوتمیل",
    price:600000,
    ingredients:[
        "شیر جو دوسر",
        "کره بادام زمینی",
        "موز",
        "میوه فصل",
        "دانه چیا"
    ],
    image:"images/menu/ottmeal.jfif"
},

{
    id:2,
    category:"food",
    subCategory:"breakfast",
    name:"املت ایرانی",
    price:680000,
    ingredients:[
        "سس گوجه مزه دار شده",
        "تخم مرغ همزده",
        "پنیر مزه دار شده",
        "نان"
    ],
    image:"images/menu/omlet.jpg"
},

{
    id:3,
    category:"food",
    subCategory:"breakfast",
    name:"پنکیک آمریکایی",
    price:1250000,
    ingredients:[
        "پنکیک",
        "نوتلا",
        "میوه های فصل",
        "خامه",
        "عسل"
    ],
    image:"images/menu/pancake.jfif"
},

{
    id:4,
    category:"food",
    subCategory:"breakfast",
    name:"کرپ کیک",
    price:920000,
    ingredients:[
        "کرپ",
        "نوتلا",
        "میوه های فصل",
        "خامه",
        "فندق"
    ],
    image:"images/menu/crepe.png"
},

{
    id:5,
    category:"food",
    subCategory:"breakfast",
    name:"وافل",
    price:780000,
    ingredients:[
        "وافل",
        "نوتلا",
        "میوه های فصل",
        "خامه"
    ],
    image:"images/menu/waffle.jfif"
},

{
    id:6,
    category:"food",
    subCategory:"breakfast",
    name:"کروسان موز شکلات",
    price:500000,
    ingredients:[
        "کروسان",
        "موز",
        "سس شکلات",
        "پرک بادام"
    ],
    image:"images/menu/crobanana.jpg"
},

{
    id:7,
    category:"food",
    subCategory:"breakfast",
    name:"کروسان پنیر گردو",
    price:400000,
    ingredients:[
        "کروسان",
        "پنیر خامه ای",
        "گردو",
        "ریحان تازه"
    ],
    image:"images/menu/crosanpanir.webp"
},

{
    id:8,
    category:"food",
    subCategory:"soup",
    name:"سوپ قارچ",
    price:400000,
    ingredients:[
        "قارچ",
        "خامه",
        "شیر",
        "پنیر پارمزان"
    ],
    image:"images/menu/mashrum.png"
},

{
    id:9,
    category:"food",
    subCategory:"soup",
    name:"سوپ ذرت",
    price:400000,
    ingredients:[
        "ذرت شیرین",
        "شیر",
        "خامه"
    ],
    image:"images/menu/corn.png"
},

{
    id:10,
    category:"food",
    subCategory:"salad",
    name:"سالاد سزار",
    price:650000,
    ingredients:[
        "کاهو رومین",
        "مرغ گریل",
        "پنیر پارمزان",
        "نان کروتان",
        "سس سزار"
    ],
    image:"images/menu/sezar.png"
},

{
    id:11,
    category:"food",
    subCategory:"salad",
    name:"سالاد سبز",
    price:600000,
    ingredients:[
        "کاهو",
        "خیار",
        "گوجه",
        "اسفناج",
        "پنیر",
        "سیب"
    ],
    image:"images/menu/greensalad.png"
},

{
    id:12,
    category:"food",
    subCategory:"appetizer",
    name:"سیب زمینی سرخ شده",
    price:350000,
    ingredients:[
        "سیب زمینی",
        "سس دلخواه"
    ],
    image:"images/menu/frise.png"
},

{
    id:13,
    category:"food",
    subCategory:"appetizer",
    name:"سیب زمینی آلفردو",
    price:450000,
    ingredients:[
        "سیب زمینی",
        "سس آلفردو"
    ],
    image:"images/menu/alfredo.jfif"
},

{
    id:14,
    category:"food",
    subCategory:"appetizer",
    name:"سیب زمینی چدار",
    price:450000,
    ingredients:[
        "سیب زمینی",
        "پنیر چدار"
    ],
    image:"images/menu/cheddar.png"
},

{
    id:15,
    category:"food",
    subCategory:"appetizer",
    name:"نان سیر",
    price:680000,
    ingredients:[
        "خمیر تخمیری",
        "کره",
        "سیر",
        "پنیر موزارلا"
    ],
    image:"images/menu/garlicb.jfif"
},

{
    id:16,
    category:"food",
    subCategory:"pizza",
    name:"پیتزا پپرونی",
    price:1000000,
    ingredients:[
        "سس گوجه",
        "پنیر میکس",
        "پپرونی",
        "خمیر تخمیری"
    ],
    image:"images/menu/pep.png"
},

{
    id:17,
    category:"food",
    subCategory:"pizza",
    name:"پیتزا بیکن",
    price:900000,
    ingredients:[
        "بیکن گوشت",
        "سس خامه",
        "پنیر میکس",
        "قارچ",
        "ترشی فلفل دلمه"
    ],
    image:"images/menu/bacon.png"
},

{
    id:18,
    category:"food",
    subCategory:"pizza",
    name:"پیتزا مرغ و اسفناج",
    price:800000,
    ingredients:[
        "مرغ گریل",
        "اسفناج",
        "پنیر میکس",
        "سس سفید"
    ],
    image:"images/menu/spinach.png"
},

{
    id:19,
    category:"food",
    subCategory:"pizza",
    name:"پیتزا سیر و استیک",
    price:1100000,
    ingredients:[
        "استیک گوساله",
        "قارچ",
        "فلفل دلمه",
        "سس سیر"
    ],
    image:"images/menu/steak.png"
},

{
    id:20,
    category:"drinks",
    subCategory:"hot",
    name:"آمریکانو",
    price:300000,
    ingredients:[
        "اسپرسو",
        "آب ۸۰ درجه"
    ],
    image:"images/menu/americano.jfif"
},

{
    id:21,
    category:"drinks",
    subCategory:"hot",
    name:"اسپرسو",
    price:250000,
    ingredients:[
        "دابل اسپرسو"
    ],
    image:"images/menu/esp.png"
},

{
    id:22,
    category:"drinks",
    subCategory:"hot",
    name:"موکا",
    price:400000,
    ingredients:[
        "اسپرسو",
        "شیر",
        "سیروپ شکلات",
        "خامه"
    ],
    image:"images/menu/mocha.png"
},

{
    id:23,
    category:"drinks",
    subCategory:"hot",
    name:"لاته",
    price:400000,
    ingredients:[
        "اسپرسو",
        "شیر"
    ],
    image:"images/menu/latte.jfif"
},

{
    id:24,
    category:"drinks",
    subCategory:"hot",
    name:"کارامل ماکیاتو",
    price:350000,
    ingredients:[
        "اسپرسو",
        "شیر",
        "فوم شیر",
        "سس کارامل",
        "وانیل"
    ],
    image:"images/menu/caramel.png"
},

{
    id:25,
    category:"drinks",
    subCategory:"hot",
    name:"کاپوچینو",
    price:350000,
    ingredients:[
        "اسپرسو",
        "شیر",
        "فوم شیر"
    ],
    image:"images/menu/capu.png"
},

{
    id:26,
    category:"drinks",
    subCategory:"cold",
    name:"آیس آمریکانو",
    price:300000,
    ingredients:[
        "اسپرسو",
        "آب سرد",
        "یخ"
    ],
    image:"images/menu/icedamericano.png"
},

{
    id:27,
    category:"drinks",
    subCategory:"cold",
    name:"آیس موکا",
    price:400000,
    ingredients:[
        "اسپرسو",
        "شکلات",
        "شیر",
        "یخ"
    ],
    image:"images/menu/icedmocha.png"
},

{
    id:28,
    category:"drinks",
    subCategory:"cold",
    name:"آیس لاته",
    price:350000,
    ingredients:[
        "اسپرسو",
        "شیر",
        "یخ"
    ],
    image:"images/menu/icedlatte.png"
},

{
    id:29,
    category:"drinks",
    subCategory:"cold",
    name:"آیس کارامل ماکیاتو",
    price:400000,
    ingredients:[
        "اسپرسو",
        "شیر",
        "سس کارامل",
        "وانیل",
        "یخ"
    ],
    image:"images/menu/icedcaramel.png"
},

{
    id:30,
    category:"drinks",
    subCategory:"cold",
    name:"آیس ماچا",
    price:400000,
    ingredients:[
        "پودر ماچا",
        "شیر",
        "یخ"
    ],
    image:"images/menu/icedmatcha.png"
},

{
    id:31,
    category:"dessert",
    subCategory:"bakery",
    name:"کروسان ساده",
    price:250000,
    ingredients:[
        "خمیر هزارلایه",
        "کره"
    ],
    image:"images/menu/Croissant.jfif"
},

{
    id:32,
    category:"dessert",
    subCategory:"bakery",
    name:"رول دارچین",
    price:320000,
    ingredients:[
        "خمیر هزارلایه",
        "دارچین",
        "کرم آیسینگ"
    ],
    image:"images/menu/rool.jpg"
},

{
    id:33,
    category:"dessert",
    subCategory:"dessert",
    name:"پای توت فرنگی",
    price:400000,
    ingredients:[
        "خمیر پای کره‌ای",
        "کرم وانیلی",
        "توت فرنگی تازه",
        "خامه فرم گرفته",
        "سس توت فرنگی"
    ],
    image:"images/menu/pie.png"
},

{
    id:34,
    category:"dessert",
    subCategory:"dessert",
    name:"تیرامیسو",
    price:350000,
    ingredients:[
        "موس ماسکارپونه",
        "لیدی فینگر",
        "اسپرسو",
        "شکلات تلخ"
    ],
    image:"images/menu/tiramisu.png"
}

];
