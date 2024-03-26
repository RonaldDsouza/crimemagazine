import { useEffect } from 'react';

const AutoDeleteArticle = ({ articles, onDelete }) => {
  useEffect(() => {
    const deleteArticleAfterTimeout = (article) => {
      const { delete: deleteCondition } = article;
      if (!deleteCondition) return;

      const [_, timeStr] = deleteCondition.split(' ');
      const hours = parseInt(timeStr);
      if (isNaN(hours)) return;

      const timeout = hours * 60 * 60 * 1000; // Convert hours to milliseconds
      setTimeout(() => {
        onDelete(article.id); // Trigger callback to delete the article
      }, timeout);
    };

    // Iterate through each article to check for deletion condition
    articles.forEach((article) => {
      deleteArticleAfterTimeout(article);
    });
  }, [articles, onDelete]);

  return null; // This component doesn't render anything visible
};

export default AutoDeleteArticle;
