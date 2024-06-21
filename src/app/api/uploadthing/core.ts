import type { NextApiRequest } from "next";
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: NextApiRequest) => ({ id: "fakeId" });

export const ourFileRouter = {
  fileUploader: f({
    image: { maxFileSize: "1MB", maxFileCount: 10 },
    pdf: { maxFileSize: "8MB", maxFileCount: 5 }, 
    text: { maxFileSize: "4MB", maxFileCount: 10 },
    audio: { maxFileSize: "4MB", maxFileCount: 10 },
    video: { maxFileSize: "16MB", maxFileCount: 5 },
  })
  .middleware(async ({ req }) => {
    const user = await auth(req);

    if (!user) throw new UploadThingError("Unauthorized");

    return { userId: user.id };
  })
  .onUploadComplete(async ({ metadata, file }) => {
    return { uploadedBy: metadata.userId };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;