import food1 from "./images/food1.jpeg"
import food2 from "./images/food2.jpeg"
import food3 from "./images/food3.jpeg"

export const meals = [
  {id:0,name:"ستيك وسلطة1",category:"فطور",price:70,description:"وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة ",imagePath:food1},
  {id:1,name:"حمام مشوي1",category:"غداء",price:80,description:"وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك ",imagePath:food2},
  {id:2,name:"أجنحة مقلية1",category:"عشاء",price:50,description:"وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  ",imagePath:food3},
  {id:3,name:"ستيك وسلطة2",category:"فطور",price:70,description:"وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة ",imagePath:food1},
  {id:4,name:"حمام مشوي2",category:"غداء",price:80,description:"وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك ",imagePath:food2},
  {id:5,name:"أجنحة مقلية2",category:"عشاء",price:50,description:"وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  ",imagePath:food3},
  {id:6,name:"ستيك وسلطة3",category:"فطور",price:70,description:"وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة ",imagePath:food1},
  {id:7,name:"حمام مشوي3",category:"غداء",price:80,description:"وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك ",imagePath:food2},
  {id:8,name:"أجنحة مقلية3",category:"عشاء",price:50,description:"وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  ",imagePath:food3},
  {id:9,name:"ستيك وسلطة4",category:"فطور",price:70,description:"وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة ",imagePath:food1},
  {id:10,name:"حمام مشوي4",category:"غداء",price:80,description:"وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك ",imagePath:food2},
  {id:11,name:"أجنحة مقلية4",category:"عشاء",price:50,description:"وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  ",imagePath:food3},
  {id:12,name:"ستيك وسلطة5",category:"فطور",price:70,description:"وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة وصف ستيك وسلطة ",imagePath:food1},
  {id:13,name:"حمام مشوي5",category:"غداء",price:80,description:"وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك وصف الحمام المشوي بالفريك ",imagePath:food2},
  {id:14,name:"أجنحة مقلية5",category:"عشاء",price:50,description:"وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  وصف الأجنحة المقلية كوكي وأطياب  ",imagePath:food3},
]

export const categories =  ['الكل',...new Set(meals.map(meal=>meal.category))]