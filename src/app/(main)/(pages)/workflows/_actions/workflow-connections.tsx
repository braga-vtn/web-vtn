'use server'
import { db } from '@/lib/db'
import { auth, currentUser } from '@clerk/nextjs'

// export const onFlowPublish = async (workflowId: string, state: boolean) => {
//   const published = await db.workflows.update({
//     where: {
//       id: workflowId,
//     },
//     data: {
//       publish: state,
//     },
//   })

//   if (published.publish) return 'Workflow published'
//   return 'Workflow unpublished'
// }

export const onGetWorkflows = async () => {
  let user = null;

  try {
    user = await currentUser();
  } catch (error) {
    user = null;
  }
  
  if (user) {
    const workflow = await db.workflows.findMany({
      where: {
        userId: user.id,
      },
    })

    if (workflow) return workflow
  }
}

export const onCreateWorkflow = async (name: string, description: string) => {
  const user = await currentUser();
  const status = false;
  if (user) {
    const workflow = await db.workflows.create({
      data: {
        userId: user.id,
        name,
        status,
        description,
      },
    });

    if (workflow) return { message: 'workflow created' };
    return { message: 'Oops! try again' };
  }
};

export const onGetNodesEdges = async (flowId: string) => {
  const nodesEdges = await db.workflows.findUnique({
    where: {
      id: flowId,
    },
    select: {
      name: true,
      nodes: true,
      edges: true,
    },
  })
  if (nodesEdges?.nodes && nodesEdges?.edges) return nodesEdges
}
