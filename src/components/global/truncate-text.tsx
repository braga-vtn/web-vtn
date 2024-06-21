import React from 'react';

interface ItemProps {
  subject: string;
}

interface TruncateComponentProps {
  item: ItemProps;
}

const TruncateComponent: React.FC<TruncateComponentProps> = ({ item }) => {
  function truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  const truncatedSubject = truncateText(item.subject, 200);

  return (
    <div className="text-xs font-medium">
      {truncatedSubject}
    </div>
  );
}

export default TruncateComponent;