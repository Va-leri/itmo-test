export type NewsFromServer = {
  id: number;
  title: string;
  image_small: string;
  image_big: string;
  creation_date: string;
  date: string;
  view_count: number;
  parent_category: {
      category_id: number;
      category_title: string;
      color_title: string;
      color: string;
  };
  category: {
    category_id: number;
    category_title: string;
    color_title: string;
    color: string;
};
  url: string;
  lead: string;
};

export type News = {
  id: number;
  title: string;
  imageSmall: string;
  imageBig: string;
  creationDate: string;
  date: string;
  viewCount: number;
  parentCategory: {
      categoryId: number;
      categoryTitle: string;
      colorTitle: string;
      color: string;
  };
  category: {
    categoryId: number;
    categoryTitle: string;
    colorTitle: string;
    color: string;
};
  url: string;
  lead: string;
}
