
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from 'date-fns';

const newsItems = [
  {
    id: 1,
    title: "New Research Grant Awarded",
    date: new Date(2023, 4, 15),
    content: "The department has been awarded a $2.5 million grant for research in quantum computing.",
    category: "Research"
  },
  {
    id: 2,
    title: "CS Department Ranks in Top 20",
    date: new Date(2023, 3, 28),
    content: "Our Computer Science program has been ranked among the top 20 in the country.",
    category: "Achievement"
  },
  {
    id: 3,
    title: "Summer Internship Opportunities",
    date: new Date(2023, 3, 10),
    content: "Several tech companies will be offering exclusive internship opportunities for our students.",
    category: "Opportunity"
  }
];

const NewsUpdates = ({ limit = newsItems.length }) => {
  const displayedNews = newsItems.slice(0, limit);
  
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Latest News</h2>
        {limit < newsItems.length && (
          <a href="/news" className="text-csblue hover:underline text-sm">
            View all news
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {displayedNews.map((news) => (
          <Card key={news.id} className="card-hover">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium bg-csgold-light text-csgold-dark px-2 py-1 rounded-md">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(news.date, { addSuffix: true })}
                  </span>
                </div>
                <h3 className="font-bold">{news.title}</h3>
                <p className="text-sm text-gray-600">{news.content}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewsUpdates;
