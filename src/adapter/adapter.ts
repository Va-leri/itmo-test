import { News, NewsFromServer } from '../types/news';

export const adaptNewsToClient = (newsFromServer: NewsFromServer): News => (
  {
    id: newsFromServer.id,
    title: newsFromServer.title,
    date: newsFromServer.date,
    imageSmall: newsFromServer['image_small'],
    imageBig: newsFromServer['image_big'],
    creationDate: newsFromServer['creation_date'],
    viewCount: newsFromServer['view_count'],
    parentCategory: {
      ...newsFromServer['parent_category'],
      categoryId: newsFromServer['parent_category']['category_id'],
      categoryTitle: newsFromServer['parent_category']['category_title'],
      colorTitle: newsFromServer['parent_category']['color_title'],
      color: newsFromServer['parent_category'].color,
    },
    category: {
      ...newsFromServer.category,
      categoryId: newsFromServer.category['category_id'],
      categoryTitle: newsFromServer.category['category_title'],
      colorTitle: newsFromServer.category['color_title'],
      color: newsFromServer.category.color,
    },
    url: newsFromServer.url,
    lead: newsFromServer.lead,
  }
);
