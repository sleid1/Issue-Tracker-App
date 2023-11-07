import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface Props {
   params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
   const id = Number(params.id);

   if (isNaN(id) || id <= 0) notFound();
   const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
   });

   if (!issue) notFound();

   return (
      <div>
         <Heading>{issue.title}</Heading>
         <Flex
            className="space-x-3"
            my="3"
         >
            <IssueStatusBadge status={issue.status} />
            <Text>{issue.createdAt.toDateString()}</Text>
         </Flex>
         <Card
            className="prose"
            mt="6"
         >
            <ReactMarkdown>{issue.description}</ReactMarkdown>
         </Card>
      </div>
   );
};

export default IssueDetailPage;
