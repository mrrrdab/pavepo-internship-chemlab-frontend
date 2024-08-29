import React from 'react';

import { NewsItem as NewsItemType } from '@/types';
import { formatDate } from '@/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components';

type NewsItemProps = Pick<NewsItemType, 'title' | 'date' | 'images' | 'content'>;

const NewsItem: React.FC<NewsItemProps> = ({ title, date, images, content }) => {
  return (
    <div className="bg-secondary border-[0.5px] border-black/20 rounded-xl flex flex-col p-2">
      <img
        src={images.sort((a, b) => a.priority! - b.priority!)[0].url}
        alt={`${title} ${date}`}
        className="rounded-xl w-full h-72 object-cover mb-5"
      />
      <Card className="flex flex-col gap-2.5">
        <CardHeader className="flex flex-col gap-2.5">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <p className="text-primary text-xl">{formatDate(date)}</p>
        </CardHeader>
        <CardContent className="pacity-65 text-xl">
          <p>{content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export { NewsItem };
