import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({ className, ...props }) => <div className={className} {...props} />;

const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => <div className={className} {...props} />;

const CardTitle: React.FC<CardTitleProps> = ({ className, ...props }) => <h2 className={className} {...props} />;

const CardDescription: React.FC<CardDescriptionProps> = ({ className, ...props }) => (
  <p className={className} {...props} />
);

const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => <div className={className} {...props} />;

const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => <div className={className} {...props} />;

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
